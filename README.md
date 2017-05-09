# digit-micro

A microservice (:microscope: :cloud:) that digs

## What?

A simple service (live at [https://digit-micro-iqtjfucpbw.now.sh](https://digit-micro-iqtjfucpbw.now.sh)) that looks up hostnames using ldns.

## How?

Simple. Just:

```
POST  HTTP/1.1
Host: digit-micro-iqtjfucpbw.now.sh
Content-Type: application/json
{
	"host": "google.com",
	"rrtype": "AAAA"
}
```

And you'll get back something like (on success):
```
{
    "records": [
        "2607:f8b0:4007:80d::200e"
    ]
}
```

or like (on failure):
```
{
    "error": {
        "code": "ENODATA",
        "errno": "ENODATA",
        "syscall": "queryCname",
        "hostname": "google.com"
    }
}
```

## License

MIT