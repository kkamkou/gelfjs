# development

## Tests

```bash
npm install
npm test
```

## Docker

```bash
[sudo] docker build --no-cache -t gelfjs .
[sudo] docker run -ti --rm -v "${PWD}:/opt/app" -w "/opt/app" gelfjs
```



