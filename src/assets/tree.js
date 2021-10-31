const tree = `
├───node_modules
│   ├───.bin
│   ├───.cache
│   │   └───babel-loader
│   ├───@babel
│   │   ├───code-frame
│   │   │   └───lib
│   │   ├───compat-data
│   │   │   └───data
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───config
│   │   │   │   │   ├───files
│   │   │   │   │   ├───helpers
│   │   │   │   │   └───validation
│   │   │   │   ├───gensync-utils
│   │   │   │   ├───parser
│   │   │   │   │   └───util
│   │   │   │   ├───tools
│   │   │   │   └───transformation
│   │   │   │       ├───file
│   │   │   │       └───util
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───semver
│   │   │   │       └───bin
│   │   │   └───src
│   │   │       ├───config
│   │   │       │   └───files
│   │   │       └───transformation
│   │   │           └───util
│   │   ├───generator
│   │   │   └───lib
│   │   │       ├───generators
│   │   │       └───node
│   │   ├───helper-annotate-as-pure
│   │   │   └───lib
│   │   ├───helper-builder-binary-assignment-operator-visitor
│   │   │   └───lib
│   │   ├───helper-compilation-targets
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           └───bin
│   │   ├───helper-create-class-features-plugin
│   │   │   └───lib
│   │   ├───helper-create-regexp-features-plugin
│   │   │   └───lib
│   │   ├───helper-define-polyfill-provider
│   │   │   ├───esm
│   │   │   ├───lib
│   │   │   │   ├───browser
│   │   │   │   ├───node
│   │   │   │   └───visitors
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───semver
│   │   │   │       └───bin
│   │   │   └───src
│   │   │       ├───browser
│   │   │       └───node
│   │   ├───helper-explode-assignable-expression
│   │   │   └───lib
│   │   ├───helper-function-name
│   │   │   └───lib
│   │   ├───helper-get-function-arity
│   │   │   └───lib
│   │   ├───helper-hoist-variables
│   │   │   └───lib
│   │   ├───helper-member-expression-to-functions
│   │   │   └───lib
│   │   ├───helper-module-imports
│   │   │   └───lib
│   │   ├───helper-module-transforms
│   │   │   └───lib
│   │   ├───helper-optimise-call-expression
│   │   │   └───lib
│   │   ├───helper-plugin-utils
│   │   │   └───lib
│   │   ├───helper-remap-async-to-generator
│   │   │   └───lib
│   │   ├───helper-replace-supers
│   │   │   └───lib
│   │   ├───helper-simple-access
│   │   │   └───lib
│   │   ├───helper-skip-transparent-expression-wrappers
│   │   │   └───lib
│   │   ├───helper-split-export-declaration
│   │   │   └───lib
│   │   ├───helper-validator-identifier
│   │   │   ├───lib
│   │   │   └───scripts
│   │   ├───helper-validator-option
│   │   │   └───lib
│   │   ├───helper-wrap-function
│   │   │   └───lib
│   │   ├───helpers
│   │   │   ├───lib
│   │   │   │   └───helpers
│   │   │   └───scripts
│   │   ├───highlight
│   │   │   └───lib
│   │   ├───parser
│   │   │   ├───bin
│   │   │   ├───lib
│   │   │   └───typings
│   │   ├───plugin-bugfix-v8-spread-parameters-in-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-proposal-async-generator-functions
│   │   │   └───lib
│   │   ├───plugin-proposal-class-properties
│   │   │   └───lib
│   │   ├───plugin-proposal-class-static-block
│   │   │   └───lib
│   │   ├───plugin-proposal-decorators
│   │   │   └───lib
│   │   ├───plugin-proposal-dynamic-import
│   │   │   └───lib
│   │   ├───plugin-proposal-export-namespace-from
│   │   │   └───lib
│   │   ├───plugin-proposal-json-strings
│   │   │   └───lib
│   │   ├───plugin-proposal-logical-assignment-operators
│   │   │   └───lib
│   │   ├───plugin-proposal-nullish-coalescing-operator
│   │   │   └───lib
│   │   ├───plugin-proposal-numeric-separator
│   │   │   └───lib
│   │   ├───plugin-proposal-object-rest-spread
│   │   │   └───lib
│   │   ├───plugin-proposal-optional-catch-binding
│   │   │   └───lib
│   │   ├───plugin-proposal-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-proposal-private-methods
│   │   │   └───lib
│   │   ├───plugin-proposal-private-property-in-object
│   │   │   └───lib
│   │   ├───plugin-proposal-unicode-property-regex
│   │   │   └───lib
│   │   ├───plugin-syntax-async-generators
│   │   │   └───lib
│   │   ├───plugin-syntax-bigint
│   │   │   └───lib
│   │   ├───plugin-syntax-class-properties
│   │   │   └───lib
│   │   ├───plugin-syntax-class-static-block
│   │   │   └───lib
│   │   ├───plugin-syntax-decorators
│   │   │   └───lib
│   │   ├───plugin-syntax-dynamic-import
│   │   │   └───lib
│   │   ├───plugin-syntax-export-namespace-from
│   │   │   └───lib
│   │   ├───plugin-syntax-flow
│   │   │   └───lib
│   │   ├───plugin-syntax-import-meta
│   │   │   └───lib
│   │   ├───plugin-syntax-json-strings
│   │   │   └───lib
│   │   ├───plugin-syntax-jsx
│   │   │   └───lib
│   │   ├───plugin-syntax-logical-assignment-operators
│   │   │   └───lib
│   │   ├───plugin-syntax-nullish-coalescing-operator
│   │   │   └───lib
│   │   ├───plugin-syntax-numeric-separator
│   │   │   └───lib
│   │   ├───plugin-syntax-object-rest-spread
│   │   │   └───lib
│   │   ├───plugin-syntax-optional-catch-binding
│   │   │   └───lib
│   │   ├───plugin-syntax-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-syntax-private-property-in-object
│   │   │   └───lib
│   │   ├───plugin-syntax-top-level-await
│   │   │   └───lib
│   │   ├───plugin-syntax-typescript
│   │   │   └───lib
│   │   ├───plugin-transform-arrow-functions
│   │   │   └───lib
│   │   ├───plugin-transform-async-to-generator
│   │   │   └───lib
│   │   ├───plugin-transform-block-scoped-functions
│   │   │   └───lib
│   │   ├───plugin-transform-block-scoping
│   │   │   └───lib
│   │   ├───plugin-transform-classes
│   │   │   └───lib
│   │   ├───plugin-transform-computed-properties
│   │   │   └───lib
│   │   ├───plugin-transform-destructuring
│   │   │   └───lib
│   │   ├───plugin-transform-dotall-regex
│   │   │   └───lib
│   │   ├───plugin-transform-duplicate-keys
│   │   │   └───lib
│   │   ├───plugin-transform-exponentiation-operator
│   │   │   └───lib
│   │   ├───plugin-transform-flow-strip-types
│   │   │   └───lib
│   │   ├───plugin-transform-for-of
│   │   │   └───lib
│   │   ├───plugin-transform-function-name
│   │   │   └───lib
│   │   ├───plugin-transform-literals
│   │   │   └───lib
│   │   ├───plugin-transform-member-expression-literals
│   │   │   └───lib
│   │   ├───plugin-transform-modules-amd
│   │   │   └───lib
│   │   ├───plugin-transform-modules-commonjs
│   │   │   └───lib
│   │   ├───plugin-transform-modules-systemjs
│   │   │   └───lib
│   │   ├───plugin-transform-modules-umd
│   │   │   └───lib
│   │   ├───plugin-transform-named-capturing-groups-regex
│   │   │   └───lib
│   │   ├───plugin-transform-new-target
│   │   │   └───lib
│   │   ├───plugin-transform-object-super
│   │   │   └───lib
│   │   ├───plugin-transform-parameters
│   │   │   └───lib
│   │   ├───plugin-transform-property-literals
│   │   │   └───lib
│   │   ├───plugin-transform-react-constant-elements
│   │   │   └───lib
│   │   ├───plugin-transform-react-display-name
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-development
│   │   │   └───lib
│   │   ├───plugin-transform-react-pure-annotations
│   │   │   └───lib
│   │   ├───plugin-transform-regenerator
│   │   │   └───lib
│   │   ├───plugin-transform-reserved-words
│   │   │   └───lib
│   │   ├───plugin-transform-runtime
│   │   │   ├───lib
│   │   │   │   └───get-runtime-path
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───semver
│   │   │   │       └───bin
│   │   │   └───src
│   │   │       └───get-runtime-path
│   │   ├───plugin-transform-shorthand-properties
│   │   │   └───lib
│   │   ├───plugin-transform-spread
│   │   │   └───lib
│   │   ├───plugin-transform-sticky-regex
│   │   │   └───lib
│   │   ├───plugin-transform-template-literals
│   │   │   └───lib
│   │   ├───plugin-transform-typeof-symbol
│   │   │   └───lib
│   │   ├───plugin-transform-typescript
│   │   │   └───lib
│   │   ├───plugin-transform-unicode-escapes
│   │   │   └───lib
│   │   ├───plugin-transform-unicode-regex
│   │   │   └───lib
│   │   ├───preset-env
│   │   │   ├───data
│   │   │   ├───lib
│   │   │   │   └───polyfills
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           └───bin
│   │   ├───preset-modules
│   │   │   ├───lib
│   │   │   │   └───plugins
│   │   │   │       ├───transform-async-arrows-in-class
│   │   │   │       ├───transform-edge-default-parameters
│   │   │   │       ├───transform-edge-function-name
│   │   │   │       ├───transform-jsx-spread
│   │   │   │       ├───transform-safari-block-shadowing
│   │   │   │       ├───transform-safari-for-shadowing
│   │   │   │       └───transform-tagged-template-caching
│   │   │   └───src
│   │   │       └───plugins
│   │   │           ├───transform-async-arrows-in-class
│   │   │           ├───transform-edge-default-parameters
│   │   │           ├───transform-edge-function-name
│   │   │           ├───transform-jsx-spread
│   │   │           ├───transform-safari-block-shadowing
│   │   │           ├───transform-safari-for-shadowing
│   │   │           └───transform-tagged-template-caching
│   │   ├───preset-react
│   │   │   └───lib
│   │   ├───preset-typescript
│   │   │   └───lib
│   │   ├───runtime
│   │   │   ├───helpers
│   │   │   │   └───esm
│   │   │   └───regenerator
│   │   ├───runtime-corejs3
│   │   │   ├───core-js
│   │   │   │   ├───array
│   │   │   │   ├───date
│   │   │   │   ├───instance
│   │   │   │   ├───json
│   │   │   │   ├───math
│   │   │   │   ├───number
│   │   │   │   ├───object
│   │   │   │   ├───reflect
│   │   │   │   ├───string
│   │   │   │   └───symbol
│   │   │   ├───core-js-stable
│   │   │   │   ├───array
│   │   │   │   ├───date
│   │   │   │   ├───instance
│   │   │   │   ├───json
│   │   │   │   ├───math
│   │   │   │   ├───number
│   │   │   │   ├───object
│   │   │   │   ├───reflect
│   │   │   │   ├───string
│   │   │   │   └───symbol
│   │   │   ├───helpers
│   │   │   │   └───esm
│   │   │   └───regenerator
│   │   ├───template
│   │   │   └───lib
│   │   ├───traverse
│   │   │   ├───lib
│   │   │   │   ├───path
│   │   │   │   │   ├───generated
│   │   │   │   │   ├───inference
│   │   │   │   │   └───lib
│   │   │   │   └───scope
│   │   │   │       └───lib
│   │   │   └───scripts
│   │   │       └───generators
│   │   └───types
│   │       ├───lib
│   │       │   ├───asserts
│   │       │   │   └───generated
│   │       │   ├───ast-types
│   │       │   │   └───generated
│   │       │   ├───builders
│   │       │   │   ├───flow
│   │       │   │   ├───generated
│   │       │   │   ├───react
│   │       │   │   └───typescript
│   │       │   ├───clone
│   │       │   ├───comments
│   │       │   ├───constants
│   │       │   │   └───generated
│   │       │   ├───converters
│   │       │   ├───definitions
│   │       │   ├───modifications
│   │       │   │   ├───flow
│   │       │   │   └───typescript
│   │       │   ├───retrievers
│   │       │   ├───traverse
│   │       │   ├───utils
│   │       │   │   └───react
│   │       │   └───validators
│   │       │       ├───generated
│   │       │       └───react
│   │       └───scripts
│   │           ├───generators
│   │           └───utils
│   ├───@bcoe
│   │   └───v8-coverage
│   │       ├───dist
│   │       │   └───lib
│   │       │       └───_src
│   │       └───src
│   │           ├───lib
│   │           └───test
│   ├───@cnakazawa
│   │   └───watch
│   │       └───scripts
│   ├───@csstools
│   │   ├───convert-colors
│   │   │   └───lib
│   │   └───normalize.css
│   ├───@eslint
│   │   └───eslintrc
│   │       ├───conf
│   │       ├───lib
│   │       │   ├───config-array
│   │       │   └───shared
│   │       └───node_modules
│   │           ├───globals
│   │           ├───ignore
│   │           └───type-fest
│   │               ├───source
│   │               └───ts41
│   ├───@gar
│   │   └───promisify
│   ├───@hapi
│   │   ├───address
│   │   │   ├───bench
│   │   │   ├───lib
│   │   │   └───test
│   │   ├───bourne
│   │   │   └───lib
│   │   ├───hoek
│   │   │   └───lib
│   │   ├───joi
│   │   │   └───lib
│   │   │       └───types
│   │   │           ├───alternatives
│   │   │           ├───any
│   │   │           ├───array
│   │   │           ├───binary
│   │   │           ├───boolean
│   │   │           ├───date
│   │   │           ├───func
│   │   │           ├───lazy
│   │   │           ├───number
│   │   │           ├───object
│   │   │           ├───string
│   │   │           └───symbol
│   │   └───topo
│   │       └───lib
│   ├───@humanwhocodes
│   │   ├───config-array
│   │   └───object-schema
│   │       ├───src
│   │       └───tests
│   ├───@istanbuljs
│   │   ├───load-nyc-config
│   │   │   └───node_modules
│   │   │       └───camelcase
│   │   └───schema
│   ├───@jest
│   │   ├───console
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───has-flag
│   │   │       └───supports-color
│   │   ├───core
│   │   │   ├───build
│   │   │   │   ├───assets
│   │   │   │   ├───cli
│   │   │   │   ├───lib
│   │   │   │   └───plugins
│   │   │   └───node_modules
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───has-flag
│   │   │       ├───jest-resolve
│   │   │       │   └───build
│   │   │       └───supports-color
│   │   ├───environment
│   │   │   └───build
│   │   ├───fake-timers
│   │   │   └───build
│   │   ├───globals
│   │   │   └───build
│   │   ├───reporters
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───has-flag
│   │   │       ├───istanbul-lib-instrument
│   │   │       │   └───dist
│   │   │       ├───jest-resolve
│   │   │       │   └───build
│   │   │       ├───semver
│   │   │       │   └───bin
│   │   │       ├───source-map
│   │   │       │   ├───dist
│   │   │       │   └───lib
│   │   │       └───supports-color
│   │   ├───source-map
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       └───source-map
│   │   │           ├───dist
│   │   │           └───lib
│   │   ├───test-result
│   │   │   └───build
│   │   ├───test-sequencer
│   │   │   └───build
│   │   ├───transform
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───has-flag
│   │   │       ├───source-map
│   │   │       │   ├───dist
│   │   │       │   └───lib
│   │   │       └───supports-color
│   │   └───types
│   │       ├───build
│   │       └───node_modules
│   │           ├───ansi-styles
│   │           ├───chalk
│   │           │   └───source
│   │           ├───color-convert
│   │           ├───color-name
│   │           ├───has-flag
│   │           └───supports-color
│   ├───@nodelib
│   │   ├───fs.scandir
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       ├───types
│   │   │       └───utils
│   │   ├───fs.stat
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       └───types
│   │   └───fs.walk
│   │       └───out
│   │           ├───providers
│   │           ├───readers
│   │           └───types
│   ├───@npmcli
│   │   ├───fs
│   │   │   ├───lib
│   │   │   │   ├───common
│   │   │   │   │   └───file-url-to-path
│   │   │   │   ├───mkdir
│   │   │   │   └───rm
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           ├───bin
│   │   │           ├───classes
│   │   │           ├───functions
│   │   │           ├───internal
│   │   │           └───ranges
│   │   └───move-file
│   │       └───node_modules
│   │           ├───.bin
│   │           └───mkdirp
│   │               ├───bin
│   │               └───lib
│   ├───@pmmmwh
│   │   └───react-refresh-webpack-plugin
│   │       ├───client
│   │       │   └───utils
│   │       ├───lib
│   │       │   ├───runtime
│   │       │   └───utils
│   │       ├───loader
│   │       ├───node_modules
│   │       │   └───source-map
│   │       │       ├───dist
│   │       │       └───lib
│   │       ├───overlay
│   │       │   ├───components
│   │       │   ├───containers
│   │       │   └───utils
│   │       ├───sockets
│   │       │   └───utils
│   │       └───types
│   ├───@rollup
│   │   ├───plugin-node-resolve
│   │   │   ├───dist
│   │   │   └───types
│   │   ├───plugin-replace
│   │   │   ├───dist
│   │   │   ├───src
│   │   │   └───types
│   │   └───pluginutils
│   │       ├───dist
│   │       │   ├───cjs
│   │       │   └───es
│   │       ├───node_modules
│   │       │   └───@types
│   │       │       └───estree
│   │       └───types
│   ├───@sinonjs
│   │   ├───commons
│   │   │   ├───lib
│   │   │   │   └───prototypes
│   │   │   └───types
│   │   │       └───prototypes
│   │   └───fake-timers
│   │       └───src
│   ├───@surma
│   │   └───rollup-plugin-off-main-thread
│   │       └───tests
│   │           └───fixtures
│   │               ├───amd-function-name
│   │               │   └───build
│   │               ├───assets-in-worker
│   │               │   └───build
│   │               │       └───assets
│   │               ├───dynamic-import
│   │               │   └───build
│   │               ├───import-meta
│   │               │   └───build
│   │               ├───import-worker-url
│   │               │   └───build
│   │               ├───import-worker-url-custom-scheme
│   │               │   └───build
│   │               ├───module-worker
│   │               │   └───build
│   │               ├───more-workers
│   │               │   └───build
│   │               ├───public-path
│   │               │   └───build
│   │               ├───simple-bundle
│   │               │   └───build
│   │               ├───single-default
│   │               │   └───build
│   │               └───worker
│   │                   └───build
│   ├───@svgr
│   │   ├───babel-plugin-add-jsx-attribute
│   │   │   └───lib
│   │   ├───babel-plugin-remove-jsx-attribute
│   │   │   └───lib
│   │   ├───babel-plugin-remove-jsx-empty-expression
│   │   │   └───lib
│   │   ├───babel-plugin-replace-jsx-attribute-value
│   │   │   └───lib
│   │   ├───babel-plugin-svg-dynamic-title
│   │   │   └───lib
│   │   ├───babel-plugin-svg-em-dimensions
│   │   │   └───lib
│   │   ├───babel-plugin-transform-react-native-svg
│   │   │   └───lib
│   │   ├───babel-plugin-transform-svg-component
│   │   │   └───lib
│   │   ├───babel-preset
│   │   │   └───lib
│   │   ├───core
│   │   │   └───lib
│   │   ├───hast-util-to-babel-ast
│   │   │   └───lib
│   │   ├───plugin-jsx
│   │   │   └───lib
│   │   ├───plugin-svgo
│   │   │   └───lib
│   │   └───webpack
│   │       └───lib
│   ├───@testing-library
│   │   ├───dom
│   │   │   ├───dist
│   │   │   │   ├───@testing-library
│   │   │   │   └───queries
│   │   │   ├───node_modules
│   │   │   │   ├───@babel
│   │   │   │   │   └───runtime
│   │   │   │   │       ├───helpers
│   │   │   │   │       │   └───esm
│   │   │   │   │       └───regenerator
│   │   │   │   ├───@jest
│   │   │   │   │   └───types
│   │   │   │   │       └───build
│   │   │   │   ├───@types
│   │   │   │   │   └───yargs
│   │   │   │   ├───ansi-styles
│   │   │   │   ├───aria-query
│   │   │   │   │   └───lib
│   │   │   │   │       └───etc
│   │   │   │   │           └───roles
│   │   │   │   │               ├───abstract
│   │   │   │   │               ├───dpub
│   │   │   │   │               └───literal
│   │   │   │   ├───chalk
│   │   │   │   │   └───source
│   │   │   │   ├───color-convert
│   │   │   │   ├───color-name
│   │   │   │   ├───has-flag
│   │   │   │   ├───pretty-format
│   │   │   │   │   ├───build
│   │   │   │   │   │   └───plugins
│   │   │   │   │   │       └───lib
│   │   │   │   │   └───node_modules
│   │   │   │   │       └───ansi-styles
│   │   │   │   └───supports-color
│   │   │   └───types
│   │   ├───jest-dom
│   │   │   ├───dist
│   │   │   └───node_modules
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───css
│   │   │       │   └───lib
│   │   │       │       ├───parse
│   │   │       │       └───stringify
│   │   │       ├───has-flag
│   │   │       ├───source-map
│   │   │       │   ├───dist
│   │   │       │   └───lib
│   │   │       ├───source-map-resolve
│   │   │       └───supports-color
│   │   ├───react
│   │   │   ├───dist
│   │   │   │   └───@testing-library
│   │   │   ├───node_modules
│   │   │   │   ├───@babel
│   │   │   │   │   └───runtime
│   │   │   │   │       ├───helpers
│   │   │   │   │       │   └───esm
│   │   │   │   │       └───regenerator
│   │   │   │   ├───@testing-library
│   │   │   │   │   └───dom
│   │   │   │   │       ├───dist
│   │   │   │   │       │   ├───@testing-library
│   │   │   │   │       │   └───queries
│   │   │   │   │       └───types
│   │   │   │   ├───ansi-styles
│   │   │   │   ├───chalk
│   │   │   │   │   └───source
│   │   │   │   ├───color-convert
│   │   │   │   ├───color-name
│   │   │   │   ├───has-flag
│   │   │   │   └───supports-color
│   │   │   └───types
│   │   └───user-event
│   │       ├───dist
│   │       │   └───keys
│   │       ├───node_modules
│   │       │   └───@babel
│   │       │       └───runtime
│   │       │           ├───helpers
│   │       │           │   └───esm
│   │       │           └───regenerator
│   │       └───typings
│   ├───@tootallnate
│   │   └───once
│   │       └───dist
│   ├───@types
│   │   ├───aria-query
│   │   ├───babel__core
│   │   ├───babel__generator
│   │   ├───babel__template
│   │   ├───babel__traverse
│   │   │   └───ts4.1
│   │   ├───eslint
│   │   │   ├───lib
│   │   │   │   └───rules
│   │   │   └───rules
│   │   ├───estree
│   │   ├───glob
│   │   ├───graceful-fs
│   │   ├───html-minifier-terser
│   │   ├───istanbul-lib-coverage
│   │   ├───istanbul-lib-report
│   │   ├───istanbul-reports
│   │   ├───jest
│   │   │   └───node_modules
│   │   │       ├───@jest
│   │   │       │   └───types
│   │   │       │       └───build
│   │   │       ├───@types
│   │   │       │   └───yargs
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───diff-sequences
│   │   │       │   ├───build
│   │   │       │   └───perf
│   │   │       ├───has-flag
│   │   │       ├───jest-diff
│   │   │       │   └───build
│   │   │       ├───jest-get-type
│   │   │       │   └───build
│   │   │       ├───pretty-format
│   │   │       │   ├───build
│   │   │       │   │   └───plugins
│   │   │       │   │       └───lib
│   │   │       │   └───node_modules
│   │   │       │       └───ansi-styles
│   │   │       └───supports-color
│   │   ├───json-schema
│   │   ├───json5
│   │   ├───minimatch
│   │   ├───node
│   │   │   ├───assert
│   │   │   ├───dns
│   │   │   ├───fs
│   │   │   ├───stream
│   │   │   └───timers
│   │   ├───normalize-package-data
│   │   ├───parse-json
│   │   ├───prettier
│   │   ├───q
│   │   ├───resolve
│   │   ├───source-list-map
│   │   ├───stack-utils
│   │   ├───tapable
│   │   ├───testing-library__jest-dom
│   │   ├───uglify-js
│   │   │   └───node_modules
│   │   │       └───source-map
│   │   │           ├───dist
│   │   │           └───lib
│   │   ├───webpack
│   │   │   └───node_modules
│   │   │       └───source-map
│   │   │           ├───dist
│   │   │           └───lib
│   │   ├───webpack-sources
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       └───source-map
│   │   │           ├───dist
│   │   │           └───lib
│   │   ├───yargs
│   │   └───yargs-parser
│   ├───@typescript-eslint
│   │   ├───eslint-plugin
│   │   │   ├───dist
│   │   │   │   ├───configs
│   │   │   │   ├───rules
│   │   │   │   │   ├───indent-new-do-not-use
│   │   │   │   │   └───naming-convention-utils
│   │   │   │   └───util
│   │   │   ├───docs
│   │   │   │   └───rules
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           ├───bin
│   │   │           ├───classes
│   │   │           ├───functions
│   │   │           ├───internal
│   │   │           └───ranges
│   │   ├───experimental-utils
│   │   │   ├───dist
│   │   │   │   ├───ast-utils
│   │   │   │   │   └───eslint-utils
│   │   │   │   ├───eslint-utils
│   │   │   │   ├───ts-eslint
│   │   │   │   └───ts-eslint-scope
│   │   │   └───_ts3.4
│   │   │       └───dist
│   │   │           ├───ast-utils
│   │   │           │   └───eslint-utils
│   │   │           ├───eslint-utils
│   │   │           ├───ts-eslint
│   │   │           └───ts-eslint-scope
│   │   ├───parser
│   │   │   └───dist
│   │   ├───scope-manager
│   │   │   └───dist
│   │   │       ├───definition
│   │   │       ├───lib
│   │   │       ├───referencer
│   │   │       ├───scope
│   │   │       └───variable
│   │   ├───types
│   │   │   └───dist
│   │   ├───typescript-estree
│   │   │   ├───dist
│   │   │   │   ├───create-program
│   │   │   │   ├───jsx
│   │   │   │   └───ts-estree
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           ├───bin
│   │   │           ├───classes
│   │   │           ├───functions
│   │   │           ├───internal
│   │   │           └───ranges
│   │   └───visitor-keys
│   │       └───dist
│   ├───@webassemblyjs
│   │   ├───ast
│   │   │   ├───esm
│   │   │   │   ├───transform
│   │   │   │   │   ├───denormalize-type-references
│   │   │   │   │   └───wast-identifier-to-index
│   │   │   │   └───types
│   │   │   ├───lib
│   │   │   │   ├───transform
│   │   │   │   │   ├───denormalize-type-references
│   │   │   │   │   └───wast-identifier-to-index
│   │   │   │   └───types
│   │   │   └───scripts
│   │   ├───floating-point-hex-parser
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───helper-api-error
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───helper-buffer
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───helper-code-frame
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───helper-fsm
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───helper-module-context
│   │   │   ├───esm
│   │   │   ├───lib
│   │   │   ├───src
│   │   │   └───test
│   │   ├───helper-wasm-bytecode
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───helper-wasm-section
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───ieee754
│   │   │   ├───esm
│   │   │   ├───lib
│   │   │   └───src
│   │   ├───leb128
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───utf8
│   │   │   ├───esm
│   │   │   ├───lib
│   │   │   ├───src
│   │   │   └───test
│   │   ├───wasm-edit
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───wasm-gen
│   │   │   ├───esm
│   │   │   │   └───encoder
│   │   │   └───lib
│   │   │       └───encoder
│   │   ├───wasm-opt
│   │   │   ├───esm
│   │   │   └───lib
│   │   ├───wasm-parser
│   │   │   ├───esm
│   │   │   │   └───types
│   │   │   └───lib
│   │   │       └───types
│   │   ├───wast-parser
│   │   │   ├───esm
│   │   │   └───lib
│   │   └───wast-printer
│   │       ├───esm
│   │       └───lib
│   ├───@xtuc
│   │   ├───ieee754
│   │   │   └───dist
│   │   └───long
│   │       ├───dist
│   │       └───src
│   ├───abab
│   │   └───lib
│   ├───accepts
│   ├───acorn
│   │   ├───bin
│   │   └───dist
│   ├───acorn-globals
│   ├───acorn-jsx
│   ├───acorn-walk
│   │   └───dist
│   ├───address
│   │   └───lib
│   ├───adjust-sourcemap-loader
│   │   ├───codec
│   │   │   └───utility
│   │   └───lib
│   │       └───process
│   ├───agent-base
│   │   ├───dist
│   │   │   └───src
│   │   └───src
│   ├───aggregate-error
│   ├───ajv
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───compile
│   │   │   ├───dot
│   │   │   ├───dotjs
│   │   │   └───refs
│   │   └───scripts
│   ├───ajv-errors
│   │   └───lib
│   │       ├───dot
│   │       └───dotjs
│   ├───ajv-keywords
│   │   └───keywords
│   │       ├───dot
│   │       └───dotjs
│   ├───alphanum-sort
│   │   └───lib
│   ├───ansi-colors
│   │   └───types
│   ├───ansi-escapes
│   ├───ansi-html
│   │   └───bin
│   ├───ansi-regex
│   ├───ansi-styles
│   ├───anymatch
│   ├───aproba
│   ├───argparse
│   │   └───lib
│   │       ├───action
│   │       │   ├───append
│   │       │   └───store
│   │       ├───argument
│   │       └───help
│   ├───aria-query
│   │   └───lib
│   │       └───etc
│   │           └───roles
│   │               ├───abstract
│   │               ├───dpub
│   │               └───literal
│   ├───arity-n
│   ├───arr-diff
│   ├───arr-flatten
│   ├───arr-union
│   ├───array-flatten
│   ├───array-includes
│   │   ├───.github
│   │   └───test
│   ├───array-union
│   ├───array-uniq
│   ├───array-unique
│   ├───array.prototype.flat
│   │   ├───.github
│   │   └───test
│   ├───array.prototype.flatmap
│   │   ├───.github
│   │   └───test
│   ├───arrify
│   ├───asap
│   ├───asn1.js
│   │   ├───lib
│   │   │   └───asn1
│   │   │       ├───base
│   │   │       ├───constants
│   │   │       ├───decoders
│   │   │       └───encoders
│   │   └───node_modules
│   │       └───bn.js
│   │           └───lib
│   ├───assert
│   │   └───node_modules
│   │       ├───inherits
│   │       └───util
│   │           ├───support
│   │           └───test
│   │               ├───browser
│   │               └───node
│   ├───assign-symbols
│   ├───ast-types-flow
│   │   └───lib
│   ├───astral-regex
│   ├───async
│   │   ├───dist
│   │   └───internal
│   ├───async-each
│   ├───async-limiter
│   ├───asynckit
│   │   └───lib
│   ├───at-least-node
│   ├───atob
│   │   └───bin
│   ├───autoprefixer
│   │   ├───bin
│   │   ├───data
│   │   ├───lib
│   │   │   └───hacks
│   │   └───node_modules
│   │       └───picocolors
│   ├───axe-core
│   │   └───locales
│   ├───axobject-query
│   │   └───lib
│   │       └───etc
│   │           └───objects
│   ├───babel-eslint
│   │   ├───lib
│   │   │   └───babylon-to-espree
│   │   └───node_modules
│   │       └───eslint-visitor-keys
│   │           └───lib
│   ├───babel-extract-comments
│   ├───babel-jest
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───babel-loader
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───json5
│   │       │   ├───dist
│   │       │   └───lib
│   │       └───loader-utils
│   │           └───lib
│   ├───babel-plugin-dynamic-import-node
│   │   └───lib
│   ├───babel-plugin-istanbul
│   │   └───lib
│   ├───babel-plugin-jest-hoist
│   │   └───build
│   ├───babel-plugin-macros
│   │   ├───dist
│   │   └───node_modules
│   │       └───cosmiconfig
│   │           └───dist
│   ├───babel-plugin-named-asset-import
│   ├───babel-plugin-polyfill-corejs2
│   │   ├───esm
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───babel-plugin-polyfill-corejs3
│   │   ├───core-js-compat
│   │   ├───esm
│   │   └───lib
│   ├───babel-plugin-polyfill-regenerator
│   │   ├───esm
│   │   └───lib
│   ├───babel-plugin-syntax-object-rest-spread
│   │   └───lib
│   ├───babel-plugin-transform-object-rest-spread
│   │   └───lib
│   ├───babel-plugin-transform-react-remove-prop-types
│   │   ├───lib
│   │   └───src
│   ├───babel-preset-current-node-syntax
│   │   ├───scripts
│   │   └───src
│   ├───babel-preset-jest
│   ├───babel-preset-react-app
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───@babel
│   │       │   ├───core
│   │       │   │   ├───lib
│   │       │   │   │   ├───config
│   │       │   │   │   │   ├───files
│   │       │   │   │   │   ├───helpers
│   │       │   │   │   │   └───validation
│   │       │   │   │   ├───gensync-utils
│   │       │   │   │   ├───parser
│   │       │   │   │   │   └───util
│   │       │   │   │   ├───tools
│   │       │   │   │   └───transformation
│   │       │   │   │       └───file
│   │       │   │   └───src
│   │       │   │       └───config
│   │       │   │           └───files
│   │       │   ├───plugin-proposal-class-properties
│   │       │   │   └───lib
│   │       │   ├───plugin-proposal-nullish-coalescing-operator
│   │       │   │   └───lib
│   │       │   ├───plugin-proposal-numeric-separator
│   │       │   │   └───lib
│   │       │   ├───plugin-proposal-optional-chaining
│   │       │   │   └───lib
│   │       │   ├───plugin-transform-react-display-name
│   │       │   │   └───lib
│   │       │   ├───preset-env
│   │       │   │   ├───data
│   │       │   │   └───lib
│   │       │   │       └───polyfills
│   │       │   │           ├───corejs2
│   │       │   │           ├───corejs3
│   │       │   │           └───regenerator
│   │       │   └───preset-react
│   │       │       ├───lib
│   │       │       └───node_modules
│   │       │           └───@babel
│   │       │               ├───plugin-transform-react-jsx-self
│   │       │               │   └───lib
│   │       │               └───plugin-transform-react-jsx-source
│   │       │                   └───lib
│   │       └───semver
│   │           └───bin
│   ├───babel-runtime
│   │   ├───core-js
│   │   │   ├───array
│   │   │   ├───error
│   │   │   ├───json
│   │   │   ├───math
│   │   │   ├───number
│   │   │   ├───object
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───string
│   │   │   ├───symbol
│   │   │   └───system
│   │   ├───helpers
│   │   ├───node_modules
│   │   │   ├───core-js
│   │   │   │   ├───build
│   │   │   │   ├───client
│   │   │   │   ├───core
│   │   │   │   ├───es5
│   │   │   │   ├───es6
│   │   │   │   ├───es7
│   │   │   │   ├───fn
│   │   │   │   │   ├───array
│   │   │   │   │   │   └───virtual
│   │   │   │   │   ├───date
│   │   │   │   │   ├───dom-collections
│   │   │   │   │   ├───error
│   │   │   │   │   ├───function
│   │   │   │   │   │   └───virtual
│   │   │   │   │   ├───json
│   │   │   │   │   ├───map
│   │   │   │   │   ├───math
│   │   │   │   │   ├───number
│   │   │   │   │   │   └───virtual
│   │   │   │   │   ├───object
│   │   │   │   │   ├───promise
│   │   │   │   │   ├───reflect
│   │   │   │   │   ├───regexp
│   │   │   │   │   ├───set
│   │   │   │   │   ├───string
│   │   │   │   │   │   └───virtual
│   │   │   │   │   ├───symbol
│   │   │   │   │   ├───system
│   │   │   │   │   ├───typed
│   │   │   │   │   ├───weak-map
│   │   │   │   │   └───weak-set
│   │   │   │   ├───library
│   │   │   │   │   ├───core
│   │   │   │   │   ├───es5
│   │   │   │   │   ├───es6
│   │   │   │   │   ├───es7
│   │   │   │   │   ├───fn
│   │   │   │   │   │   ├───array
│   │   │   │   │   │   │   └───virtual
│   │   │   │   │   │   ├───date
│   │   │   │   │   │   ├───dom-collections
│   │   │   │   │   │   ├───error
│   │   │   │   │   │   ├───function
│   │   │   │   │   │   │   └───virtual
│   │   │   │   │   │   ├───json
│   │   │   │   │   │   ├───map
│   │   │   │   │   │   ├───math
│   │   │   │   │   │   ├───number
│   │   │   │   │   │   │   └───virtual
│   │   │   │   │   │   ├───object
│   │   │   │   │   │   ├───promise
│   │   │   │   │   │   ├───reflect
│   │   │   │   │   │   ├───regexp
│   │   │   │   │   │   ├───set
│   │   │   │   │   │   ├───string
│   │   │   │   │   │   │   └───virtual
│   │   │   │   │   │   ├───symbol
│   │   │   │   │   │   ├───system
│   │   │   │   │   │   ├───typed
│   │   │   │   │   │   ├───weak-map
│   │   │   │   │   │   └───weak-set
│   │   │   │   │   ├───modules
│   │   │   │   │   ├───stage
│   │   │   │   │   └───web
│   │   │   │   ├───modules
│   │   │   │   │   └───library
│   │   │   │   ├───stage
│   │   │   │   └───web
│   │   │   └───regenerator-runtime
│   │   └───regenerator
│   ├───babylon
│   │   ├───bin
│   │   └───lib
│   ├───balanced-match
│   │   └───.github
│   ├───base
│   │   └───node_modules
│   │       └───define-property
│   ├───base64-js
│   ├───batch
│   ├───bfj
│   │   ├───src
│   │   └───test
│   │       └───unit
│   ├───big.js
│   ├───binary-extensions
│   ├───bindings
│   ├───bluebird
│   │   └───js
│   │       ├───browser
│   │       └───release
│   ├───bn.js
│   │   └───lib
│   ├───body-parser
│   │   ├───lib
│   │   │   └───types
│   │   └───node_modules
│   │       ├───bytes
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───bonjour
│   │   ├───lib
│   │   └───test
│   ├───boolbase
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───brorand
│   │   └───test
│   ├───browser-process-hrtime
│   ├───browserify-aes
│   │   └───modes
│   ├───browserify-cipher
│   ├───browserify-des
│   ├───browserify-rsa
│   ├───browserify-sign
│   │   ├───browser
│   │   └───node_modules
│   │       ├───readable-stream
│   │       │   └───lib
│   │       │       └───internal
│   │       │           └───streams
│   │       └───safe-buffer
│   ├───browserify-zlib
│   │   ├───lib
│   │   └───src
│   ├───browserslist
│   ├───bser
│   ├───buffer
│   │   ├───bin
│   │   └───test
│   │       └───node
│   ├───buffer-from
│   ├───buffer-indexof
│   │   └───test
│   ├───buffer-xor
│   │   └───test
│   ├───builtin-modules
│   ├───builtin-status-codes
│   ├───bytes
│   ├───cacache
│   │   ├───lib
│   │   │   ├───content
│   │   │   └───util
│   │   └───node_modules
│   │       ├───.bin
│   │       └───mkdirp
│   │           ├───bin
│   │           └───lib
│   ├───cache-base
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───caller-callsite
│   │   └───node_modules
│   │       └───callsites
│   ├───caller-path
│   ├───callsites
│   ├───camel-case
│   │   ├───dist
│   │   └───dist.es2015
│   ├───camelcase
│   ├───caniuse-api
│   │   └───dist
│   ├───caniuse-lite
│   │   ├───data
│   │   │   ├───features
│   │   │   └───regions
│   │   └───dist
│   │       ├───lib
│   │       └───unpacker
│   ├───capture-exit
│   ├───case-sensitive-paths-webpack-plugin
│   ├───chalk
│   │   └───types
│   ├───char-regex
│   ├───check-types
│   │   └───src
│   ├───chokidar
│   │   ├───lib
│   │   └───types
│   ├───chownr
│   ├───chrome-trace-event
│   │   └───dist
│   ├───ci-info
│   ├───cipher-base
│   ├───cjs-module-lexer
│   │   └───dist
│   ├───class-utils
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───is-accessor-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-data-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-descriptor
│   │       └───kind-of
│   ├───clean-css
│   │   ├───lib
│   │   │   ├───optimizer
│   │   │   │   ├───level-0
│   │   │   │   ├───level-1
│   │   │   │   └───level-2
│   │   │   │       └───properties
│   │   │   ├───options
│   │   │   ├───reader
│   │   │   ├───tokenizer
│   │   │   ├───utils
│   │   │   └───writer
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───clean-stack
│   ├───cliui
│   ├───co
│   ├───coa
│   │   └───lib
│   ├───collect-v8-coverage
│   ├───collection-visit
│   ├───color
│   ├───color-convert
│   ├───color-name
│   ├───color-string
│   ├───combined-stream
│   │   └───lib
│   ├───commander
│   │   └───typings
│   ├───common-tags
│   │   ├───dist
│   │   ├───es
│   │   │   ├───codeBlock
│   │   │   ├───commaLists
│   │   │   ├───commaListsAnd
│   │   │   ├───commaListsOr
│   │   │   ├───html
│   │   │   ├───inlineArrayTransformer
│   │   │   ├───inlineLists
│   │   │   ├───oneLine
│   │   │   ├───oneLineCommaLists
│   │   │   ├───oneLineCommaListsAnd
│   │   │   ├───oneLineCommaListsOr
│   │   │   ├───oneLineInlineLists
│   │   │   ├───oneLineTrim
│   │   │   ├───removeNonPrintingValuesTransformer
│   │   │   ├───replaceResultTransformer
│   │   │   ├───replaceStringTransformer
│   │   │   ├───replaceSubstitutionTransformer
│   │   │   ├───safeHtml
│   │   │   ├───source
│   │   │   ├───splitStringTransformer
│   │   │   ├───stripIndent
│   │   │   ├───stripIndents
│   │   │   ├───stripIndentTransformer
│   │   │   ├───TemplateTag
│   │   │   ├───trimResultTransformer
│   │   │   └───utils
│   │   │       └───readFromFixture
│   │   └───lib
│   │       ├───codeBlock
│   │       ├───commaLists
│   │       ├───commaListsAnd
│   │       ├───commaListsOr
│   │       ├───html
│   │       ├───inlineArrayTransformer
│   │       ├───inlineLists
│   │       ├───oneLine
│   │       ├───oneLineCommaLists
│   │       ├───oneLineCommaListsAnd
│   │       ├───oneLineCommaListsOr
│   │       ├───oneLineInlineLists
│   │       ├───oneLineTrim
│   │       ├───removeNonPrintingValuesTransformer
│   │       ├───replaceResultTransformer
│   │       ├───replaceStringTransformer
│   │       ├───replaceSubstitutionTransformer
│   │       ├───safeHtml
│   │       ├───source
│   │       ├───splitStringTransformer
│   │       ├───stripIndent
│   │       ├───stripIndents
│   │       ├───stripIndentTransformer
│   │       ├───TemplateTag
│   │       ├───trimResultTransformer
│   │       └───utils
│   │           └───readFromFixture
│   ├───commondir
│   │   ├───example
│   │   └───test
│   ├───component-emitter
│   ├───compose-function
│   │   └───module
│   ├───compressible
│   ├───compression
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───concat-stream
│   ├───confusing-browser-globals
│   ├───connect-history-api-fallback
│   │   └───lib
│   ├───console-browserify
│   │   └───test
│   │       └───static
│   ├───constants-browserify
│   ├───content-disposition
│   ├───content-type
│   ├───convert-source-map
│   ├───cookie
│   ├───cookie-signature
│   ├───copy-concurrently
│   │   └───node_modules
│   │       ├───.bin
│   │       └───rimraf
│   ├───copy-descriptor
│   ├───core-js
│   │   ├───es
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───features
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───async-iterator
│   │   │   ├───bigint
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───dom-collections
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───iterator
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───observable
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───internals
│   │   ├───modules
│   │   ├───proposals
│   │   ├───stable
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───dom-collections
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───stage
│   │   └───web
│   ├───core-js-compat
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           ├───bin
│   │           ├───classes
│   │           ├───functions
│   │           ├───internal
│   │           └───ranges
│   ├───core-js-pure
│   │   ├───es
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───features
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───async-iterator
│   │   │   ├───bigint
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───dom-collections
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───iterator
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───observable
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───internals
│   │   ├───modules
│   │   ├───proposals
│   │   ├───stable
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───dom-collections
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───stage
│   │   └───web
│   ├───core-util-is
│   │   └───lib
│   ├───cosmiconfig
│   │   └───dist
│   ├───create-ecdh
│   │   └───node_modules
│   │       └───bn.js
│   │           └───lib
│   ├───create-hash
│   ├───create-hmac
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───crypto-browserify
│   │   ├───example
│   │   └───test
│   │       └───node
│   ├───crypto-random-string
│   ├───css
│   │   ├───lib
│   │   │   ├───parse
│   │   │   └───stringify
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───css-blank-pseudo
│   ├───css-color-names
│   ├───css-declaration-sorter
│   │   ├───orders
│   │   └───src
│   ├───css-has-pseudo
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───cssesc
│   │       │   ├───bin
│   │       │   └───man
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               ├───selectors
│   │               └───util
│   ├───css-loader
│   │   └───dist
│   │       ├───plugins
│   │       └───runtime
│   ├───css-prefers-color-scheme
│   ├───css-select
│   │   └───lib
│   │       └───pseudo-selectors
│   ├───css-select-base-adapter
│   │   └───test
│   ├───css-tree
│   │   ├───data
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───common
│   │   │   ├───convertor
│   │   │   ├───definition-syntax
│   │   │   ├───generator
│   │   │   ├───lexer
│   │   │   ├───parser
│   │   │   ├───syntax
│   │   │   │   ├───atrule
│   │   │   │   ├───config
│   │   │   │   ├───function
│   │   │   │   ├───node
│   │   │   │   ├───pseudo
│   │   │   │   │   └───common
│   │   │   │   └───scope
│   │   │   ├───tokenizer
│   │   │   ├───utils
│   │   │   └───walker
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───css-what
│   │   └───lib
│   ├───css.escape
│   ├───cssdb
│   ├───cssesc
│   │   ├───bin
│   │   └───man
│   ├───cssnano
│   │   ├───dist
│   │   └───node_modules
│   │       ├───cosmiconfig
│   │       │   └───dist
│   │       ├───import-fresh
│   │       ├───parse-json
│   │       └───resolve-from
│   ├───cssnano-preset-default
│   │   └───dist
│   ├───cssnano-util-get-arguments
│   │   └───dist
│   ├───cssnano-util-get-match
│   │   └───dist
│   ├───cssnano-util-raw-cache
│   │   └───dist
│   ├───cssnano-util-same-parent
│   │   └───dist
│   ├───csso
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───clean
│   │   │   ├───replace
│   │   │   │   ├───atrule
│   │   │   │   └───property
│   │   │   └───restructure
│   │   │       └───prepare
│   │   └───node_modules
│   │       ├───css-tree
│   │       │   ├───data
│   │       │   ├───dist
│   │       │   └───lib
│   │       │       ├───common
│   │       │       ├───convertor
│   │       │       ├───definition-syntax
│   │       │       ├───generator
│   │       │       ├───lexer
│   │       │       ├───parser
│   │       │       ├───syntax
│   │       │       │   ├───atrule
│   │       │       │   ├───config
│   │       │       │   ├───function
│   │       │       │   ├───node
│   │       │       │   ├───pseudo
│   │       │       │   │   └───common
│   │       │       │   └───scope
│   │       │       ├───tokenizer
│   │       │       ├───utils
│   │       │       └───walker
│   │       ├───mdn-data
│   │       │   ├───api
│   │       │   ├───css
│   │       │   └───l10n
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───cssom
│   │   └───lib
│   ├───cssstyle
│   │   ├───lib
│   │   │   ├───properties
│   │   │   └───utils
│   │   └───node_modules
│   │       └───cssom
│   │           └───lib
│   ├───cyclist
│   ├───d
│   │   ├───.github
│   │   └───test
│   ├───damerau-levenshtein
│   │   ├───scripts
│   │   └───test
│   ├───data-urls
│   │   └───lib
│   ├───debug
│   │   └───src
│   ├───decamelize
│   ├───decimal.js
│   ├───decode-uri-component
│   ├───dedent
│   │   └───dist
│   ├───deep-equal
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   ├───deep-is
│   │   ├───example
│   │   └───test
│   ├───deepmerge
│   │   └───dist
│   ├───default-gateway
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───cross-spawn
│   │       │   └───lib
│   │       │       └───util
│   │       ├───execa
│   │       │   └───lib
│   │       ├───get-stream
│   │       ├───is-stream
│   │       ├───npm-run-path
│   │       ├───path-key
│   │       ├───semver
│   │       │   └───bin
│   │       ├───shebang-command
│   │       ├───shebang-regex
│   │       └───which
│   │           └───bin
│   ├───define-properties
│   │   └───test
│   ├───define-property
│   ├───del
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───array-union
│   │       ├───globby
│   │       │   └───node_modules
│   │       │       └───pify
│   │       ├───p-map
│   │       └───rimraf
│   ├───delayed-stream
│   │   └───lib
│   ├───depd
│   │   └───lib
│   │       ├───browser
│   │       └───compat
│   ├───des.js
│   │   ├───lib
│   │   │   └───des
│   │   └───test
│   ├───destroy
│   ├───detect-newline
│   ├───detect-node
│   ├───detect-port-alt
│   │   ├───.vscode
│   │   ├───bin
│   │   ├───lib
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───diff-sequences
│   │   ├───build
│   │   └───perf
│   ├───diffie-hellman
│   │   ├───lib
│   │   └───node_modules
│   │       └───bn.js
│   │           └───lib
│   ├───dir-glob
│   ├───dns-equal
│   ├───dns-packet
│   ├───dns-txt
│   ├───doctrine
│   │   └───lib
│   ├───dom-accessibility-api
│   │   └───dist
│   │       └───polyfills
│   ├───dom-converter
│   │   └───lib
│   ├───dom-serializer
│   │   └───lib
│   ├───domain-browser
│   │   └───source
│   ├───domelementtype
│   │   └───lib
│   ├───domexception
│   │   ├───lib
│   │   └───node_modules
│   │       └───webidl-conversions
│   │           └───lib
│   ├───domhandler
│   │   └───lib
│   ├───domutils
│   │   └───lib
│   ├───dot-case
│   │   ├───dist
│   │   └───dist.es2015
│   ├───dot-prop
│   │   └───node_modules
│   │       └───is-obj
│   ├───dotenv
│   │   ├───lib
│   │   └───types
│   ├───dotenv-expand
│   │   └───lib
│   ├───duplexer
│   │   └───test
│   ├───duplexify
│   ├───ee-first
│   ├───ejs
│   │   └───lib
│   ├───electron-to-chromium
│   ├───elliptic
│   │   ├───lib
│   │   │   └───elliptic
│   │   │       ├───curve
│   │   │       ├───ec
│   │   │       ├───eddsa
│   │   │       └───precomputed
│   │   └───node_modules
│   │       └───bn.js
│   │           └───lib
│   ├───emittery
│   ├───emoji-regex
│   │   └───es2015
│   ├───emojis-list
│   ├───encodeurl
│   ├───end-of-stream
│   ├───enhanced-resolve
│   │   ├───lib
│   │   └───node_modules
│   │       └───memory-fs
│   │           └───lib
│   ├───enquirer
│   │   └───lib
│   │       ├───prompts
│   │       └───types
│   ├───entities
│   │   └───lib
│   │       └───maps
│   ├───errno
│   ├───error-ex
│   ├───error-stack-parser
│   │   └───dist
│   ├───es-abstract
│   │   ├───2015
│   │   ├───2016
│   │   ├───2017
│   │   ├───2018
│   │   ├───2019
│   │   ├───2020
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───2021
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───5
│   │   ├───helpers
│   │   └───operations
│   ├───es-to-primitive
│   │   ├───.github
│   │   ├───helpers
│   │   └───test
│   ├───es5-ext
│   │   ├───.github
│   │   ├───array
│   │   │   ├───#
│   │   │   │   ├───@@iterator
│   │   │   │   ├───concat
│   │   │   │   ├───copy-within
│   │   │   │   ├───entries
│   │   │   │   ├───fill
│   │   │   │   ├───filter
│   │   │   │   ├───find
│   │   │   │   ├───find-index
│   │   │   │   ├───keys
│   │   │   │   ├───map
│   │   │   │   ├───slice
│   │   │   │   ├───splice
│   │   │   │   └───values
│   │   │   ├───from
│   │   │   └───of
│   │   ├───boolean
│   │   ├───date
│   │   │   └───#
│   │   ├───error
│   │   │   └───#
│   │   ├───function
│   │   │   └───#
│   │   ├───iterable
│   │   ├───json
│   │   ├───math
│   │   │   ├───acosh
│   │   │   ├───asinh
│   │   │   ├───atanh
│   │   │   ├───cbrt
│   │   │   ├───clz32
│   │   │   ├───cosh
│   │   │   ├───expm1
│   │   │   ├───fround
│   │   │   ├───hypot
│   │   │   ├───imul
│   │   │   ├───log10
│   │   │   ├───log1p
│   │   │   ├───log2
│   │   │   ├───sign
│   │   │   ├───sinh
│   │   │   ├───tanh
│   │   │   └───trunc
│   │   ├───number
│   │   │   ├───#
│   │   │   ├───epsilon
│   │   │   ├───is-finite
│   │   │   ├───is-integer
│   │   │   ├───is-nan
│   │   │   ├───is-safe-integer
│   │   │   ├───max-safe-integer
│   │   │   └───min-safe-integer
│   │   ├───object
│   │   │   ├───assign
│   │   │   ├───entries
│   │   │   ├───keys
│   │   │   └───set-prototype-of
│   │   ├───promise
│   │   │   └───#
│   │   │       └───finally
│   │   ├───reg-exp
│   │   │   └───#
│   │   │       ├───match
│   │   │       ├───replace
│   │   │       ├───search
│   │   │       ├───split
│   │   │       ├───sticky
│   │   │       └───unicode
│   │   ├───string
│   │   │   ├───#
│   │   │   │   ├───@@iterator
│   │   │   │   ├───code-point-at
│   │   │   │   ├───contains
│   │   │   │   ├───ends-with
│   │   │   │   ├───normalize
│   │   │   │   ├───repeat
│   │   │   │   └───starts-with
│   │   │   ├───from-code-point
│   │   │   └───raw
│   │   └───test
│   │       ├───array
│   │       │   ├───#
│   │       │   │   ├───@@iterator
│   │       │   │   ├───concat
│   │       │   │   ├───copy-within
│   │       │   │   ├───entries
│   │       │   │   ├───fill
│   │       │   │   ├───filter
│   │       │   │   ├───find
│   │       │   │   ├───find-index
│   │       │   │   ├───keys
│   │       │   │   ├───map
│   │       │   │   ├───slice
│   │       │   │   ├───splice
│   │       │   │   └───values
│   │       │   ├───from
│   │       │   └───of
│   │       ├───boolean
│   │       ├───date
│   │       │   └───#
│   │       ├───error
│   │       │   └───#
│   │       ├───function
│   │       │   └───#
│   │       ├───iterable
│   │       ├───json
│   │       ├───math
│   │       │   ├───acosh
│   │       │   ├───asinh
│   │       │   ├───atanh
│   │       │   ├───cbrt
│   │       │   ├───clz32
│   │       │   ├───cosh
│   │       │   ├───expm1
│   │       │   ├───fround
│   │       │   ├───hypot
│   │       │   ├───imul
│   │       │   ├───log10
│   │       │   ├───log1p
│   │       │   ├───log2
│   │       │   ├───sign
│   │       │   ├───sinh
│   │       │   ├───tanh
│   │       │   └───trunc
│   │       ├───number
│   │       │   ├───#
│   │       │   ├───epsilon
│   │       │   ├───is-finite
│   │       │   ├───is-integer
│   │       │   ├───is-nan
│   │       │   ├───is-safe-integer
│   │       │   ├───max-safe-integer
│   │       │   └───min-safe-integer
│   │       ├───object
│   │       │   ├───assign
│   │       │   ├───entries
│   │       │   ├───keys
│   │       │   └───set-prototype-of
│   │       ├───promise
│   │       │   └───#
│   │       │       └───finally
│   │       ├───reg-exp
│   │       │   └───#
│   │       │       ├───match
│   │       │       ├───replace
│   │       │       ├───search
│   │       │       ├───split
│   │       │       ├───sticky
│   │       │       └───unicode
│   │       └───string
│   │           ├───#
│   │           │   ├───@@iterator
│   │           │   ├───code-point-at
│   │           │   ├───contains
│   │           │   ├───ends-with
│   │           │   ├───normalize
│   │           │   ├───repeat
│   │           │   └───starts-with
│   │           ├───from-code-point
│   │           └───raw
│   ├───es6-iterator
│   │   ├───#
│   │   └───test
│   │       └───#
│   ├───es6-symbol
│   │   ├───.github
│   │   ├───lib
│   │   │   └───private
│   │   │       └───setup
│   │   └───test
│   ├───escalade
│   │   ├───dist
│   │   └───sync
│   ├───escape-html
│   ├───escape-string-regexp
│   ├───escodegen
│   │   ├───bin
│   │   └───node_modules
│   │       ├───levn
│   │       │   └───lib
│   │       ├───optionator
│   │       │   └───lib
│   │       ├───prelude-ls
│   │       │   └───lib
│   │       ├───source-map
│   │       │   ├───dist
│   │       │   └───lib
│   │       └───type-check
│   │           └───lib
│   ├───eslint
│   │   ├───bin
│   │   ├───conf
│   │   ├───lib
│   │   │   ├───cli-engine
│   │   │   │   └───formatters
│   │   │   ├───config
│   │   │   ├───eslint
│   │   │   ├───init
│   │   │   ├───linter
│   │   │   │   └───code-path-analysis
│   │   │   ├───rule-tester
│   │   │   ├───rules
│   │   │   │   └───utils
│   │   │   │       ├───patterns
│   │   │   │       └───unicode
│   │   │   ├───shared
│   │   │   └───source-code
│   │   │       └───token-store
│   │   ├───messages
│   │   └───node_modules
│   │       ├───@babel
│   │       │   └───code-frame
│   │       │       └───lib
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───escape-string-regexp
│   │       ├───eslint-utils
│   │       │   └───node_modules
│   │       │       └───eslint-visitor-keys
│   │       │           └───lib
│   │       ├───globals
│   │       ├───has-flag
│   │       ├───ignore
│   │       ├───supports-color
│   │       └───type-fest
│   │           ├───source
│   │           └───ts41
│   ├───eslint-config-react-app
│   ├───eslint-import-resolver-node
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───resolve
│   │           ├───example
│   │           ├───lib
│   │           └───test
│   │               ├───dotdot
│   │               │   └───abc
│   │               ├───module_dir
│   │               │   ├───xmodules
│   │               │   │   └───aaa
│   │               │   ├───ymodules
│   │               │   │   └───aaa
│   │               │   └───zmodules
│   │               │       └───bbb
│   │               ├───node_path
│   │               │   ├───x
│   │               │   │   ├───aaa
│   │               │   │   └───ccc
│   │               │   └───y
│   │               │       ├───bbb
│   │               │       └───ccc
│   │               ├───pathfilter
│   │               │   └───deep_ref
│   │               ├───precedence
│   │               │   ├───aaa
│   │               │   └───bbb
│   │               ├───resolver
│   │               │   ├───baz
│   │               │   ├───browser_field
│   │               │   ├───dot_main
│   │               │   ├───dot_slash_main
│   │               │   ├───incorrect_main
│   │               │   ├───invalid_main
│   │               │   ├───multirepo
│   │               │   │   └───packages
│   │               │   │       ├───package-a
│   │               │   │       └───package-b
│   │               │   ├───nested_symlinks
│   │               │   │   └───mylib
│   │               │   ├───other_path
│   │               │   │   └───lib
│   │               │   ├───quux
│   │               │   │   └───foo
│   │               │   ├───same_names
│   │               │   │   └───foo
│   │               │   ├───symlinked
│   │               │   │   ├───package
│   │               │   │   └───_
│   │               │   │       ├───node_modules
│   │               │   │       └───symlink_target
│   │               │   └───without_basedir
│   │               └───shadowed_core
│   │                   └───node_modules
│   │                       └───util
│   ├───eslint-module-utils
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       ├───find-up
│   │       ├───locate-path
│   │       ├───p-limit
│   │       ├───p-locate
│   │       ├───p-try
│   │       └───path-exists
│   ├───eslint-plugin-flowtype
│   │   └───dist
│   │       ├───bin
│   │       ├───configs
│   │       ├───rules
│   │       │   ├───arrayStyle
│   │       │   └───typeColonSpacing
│   │       └───utilities
│   ├───eslint-plugin-import
│   │   ├───config
│   │   ├───docs
│   │   │   └───rules
│   │   ├───lib
│   │   │   ├───core
│   │   │   └───rules
│   │   ├───memo-parser
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       ├───doctrine
│   │       │   └───lib
│   │       ├───ms
│   │       └───resolve
│   │           ├───example
│   │           ├───lib
│   │           └───test
│   │               ├───dotdot
│   │               │   └───abc
│   │               ├───module_dir
│   │               │   ├───xmodules
│   │               │   │   └───aaa
│   │               │   ├───ymodules
│   │               │   │   └───aaa
│   │               │   └───zmodules
│   │               │       └───bbb
│   │               ├───node_path
│   │               │   ├───x
│   │               │   │   ├───aaa
│   │               │   │   └───ccc
│   │               │   └───y
│   │               │       ├───bbb
│   │               │       └───ccc
│   │               ├───pathfilter
│   │               │   └───deep_ref
│   │               ├───precedence
│   │               │   ├───aaa
│   │               │   └───bbb
│   │               ├───resolver
│   │               │   ├───baz
│   │               │   ├───browser_field
│   │               │   ├───dot_main
│   │               │   ├───dot_slash_main
│   │               │   ├───incorrect_main
│   │               │   ├───invalid_main
│   │               │   ├───multirepo
│   │               │   │   └───packages
│   │               │   │       ├───package-a
│   │               │   │       └───package-b
│   │               │   ├───nested_symlinks
│   │               │   │   └───mylib
│   │               │   ├───other_path
│   │               │   │   └───lib
│   │               │   ├───quux
│   │               │   │   └───foo
│   │               │   ├───same_names
│   │               │   │   └───foo
│   │               │   ├───symlinked
│   │               │   │   ├───package
│   │               │   │   └───_
│   │               │   │       ├───node_modules
│   │               │   │       └───symlink_target
│   │               │   └───without_basedir
│   │               └───shadowed_core
│   │                   └───node_modules
│   │                       └───util
│   ├───eslint-plugin-jest
│   │   ├───docs
│   │   │   └───rules
│   │   └───lib
│   │       ├───processors
│   │       └───rules
│   ├───eslint-plugin-jsx-a11y
│   │   ├───docs
│   │   │   └───rules
│   │   ├───lib
│   │   │   ├───rules
│   │   │   └───util
│   │   │       └───implicitRoles
│   │   ├───scripts
│   │   │   └───boilerplate
│   │   ├───__mocks__
│   │   └───__tests__
│   │       ├───src
│   │       │   ├───rules
│   │       │   └───util
│   │       │       └───implicitRoles
│   │       └───__util__
│   ├───eslint-plugin-react
│   │   ├───lib
│   │   │   ├───rules
│   │   │   └───util
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───doctrine
│   │       │   └───lib
│   │       ├───resolve
│   │       │   ├───.github
│   │       │   ├───example
│   │       │   ├───lib
│   │       │   └───test
│   │       │       ├───dotdot
│   │       │       │   └───abc
│   │       │       ├───module_dir
│   │       │       │   ├───xmodules
│   │       │       │   │   └───aaa
│   │       │       │   ├───ymodules
│   │       │       │   │   └───aaa
│   │       │       │   └───zmodules
│   │       │       │       └───bbb
│   │       │       ├───node_path
│   │       │       │   ├───x
│   │       │       │   │   ├───aaa
│   │       │       │   │   └───ccc
│   │       │       │   └───y
│   │       │       │       ├───bbb
│   │       │       │       └───ccc
│   │       │       ├───pathfilter
│   │       │       │   └───deep_ref
│   │       │       ├───precedence
│   │       │       │   ├───aaa
│   │       │       │   └───bbb
│   │       │       ├───resolver
│   │       │       │   ├───baz
│   │       │       │   ├───browser_field
│   │       │       │   ├───dot_main
│   │       │       │   ├───dot_slash_main
│   │       │       │   ├───empty_main
│   │       │       │   ├───incorrect_main
│   │       │       │   ├───invalid_main
│   │       │       │   ├───missing_index
│   │       │       │   ├───missing_main
│   │       │       │   ├───multirepo
│   │       │       │   │   └───packages
│   │       │       │   │       ├───package-a
│   │       │       │   │       └───package-b
│   │       │       │   ├───nested_symlinks
│   │       │       │   │   └───mylib
│   │       │       │   ├───null_main
│   │       │       │   ├───other_path
│   │       │       │   │   └───lib
│   │       │       │   ├───quux
│   │       │       │   │   └───foo
│   │       │       │   ├───same_names
│   │       │       │   │   └───foo
│   │       │       │   ├───symlinked
│   │       │       │   │   ├───package
│   │       │       │   │   └───_
│   │       │       │   │       ├───node_modules
│   │       │       │   │       └───symlink_target
│   │       │       │   └───without_basedir
│   │       │       └───shadowed_core
│   │       │           └───node_modules
│   │       │               └───util
│   │       └───semver
│   │           └───bin
│   ├───eslint-plugin-react-hooks
│   │   └───cjs
│   ├───eslint-plugin-testing-library
│   │   ├───node_modules
│   │   │   ├───@typescript-eslint
│   │   │   │   ├───experimental-utils
│   │   │   │   │   ├───dist
│   │   │   │   │   │   ├───ast-utils
│   │   │   │   │   │   │   └───eslint-utils
│   │   │   │   │   │   ├───eslint-utils
│   │   │   │   │   │   ├───ts-eslint
│   │   │   │   │   │   └───ts-eslint-scope
│   │   │   │   │   └───_ts3.4
│   │   │   │   │       └───dist
│   │   │   │   │           ├───ast-utils
│   │   │   │   │           │   └───eslint-utils
│   │   │   │   │           ├───eslint-utils
│   │   │   │   │           ├───ts-eslint
│   │   │   │   │           └───ts-eslint-scope
│   │   │   │   ├───types
│   │   │   │   │   └───dist
│   │   │   │   ├───typescript-estree
│   │   │   │   │   └───dist
│   │   │   │   │       ├───create-program
│   │   │   │   │       └───ts-estree
│   │   │   │   └───visitor-keys
│   │   │   │       └───dist
│   │   │   ├───eslint-utils
│   │   │   └───eslint-visitor-keys
│   │   │       └───lib
│   │   └───rules
│   ├───eslint-scope
│   │   ├───lib
│   │   └───node_modules
│   │       └───estraverse
│   ├───eslint-utils
│   ├───eslint-visitor-keys
│   │   └───lib
│   ├───eslint-webpack-plugin
│   │   ├───declarations
│   │   ├───dist
│   │   └───node_modules
│   │       └───schema-utils
│   │           ├───declarations
│   │           │   ├───keywords
│   │           │   └───util
│   │           └───dist
│   │               ├───keywords
│   │               └───util
│   ├───espree
│   │   ├───lib
│   │   └───node_modules
│   │       └───eslint-visitor-keys
│   │           └───lib
│   ├───esprima
│   │   ├───bin
│   │   └───dist
│   ├───esquery
│   │   └───dist
│   ├───esrecurse
│   ├───estraverse
│   ├───estree-walker
│   │   ├───dist
│   │   ├───src
│   │   └───types
│   ├───esutils
│   │   └───lib
│   ├───etag
│   ├───eventemitter3
│   │   └───umd
│   ├───events
│   │   ├───.github
│   │   └───tests
│   ├───eventsource
│   │   ├───example
│   │   └───lib
│   ├───evp_bytestokey
│   ├───exec-sh
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   ├───execa
│   │   └───lib
│   ├───exit
│   │   ├───lib
│   │   └───test
│   │       └───fixtures
│   ├───expand-brackets
│   │   ├───lib
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       ├───define-property
│   │       ├───extend-shallow
│   │       ├───is-accessor-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-data-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-descriptor
│   │       ├───is-extendable
│   │       ├───kind-of
│   │       └───ms
│   ├───expect
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───color-convert
│   │       └───color-name
│   ├───express
│   │   ├───lib
│   │   │   ├───middleware
│   │   │   └───router
│   │   └───node_modules
│   │       ├───array-flatten
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───ext
│   │   ├───.github
│   │   ├───docs
│   │   │   ├───function
│   │   │   ├───math
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───string
│   │   │   ├───string_
│   │   │   └───thenable_
│   │   ├───function
│   │   ├───global-this
│   │   ├───lib
│   │   │   └───private
│   │   ├───math
│   │   ├───node_modules
│   │   │   └───type
│   │   │       ├───array
│   │   │       ├───array-length
│   │   │       ├───array-like
│   │   │       ├───date
│   │   │       ├───docs
│   │   │       ├───error
│   │   │       ├───finite
│   │   │       ├───function
│   │   │       ├───integer
│   │   │       ├───iterable
│   │   │       ├───lib
│   │   │       │   └───ensure
│   │   │       ├───map
│   │   │       ├───natural-number
│   │   │       ├───number
│   │   │       ├───object
│   │   │       ├───plain-function
│   │   │       ├───plain-object
│   │   │       ├───promise
│   │   │       ├───prototype
│   │   │       ├───reg-exp
│   │   │       ├───safe-integer
│   │   │       ├───set
│   │   │       ├───string
│   │   │       ├───thenable
│   │   │       ├───time-value
│   │   │       └───value
│   │   ├───object
│   │   │   └───entries
│   │   ├───promise
│   │   ├───string
│   │   ├───string_
│   │   │   └───includes
│   │   ├───test
│   │   │   ├───function
│   │   │   ├───global-this
│   │   │   ├───math
│   │   │   ├───object
│   │   │   │   └───entries
│   │   │   ├───promise
│   │   │   ├───string
│   │   │   ├───string_
│   │   │   │   └───includes
│   │   │   └───thenable_
│   │   └───thenable_
│   ├───extend-shallow
│   ├───extglob
│   │   ├───lib
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───extend-shallow
│   │       └───is-extendable
│   ├───fast-deep-equal
│   │   └───es6
│   ├───fast-glob
│   │   └───out
│   │       ├───managers
│   │       ├───providers
│   │       │   ├───filters
│   │       │   ├───matchers
│   │       │   └───transformers
│   │       ├───readers
│   │       ├───types
│   │       └───utils
│   ├───fast-json-stable-stringify
│   │   ├───.github
│   │   ├───benchmark
│   │   ├───example
│   │   └───test
│   ├───fast-levenshtein
│   ├───fastq
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───faye-websocket
│   │   └───lib
│   │       └───faye
│   │           └───websocket
│   │               └───api
│   ├───fb-watchman
│   ├───figgy-pudding
│   ├───file-entry-cache
│   ├───file-loader
│   │   ├───dist
│   │   └───node_modules
│   │       └───schema-utils
│   │           ├───declarations
│   │           │   ├───keywords
│   │           │   └───util
│   │           └───dist
│   │               ├───keywords
│   │               └───util
│   ├───file-uri-to-path
│   │   └───test
│   ├───filesize
│   │   └───lib
│   ├───fill-range
│   ├───finalhandler
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───find-cache-dir
│   │   └───node_modules
│   │       ├───find-up
│   │       ├───locate-path
│   │       ├───p-locate
│   │       ├───path-exists
│   │       └───pkg-dir
│   ├───find-up
│   ├───flat-cache
│   │   └───src
│   ├───flatted
│   │   ├───.github
│   │   ├───cjs
│   │   ├───esm
│   │   └───php
│   ├───flatten
│   ├───flush-write-stream
│   ├───follow-redirects
│   ├───for-in
│   ├───fork-ts-checker-webpack-plugin
│   │   ├───lib
│   │   │   ├───formatter
│   │   │   ├───issue
│   │   │   │   ├───eslint
│   │   │   │   ├───internal
│   │   │   │   └───typescript
│   │   │   └───types
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───braces
│   │       │   ├───lib
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───fill-range
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───is-extendable
│   │       ├───is-number
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───micromatch
│   │       │   └───lib
│   │       ├───semver
│   │       │   └───bin
│   │       └───to-regex-range
│   ├───form-data
│   │   └───lib
│   ├───forwarded
│   ├───fragment-cache
│   ├───fresh
│   ├───from2
│   ├───fs-extra
│   │   └───lib
│   │       ├───copy
│   │       ├───copy-sync
│   │       ├───empty
│   │       ├───ensure
│   │       ├───fs
│   │       ├───json
│   │       ├───mkdirs
│   │       ├───move
│   │       ├───move-sync
│   │       ├───output
│   │       ├───path-exists
│   │       ├───remove
│   │       └───util
│   ├───fs-minipass
│   ├───fs-write-stream-atomic
│   │   └───test
│   ├───fs.realpath
│   ├───function-bind
│   │   └───test
│   ├───functional-red-black-tree
│   │   ├───bench
│   │   └───test
│   ├───gensync
│   │   └───test
│   ├───get-caller-file
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-own-enumerable-property-symbols
│   │   └───lib
│   ├───get-package-type
│   ├───get-stream
│   ├───get-symbol-description
│   │   ├───.github
│   │   └───test
│   ├───get-value
│   ├───glob
│   ├───glob-parent
│   ├───global-modules
│   ├───global-prefix
│   │   └───node_modules
│   │       ├───.bin
│   │       └───which
│   │           └───bin
│   ├───globals
│   ├───globby
│   ├───graceful-fs
│   ├───growly
│   │   ├───example
│   │   └───lib
│   ├───gzip-size
│   ├───handle-thing
│   │   ├───lib
│   │   └───test
│   ├───harmony-reflect
│   ├───has
│   │   ├───src
│   │   └───test
│   ├───has-bigints
│   │   ├───.github
│   │   └───test
│   ├───has-flag
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-tostringtag
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-value
│   ├───has-values
│   │   └───node_modules
│   │       ├───is-number
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       └───kind-of
│   ├───hash-base
│   │   └───node_modules
│   │       ├───readable-stream
│   │       │   └───lib
│   │       │       └───internal
│   │       │           └───streams
│   │       └───safe-buffer
│   ├───hash.js
│   │   ├───lib
│   │   │   └───hash
│   │   │       └───sha
│   │   └───test
│   ├───he
│   │   ├───bin
│   │   └───man
│   ├───hex-color-regex
│   ├───hmac-drbg
│   │   ├───lib
│   │   └───test
│   │       └───fixtures
│   ├───hoopy
│   ├───hosted-git-info
│   ├───hpack.js
│   │   ├───bin
│   │   ├───lib
│   │   │   └───hpack
│   │   ├───test
│   │   └───tools
│   ├───hsl-regex
│   │   └───test
│   ├───hsla-regex
│   │   └───test
│   ├───html-encoding-sniffer
│   │   └───lib
│   ├───html-entities
│   │   └───lib
│   ├───html-escaper
│   │   ├───cjs
│   │   ├───esm
│   │   └───test
│   ├───html-minifier-terser
│   │   └───src
│   ├───html-webpack-plugin
│   │   ├───lib
│   │   │   ├───webpack4
│   │   │   └───webpack5
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───json5
│   │       │   ├───dist
│   │       │   └───lib
│   │       └───loader-utils
│   │           └───lib
│   ├───htmlparser2
│   │   └───lib
│   ├───http-deceiver
│   │   ├───lib
│   │   └───test
│   ├───http-errors
│   │   └───node_modules
│   │       └───inherits
│   ├───http-parser-js
│   ├───http-proxy
│   │   └───lib
│   │       └───http-proxy
│   │           └───passes
│   ├───http-proxy-agent
│   │   └───dist
│   ├───http-proxy-middleware
│   │   ├───lib
│   │   └───node_modules
│   │       ├───braces
│   │       │   ├───lib
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───fill-range
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───is-extendable
│   │       ├───is-number
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───micromatch
│   │       │   └───lib
│   │       └───to-regex-range
│   ├───https-browserify
│   ├───https-proxy-agent
│   │   └───dist
│   ├───human-signals
│   │   └───build
│   │       └───src
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───icss-utils
│   │   └───lib
│   ├───identity-obj-proxy
│   │   └───src
│   │       ├───test-redirections
│   │       └───__tests__
│   ├───ieee754
│   ├───iferr
│   │   └───test
│   ├───ignore
│   ├───immer
│   │   ├───compat
│   │   │   └───pre-3.7
│   │   │       └───dist
│   │   ├───dist
│   │   │   ├───core
│   │   │   ├───plugins
│   │   │   ├───types
│   │   │   └───utils
│   │   └───src
│   │       ├───core
│   │       ├───plugins
│   │       ├───types
│   │       └───utils
│   ├───import-cwd
│   ├───import-fresh
│   │   └───node_modules
│   │       └───resolve-from
│   ├───import-from
│   │   └───node_modules
│   │       └───resolve-from
│   ├───import-local
│   │   ├───fixtures
│   │   └───node_modules
│   │       └───pkg-dir
│   ├───imurmurhash
│   ├───indent-string
│   ├───indexes-of
│   ├───infer-owner
│   ├───inflight
│   ├───inherits
│   ├───ini
│   ├───internal-ip
│   ├───internal-slot
│   │   ├───.github
│   │   └───test
│   ├───ip
│   │   ├───lib
│   │   └───test
│   ├───ip-regex
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-absolute-url
│   ├───is-accessor-descriptor
│   ├───is-arguments
│   │   ├───.github
│   │   └───test
│   ├───is-arrayish
│   ├───is-bigint
│   │   ├───.github
│   │   └───test
│   ├───is-binary-path
│   ├───is-boolean-object
│   │   ├───.github
│   │   └───test
│   ├───is-buffer
│   │   └───test
│   ├───is-callable
│   │   ├───.github
│   │   └───test
│   ├───is-ci
│   ├───is-color-stop
│   │   ├───lib
│   │   ├───test
│   │   └───util
│   ├───is-core-module
│   │   └───test
│   ├───is-data-descriptor
│   ├───is-date-object
│   │   ├───.github
│   │   └───test
│   ├───is-descriptor
│   ├───is-directory
│   ├───is-docker
│   ├───is-extendable
│   ├───is-extglob
│   ├───is-fullwidth-code-point
│   ├───is-generator-fn
│   ├───is-glob
│   ├───is-module
│   ├───is-negative-zero
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───is-number
│   ├───is-number-object
│   │   ├───.github
│   │   └───test
│   ├───is-obj
│   ├───is-path-cwd
│   ├───is-path-in-cwd
│   ├───is-path-inside
│   ├───is-plain-obj
│   ├───is-plain-object
│   ├───is-potential-custom-element-name
│   ├───is-regex
│   │   └───test
│   ├───is-regexp
│   ├───is-resolvable
│   ├───is-root
│   ├───is-shared-array-buffer
│   │   ├───.github
│   │   └───test
│   ├───is-stream
│   ├───is-string
│   │   ├───.github
│   │   └───test
│   ├───is-symbol
│   │   ├───.github
│   │   └───test
│   ├───is-typedarray
│   ├───is-weakref
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───is-windows
│   ├───is-wsl
│   ├───isarray
│   ├───isexe
│   │   └───test
│   ├───isobject
│   ├───istanbul-lib-coverage
│   │   └───lib
│   ├───istanbul-lib-instrument
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   └───semver
│   │   │       └───bin
│   │   └───src
│   ├───istanbul-lib-report
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───has-flag
│   │       ├───make-dir
│   │       ├───semver
│   │       │   └───bin
│   │       └───supports-color
│   ├───istanbul-lib-source-maps
│   │   ├───lib
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───istanbul-reports
│   │   └───lib
│   │       ├───clover
│   │       ├───cobertura
│   │       ├───html
│   │       │   └───assets
│   │       │       └───vendor
│   │       ├───html-spa
│   │       │   ├───assets
│   │       │   └───src
│   │       ├───json
│   │       ├───json-summary
│   │       ├───lcov
│   │       ├───lcovonly
│   │       ├───none
│   │       ├───teamcity
│   │       ├───text
│   │       ├───text-lcov
│   │       └───text-summary
│   ├───jest
│   │   ├───bin
│   │   └───build
│   ├───jest-changed-files
│   │   └───build
│   ├───jest-circus
│   │   ├───build
│   │   │   └───legacy-code-todo-rewrite
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-cli
│   │   ├───bin
│   │   ├───build
│   │   │   ├───cli
│   │   │   └───init
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-config
│   │   ├───build
│   │   │   └───vendor
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       ├───jest-resolve
│   │       │   └───build
│   │       └───supports-color
│   ├───jest-diff
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-docblock
│   │   └───build
│   ├───jest-each
│   │   ├───build
│   │   │   └───table
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-environment-jsdom
│   │   └───build
│   ├───jest-environment-node
│   │   └───build
│   ├───jest-get-type
│   │   └───build
│   ├───jest-haste-map
│   │   └───build
│   │       ├───crawlers
│   │       └───lib
│   ├───jest-jasmine2
│   │   ├───build
│   │   │   └───jasmine
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-leak-detector
│   │   └───build
│   ├───jest-matcher-utils
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-message-util
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-mock
│   │   └───build
│   ├───jest-pnp-resolver
│   ├───jest-regex-util
│   │   └───build
│   ├───jest-resolve
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-resolve-dependencies
│   │   └───build
│   ├───jest-runner
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       ├───jest-resolve
│   │       │   └───build
│   │       └───supports-color
│   ├───jest-runtime
│   │   ├───bin
│   │   ├───build
│   │   │   └───cli
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       ├───jest-resolve
│   │       │   └───build
│   │       └───supports-color
│   ├───jest-serializer
│   │   └───build
│   ├───jest-snapshot
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       ├───jest-resolve
│   │       │   └───build
│   │       └───supports-color
│   ├───jest-util
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-validate
│   │   ├───build
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-watch-typeahead
│   │   ├───build
│   │   │   ├───file_name_plugin
│   │   │   ├───lib
│   │   │   ├───test_name_plugin
│   │   │   ├───test_utils
│   │   │   └───types
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-watcher
│   │   ├───build
│   │   │   └───lib
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───jest-worker
│   │   ├───build
│   │   │   ├───base
│   │   │   └───workers
│   │   └───node_modules
│   │       ├───has-flag
│   │       └───supports-color
│   ├───js-tokens
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   └───lib
│   │       └───js-yaml
│   │           ├───schema
│   │           └───type
│   │               └───js
│   ├───jsdom
│   │   ├───lib
│   │   │   └───jsdom
│   │   │       ├───browser
│   │   │       │   ├───parser
│   │   │       │   └───resources
│   │   │       ├───level2
│   │   │       ├───level3
│   │   │       └───living
│   │   │           ├───aborting
│   │   │           ├───attributes
│   │   │           ├───constraint-validation
│   │   │           ├───cssom
│   │   │           ├───custom-elements
│   │   │           ├───domparsing
│   │   │           ├───events
│   │   │           ├───fetch
│   │   │           ├───file-api
│   │   │           ├───generated
│   │   │           ├───helpers
│   │   │           │   └───svg
│   │   │           ├───hr-time
│   │   │           ├───mutation-observer
│   │   │           ├───navigator
│   │   │           ├───nodes
│   │   │           ├───range
│   │   │           ├───selection
│   │   │           ├───svg
│   │   │           ├───traversal
│   │   │           ├───websockets
│   │   │           ├───webstorage
│   │   │           ├───window
│   │   │           └───xhr
│   │   └───node_modules
│   │       ├───.bin
│   │       └───acorn
│   │           ├───bin
│   │           └───dist
│   ├───jsesc
│   │   ├───bin
│   │   └───man
│   ├───json-parse-better-errors
│   ├───json-parse-even-better-errors
│   ├───json-schema-traverse
│   │   └───spec
│   │       └───fixtures
│   ├───json-stable-stringify-without-jsonify
│   │   ├───example
│   │   └───test
│   ├───json3
│   │   └───lib
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───jsonfile
│   ├───jsx-ast-utils
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───lib
│   │   │   └───values
│   │   │       └───expressions
│   │   ├───src
│   │   │   └───values
│   │   │       └───expressions
│   │   └───__tests__
│   │       └───src
│   ├───killable
│   ├───kind-of
│   ├───kleur
│   ├───klona
│   │   ├───dist
│   │   ├───full
│   │   ├───json
│   │   └───lite
│   ├───language-subtag-registry
│   │   └───data
│   │       └───json
│   ├───language-tags
│   │   ├───lib
│   │   └───test
│   │       └───lib
│   ├───last-call-webpack-plugin
│   │   └───src
│   ├───leven
│   ├───levn
│   │   └───lib
│   ├───lines-and-columns
│   │   └───dist
│   ├───loader-runner
│   │   └───lib
│   ├───loader-utils
│   │   └───lib
│   ├───locate-path
│   ├───lodash
│   │   └───fp
│   ├───lodash.clonedeep
│   ├───lodash.debounce
│   ├───lodash.memoize
│   ├───lodash.merge
│   ├───lodash.template
│   ├───lodash.templatesettings
│   ├───lodash.truncate
│   ├───lodash.uniq
│   ├───lodash._reinterpolate
│   ├───loglevel
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   │       └───vendor
│   ├───loose-envify
│   ├───lower-case
│   │   ├───dist
│   │   └───dist.es2015
│   ├───lru-cache
│   ├───lz-string
│   │   ├───bin
│   │   ├───libs
│   │   ├───reference
│   │   ├───tests
│   │   │   └───lib
│   │   │       └───jasmine-1.3.1
│   │   └───typings
│   ├───magic-string
│   │   └───dist
│   ├───make-dir
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───makeerror
│   │   └───lib
│   ├───map-cache
│   ├───map-visit
│   ├───md5.js
│   ├───mdn-data
│   │   ├───api
│   │   ├───css
│   │   └───l10n
│   ├───media-typer
│   ├───memory-fs
│   │   └───lib
│   ├───merge-descriptors
│   ├───merge-stream
│   ├───merge2
│   ├───methods
│   ├───microevent.ts
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   ├───micromatch
│   ├───miller-rabin
│   │   ├───bin
│   │   ├───lib
│   │   ├───node_modules
│   │   │   └───bn.js
│   │   │       └───lib
│   │   └───test
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───mimic-fn
│   ├───min-indent
│   ├───mini-css-extract-plugin
│   │   ├───dist
│   │   │   └───hmr
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───json5
│   │       │   ├───dist
│   │       │   └───lib
│   │       ├───loader-utils
│   │       │   └───lib
│   │       └───schema-utils
│   │           └───src
│   ├───minimalistic-assert
│   ├───minimalistic-crypto-utils
│   │   ├───lib
│   │   └───test
│   ├───minimatch
│   ├───minimist
│   │   ├───example
│   │   └───test
│   ├───minipass
│   ├───minipass-collect
│   ├───minipass-flush
│   ├───minipass-pipeline
│   ├───minizlib
│   ├───mississippi
│   ├───mixin-deep
│   ├───mkdirp
│   │   └───bin
│   ├───move-concurrently
│   │   └───node_modules
│   │       ├───.bin
│   │       └───rimraf
│   ├───ms
│   ├───multicast-dns
│   ├───multicast-dns-service-types
│   ├───nan
│   │   ├───doc
│   │   └───tools
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───nanomatch
│   │   └───lib
│   ├───native-url
│   │   ├───dist
│   │   └───third_party
│   ├───natural-compare
│   ├───negotiator
│   │   └───lib
│   ├───neo-async
│   ├───next-tick
│   │   └───test
│   ├───nice-try
│   │   └───src
│   ├───no-case
│   │   ├───dist
│   │   └───dist.es2015
│   ├───node-forge
│   │   ├───dist
│   │   ├───flash
│   │   │   └───swf
│   │   └───lib
│   ├───node-int64
│   ├───node-libs-browser
│   │   ├───mock
│   │   └───node_modules
│   │       └───punycode
│   ├───node-modules-regexp
│   ├───node-notifier
│   │   ├───lib
│   │   ├───notifiers
│   │   └───vendor
│   │       ├───mac.noindex
│   │       │   └───terminal-notifier.app
│   │       │       └───Contents
│   │       │           ├───MacOS
│   │       │           └───Resources
│   │       │               └───en.lproj
│   │       ├───notifu
│   │       └───snoreToast
│   ├───node-releases
│   │   └───data
│   │       ├───processed
│   │       └───release-schedule
│   ├───normalize-package-data
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───normalize-path
│   ├───normalize-range
│   ├───normalize-url
│   ├───npm-run-path
│   ├───nth-check
│   │   └───lib
│   ├───num2fraction
│   ├───nwsapi
│   │   ├───dist
│   │   └───src
│   │       └───modules
│   ├───object-assign
│   ├───object-copy
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───is-accessor-descriptor
│   │       ├───is-data-descriptor
│   │       ├───is-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       └───kind-of
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───object-is
│   │   └───test
│   ├───object-keys
│   │   └───test
│   ├───object-visit
│   ├───object.assign
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───dist
│   │   └───test
│   ├───object.entries
│   │   └───test
│   ├───object.fromentries
│   │   └───test
│   ├───object.getownpropertydescriptors
│   │   └───test
│   ├───object.hasown
│   │   ├───.github
│   │   └───test
│   ├───object.pick
│   ├───object.values
│   │   └───test
│   ├───obuf
│   │   └───test
│   ├───on-finished
│   ├───on-headers
│   ├───once
│   ├───onetime
│   ├───open
│   ├───opn
│   │   └───node_modules
│   │       └───is-wsl
│   ├───optimize-css-assets-webpack-plugin
│   │   ├───src
│   │   └───test
│   │       ├───cases
│   │       │   ├───assetNameRegExp-no-source
│   │       │   │   └───expected
│   │       │   ├───duplicate-css-exists-without-plugin
│   │       │   │   └───expected
│   │       │   ├───only-assetNameRegExp-processed
│   │       │   │   └───expected
│   │       │   └───removes-duplicate-css
│   │       │       └───expected
│   │       ├───util
│   │       └───__snapshots__
│   ├───optionator
│   │   └───lib
│   ├───original
│   ├───os-browserify
│   ├───p-each-series
│   ├───p-finally
│   ├───p-limit
│   ├───p-locate
│   ├───p-map
│   ├───p-retry
│   ├───p-try
│   ├───pako
│   │   ├───dist
│   │   └───lib
│   │       ├───utils
│   │       └───zlib
│   ├───parallel-transform
│   ├───param-case
│   │   ├───dist
│   │   └───dist.es2015
│   ├───parent-module
│   ├───parse-asn1
│   ├───parse-json
│   ├───parse5
│   │   └───lib
│   │       ├───common
│   │       ├───extensions
│   │       │   ├───error-reporting
│   │       │   ├───location-info
│   │       │   └───position-tracking
│   │       ├───parser
│   │       ├───serializer
│   │       ├───tokenizer
│   │       ├───tree-adapters
│   │       └───utils
│   ├───parseurl
│   ├───pascal-case
│   │   ├───dist
│   │   └───dist.es2015
│   ├───pascalcase
│   ├───path-browserify
│   │   └───test
│   ├───path-dirname
│   ├───path-exists
│   ├───path-is-absolute
│   ├───path-is-inside
│   │   └───lib
│   ├───path-key
│   ├───path-parse
│   ├───path-to-regexp
│   ├───path-type
│   ├───pbkdf2
│   │   └───lib
│   ├───performance-now
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   │       └───scripts
│   ├───picocolors
│   ├───picomatch
│   │   └───lib
│   ├───pify
│   ├───pinkie
│   ├───pinkie-promise
│   ├───pirates
│   │   └───lib
│   ├───pkg-dir
│   │   └───node_modules
│   │       ├───find-up
│   │       ├───locate-path
│   │       ├───p-limit
│   │       ├───p-locate
│   │       ├───p-try
│   │       └───path-exists
│   ├───pkg-up
│   │   └───node_modules
│   │       ├───find-up
│   │       ├───locate-path
│   │       ├───p-locate
│   │       └───path-exists
│   ├───pnp-webpack-plugin
│   │   └───fixtures
│   ├───portfinder
│   │   ├───lib
│   │   └───node_modules
│   │       └───debug
│   │           └───src
│   ├───posix-character-classes
│   ├───postcss
│   │   ├───lib
│   │   └───node_modules
│   │       ├───picocolors
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───postcss-attribute-case-insensitive
│   │   ├───dist
│   │   ├───src
│   │   └───test
│   ├───postcss-browser-comments
│   ├───postcss-calc
│   │   └───dist
│   │       └───lib
│   ├───postcss-color-functional-notation
│   ├───postcss-color-gray
│   ├───postcss-color-hex-alpha
│   ├───postcss-color-mod-function
│   ├───postcss-color-rebeccapurple
│   ├───postcss-colormin
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-convert-values
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-custom-media
│   ├───postcss-custom-properties
│   ├───postcss-custom-selectors
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───cssesc
│   │       │   ├───bin
│   │       │   └───man
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               ├───selectors
│   │               └───util
│   ├───postcss-dir-pseudo-class
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───cssesc
│   │       │   ├───bin
│   │       │   └───man
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               ├───selectors
│   │               └───util
│   ├───postcss-discard-comments
│   │   └───dist
│   │       └───lib
│   ├───postcss-discard-duplicates
│   │   └───dist
│   ├───postcss-discard-empty
│   │   └───dist
│   ├───postcss-discard-overridden
│   │   ├───dist
│   │   └───src
│   │       └───__tests__
│   │           └───fixtures
│   ├───postcss-double-position-gradients
│   ├───postcss-env-function
│   ├───postcss-flexbugs-fixes
│   │   └───bugs
│   ├───postcss-focus-visible
│   ├───postcss-focus-within
│   ├───postcss-font-variant
│   ├───postcss-gap-properties
│   ├───postcss-image-set-function
│   ├───postcss-initial
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───.vscode
│   │   ├───lib
│   │   └───~
│   │       └───.config
│   │           └───configstore
│   ├───postcss-lab-function
│   ├───postcss-load-config
│   │   ├───node_modules
│   │   │   ├───cosmiconfig
│   │   │   │   └───dist
│   │   │   ├───import-fresh
│   │   │   ├───parse-json
│   │   │   └───resolve-from
│   │   └───src
│   ├───postcss-loader
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───json5
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   ├───loader-utils
│   │   │   │   └───lib
│   │   │   └───schema-utils
│   │   │       └───src
│   │   └───src
│   ├───postcss-logical
│   ├───postcss-media-minmax
│   ├───postcss-merge-longhand
│   │   ├───dist
│   │   │   └───lib
│   │   │       └───decl
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-merge-rules
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               └───selectors
│   ├───postcss-minify-font-values
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-minify-gradients
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-minify-params
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-minify-selectors
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               └───selectors
│   ├───postcss-modules-extract-imports
│   │   └───src
│   ├───postcss-modules-local-by-default
│   ├───postcss-modules-scope
│   │   └───src
│   ├───postcss-modules-values
│   │   └───src
│   ├───postcss-nesting
│   ├───postcss-normalize
│   ├───postcss-normalize-charset
│   │   └───dist
│   ├───postcss-normalize-display-values
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-positions
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-repeat-style
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-string
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-timing-functions
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-unicode
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-url
│   │   ├───dist
│   │   └───node_modules
│   │       ├───normalize-url
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-normalize-whitespace
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-ordered-values
│   │   ├───dist
│   │   │   ├───lib
│   │   │   └───rules
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-overflow-shorthand
│   ├───postcss-page-break
│   ├───postcss-place
│   ├───postcss-preset-env
│   ├───postcss-pseudo-class-any-link
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───cssesc
│   │       │   ├───bin
│   │       │   └───man
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               ├───selectors
│   │               └───util
│   ├───postcss-reduce-initial
│   │   ├───data
│   │   └───dist
│   ├───postcss-reduce-transforms
│   │   ├───dist
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-replace-overflow-wrap
│   ├───postcss-safe-parser
│   │   ├───lib
│   │   └───node_modules
│   │       └───postcss
│   │           └───lib
│   ├───postcss-selector-matches
│   │   └───dist
│   ├───postcss-selector-not
│   │   └───dist
│   ├───postcss-selector-parser
│   │   └───dist
│   │       ├───selectors
│   │       ├───util
│   │       └───__tests__
│   │           └───util
│   ├───postcss-svgo
│   │   ├───dist
│   │   │   └───lib
│   │   └───node_modules
│   │       └───postcss-value-parser
│   │           └───lib
│   ├───postcss-unique-selectors
│   │   └───dist
│   ├───postcss-value-parser
│   │   └───lib
│   ├───postcss-values-parser
│   │   ├───.github
│   │   ├───lib
│   │   │   └───errors
│   │   └───old-lib
│   ├───prelude-ls
│   │   └───lib
│   ├───prepend-http
│   ├───pretty-bytes
│   ├───pretty-error
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   ├───pretty-format
│   │   ├───build
│   │   │   └───plugins
│   │   │       └───lib
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───color-convert
│   │       └───color-name
│   ├───process
│   ├───process-nextick-args
│   ├───progress
│   │   └───lib
│   ├───promise
│   │   ├───.github
│   │   ├───domains
│   │   ├───lib
│   │   ├───setimmediate
│   │   └───src
│   ├───promise-inflight
│   ├───prompts
│   │   ├───dist
│   │   │   ├───dateparts
│   │   │   ├───elements
│   │   │   └───util
│   │   └───lib
│   │       ├───dateparts
│   │       ├───elements
│   │       └───util
│   ├───prop-types
│   │   ├───lib
│   │   └───node_modules
│   │       └───react-is
│   │           ├───cjs
│   │           └───umd
│   ├───proxy-addr
│   ├───prr
│   ├───psl
│   │   ├───data
│   │   └───dist
│   ├───public-encrypt
│   │   ├───node_modules
│   │   │   └───bn.js
│   │   │       └───lib
│   │   └───test
│   ├───pump
│   ├───pumpify
│   │   └───node_modules
│   │       └───pump
│   ├───punycode
│   ├───q
│   ├───qs
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───query-string
│   ├───querystring
│   ├───querystring-es3
│   │   └───test
│   ├───querystringify
│   ├───queue-microtask
│   ├───raf
│   ├───randombytes
│   ├───randomfill
│   ├───range-parser
│   ├───raw-body
│   │   └───node_modules
│   │       └───bytes
│   ├───react
│   │   ├───cjs
│   │   └───umd
│   ├───react-app-polyfill
│   ├───react-dev-utils
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───@babel
│   │       │   └───code-frame
│   │       │       └───lib
│   │       ├───browserslist
│   │       ├───escape-string-regexp
│   │       ├───globby
│   │       ├───node-releases
│   │       │   ├───.github
│   │       │   │   └───workflows
│   │       │   └───data
│   │       │       ├───processed
│   │       │       ├───raw
│   │       │       └───release-schedule
│   │       └───strip-ansi
│   ├───react-dom
│   │   ├───cjs
│   │   └───umd
│   ├───react-error-overlay
│   │   └───lib
│   ├───react-is
│   │   ├───cjs
│   │   └───umd
│   ├───react-refresh
│   │   └───cjs
│   ├───react-scripts
│   │   ├───bin
│   │   ├───config
│   │   │   └───jest
│   │   ├───lib
│   │   ├───node_modules
│   │   │   └───@babel
│   │   │       └───core
│   │   │           ├───lib
│   │   │           │   ├───config
│   │   │           │   │   ├───files
│   │   │           │   │   ├───helpers
│   │   │           │   │   └───validation
│   │   │           │   ├───gensync-utils
│   │   │           │   ├───parser
│   │   │           │   │   └───util
│   │   │           │   ├───tools
│   │   │           │   └───transformation
│   │   │           │       └───file
│   │   │           ├───node_modules
│   │   │           │   ├───.bin
│   │   │           │   └───semver
│   │   │           │       └───bin
│   │   │           └───src
│   │   │               └───config
│   │   │                   └───files
│   │   ├───scripts
│   │   │   └───utils
│   │   ├───template
│   │   └───template-typescript
│   ├───read-pkg
│   │   └───node_modules
│   │       └───type-fest
│   │           └───source
│   ├───read-pkg-up
│   │   └───node_modules
│   │       └───type-fest
│   │           └───source
│   ├───readable-stream
│   │   ├───doc
│   │   │   └───wg-meetings
│   │   ├───lib
│   │   │   └───internal
│   │   │       └───streams
│   │   └───node_modules
│   │       └───string_decoder
│   │           └───lib
│   ├───readdirp
│   ├───recursive-readdir
│   │   └───test
│   │       ├───testdir
│   │       │   ├───a
│   │       │   └───b
│   │       │       └───b
│   │       ├───testdirBeta
│   │       └───testsymlinks
│   │           └───linkeddir
│   ├───redent
│   ├───regenerate
│   ├───regenerate-unicode-properties
│   │   ├───Binary_Property
│   │   ├───General_Category
│   │   ├───Script
│   │   └───Script_Extensions
│   ├───regenerator-runtime
│   ├───regenerator-transform
│   │   ├───lib
│   │   └───src
│   ├───regex-not
│   ├───regex-parser
│   │   └───lib
│   │       └───typings
│   ├───regexp.prototype.flags
│   │   └───test
│   ├───regexpp
│   ├───regexpu-core
│   │   └───data
│   ├───regjsgen
│   ├───regjsparser
│   │   ├───bin
│   │   └───node_modules
│   │       ├───.bin
│   │       └───jsesc
│   │           ├───bin
│   │           └───man
│   ├───relateurl
│   │   └───lib
│   │       ├───parse
│   │       ├───relate
│   │       └───util
│   ├───remove-trailing-separator
│   ├───renderkid
│   │   ├───docs
│   │   │   └───images
│   │   ├───lib
│   │   │   ├───ansiPainter
│   │   │   ├───layout
│   │   │   │   └───block
│   │   │   │       ├───blockAppendor
│   │   │   │       ├───blockPrependor
│   │   │   │       ├───lineAppendor
│   │   │   │       ├───linePrependor
│   │   │   │       └───lineWrapper
│   │   │   └───renderKid
│   │   │       ├───styleApplier
│   │   │       └───styles
│   │   │           └───rule
│   │   │               └───declarationBlock
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       └───strip-ansi
│   ├───repeat-element
│   ├───repeat-string
│   ├───require-directory
│   ├───require-from-string
│   ├───require-main-filename
│   ├───requires-port
│   ├───resolve
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       ├───dotdot
│   │       │   └───abc
│   │       ├───module_dir
│   │       │   ├───xmodules
│   │       │   │   └───aaa
│   │       │   ├───ymodules
│   │       │   │   └───aaa
│   │       │   └───zmodules
│   │       │       └───bbb
│   │       ├───node_path
│   │       │   ├───x
│   │       │   │   ├───aaa
│   │       │   │   └───ccc
│   │       │   └───y
│   │       │       ├───bbb
│   │       │       └───ccc
│   │       ├───pathfilter
│   │       │   └───deep_ref
│   │       ├───precedence
│   │       │   ├───aaa
│   │       │   └───bbb
│   │       ├───resolver
│   │       │   ├───baz
│   │       │   ├───browser_field
│   │       │   ├───dot_main
│   │       │   ├───dot_slash_main
│   │       │   ├───incorrect_main
│   │       │   ├───invalid_main
│   │       │   ├───multirepo
│   │       │   │   └───packages
│   │       │   │       ├───package-a
│   │       │   │       └───package-b
│   │       │   ├───nested_symlinks
│   │       │   │   └───mylib
│   │       │   ├───other_path
│   │       │   │   └───lib
│   │       │   ├───quux
│   │       │   │   └───foo
│   │       │   ├───same_names
│   │       │   │   └───foo
│   │       │   ├───symlinked
│   │       │   │   ├───package
│   │       │   │   └───_
│   │       │   │       ├───node_modules
│   │       │   │       └───symlink_target
│   │       │   └───without_basedir
│   │       └───shadowed_core
│   │           └───node_modules
│   │               └───util
│   ├───resolve-cwd
│   ├───resolve-from
│   ├───resolve-url
│   │   └───test
│   ├───resolve-url-loader
│   │   ├───lib
│   │   │   └───engine
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───camelcase
│   │       ├───convert-source-map
│   │       ├───emojis-list
│   │       ├───json5
│   │       │   ├───dist
│   │       │   └───lib
│   │       ├───loader-utils
│   │       │   └───lib
│   │       ├───postcss
│   │       │   ├───docs
│   │       │   │   └───guidelines
│   │       │   └───lib
│   │       ├───source-map
│   │       │   ├───dist
│   │       │   └───lib
│   │       └───supports-color
│   ├───ret
│   │   └───lib
│   ├───retry
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       └───integration
│   ├───reusify
│   │   └───benchmarks
│   ├───rework
│   │   └───node_modules
│   │       └───convert-source-map
│   │           ├───example
│   │           └───test
│   │               └───fixtures
│   ├───rework-visit
│   ├───rgb-regex
│   │   └───test
│   ├───rgba-regex
│   │   └───test
│   ├───rimraf
│   ├───ripemd160
│   ├───rollup
│   │   └───dist
│   │       ├───bin
│   │       └───shared
│   ├───rollup-plugin-babel
│   │   ├───dist
│   │   └───src
│   ├───rollup-plugin-terser
│   │   └───node_modules
│   │       ├───jest-worker
│   │       │   └───build
│   │       │       ├───base
│   │       │       └───workers
│   │       ├───serialize-javascript
│   │       │   └───.vscode
│   │       └───supports-color
│   ├───rollup-pluginutils
│   │   ├───dist
│   │   ├───node_modules
│   │   │   └───estree-walker
│   │   │       ├───dist
│   │   │       └───src
│   │   └───src
│   │       └───utils
│   ├───rsvp
│   │   ├───dist
│   │   │   └───es6
│   │   └───lib
│   │       └───rsvp
│   │           └───promise
│   ├───run-parallel
│   ├───run-queue
│   ├───safe-buffer
│   ├───safe-regex
│   │   ├───example
│   │   └───test
│   ├───safer-buffer
│   ├───sane
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───anymatch
│   │   │   ├───braces
│   │   │   │   ├───lib
│   │   │   │   └───node_modules
│   │   │   │       └───extend-shallow
│   │   │   ├───cross-spawn
│   │   │   │   └───lib
│   │   │   │       └───util
│   │   │   ├───execa
│   │   │   │   └───lib
│   │   │   ├───fill-range
│   │   │   │   └───node_modules
│   │   │   │       └───extend-shallow
│   │   │   ├───get-stream
│   │   │   ├───is-extendable
│   │   │   ├───is-number
│   │   │   │   └───node_modules
│   │   │   │       └───kind-of
│   │   │   ├───is-stream
│   │   │   ├───micromatch
│   │   │   │   └───lib
│   │   │   ├───normalize-path
│   │   │   ├───npm-run-path
│   │   │   ├───path-key
│   │   │   ├───semver
│   │   │   │   └───bin
│   │   │   ├───shebang-command
│   │   │   ├───shebang-regex
│   │   │   ├───to-regex-range
│   │   │   └───which
│   │   │       └───bin
│   │   └───src
│   │       └───utils
│   ├───sanitize.css
│   ├───sass-loader
│   │   ├───dist
│   │   └───node_modules
│   │       └───schema-utils
│   │           ├───declarations
│   │           │   ├───keywords
│   │           │   └───util
│   │           └───dist
│   │               ├───keywords
│   │               └───util
│   ├───sax
│   │   └───lib
│   ├───saxes
│   ├───scheduler
│   │   ├───cjs
│   │   └───umd
│   ├───schema-utils
│   │   ├───declarations
│   │   │   ├───keywords
│   │   │   └───util
│   │   └───dist
│   │       ├───keywords
│   │       └───util
│   ├───select-hose
│   │   ├───lib
│   │   └───test
│   ├───selfsigned
│   │   └───test
│   ├───semver
│   │   ├───bin
│   │   ├───classes
│   │   ├───functions
│   │   ├───internal
│   │   └───ranges
│   ├───send
│   │   └───node_modules
│   │       ├───debug
│   │       │   ├───node_modules
│   │       │   │   └───ms
│   │       │   └───src
│   │       └───ms
│   ├───serialize-javascript
│   ├───serve-index
│   │   ├───node_modules
│   │   │   ├───debug
│   │   │   │   └───src
│   │   │   ├───http-errors
│   │   │   ├───inherits
│   │   │   ├───ms
│   │   │   └───setprototypeof
│   │   └───public
│   │       └───icons
│   ├───serve-static
│   ├───set-blocking
│   ├───set-value
│   │   └───node_modules
│   │       ├───extend-shallow
│   │       └───is-extendable
│   ├───setimmediate
│   ├───setprototypeof
│   │   └───test
│   ├───sha.js
│   │   └───test
│   ├───shebang-command
│   ├───shebang-regex
│   ├───shell-quote
│   │   ├───example
│   │   └───test
│   ├───shellwords
│   │   └───lib
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───signal-exit
│   ├───simple-swizzle
│   │   └───node_modules
│   │       └───is-arrayish
│   ├───sisteransi
│   │   └───src
│   ├───slash
│   ├───slice-ansi
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───color-convert
│   │       └───color-name
│   ├───snapdragon
│   │   ├───lib
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       ├───define-property
│   │       ├───extend-shallow
│   │       ├───is-accessor-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-data-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-descriptor
│   │       ├───is-extendable
│   │       ├───kind-of
│   │       └───ms
│   ├───snapdragon-node
│   │   └───node_modules
│   │       └───define-property
│   ├───snapdragon-util
│   │   └───node_modules
│   │       └───kind-of
│   ├───sockjs
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───uuid
│   │           ├───bin
│   │           └───lib
│   ├───sockjs-client
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───event
│   │   │   ├───transport
│   │   │   │   ├───browser
│   │   │   │   ├───driver
│   │   │   │   ├───lib
│   │   │   │   ├───receiver
│   │   │   │   └───sender
│   │   │   └───utils
│   │   └───node_modules
│   │       └───debug
│   │           └───src
│   ├───sort-keys
│   ├───source-list-map
│   │   └───lib
│   ├───source-map
│   │   ├───dist
│   │   └───lib
│   ├───source-map-js
│   │   ├───dist
│   │   └───lib
│   ├───source-map-resolve
│   │   └───lib
│   ├───source-map-support
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───source-map-url
│   ├───sourcemap-codec
│   │   └───dist
│   │       └───types
│   ├───spdx-correct
│   ├───spdx-exceptions
│   ├───spdx-expression-parse
│   ├───spdx-license-ids
│   ├───spdy
│   │   ├───lib
│   │   │   └───spdy
│   │   └───test
│   ├───spdy-transport
│   │   ├───lib
│   │   │   └───spdy-transport
│   │   │       └───protocol
│   │   │           ├───base
│   │   │           ├───http2
│   │   │           └───spdy
│   │   └───node_modules
│   │       └───readable-stream
│   │           └───lib
│   │               └───internal
│   │                   └───streams
│   ├───split-string
│   ├───sprintf-js
│   │   ├───demo
│   │   ├───dist
│   │   ├───src
│   │   └───test
│   ├───ssri
│   ├───stable
│   ├───stack-utils
│   │   └───node_modules
│   │       └───escape-string-regexp
│   ├───stackframe
│   │   └───dist
│   ├───static-extend
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───is-accessor-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-data-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-descriptor
│   │       └───kind-of
│   ├───statuses
│   ├───stream-browserify
│   │   └───test
│   ├───stream-each
│   ├───stream-http
│   │   ├───lib
│   │   └───test
│   │       ├───browser
│   │       │   └───lib
│   │       ├───node
│   │       └───server
│   │           └───static
│   ├───stream-shift
│   ├───strict-uri-encode
│   ├───string-length
│   ├───string-natural-compare
│   ├───string-width
│   │   └───node_modules
│   │       └───emoji-regex
│   │           └───es2015
│   ├───string.prototype.matchall
│   │   ├───.github
│   │   └───test
│   ├───string.prototype.trimend
│   │   └───test
│   ├───string.prototype.trimstart
│   │   └───test
│   ├───stringify-object
│   ├───string_decoder
│   │   ├───lib
│   │   └───node_modules
│   │       └───safe-buffer
│   ├───strip-ansi
│   ├───strip-bom
│   ├───strip-comments
│   ├───strip-eof
│   ├───strip-final-newline
│   ├───strip-indent
│   ├───strip-json-comments
│   ├───style-loader
│   │   └───dist
│   │       └───runtime
│   ├───stylehacks
│   │   ├───dist
│   │   │   ├───dictionary
│   │   │   └───plugins
│   │   └───node_modules
│   │       └───postcss-selector-parser
│   │           └───dist
│   │               └───selectors
│   ├───supports-color
│   ├───supports-hyperlinks
│   │   └───node_modules
│   │       ├───has-flag
│   │       └───supports-color
│   ├───svg-parser
│   │   └───dist
│   ├───svgo
│   │   ├───bin
│   │   ├───lib
│   │   │   └───svgo
│   │   ├───node_modules
│   │   │   ├───css-select
│   │   │   │   └───lib
│   │   │   ├───css-what
│   │   │   │   └───lib
│   │   │   ├───dom-serializer
│   │   │   ├───domutils
│   │   │   │   ├───lib
│   │   │   │   ├───node_modules
│   │   │   │   │   └───domelementtype
│   │   │   │   └───test
│   │   │   │       └───tests
│   │   │   └───nth-check
│   │   └───plugins
│   ├───symbol-tree
│   │   └───lib
│   ├───table
│   │   ├───dist
│   │   │   ├───generated
│   │   │   └───types
│   │   └───node_modules
│   │       ├───ajv
│   │       │   ├───dist
│   │       │   │   ├───compile
│   │       │   │   │   ├───codegen
│   │       │   │   │   ├───jtd
│   │       │   │   │   └───validate
│   │       │   │   ├───refs
│   │       │   │   │   ├───json-schema-2019-09
│   │       │   │   │   │   └───meta
│   │       │   │   │   └───json-schema-2020-12
│   │       │   │   │       └───meta
│   │       │   │   ├───runtime
│   │       │   │   ├───standalone
│   │       │   │   ├───types
│   │       │   │   └───vocabularies
│   │       │   │       ├───applicator
│   │       │   │       ├───core
│   │       │   │       ├───discriminator
│   │       │   │       ├───dynamic
│   │       │   │       ├───format
│   │       │   │       ├───jtd
│   │       │   │       ├───unevaluated
│   │       │   │       └───validation
│   │       │   └───lib
│   │       │       ├───compile
│   │       │       │   ├───codegen
│   │       │       │   ├───jtd
│   │       │       │   └───validate
│   │       │       ├───refs
│   │       │       │   ├───json-schema-2019-09
│   │       │       │   │   └───meta
│   │       │       │   └───json-schema-2020-12
│   │       │       │       └───meta
│   │       │       ├───runtime
│   │       │       ├───standalone
│   │       │       ├───types
│   │       │       └───vocabularies
│   │       │           ├───applicator
│   │       │           ├───core
│   │       │           ├───discriminator
│   │       │           ├───dynamic
│   │       │           ├───format
│   │       │           ├───jtd
│   │       │           ├───unevaluated
│   │       │           └───validation
│   │       └───json-schema-traverse
│   │           ├───.github
│   │           │   └───workflows
│   │           └───spec
│   │               └───fixtures
│   ├───tapable
│   │   └───lib
│   ├───tar
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───mkdirp
│   │           ├───bin
│   │           └───lib
│   ├───temp-dir
│   ├───tempy
│   │   └───node_modules
│   │       └───type-fest
│   │           └───source
│   ├───terminal-link
│   ├───terser
│   │   ├───bin
│   │   ├───dist
│   │   ├───node_modules
│   │   │   ├───commander
│   │   │   │   └───typings
│   │   │   └───source-map
│   │   │       ├───dist
│   │   │       └───lib
│   │   └───tools
│   ├───terser-webpack-plugin
│   │   ├───dist
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───commander
│   │       │   └───typings
│   │       ├───find-cache-dir
│   │       ├───make-dir
│   │       ├───p-limit
│   │       ├───pkg-dir
│   │       ├───schema-utils
│   │       │   ├───declarations
│   │       │   │   ├───keywords
│   │       │   │   └───util
│   │       │   └───dist
│   │       │       ├───keywords
│   │       │       └───util
│   │       ├───semver
│   │       │   └───bin
│   │       ├───source-map
│   │       │   ├───dist
│   │       │   └───lib
│   │       └───terser
│   │           ├───bin
│   │           ├───dist
│   │           ├───lib
│   │           │   ├───compress
│   │           │   └───utils
│   │           ├───node_modules
│   │           │   └───source-map
│   │           │       ├───dist
│   │           │       └───lib
│   │           └───tools
│   ├───test-exclude
│   ├───text-table
│   │   ├───example
│   │   └───test
│   ├───throat
│   ├───through2
│   ├───thunky
│   ├───timers-browserify
│   ├───timsort
│   │   ├───build
│   │   └───src
│   ├───tmpl
│   │   └───lib
│   ├───to-arraybuffer
│   ├───to-fast-properties
│   ├───to-object-path
│   │   └───node_modules
│   │       └───kind-of
│   ├───to-regex
│   ├───to-regex-range
│   ├───toidentifier
│   ├───tough-cookie
│   │   ├───lib
│   │   └───node_modules
│   │       └───universalify
│   ├───tr46
│   │   └───lib
│   ├───tryer
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   ├───ts-pnp
│   ├───tsconfig-paths
│   │   ├───lib
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───json5
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   └───strip-bom
│   │   └───src
│   ├───tslib
│   │   └───modules
│   ├───tsutils
│   │   ├───node_modules
│   │   │   └───tslib
│   │   │       ├───modules
│   │   │       └───test
│   │   │           └───validateModuleExportsMatchCommonJS
│   │   ├───typeguard
│   │   │   ├───2.8
│   │   │   ├───2.9
│   │   │   ├───3.0
│   │   │   ├───3.2
│   │   │   └───next
│   │   └───util
│   ├───tty-browserify
│   ├───type
│   │   ├───array
│   │   ├───array-length
│   │   ├───array-like
│   │   ├───date
│   │   ├───error
│   │   ├───finite
│   │   ├───function
│   │   ├───integer
│   │   ├───iterable
│   │   ├───lib
│   │   ├───natural-number
│   │   ├───number
│   │   ├───object
│   │   ├───plain-function
│   │   ├───plain-object
│   │   ├───promise
│   │   ├───prototype
│   │   ├───reg-exp
│   │   ├───safe-integer
│   │   ├───string
│   │   ├───test
│   │   │   ├───array
│   │   │   ├───array-length
│   │   │   ├───array-like
│   │   │   ├───date
│   │   │   ├───error
│   │   │   ├───finite
│   │   │   ├───function
│   │   │   ├───integer
│   │   │   ├───iterable
│   │   │   ├───lib
│   │   │   ├───natural-number
│   │   │   ├───number
│   │   │   ├───object
│   │   │   ├───plain-function
│   │   │   ├───plain-object
│   │   │   ├───promise
│   │   │   ├───prototype
│   │   │   ├───reg-exp
│   │   │   ├───safe-integer
│   │   │   ├───string
│   │   │   ├───thenable
│   │   │   ├───time-value
│   │   │   ├───value
│   │   │   └───_lib
│   │   ├───thenable
│   │   ├───time-value
│   │   └───value
│   ├───type-check
│   │   └───lib
│   ├───type-detect
│   ├───type-fest
│   │   ├───source
│   │   └───ts41
│   ├───type-is
│   ├───typedarray
│   │   ├───example
│   │   └───test
│   │       └───server
│   ├───typedarray-to-buffer
│   │   └───test
│   ├───typescript
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───cs
│   │   │   ├───de
│   │   │   ├───es
│   │   │   ├───fr
│   │   │   ├───it
│   │   │   ├───ja
│   │   │   ├───ko
│   │   │   ├───pl
│   │   │   ├───pt-br
│   │   │   ├───ru
│   │   │   ├───tr
│   │   │   ├───zh-cn
│   │   │   └───zh-tw
│   │   └───loc
│   │       └───lcl
│   │           ├───CHS
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───CHT
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───CSY
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───DEU
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───ESN
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───FRA
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───ITA
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───JPN
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───KOR
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───PLK
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───PTB
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───RUS
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           └───TRK
│   │               ├───Targets
│   │               ├───TypeScriptDebugEngine
│   │               ├───TypeScriptLanguageService
│   │               └───TypeScriptTasks
│   ├───unbox-primitive
│   │   ├───.github
│   │   └───test
│   ├───unicode-canonical-property-names-ecmascript
│   ├───unicode-match-property-ecmascript
│   ├───unicode-match-property-value-ecmascript
│   │   └───data
│   ├───unicode-property-aliases-ecmascript
│   ├───union-value
│   │   └───node_modules
│   │       └───is-extendable
│   ├───uniq
│   │   └───test
│   ├───uniqs
│   ├───unique-filename
│   │   ├───.nyc_output
│   │   ├───coverage
│   │   │   └───__root__
│   │   └───test
│   ├───unique-slug
│   │   └───test
│   ├───unique-string
│   ├───universalify
│   ├───unpipe
│   ├───unquote
│   ├───unset-value
│   │   └───node_modules
│   │       ├───has-value
│   │       │   └───node_modules
│   │       │       └───isobject
│   │       └───has-values
│   ├───upath
│   │   └───build
│   │       └───code
│   ├───uri-js
│   │   └───dist
│   │       ├───es5
│   │       └───esnext
│   │           └───schemes
│   ├───urix
│   │   └───test
│   ├───url
│   │   └───node_modules
│   │       ├───punycode
│   │       └───querystring
│   │           └───test
│   ├───url-loader
│   │   ├───dist
│   │   │   └───utils
│   │   └───node_modules
│   │       └───schema-utils
│   │           ├───declarations
│   │           │   ├───keywords
│   │           │   └───util
│   │           └───dist
│   │               ├───keywords
│   │               └───util
│   ├───url-parse
│   │   └───dist
│   ├───use
│   ├───util
│   │   ├───node_modules
│   │   │   └───inherits
│   │   └───support
│   ├───util-deprecate
│   ├───util.promisify
│   ├───utila
│   │   ├───lib
│   │   └───test
│   ├───utils-merge
│   ├───uuid
│   │   └───dist
│   │       ├───bin
│   │       ├───esm-browser
│   │       ├───esm-node
│   │       └───umd
│   ├───v8-compile-cache
│   ├───v8-to-istanbul
│   │   ├───lib
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───validate-npm-package-license
│   ├───vary
│   ├───vendors
│   ├───vm-browserify
│   │   ├───.github
│   │   ├───example
│   │   │   └───run
│   │   └───test
│   ├───w3c-hr-time
│   │   └───lib
│   ├───w3c-xmlserializer
│   │   └───lib
│   ├───walker
│   │   └───lib
│   ├───watchpack
│   │   └───lib
│   ├───watchpack-chokidar2
│   │   └───node_modules
│   │       ├───anymatch
│   │       │   └───node_modules
│   │       │       └───normalize-path
│   │       ├───binary-extensions
│   │       ├───braces
│   │       │   ├───lib
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───chokidar
│   │       │   ├───lib
│   │       │   └───types
│   │       ├───fill-range
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───glob-parent
│   │       │   └───node_modules
│   │       │       └───is-glob
│   │       ├───is-binary-path
│   │       ├───is-extendable
│   │       ├───is-number
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───micromatch
│   │       │   └───lib
│   │       ├───readdirp
│   │       └───to-regex-range
│   ├───wbuf
│   │   └───test
│   ├───web-vitals
│   │   ├───dist
│   │   │   └───modules
│   │   │       └───lib
│   │   │           └───polyfills
│   │   └───src
│   │       └───lib
│   │           └───polyfills
│   ├───webidl-conversions
│   │   └───lib
│   ├───webpack
│   │   ├───bin
│   │   ├───buildin
│   │   ├───declarations
│   │   │   └───plugins
│   │   │       ├───debug
│   │   │       └───optimize
│   │   ├───hot
│   │   ├───lib
│   │   │   ├───debug
│   │   │   ├───dependencies
│   │   │   ├───logging
│   │   │   ├───node
│   │   │   ├───optimize
│   │   │   ├───performance
│   │   │   ├───util
│   │   │   ├───wasm
│   │   │   ├───web
│   │   │   └───webworker
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───acorn
│   │   │   │   ├───bin
│   │   │   │   └───dist
│   │   │   ├───braces
│   │   │   │   ├───lib
│   │   │   │   └───node_modules
│   │   │   │       └───extend-shallow
│   │   │   ├───cacache
│   │   │   │   ├───lib
│   │   │   │   │   ├───content
│   │   │   │   │   └───util
│   │   │   │   └───locales
│   │   │   ├───chownr
│   │   │   ├───eslint-scope
│   │   │   │   └───lib
│   │   │   ├───estraverse
│   │   │   ├───fill-range
│   │   │   │   └───node_modules
│   │   │   │       └───extend-shallow
│   │   │   ├───is-extendable
│   │   │   ├───is-number
│   │   │   │   └───node_modules
│   │   │   │       └───kind-of
│   │   │   ├───is-wsl
│   │   │   ├───json5
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   ├───loader-utils
│   │   │   │   └───lib
│   │   │   ├───lru-cache
│   │   │   ├───micromatch
│   │   │   │   └───lib
│   │   │   ├───rimraf
│   │   │   ├───schema-utils
│   │   │   │   └───src
│   │   │   ├───serialize-javascript
│   │   │   │   └───.vscode
│   │   │   ├───source-map
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   ├───ssri
│   │   │   ├───terser-webpack-plugin
│   │   │   │   └───dist
│   │   │   ├───to-regex-range
│   │   │   └───yallist
│   │   ├───schemas
│   │   │   └───plugins
│   │   │       ├───debug
│   │   │       └───optimize
│   │   └───web_modules
│   ├───webpack-dev-middleware
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───mime
│   │           └───types
│   ├───webpack-dev-server
│   │   ├───bin
│   │   ├───client
│   │   │   ├───clients
│   │   │   └───utils
│   │   ├───lib
│   │   │   ├───servers
│   │   │   └───utils
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───ansi-regex
│   │   │   ├───anymatch
│   │   │   │   └───node_modules
│   │   │   │       └───normalize-path
│   │   │   ├───binary-extensions
│   │   │   ├───braces
│   │   │   │   ├───lib
│   │   │   │   └───node_modules
│   │   │   │       └───extend-shallow
│   │   │   ├───camelcase
│   │   │   ├───chokidar
│   │   │   │   ├───lib
│   │   │   │   └───types
│   │   │   ├───cliui
│   │   │   │   └───node_modules
│   │   │   │       ├───ansi-regex
│   │   │   │       └───strip-ansi
│   │   │   ├───emoji-regex
│   │   │   │   └───es2015
│   │   │   ├───fill-range
│   │   │   │   └───node_modules
│   │   │   │       └───extend-shallow
│   │   │   ├───find-up
│   │   │   ├───glob-parent
│   │   │   │   └───node_modules
│   │   │   │       └───is-glob
│   │   │   ├───import-local
│   │   │   │   └───fixtures
│   │   │   ├───is-absolute-url
│   │   │   ├───is-binary-path
│   │   │   ├───is-extendable
│   │   │   ├───is-fullwidth-code-point
│   │   │   ├───is-number
│   │   │   │   └───node_modules
│   │   │   │       └───kind-of
│   │   │   ├───locate-path
│   │   │   ├───micromatch
│   │   │   │   └───lib
│   │   │   ├───p-locate
│   │   │   ├───path-exists
│   │   │   ├───pkg-dir
│   │   │   ├───readdirp
│   │   │   ├───resolve-cwd
│   │   │   ├───resolve-from
│   │   │   ├───schema-utils
│   │   │   │   └───src
│   │   │   ├───semver
│   │   │   │   └───bin
│   │   │   ├───string-width
│   │   │   │   └───node_modules
│   │   │   │       ├───ansi-regex
│   │   │   │       └───strip-ansi
│   │   │   ├───strip-ansi
│   │   │   ├───supports-color
│   │   │   ├───to-regex-range
│   │   │   ├───wrap-ansi
│   │   │   │   └───node_modules
│   │   │   │       ├───ansi-regex
│   │   │   │       └───strip-ansi
│   │   │   ├───ws
│   │   │   │   └───lib
│   │   │   ├───yargs
│   │   │   │   ├───lib
│   │   │   │   └───locales
│   │   │   └───yargs-parser
│   │   │       └───lib
│   │   └───ssl
│   ├───webpack-log
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───ansi-colors
│   │   │   │   └───types
│   │   │   └───uuid
│   │   │       ├───bin
│   │   │       └───lib
│   │   └───src
│   │       └───loglevel
│   ├───webpack-manifest-plugin
│   │   ├───lib
│   │   └───node_modules
│   │       ├───fs-extra
│   │       │   └───lib
│   │       │       ├───copy
│   │       │       ├───copy-sync
│   │       │       ├───empty
│   │       │       ├───ensure
│   │       │       ├───fs
│   │       │       ├───json
│   │       │       ├───mkdirs
│   │       │       ├───move
│   │       │       ├───move-sync
│   │       │       ├───output
│   │       │       ├───path-exists
│   │       │       ├───remove
│   │       │       └───util
│   │       ├───jsonfile
│   │       └───universalify
│   ├───webpack-sources
│   │   ├───lib
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───websocket-driver
│   │   └───lib
│   │       └───websocket
│   │           └───driver
│   │               └───hybi
│   ├───websocket-extensions
│   │   └───lib
│   │       └───pipeline
│   ├───whatwg-encoding
│   │   └───lib
│   ├───whatwg-fetch
│   │   └───dist
│   ├───whatwg-mimetype
│   │   └───lib
│   ├───whatwg-url
│   │   └───dist
│   ├───which
│   │   └───bin
│   ├───which-boxed-primitive
│   │   ├───.github
│   │   └───test
│   ├───which-module
│   ├───word-wrap
│   ├───workbox-background-sync
│   │   ├───build
│   │   ├───lib
│   │   └───src
│   │       └───lib
│   ├───workbox-broadcast-update
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-build
│   │   ├───build
│   │   │   ├───lib
│   │   │   ├───options
│   │   │   │   ├───objects
│   │   │   │   ├───partials
│   │   │   │   └───schema
│   │   │   └───templates
│   │   ├───node_modules
│   │   │   ├───fs-extra
│   │   │   │   └───lib
│   │   │   │       ├───copy
│   │   │   │       ├───copy-sync
│   │   │   │       ├───empty
│   │   │   │       ├───ensure
│   │   │   │       ├───fs
│   │   │   │       ├───json
│   │   │   │       ├───mkdirs
│   │   │   │       ├───move
│   │   │   │       ├───move-sync
│   │   │   │       ├───output
│   │   │   │       ├───path-exists
│   │   │   │       ├───remove
│   │   │   │       └───util
│   │   │   ├───jsonfile
│   │   │   ├───source-map
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   └───universalify
│   │   └───src
│   │       ├───lib
│   │       ├───options
│   │       │   ├───objects
│   │       │   ├───partials
│   │       │   └───schema
│   │       └───templates
│   ├───workbox-cacheable-response
│   │   ├───build
│   │   └───src
│   ├───workbox-core
│   │   ├───build
│   │   ├───models
│   │   │   └───messages
│   │   ├───src
│   │   │   ├───models
│   │   │   │   └───messages
│   │   │   ├───utils
│   │   │   └───_private
│   │   ├───utils
│   │   └───_private
│   ├───workbox-expiration
│   │   ├───build
│   │   ├───models
│   │   └───src
│   │       └───models
│   ├───workbox-google-analytics
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-navigation-preload
│   │   ├───build
│   │   └───src
│   ├───workbox-precaching
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-range-requests
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-routing
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-strategies
│   │   ├───build
│   │   ├───plugins
│   │   ├───src
│   │   │   ├───plugins
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-streams
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───workbox-sw
│   │   ├───build
│   │   └───controllers
│   ├───workbox-webpack-plugin
│   │   └───build
│   │       └───lib
│   ├───workbox-window
│   │   ├───build
│   │   ├───src
│   │   │   └───utils
│   │   └───utils
│   ├───worker-farm
│   │   ├───examples
│   │   │   ├───basic
│   │   │   └───pi
│   │   ├───lib
│   │   │   └───child
│   │   └───tests
│   ├───worker-rpc
│   │   ├───lib
│   │   ├───src
│   │   └───test
│   ├───wrap-ansi
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───color-convert
│   │       └───color-name
│   ├───wrappy
│   ├───write-file-atomic
│   ├───ws
│   │   └───lib
│   ├───xml-name-validator
│   │   └───lib
│   ├───xmlchars
│   │   ├───xml
│   │   │   ├───1.0
│   │   │   └───1.1
│   │   └───xmlns
│   │       └───1.0
│   ├───xtend
│   ├───y18n
│   ├───yallist
│   ├───yaml
│   │   ├───browser
│   │   │   ├───dist
│   │   │   └───types
│   │   ├───dist
│   │   └───types
│   ├───yargs
│   │   ├───build
│   │   │   └───lib
│   │   └───locales
│   ├───yargs-parser
│   │   ├───lib
│   │   └───node_modules
│   │       └───camelcase
│   └───yocto-queue
├───public
└───src
    ├───assets
    └───parts
    `;


export default tree;