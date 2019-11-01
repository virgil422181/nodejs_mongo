<?php

$coreFetchURL = 'http://core.emag.local/api/v1/git/fetch-file';
$host = 'stash.emag.network';
$namespace = 'scm';

$appCode = 'son-interface';
$appRepo = 'supplier-order-node-interface';
$appRepoCode = $appCode;
$appFetchURL = "$coreFetchURL/$host/$namespace/$appRepo";
$appGitAddress = "ssh://git@$host/$namespace/$appRepo.git";

$confRepo = $appRepo.'-prod';
$confRepoCode = $appCode.'-prod';
$confFetchURL = "$coreFetchURL/$host/$namespace/$confRepo";
$confGitAddress = "ssh://git@$host/$namespace/$confRepo.git";

$gitHead = @file('../.git/HEAD', FILE_USE_INCLUDE_PATH);
if ($gitHead === false) {
    $gitHeadParts = array(2 => 'master');
} else {
    $gitHeadParts = explode('/', $gitHead[0], 3);
}

$username = posix_getpwuid(posix_geteuid())['name'];
$branch = urlencode(trim($gitHeadParts[2]));

$data = array(
    'include' => array(
        'xref' => array(
            'cli' => array(
                'type' => 'inline',
                'data' => array(
                    'include' => array(
                        'xref' => array(
                            'distribution' => array(
                                'type' => 'url',
                                'src' => "[[repo:$appRepoCode:fetch-url]]/[[repo:$appRepoCode:version]]/edeploy/distribution.json",
                                'resolve' => array(
                                    array(
                                        'type' => 'on-demand',
                                        'values-xref' => array(
                                            'type' => 'url',
                                            'src' => "[[repo:$appRepoCode:fetch-url]]/[[repo:$appRepoCode:version]]/edeploy/choices/common.json",
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        'main' => array(
                            'distribution',
                        ),
                    ),
                ),
                'resolve' => array(
                    array(
                        'type' => 'registered',
                        'values' => array(
                            'username' => $username,
                            "repo:$appRepoCode:address" => $appGitAddress,
                            "repo:$appRepoCode:fetch-url" => $appFetchURL,
                            "repo:$confRepoCode:address" => $confGitAddress,
                            "repo:$confRepoCode:fetch-url" => $confFetchURL,
                        ),
                    ),
                    array(
                        'type' => 'on-demand',
                        'values' => array(
                            "repo:$appRepoCode:version" => array(
                                'prompt' => 'Specify the application version (default "<default-value>")',
                                'type' => 'string',
                                'default' => $branch,
                            ),
                            "repo:$confRepoCode:version" => array(
                                'prompt' => 'Specify the production config version (default "<default-value>")',
                                'type' => 'string',
                                'default' => $branch,
                            ),
                        ),
                    ),
                ),
            ),
        ),
        'main' => array(
            'cli',
        ),
    ),
);

return $data;
