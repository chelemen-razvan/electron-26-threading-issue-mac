{
  'targets': [
    {
      'target_name': 'cam',
      'sources': [
        'src/main.cc',
        'src/cam_js.cc',
      ],
      'conditions': [
        [
          "OS==\"win\"",
          {
            'sources': [
              'src/cam_win.cc',
            ],
            "copies": [
              {
                "destination": "<(module_root_dir)/build/Release/",
                "files": [
                ]
              }
            ],
            'include_dirs': ["src"],
            'msvs_settings': {
              'VCLinkerTool': {
                'AdditionalOptions': [ '/LIBPATH:../src/win/Lib/x64/Release' ]
              }
            }
          }
        ],
        [
          "OS==\"mac\"",
          {
            'sources': [
              'src/cam_mac.mm',
            ],
            "copies": [
              {
                "destination": "<(module_root_dir)/build/Release/",
                "files": [
                ]
              }
            ],
            'link_settings': {
              'libraries': [
                'AVFoundation.framework',
                'CoreMedia.framework',
                'IOSurface.framework',
                'Security.framework',
                'SystemExtensions.framework',
                'AppKit.framework'
              ]
            }
          }
        ]
      ],
      'defines': [ 'IS_VIDEO' ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'xcode_settings': {
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.15',
        'CLANG_CXX_LANGUAGE_STANDARD': 'c++20',
        'OTHER_CFLAGS': [
          '-arch x86_64',
          '-arch arm64'
        ],
        'OTHER_LDFLAGS': [
          '-arch x86_64',
          '-arch arm64'
        ]
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1, 'DebugInformationFormat': 'ProgramDatabase', 'AdditionalOptions': [ '-std:c++20', '/Zc:wchar_t-' ] },
      }
    }
  ]
}
