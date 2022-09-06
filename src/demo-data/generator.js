export const rows = [
  {
    items: [
      {
        items: [
          {
            items: [
              {
                items: [
                  {
                    items: null,
                    data: {},
                    __time: 1662448741307,
                    SpanId: "6181df82335332b6",
                    TraceId: "00000000000000003951ccceac4908ca",
                    ServiceName: "mysql",
                    Name: "SQL SELECT",
                    Kind: "3",
                    DurationNano: "320405000",
                    TagsKeys: [
                      "ip",
                      "opencensus.exporterversion",
                      "peer.service",
                      "service.name",
                      "sql.query",
                      "client-uuid",
                      "host.name"
                    ],
                    TagsValues: [
                      "172.19.0.5",
                      "Jaeger-Go-2.30.0",
                      "mysql",
                      "mysql",
                      "SELECT * FROM customer WHERE customer_id=392",
                      "57c3a1c5eb602eb5",
                      "2ef073c99d9e"
                    ],
                    References: [
                      "{TraceId=00000000000000003951ccceac4908ca, SpanId=0efa260a71a84c4d, RefType=CHILD_OF}"
                    ],
                    Events: [
                      '{"name":"Acquired lock with 0 transactions waiting behind","timeUnixNano":1662448741307656000}'
                    ],
                    HasError: false
                  }
                ],
                data: {},
                __time: 1662448741307,
                SpanId: "0efa260a71a84c4d",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "customer",
                Name: "HTTP GET /customer",
                Kind: "2",
                DurationNano: "320750000",
                TagsKeys: [
                  "http.url",
                  "ip",
                  "client-uuid",
                  "component",
                  "http.method",
                  "http.status_code",
                  "host.name",
                  "opencensus.exporterversion",
                  "service.name"
                ],
                TagsValues: [
                  "/customer?customer=392",
                  "172.19.0.5",
                  "1c07e860b0bc3cfd",
                  "net/http",
                  "GET",
                  "200",
                  "2ef073c99d9e",
                  "Jaeger-Go-2.30.0",
                  "customer"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=05b4f47b8148364b, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741307350000,"attributeMap":{"level":"info","method":"GET","url":"/customer?customer=392"}}',
                  '{"name":"Loading customer","timeUnixNano":1662448741307516000,"attributeMap":{"customer_id":"392","level":"info"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741307,
            SpanId: "05b4f47b8148364b",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "321104000",
            TagsKeys: [
              "opencensus.exporterversion",
              "service.name",
              "client-uuid",
              "http.method",
              "http.status_code",
              "ip",
              "component",
              "host.name",
              "http.url"
            ],
            TagsValues: [
              "Jaeger-Go-2.30.0",
              "frontend",
              "6f7f9195530db54f",
              "GET",
              "200",
              "172.19.0.5",
              "net/http",
              "2ef073c99d9e",
              "0.0.0.0:8081"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=1dbebd30496a794b, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741307200000}',
              '{"name":"GotConn","timeUnixNano":1662448741307206000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741307236000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741307238000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741628183000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741628219000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741628266000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741307,
        SpanId: "1dbebd30496a794b",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /customer",
        Kind: "0",
        DurationNano: "321143000",
        TagsKeys: [
          "ip",
          "opencensus.exporterversion",
          "service.name",
          "client-uuid",
          "host.name"
        ],
        TagsValues: [
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend",
          "6f7f9195530db54f",
          "2ef073c99d9e"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741628,
                SpanId: "0f40bc4a5d2d7dae",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "FindDriverIDs",
                Kind: "3",
                DurationNano: "23325000",
                TagsKeys: [
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.location",
                  "service.name",
                  "client-uuid"
                ],
                TagsValues: [
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "577,322",
                  "redis",
                  "39edf615e6a6932c"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"Found drivers","timeUnixNano":1662448741652073000,"attributeMap":{"level":"info"}}'
                ],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741652,
                SpanId: "4a659dac889bf79f",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "27478000",
                TagsKeys: [
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name",
                  "client-uuid",
                  "host.name"
                ],
                TagsValues: [
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T762612C",
                  "redis",
                  "39edf615e6a6932c",
                  "2ef073c99d9e"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"redis timeout","timeUnixNano":1662448741679588000,"attributeMap":{"driver_id":"T762612C","error":"redis timeout","level":"error"}}'
                ],
                HasError: true
              },
              {
                items: null,
                data: {},
                __time: 1662448741679,
                SpanId: "6180c7728aa40a26",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "14239000",
                TagsKeys: [
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name",
                  "client-uuid"
                ],
                TagsValues: [
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T762612C",
                  "redis",
                  "39edf615e6a6932c"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741693,
                SpanId: "45c86d1f15dd5a52",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "12172000",
                TagsKeys: [
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name",
                  "client-uuid",
                  "host.name",
                  "ip"
                ],
                TagsValues: [
                  "Jaeger-Go-2.30.0",
                  "T739539C",
                  "redis",
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741706,
                SpanId: "376f55ab5f28aaf3",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "14125000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name"
                ],
                TagsValues: [
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T703078C",
                  "redis"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741720,
                SpanId: "2ecb7eecadc814ca",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "8164000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name"
                ],
                TagsValues: [
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T738542C",
                  "redis"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741728,
                SpanId: "12710f37547b286e",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "30557000",
                TagsKeys: [
                  "service.name",
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID"
                ],
                TagsValues: [
                  "redis",
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T746439C"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"redis timeout","timeUnixNano":1662448741758936000,"attributeMap":{"driver_id":"T746439C","error":"redis timeout","level":"error"}}'
                ],
                HasError: true
              },
              {
                items: null,
                data: {},
                __time: 1662448741759,
                SpanId: "73d89166d4dd4e26",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "11170000",
                TagsKeys: [
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name",
                  "client-uuid"
                ],
                TagsValues: [
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T746439C",
                  "redis",
                  "39edf615e6a6932c"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741770,
                SpanId: "5f078c1855fa5ebd",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "17163000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name"
                ],
                TagsValues: [
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T764402C",
                  "redis"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741787,
                SpanId: "726753acdc383041",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "14165000",
                TagsKeys: [
                  "service.name",
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID"
                ],
                TagsValues: [
                  "redis",
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T708118C"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741801,
                SpanId: "6bd1f8fd76bf05e1",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "8097000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name"
                ],
                TagsValues: [
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T744463C",
                  "redis"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741809,
                SpanId: "6a123624da94a568",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "35538000",
                TagsKeys: [
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name",
                  "client-uuid",
                  "host.name",
                  "ip"
                ],
                TagsValues: [
                  "Jaeger-Go-2.30.0",
                  "T706335C",
                  "redis",
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"redis timeout","timeUnixNano":1662448741844984000,"attributeMap":{"driver_id":"T706335C","error":"redis timeout","level":"error"}}'
                ],
                HasError: true
              },
              {
                items: null,
                data: {},
                __time: 1662448741845,
                SpanId: "47766e91c1a6eb57",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "9244000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name"
                ],
                TagsValues: [
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "T706335C",
                  "redis"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              },
              {
                items: null,
                data: {},
                __time: 1662448741854,
                SpanId: "797e8658b0af54af",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "redis",
                Name: "GetDriver",
                Kind: "3",
                DurationNano: "6175000",
                TagsKeys: [
                  "opencensus.exporterversion",
                  "param.driverID",
                  "service.name",
                  "client-uuid",
                  "host.name",
                  "ip"
                ],
                TagsValues: [
                  "Jaeger-Go-2.30.0",
                  "T766918C",
                  "redis",
                  "39edf615e6a6932c",
                  "2ef073c99d9e",
                  "172.19.0.5"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=0f5930d1a796c7b8, RefType=CHILD_OF}"
                ],
                Events: [],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741628,
            SpanId: "0f5930d1a796c7b8",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "driver",
            Name: "/driver.DriverService/FindNearest",
            Kind: "2",
            DurationNano: "232053000",
            TagsKeys: [
              "component",
              "host.name",
              "ip",
              "opencensus.exporterversion",
              "service.name",
              "client-uuid"
            ],
            TagsValues: [
              "gRPC",
              "2ef073c99d9e",
              "172.19.0.5",
              "Jaeger-Go-2.30.0",
              "driver",
              "36a7e16559757f58"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=4c1f6757d068d45f, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"Searching for nearby drivers","timeUnixNano":1662448741628736000,"attributeMap":{"level":"info","location":"577,322"}}',
              '{"name":"Retrying GetDriver after error","timeUnixNano":1662448741679686000,"attributeMap":{"error":"redis timeout","level":"error","retry_no":"1"}}',
              '{"name":"Retrying GetDriver after error","timeUnixNano":1662448741758999000,"attributeMap":{"error":"redis timeout","level":"error","retry_no":"1"}}',
              '{"name":"Retrying GetDriver after error","timeUnixNano":1662448741845202000,"attributeMap":{"error":"redis timeout","level":"error","retry_no":"1"}}',
              '{"name":"Search successful","timeUnixNano":1662448741860722000,"attributeMap":{"level":"info","num_drivers":"10"}}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741628,
        SpanId: "4c1f6757d068d45f",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "/driver.DriverService/FindNearest",
        Kind: "3",
        DurationNano: "232611000",
        TagsKeys: [
          "opencensus.exporterversion",
          "service.name",
          "client-uuid",
          "component",
          "host.name",
          "ip"
        ],
        TagsValues: [
          "Jaeger-Go-2.30.0",
          "frontend",
          "6f7f9195530db54f",
          "gRPC",
          "2ef073c99d9e",
          "172.19.0.5"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741861,
                SpanId: "3ba47e0ac4f12cfe",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "39405000",
                TagsKeys: [
                  "client-uuid",
                  "component",
                  "http.status_code",
                  "host.name",
                  "http.method",
                  "http.url",
                  "ip",
                  "opencensus.exporterversion",
                  "service.name"
                ],
                TagsValues: [
                  "7887b75d8aafd21e",
                  "net/http",
                  "200",
                  "2ef073c99d9e",
                  "GET",
                  "/route?dropoff=577%2C322&pickup=774%2C292",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "route"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=432c7b272a5a59b3, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741861643000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=774%2C292"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741861,
            SpanId: "432c7b272a5a59b3",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "39822000",
            TagsKeys: [
              "ip",
              "client-uuid",
              "http.status_code",
              "http.url",
              "opencensus.exporterversion",
              "service.name",
              "component",
              "host.name",
              "http.method"
            ],
            TagsValues: [
              "172.19.0.5",
              "6f7f9195530db54f",
              "200",
              "0.0.0.0:8083",
              "Jaeger-Go-2.30.0",
              "frontend",
              "net/http",
              "2ef073c99d9e",
              "GET"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=3978e9ccd64a9659, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741861428000}',
              '{"name":"GotConn","timeUnixNano":1662448741861432000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741861444000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741861445000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741901158000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741901199000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741901236000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741861,
        SpanId: "3978e9ccd64a9659",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "39833000",
        TagsKeys: [
          "client-uuid",
          "host.name",
          "ip",
          "opencensus.exporterversion",
          "service.name"
        ],
        TagsValues: [
          "6f7f9195530db54f",
          "2ef073c99d9e",
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741861,
                SpanId: "430737a7ca672a12",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "43956000",
                TagsKeys: [
                  "service.name",
                  "client-uuid",
                  "http.method",
                  "ip",
                  "opencensus.exporterversion",
                  "component",
                  "host.name",
                  "http.status_code",
                  "http.url"
                ],
                TagsValues: [
                  "route",
                  "7887b75d8aafd21e",
                  "GET",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "net/http",
                  "2ef073c99d9e",
                  "200",
                  "/route?dropoff=577%2C322&pickup=437%2C794"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=44decf76c113e9bb, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741861869000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=437%2C794"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741861,
            SpanId: "44decf76c113e9bb",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "44360000",
            TagsKeys: [
              "http.status_code",
              "service.name",
              "client-uuid",
              "host.name",
              "http.method",
              "opencensus.exporterversion",
              "component",
              "http.url",
              "ip"
            ],
            TagsValues: [
              "200",
              "frontend",
              "6f7f9195530db54f",
              "2ef073c99d9e",
              "GET",
              "Jaeger-Go-2.30.0",
              "net/http",
              "0.0.0.0:8083",
              "172.19.0.5"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=501c99feed7358b0, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741861591000}',
              '{"name":"ConnectStart","timeUnixNano":1662448741861635000,"attributeMap":{"addr":"0.0.0.0:8083","network":"tcp"}}',
              '{"name":"ConnectDone","timeUnixNano":1662448741861745000,"attributeMap":{"addr":"0.0.0.0:8083","network":"tcp"}}',
              '{"name":"GotConn","timeUnixNano":1662448741861771000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741861802000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741861804000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741905896000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741905923000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741905936000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741861,
        SpanId: "501c99feed7358b0",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "44365000",
        TagsKeys: [
          "ip",
          "opencensus.exporterversion",
          "service.name",
          "client-uuid",
          "host.name"
        ],
        TagsValues: [
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend",
          "6f7f9195530db54f",
          "2ef073c99d9e"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741861,
                SpanId: "27e03949644fa618",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "75350000",
                TagsKeys: [
                  "component",
                  "http.method",
                  "http.url",
                  "ip",
                  "opencensus.exporterversion",
                  "client-uuid",
                  "host.name",
                  "http.status_code",
                  "service.name"
                ],
                TagsValues: [
                  "net/http",
                  "GET",
                  "/route?dropoff=577%2C322&pickup=962%2C724",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "7887b75d8aafd21e",
                  "2ef073c99d9e",
                  "200",
                  "route"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=616b6fb5c85b6e02, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741861293000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=962%2C724"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741861,
            SpanId: "616b6fb5c85b6e02",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "75679000",
            TagsKeys: [
              "opencensus.exporterversion",
              "service.name",
              "component",
              "host.name",
              "http.status_code",
              "ip",
              "client-uuid",
              "http.method",
              "http.url"
            ],
            TagsValues: [
              "Jaeger-Go-2.30.0",
              "frontend",
              "net/http",
              "2ef073c99d9e",
              "200",
              "172.19.0.5",
              "6f7f9195530db54f",
              "GET",
              "0.0.0.0:8083"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=6e78be5e1cee422a, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741861115000}',
              '{"name":"GotConn","timeUnixNano":1662448741861122000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741861138000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741861140000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741936719000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741936756000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741936775000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741861,
        SpanId: "6e78be5e1cee422a",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "75686000",
        TagsKeys: [
          "ip",
          "opencensus.exporterversion",
          "service.name",
          "client-uuid",
          "host.name"
        ],
        TagsValues: [
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend",
          "6f7f9195530db54f",
          "2ef073c99d9e"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741906,
                SpanId: "41da5b74a988467c",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "47015000",
                TagsKeys: [
                  "http.method",
                  "http.status_code",
                  "opencensus.exporterversion",
                  "service.name",
                  "client-uuid",
                  "component",
                  "host.name",
                  "http.url",
                  "ip"
                ],
                TagsValues: [
                  "GET",
                  "200",
                  "Jaeger-Go-2.30.0",
                  "route",
                  "7887b75d8aafd21e",
                  "net/http",
                  "2ef073c99d9e",
                  "/route?dropoff=577%2C322&pickup=488%2C353",
                  "172.19.0.5"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=7bae549bcb881439, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741906160000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=488%2C353"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741905,
            SpanId: "7bae549bcb881439",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "47274000",
            TagsKeys: [
              "service.name",
              "client-uuid",
              "component",
              "host.name",
              "http.method",
              "http.url",
              "http.status_code",
              "ip",
              "opencensus.exporterversion"
            ],
            TagsValues: [
              "frontend",
              "6f7f9195530db54f",
              "net/http",
              "2ef073c99d9e",
              "GET",
              "0.0.0.0:8083",
              "200",
              "172.19.0.5",
              "Jaeger-Go-2.30.0"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=64fe15dbea111269, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741906010000}',
              '{"name":"GotConn","timeUnixNano":1662448741906014000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741906025000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741906027000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741953233000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741953258000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741953271000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741905,
        SpanId: "64fe15dbea111269",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "47300000",
        TagsKeys: [
          "service.name",
          "client-uuid",
          "host.name",
          "ip",
          "opencensus.exporterversion"
        ],
        TagsValues: [
          "frontend",
          "6f7f9195530db54f",
          "2ef073c99d9e",
          "172.19.0.5",
          "Jaeger-Go-2.30.0"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741901,
                SpanId: "6f4f6ea387853e6b",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "70089000",
                TagsKeys: [
                  "component",
                  "http.method",
                  "http.status_code",
                  "http.url",
                  "client-uuid",
                  "host.name",
                  "ip",
                  "opencensus.exporterversion",
                  "service.name"
                ],
                TagsValues: [
                  "net/http",
                  "GET",
                  "200",
                  "/route?dropoff=577%2C322&pickup=854%2C162",
                  "7887b75d8aafd21e",
                  "2ef073c99d9e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "route"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=409b1193efc98c21, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741901681000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=854%2C162"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741901,
            SpanId: "409b1193efc98c21",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "70400000",
            TagsKeys: [
              "client-uuid",
              "component",
              "http.method",
              "ip",
              "service.name",
              "host.name",
              "http.status_code",
              "http.url",
              "opencensus.exporterversion"
            ],
            TagsValues: [
              "6f7f9195530db54f",
              "net/http",
              "GET",
              "172.19.0.5",
              "frontend",
              "2ef073c99d9e",
              "200",
              "0.0.0.0:8083",
              "Jaeger-Go-2.30.0"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=4ca8a652bc6af9cf, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741901527000}',
              '{"name":"GotConn","timeUnixNano":1662448741901532000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741901564000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741901566000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741971866000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741971893000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741971909000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741901,
        SpanId: "4ca8a652bc6af9cf",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "70408000",
        TagsKeys: [
          "ip",
          "opencensus.exporterversion",
          "service.name",
          "client-uuid",
          "host.name"
        ],
        TagsValues: [
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend",
          "6f7f9195530db54f",
          "2ef073c99d9e"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741937,
                SpanId: "165cc665bae3a16f",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "55361000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "http.url",
                  "ip",
                  "component",
                  "http.method",
                  "http.status_code",
                  "opencensus.exporterversion",
                  "service.name"
                ],
                TagsValues: [
                  "7887b75d8aafd21e",
                  "2ef073c99d9e",
                  "/route?dropoff=577%2C322&pickup=768%2C960",
                  "172.19.0.5",
                  "net/http",
                  "GET",
                  "200",
                  "Jaeger-Go-2.30.0",
                  "route"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=3c932073cd0cecc1, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741937061000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=768%2C960"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741936,
            SpanId: "3c932073cd0cecc1",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "55740000",
            TagsKeys: [
              "host.name",
              "http.url",
              "ip",
              "service.name",
              "client-uuid",
              "http.method",
              "http.status_code",
              "opencensus.exporterversion",
              "component"
            ],
            TagsValues: [
              "2ef073c99d9e",
              "0.0.0.0:8083",
              "172.19.0.5",
              "frontend",
              "6f7f9195530db54f",
              "GET",
              "200",
              "Jaeger-Go-2.30.0",
              "net/http"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=0252be3d02eee230, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741936892000}',
              '{"name":"GotConn","timeUnixNano":1662448741936900000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741936925000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741936927000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448741992540000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448741992595000}',
              '{"name":"ClosedBody","timeUnixNano":1662448741992613000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741936,
        SpanId: "0252be3d02eee230",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "55748000",
        TagsKeys: [
          "client-uuid",
          "host.name",
          "ip",
          "opencensus.exporterversion",
          "service.name"
        ],
        TagsValues: [
          "6f7f9195530db54f",
          "2ef073c99d9e",
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741953,
                SpanId: "0872fb2b81650799",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "56466000",
                TagsKeys: [
                  "http.method",
                  "http.url",
                  "ip",
                  "client-uuid",
                  "host.name",
                  "opencensus.exporterversion",
                  "service.name",
                  "component",
                  "http.status_code"
                ],
                TagsValues: [
                  "GET",
                  "/route?dropoff=577%2C322&pickup=450%2C900",
                  "172.19.0.5",
                  "7887b75d8aafd21e",
                  "2ef073c99d9e",
                  "Jaeger-Go-2.30.0",
                  "route",
                  "net/http",
                  "200"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=78937be850f6799e, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741953605000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=450%2C900"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741953,
            SpanId: "78937be850f6799e",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "56846000",
            TagsKeys: [
              "client-uuid",
              "host.name",
              "http.method",
              "service.name",
              "component",
              "http.status_code",
              "http.url",
              "ip",
              "opencensus.exporterversion"
            ],
            TagsValues: [
              "6f7f9195530db54f",
              "2ef073c99d9e",
              "GET",
              "frontend",
              "net/http",
              "200",
              "0.0.0.0:8083",
              "172.19.0.5",
              "Jaeger-Go-2.30.0"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=4b7cd35b6315fe1d, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741953453000}',
              '{"name":"GotConn","timeUnixNano":1662448741953457000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741953490000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741953492000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448742010191000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448742010252000}',
              '{"name":"ClosedBody","timeUnixNano":1662448742010284000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741953,
        SpanId: "4b7cd35b6315fe1d",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "56891000",
        TagsKeys: [
          "client-uuid",
          "host.name",
          "ip",
          "opencensus.exporterversion",
          "service.name"
        ],
        TagsValues: [
          "6f7f9195530db54f",
          "2ef073c99d9e",
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741992,
                SpanId: "4490db0e2b5a5593",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "52054000",
                TagsKeys: [
                  "client-uuid",
                  "host.name",
                  "http.status_code",
                  "service.name",
                  "component",
                  "http.method",
                  "http.url",
                  "ip",
                  "opencensus.exporterversion"
                ],
                TagsValues: [
                  "7887b75d8aafd21e",
                  "2ef073c99d9e",
                  "200",
                  "route",
                  "net/http",
                  "GET",
                  "/route?dropoff=577%2C322&pickup=409%2C95",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=7fa38630f1edbd68, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741992840000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=409%2C95"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741992,
            SpanId: "7fa38630f1edbd68",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "54481000",
            TagsKeys: [
              "component",
              "host.name",
              "http.url",
              "ip",
              "opencensus.exporterversion",
              "client-uuid",
              "http.status_code",
              "service.name",
              "http.method"
            ],
            TagsValues: [
              "net/http",
              "2ef073c99d9e",
              "0.0.0.0:8083",
              "172.19.0.5",
              "Jaeger-Go-2.30.0",
              "6f7f9195530db54f",
              "200",
              "frontend",
              "GET"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=7f20229b50411a4c, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741992720000}',
              '{"name":"GotConn","timeUnixNano":1662448741992724000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741992738000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741992740000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448742047131000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448742047160000}',
              '{"name":"ClosedBody","timeUnixNano":1662448742047183000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741992,
        SpanId: "7f20229b50411a4c",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "54489000",
        TagsKeys: [
          "ip",
          "opencensus.exporterversion",
          "service.name",
          "client-uuid",
          "host.name"
        ],
        TagsValues: [
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend",
          "6f7f9195530db54f",
          "2ef073c99d9e"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448741972,
                SpanId: "0673e3bcd93ac2d1",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "74871000",
                TagsKeys: [
                  "client-uuid",
                  "ip",
                  "opencensus.exporterversion",
                  "service.name",
                  "component",
                  "host.name",
                  "http.method",
                  "http.status_code",
                  "http.url"
                ],
                TagsValues: [
                  "7887b75d8aafd21e",
                  "172.19.0.5",
                  "Jaeger-Go-2.30.0",
                  "route",
                  "net/http",
                  "2ef073c99d9e",
                  "GET",
                  "200",
                  "/route?dropoff=577%2C322&pickup=622%2C419"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=67c577b6b262bb0d, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448741972327000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=622%2C419"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448741972,
            SpanId: "67c577b6b262bb0d",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "75165000",
            TagsKeys: [
              "client-uuid",
              "component",
              "http.url",
              "service.name",
              "host.name",
              "http.method",
              "http.status_code",
              "ip",
              "opencensus.exporterversion"
            ],
            TagsValues: [
              "6f7f9195530db54f",
              "net/http",
              "0.0.0.0:8083",
              "frontend",
              "2ef073c99d9e",
              "GET",
              "200",
              "172.19.0.5",
              "Jaeger-Go-2.30.0"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=6ad57b4d16a8cb0b, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448741972154000}',
              '{"name":"GotConn","timeUnixNano":1662448741972158000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448741972191000}',
              '{"name":"WroteRequest","timeUnixNano":1662448741972193000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448742047251000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448742047276000}',
              '{"name":"ClosedBody","timeUnixNano":1662448742047300000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448741972,
        SpanId: "6ad57b4d16a8cb0b",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "75174000",
        TagsKeys: [
          "client-uuid",
          "host.name",
          "ip",
          "opencensus.exporterversion",
          "service.name"
        ],
        TagsValues: [
          "6f7f9195530db54f",
          "2ef073c99d9e",
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      },
      {
        items: [
          {
            items: [
              {
                items: null,
                data: {},
                __time: 1662448742010,
                SpanId: "1298f79f4516e2fc",
                TraceId: "00000000000000003951ccceac4908ca",
                ServiceName: "route",
                Name: "HTTP GET /route",
                Kind: "2",
                DurationNano: "63137000",
                TagsKeys: [
                  "http.method",
                  "opencensus.exporterversion",
                  "http.url",
                  "ip",
                  "service.name",
                  "client-uuid",
                  "component",
                  "host.name",
                  "http.status_code"
                ],
                TagsValues: [
                  "GET",
                  "Jaeger-Go-2.30.0",
                  "/route?dropoff=577%2C322&pickup=704%2C964",
                  "172.19.0.5",
                  "route",
                  "7887b75d8aafd21e",
                  "net/http",
                  "2ef073c99d9e",
                  "200"
                ],
                References: [
                  "{TraceId=00000000000000003951ccceac4908ca, SpanId=3cab014702d166a0, RefType=CHILD_OF}"
                ],
                Events: [
                  '{"name":"HTTP request received","timeUnixNano":1662448742010767000,"attributeMap":{"level":"info","method":"GET","url":"/route?dropoff=577%2C322\\u0026pickup=704%2C964"}}'
                ],
                HasError: false
              }
            ],
            data: {},
            __time: 1662448742010,
            SpanId: "3cab014702d166a0",
            TraceId: "00000000000000003951ccceac4908ca",
            ServiceName: "frontend",
            Name: "HTTP GET",
            Kind: "3",
            DurationNano: "63547000",
            TagsKeys: [
              "host.name",
              "http.method",
              "http.status_code",
              "service.name",
              "client-uuid",
              "component",
              "http.url",
              "ip",
              "opencensus.exporterversion"
            ],
            TagsValues: [
              "2ef073c99d9e",
              "GET",
              "200",
              "frontend",
              "6f7f9195530db54f",
              "net/http",
              "0.0.0.0:8083",
              "172.19.0.5",
              "Jaeger-Go-2.30.0"
            ],
            References: [
              "{TraceId=00000000000000003951ccceac4908ca, SpanId=2271ad79720c747c, RefType=CHILD_OF}"
            ],
            Events: [
              '{"name":"GetConn","timeUnixNano":1662448742010573000}',
              '{"name":"GotConn","timeUnixNano":1662448742010579000}',
              '{"name":"WroteHeaders","timeUnixNano":1662448742010598000}',
              '{"name":"WroteRequest","timeUnixNano":1662448742010600000}',
              '{"name":"GotFirstResponseByte","timeUnixNano":1662448742073913000}',
              '{"name":"PutIdleConn","timeUnixNano":1662448742073958000}',
              '{"name":"ClosedBody","timeUnixNano":1662448742074031000}'
            ],
            HasError: false
          }
        ],
        data: {},
        __time: 1662448742010,
        SpanId: "2271ad79720c747c",
        TraceId: "00000000000000003951ccceac4908ca",
        ServiceName: "frontend",
        Name: "HTTP GET: /route",
        Kind: "0",
        DurationNano: "63558000",
        TagsKeys: [
          "client-uuid",
          "host.name",
          "ip",
          "opencensus.exporterversion",
          "service.name"
        ],
        TagsValues: [
          "6f7f9195530db54f",
          "2ef073c99d9e",
          "172.19.0.5",
          "Jaeger-Go-2.30.0",
          "frontend"
        ],
        References: [
          "{TraceId=00000000000000003951ccceac4908ca, SpanId=3951ccceac4908ca, RefType=CHILD_OF}"
        ],
        Events: [],
        HasError: false
      }
    ],
    data: {},
    __time: 1662448741306,
    SpanId: "3951ccceac4908ca",
    TraceId: "00000000000000003951ccceac4908ca",
    ServiceName: "frontend",
    Name: "HTTP GET /dispatch",
    Kind: "2",
    DurationNano: "767612000",
    TagsKeys: [
      "http.url",
      "http.status_code",
      "ip",
      "opencensus.exporterversion",
      "sampler.type",
      "client-uuid",
      "component",
      "host.name",
      "http.method",
      "service.name"
    ],
    TagsValues: [
      "/dispatch?customer=392&nonse=0.015296363321630757",
      "200",
      "172.19.0.5",
      "Jaeger-Go-2.30.0",
      "const",
      "6f7f9195530db54f",
      "net/http",
      "2ef073c99d9e",
      "GET",
      "frontend"
    ],
    References: [
      "{TraceId=00000000000000003951ccceac4908ca, SpanId=, RefType=CHILD_OF}"
    ],
    Events: [
      '{"name":"HTTP request received","timeUnixNano":1662448741306682000,"attributeMap":{"level":"info","method":"GET","url":"/dispatch?customer=392\\u0026nonse=0.015296363321630757"}}',
      '{"name":"Getting customer","timeUnixNano":1662448741306937000,"attributeMap":{"customer_id":"392","level":"info"}}',
      '{"name":"Found customer","timeUnixNano":1662448741628280000,"attributeMap":{"level":"info"}}',
      '{"name":"baggage","timeUnixNano":1662448741628356000,"attributeMap":{"key":"customer","value":"Trom Chocolatier"}}',
      '{"name":"Finding nearest drivers","timeUnixNano":1662448741628362000,"attributeMap":{"level":"info","location":"577,322"}}',
      '{"name":"Found drivers","timeUnixNano":1662448741861007000,"attributeMap":{"level":"info"}}',
      '{"name":"Finding route","timeUnixNano":1662448741861059000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"962,724"}}',
      '{"name":"Finding route","timeUnixNano":1662448741861196000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"774,292"}}',
      '{"name":"Finding route","timeUnixNano":1662448741861344000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"437,794"}}',
      '{"name":"Finding route","timeUnixNano":1662448741901253000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"854,162"}}',
      '{"name":"Finding route","timeUnixNano":1662448741905946000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"488,353"}}',
      '{"name":"Finding route","timeUnixNano":1662448741936791000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"768,960"}}',
      '{"name":"Finding route","timeUnixNano":1662448741953302000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"450,900"}}',
      '{"name":"Finding route","timeUnixNano":1662448741971920000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"622,419"}}',
      '{"name":"Finding route","timeUnixNano":1662448741992626000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"409,95"}}',
      '{"name":"Finding route","timeUnixNano":1662448742010336000,"attributeMap":{"dropoff":"577,322","level":"info","pickup":"704,964"}}',
      '{"name":"Found routes","timeUnixNano":1662448742074049000,"attributeMap":{"level":"info"}}',
      '{"name":"Dispatch successful","timeUnixNano":1662448742074190000,"attributeMap":{"driver":"T708118C","eta":"3m0s","level":"info"}}'
    ],
    HasError: false
  }
];
