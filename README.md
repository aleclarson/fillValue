
# fillValue 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
fillValue = require "fillValue"

obj = {}

value = fillValue obj, "key", -> 1
value # => 1

value = fillValue obj, "key", -> 2
value # => 1
```
