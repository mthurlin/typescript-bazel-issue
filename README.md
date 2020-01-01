Combining ts_library / nodejs_binary / npm_package_bin does not work as expected

I'm not sure if I'm doing something wrong, or if there is an issue in either `nodejs_binary` or `npm_package_bin`.

I'm trying to run a TypeScript script as part of my build.
So, what I want to do is to transpile (and typecheck) a couple of TypeScript files to JavaScript. 
Then, I want to run these files as a build script (providing some input files and accessing the resulting output files).

In this repo, I have a minimal repro of the issue.

The two typescript files form my build script (reading the text in the input file and outputting it in upper case into the output file).

Running it through `nodejs_binary` works as expected:

```bazel run //:compile -- `pwd`/data.txt `pwd`/output.txt && cat output.txt```

But, running it programmatically via Bazel and `npm_package_bin` fails:

`bazel build //:output`

The files are being run as raw TypeScript, causing syntax errors in node.

I have tried various combinations of entry files and filegroups. 

I can get it to work using a `filegroup` with `output_group="es5_sources"`, providing the filegroup label as `entry_point` to `nodejs_binary`, but that only works as long as there is only one file. (That's why I have `utils.ts` in this minimal repro)
