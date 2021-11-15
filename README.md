# Compressing ABI files for Dist

## Test Results

> 52 files, sourced from SushiSwap Frontend (2021.11.13)

```sh
$ ./test-1.sh
```
```sh 
 Initial size:     2953 bytes  (compare/abi.json)
 Minified size:     2177 bytes  (compare/dist.json)
 Gzipped size:      378 bytes
```
```sh
$ ./test-all.sh
```

```sh 
 Initial size:   378661 bytes  (source/*.json)
 Minified size:   262866 bytes  (minify/*.json)
 Gzipped size:    16087 bytes
```
