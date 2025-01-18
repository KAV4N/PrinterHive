<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$endpoint = $_GET['endpoint'] ?? 'latest';
$page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$limit = isset($_GET['limit']) ? max(1, intval($_GET['limit'])) : 5;

$allVersions = [
    'latestVersion' => [

        'version' => '1.2.0',
        'latest' => true,
        'releaseDate' => '2024-01-05',
        'description' => 'Major update with improved printer management and real-time monitoring features.',
        'changelog' => [
            'Added real-time temperature monitoring with graphical display',
            'Improved printer connection stability',
            'New printer profiles management system',
            'Enhanced G-code viewer with layer preview',
            'Multiple bug fixes and performance improvements'
        ],
        'downloads' => [
            [
                'platform' => 'Windows',
                'url' => '/downloads/printerhive-1.2.0-win.exe'
            ],
            [
                'platform' => 'macOS',
                'url' => '/downloads/printerhive-1.2.0-mac.dmg'
            ],
            [
                'platform' => 'Linux',
                'url' => '/downloads/printerhive-1.2.0-linux.AppImage'
            ]
        ]
    ],
    'previousVersions' => [
        [
            'version' => '1.1.0',
            'latest' => false,
            'releaseDate' => '2023-12-01',
            'description' => 'Feature update focusing on user experience and printer control.',
            'changelog' => [
                'Added custom printer commands panel',
                'Improved file management system',
                'New notification system for print completion',
                'Better error handling and reporting'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-1.1.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-1.1.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-1.1.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '1.0.0',
            'latest' => false,
            'releaseDate' => '2023-10-15',
            'description' => 'Initial release with basic printer management features.',
            'changelog' => [
                'First release with basic printer controls',
                'G-code viewer and print job management system',
                'Initial user interface design'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-1.0.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-1.0.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-1.0.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.9.0',
            'latest' => false,
            'releaseDate' => '2023-09-01',
            'description' => 'Beta release with early features and basic stability.',
            'changelog' => [
                'Beta version for initial testing',
                'Added basic print job queuing system',
                'Initial attempts at handling multi-printer setups'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.9.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.9.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.9.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.8.0',
            'latest' => false,
            'releaseDate' => '2023-08-10',
            'description' => 'Early alpha with basic printer connection and file handling.',
            'changelog' => [
                'Initial alpha release',
                'Basic connectivity with printers',
                'Basic file upload and job control'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.8.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.8.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.8.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.7.0',
            'latest' => false,
            'releaseDate' => '2023-07-15',
            'description' => 'Updated version for better printer connections.',
            'changelog' => [
                'Improved stability of printer connections',
                'Added initial basic settings options'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.7.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.7.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.7.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.6.0',
            'latest' => false,
            'releaseDate' => '2023-06-20',
            'description' => 'Performance optimizations and improved interface.',
            'changelog' => [
                'Improved software performance',
                'Optimized memory usage'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.6.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.6.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.6.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.5.0',
            'latest' => false,
            'releaseDate' => '2023-05-10',
            'description' => 'Early prototype for printer configuration.',
            'changelog' => [
                'First steps into multi-printer configuration',
                'Initial implementation of G-code management'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.5.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.5.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.5.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.4.0',
            'latest' => false,
            'releaseDate' => '2023-04-15',
            'description' => 'Bug fixes and minor user interface tweaks.',
            'changelog' => [
                'Fixed printer connection issues',
                'Improved UI responsiveness'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.4.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.4.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.4.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.3.0',
            'latest' => false,
            'releaseDate' => '2023-03-30',
            'description' => 'Updated core logic for better compatibility with various printer models.',
            'changelog' => [
                'Enhanced compatibility with various 3D printers',
                'Stabilized core connection logic'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.3.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.3.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.3.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.2.0',
            'latest' => false,
            'releaseDate' => '2023-03-01',
            'description' => 'Initial code and configuration improvement.',
            'changelog' => [
                'Initial configuration improvements',
                'Test prints and reporting features'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.2.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.2.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.2.0-linux.AppImage'
                ]
            ]
        ],
        [
            'version' => '0.1.0',
            'latest' => false,
            'releaseDate' => '2023-02-10',
            'description' => 'Prototype release.',
            'changelog' => [
                'Early prototype with basic functionality'
            ],
            'downloads' => [
                [
                    'platform' => 'Windows',
                    'url' => '/downloads/printerhive-0.1.0-win.exe'
                ],
                [
                    'platform' => 'macOS',
                    'url' => '/downloads/printerhive-0.1.0-mac.dmg'
                ],
                [
                    'platform' => 'Linux',
                    'url' => '/downloads/printerhive-0.1.0-linux.AppImage'
                ]
            ]
        ]
    ]
];


switch ($endpoint) {
    case 'latest':
        echo json_encode(['data' => $allVersions['latestVersion']]);
        break;
        
    case 'previous':
        $previousVersions = $allVersions['previousVersions'];
        $total = count($previousVersions);
        $offset = ($page - 1) * $limit;
        
        $versions = array_slice($previousVersions, $offset, $limit);
        
        echo json_encode([
            'data' => $versions,
            'meta' => [
                'currentPage' => $page,
                'totalPages' => ceil($total / $limit),
                'totalVersions' => $total,
                'hasMore' => ($offset + $limit) < $total
            ]
        ]);
        break;
        // Add to the switch statement in versions.php
    case 'version':
        $slug = $_GET['slug'] ?? '';
        $version = null;
        
        // Check if it's the latest version
        if ($allVersions['latestVersion']['version'] === $slug) {
            $version = $allVersions['latestVersion'];
        } else {
            // Search in previous versions
            foreach ($allVersions['previousVersions'] as $v) {
                if ($v['version'] === $slug) {
                    $version = $v;
                    break;
                }
            }
        }
        
        if ($version) {
            echo json_encode(['data' => $version]);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Version not found']);
        }
        break;
        
    default:
        http_response_code(400);
        echo json_encode(['error' => 'Invalid endpoint']);
}