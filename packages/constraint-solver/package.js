Package.describe({
  summary: "Given the set of the constraints, picks a satisfying configuration",
  version: "1.0.16"
});

Npm.depends({
  'mori': '0.2.6'
});

Package.onUse(function (api) {
  api.export('ConstraintSolver');
  api.use(['underscore', 'ejson', 'check', 'package-version-parser',
           'binary-heap', 'random'], 'server');
  api.addFiles(['constraint-solver.js', 'resolver.js', 'constraints-list.js',
                 'resolver-state.js', 'priority-queue.js'], ['server']);
});

Package.onTest(function (api) {
  api.use('constraint-solver', ['server']);
  api.use(['tinytest', 'minimongo', 'package-version-parser']);
  // data for big benchmarky tests
  api.addFiles('test-data.js', ['server']);
  api.addFiles('constraint-solver-tests.js', ['server']);
  api.addFiles('benchmark-tests.js', ['server']);
  api.addFiles('resolver-tests.js', ['server']);
  api.use('underscore');
});
