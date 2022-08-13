export const WORKSPACE_DATA_TYPE = {
    DASHBOARD: 0,
    METRIC: 1,
    LOGGING: 2,
    TRACING: 3
};

export const WORKSPACE_DATA_TYPE_TEXT = {
    dash: 0,
    metric: 1,
    logging: 2,
    tracing: 3
};

export const WORKSPACE_DATA_TYPE_TO_TEXT = {
    [WORKSPACE_DATA_TYPE.DASHBOARD]: 'dash',
    [WORKSPACE_DATA_TYPE.METRIC]: 'metric',
    [WORKSPACE_DATA_TYPE.LOGGING]: 'logging',
    [WORKSPACE_DATA_TYPE.TRACING]: 'tracing'
};

export const STATUS_TYPE = {
    CREATING: 1,
    CREATED: 2,
    CREATE_FAIL: -2,
    DELETING: 3,
    DELETED: 4,
    DELETE_FAIL: -4,
    UPDATING: 5,
    UPDATED: 6,
    UPDATE_FAIL: -6
};

export const ACTIVE = [
    STATUS_TYPE.CREATED,
    STATUS_TYPE.CREATE_FAIL,
    STATUS_TYPE.UPDATING,
    STATUS_TYPE.DELETE_FAIL,
    STATUS_TYPE.UPDATED,
    STATUS_TYPE.UPDATE_FAIL
];

export const DATASOURCE_DISABLE_FRAME = [STATUS_TYPE.CREATE_FAIL, STATUS_TYPE.DELETED];

export const USER_ROLES = {
    ADMIN: 'Admin',
    EDITOR: 'Editor',
    VIEWER: 'Viewer'
};

export const DATASOURCE_ENABLE_RESOURCE = [STATUS_TYPE.CREATED, STATUS_TYPE.UPDATED, STATUS_TYPE.DELETE_FAIL];

export const DATASOURCE_DISABLE = [STATUS_TYPE.CREATED, STATUS_TYPE.DELETE_FAIL];

export const DATASOURCE_ENABLE = [STATUS_TYPE.CREATE_FAIL, STATUS_TYPE.DELETED];

export const STATUS_DATASOURCE_TYPE = {
    CREATING: 1,
    CREATED: 2,
    CREATE_FAIL: -2,
    DELETING: 3,
    DELETED: 4,
    DELETE_FAIL: -4
};

export const ROLE_OPTIONS = [
    {
        value: 'Admin',
        label: 'Admin'
    },
    {
        value: 'Editor',
        label: 'Editor'
    },
    {
        value: 'Viewer',
        label: 'Viewer'
    }
];

export const LIST_QUERY_TYPE = [
    {
        value: 'send',
        label: 'send'
    },
    {
        value: 'expect',
        label: 'expect'
    },
    {
        value: 'starttls',
        label: 'starttls'
    }
];

export const ENDPOINT_TYPE_HTTP = 'HTTP/HTTPS';
export const ENDPOINT_TYPE_TCP = 'TCP';
export const BLACK_BOX_AUTH_TYPE_BASIC = 'BASIC';
export const BLACK_BOX_AUTH_TYPE_BEARER = 'BEARER';
export const BLACK_BOX_ADVANCE = 'ADVANCE';
export const BLACK_BOX_ADVANCE_HTTP = 'ADVANCE_HTTP';

export const ENDPOINT_TYPES = [
    {
        value: ENDPOINT_TYPE_HTTP,
        label: ENDPOINT_TYPE_HTTP,
        description: 'Hypertext Transfer Protocol Secure Monitoring',
        disabled: false
    },
    {
        value: ENDPOINT_TYPE_TCP,
        label: ENDPOINT_TYPE_TCP,
        description: 'Transmission Control Protocol Monitoring',
        disabled: true
    }
    // {
    //   value: 'DNS',
    //   label: 'DNS',
    //   description: 'Domain Name System Monitoring',
    // },
];

export const LIST_IP_TYPE = [
    {
        value: 'ip4',
        label: 'IP4'
    }
    // {
    //   value: 'ip6',
    //   label: 'IP6',
    // },
];

export const LIST_HTTP_VERSION = [
    {
        value: 'HTTP/2.0',
        label: '2.0'
    },
    {
        value: 'HTTP/1.1',
        label: '1.1'
    },
    {
        value: 'HTTP/1.0',
        label: '1.0'
    },
    {
        value: 'HTTP/0.9',
        label: '0.9'
    }
];

export const LIST_STATUS_CODE = [
    {
        value: 100,
        label: '100 Continue'
    },
    {
        value: 101,
        label: '101 Switching Protocols'
    },
    {
        value: 102,
        label: '102 Processing (WebDAV)'
    },
    {
        value: 103,
        label: '103 Early Hints'
    },
    {
        value: 200,
        label: '200 OK'
    },
    {
        value: 201,
        label: '201 Created'
    },
    {
        value: 202,
        label: '202 Accepted'
    },
    {
        value: 203,
        label: '203 Non-Authoritative Information'
    },
    {
        value: 204,
        label: '204 No Content'
    },
    {
        value: 205,
        label: '205 Reset Content'
    },
    {
        value: 206,
        label: '206 Partial Content'
    },
    {
        value: 207,
        label: '207 Multi-Status (WebDAV)'
    },
    {
        value: 208,
        label: '208 Already Reported (WebDAV)'
    },
    {
        value: 226,
        label: '226 IM Used (HTTP Delta encoding)'
    },
    {
        value: 300,
        label: '300 Multiple Choices'
    },
    {
        value: 301,
        label: '301 Moved Permanently'
    },
    {
        value: 302,
        label: '302 Found'
    },
    {
        value: 303,
        label: '303 See Other'
    },
    {
        value: 304,
        label: '304 Not Modified'
    },
    {
        value: 305,
        label: '305 Use Proxy'
    },
    {
        value: 306,
        label: '306 unused'
    },
    {
        value: 307,
        label: '307 Temporary Redirect'
    },
    {
        value: 308,
        label: '308 Permanent Redirect'
    },
    {
        value: 400,
        label: '400 Bad Request'
    },
    {
        value: 401,
        label: '401 Unauthorized'
    },
    {
        value: 402,
        label: '402 Payment Required'
    },
    {
        value: 403,
        label: '403 Forbidden'
    },
    {
        value: 404,
        label: '404 Not Found'
    },
    {
        value: 405,
        label: '405 Method Not Allowed'
    },
    {
        value: 406,
        label: '406 Not Acceptable'
    },
    {
        value: 407,
        label: '407 Proxy Authentication Required'
    },
    {
        value: 408,
        label: '408 Request Timeout'
    },
    {
        value: 409,
        label: '409 Conflict'
    },
    {
        value: 410,
        label: '410 Gone'
    },
    {
        value: 411,
        label: '411 Length Required'
    },
    {
        value: 412,
        label: '412 Precondition Failed'
    },
    {
        value: 413,
        label: '413 Payload Too Large'
    },
    {
        value: 414,
        label: '414 URI Too Long'
    },
    {
        value: 415,
        label: '415 Unsupported Media Type'
    },
    {
        value: 416,
        label: '416 Range Not Satisfiable'
    },
    {
        value: 417,
        label: '417 Expectation Failed'
    },
    {
        value: 418,
        label: '418 I am a teapot'
    },
    {
        value: 419,
        label: '406 Not Acceptable'
    },
    {
        value: 421,
        label: '421 Misdirected Request'
    },
    {
        value: 422,
        label: '422 Unprocessable Entity (WebDAV)'
    },
    {
        value: 423,
        label: '423 Locked (WebDAV)'
    },
    {
        value: 424,
        label: '424 Failed Dependency (WebDAV)'
    },
    {
        value: 425,
        label: '425 Too Early'
    },
    {
        value: 426,
        label: '426 Upgrade Required'
    },
    {
        value: 428,
        label: '428 Precondition Required'
    },
    {
        value: 429,
        label: '429 Too Many Requests'
    },
    {
        value: 431,
        label: '431 Request Header Fields Too Large'
    },
    {
        value: 451,
        label: '451 Unavailable For Legal Reasons'
    },
    {
        value: 500,
        label: '500 Internal Server Error'
    },
    {
        value: 501,
        label: '501 Not Implemented'
    },
    {
        value: 502,
        label: '502 Bad Gateway'
    },
    {
        value: 503,
        label: '503 Service Unavailable'
    },
    {
        value: 504,
        label: '504 Gateway Timeout'
    },
    {
        value: 505,
        label: '505 HTTP Version Not Supported'
    },
    {
        value: 506,
        label: '506 Variant Also Negotiates'
    },
    {
        value: 507,
        label: '507 Insufficient Storage (WebDAV)'
    },
    {
        value: 508,
        label: '508 Loop Detected (WebDAV)'
    },
    {
        value: 510,
        label: '510 Not Extended'
    },
    {
        value: 511,
        label: '511 Network Authentication Required'
    }
];

export const LIST_MIN_VERSION_TLS = [
    {
        value: 'TLS10 (TLS 1.0)',
        label: 'TLS10 (TLS 1.0)'
    },
    {
        value: 'TLS11 (TLS 1.1)',
        label: 'TLS11 (TLS 1.1)'
    },
    {
        value: 'TLS12 (TLS 1.2)',
        label: 'TLS12 (TLS 1.2)'
    },
    {
        value: 'TLS13 (TLS 1.3)',
        label: 'TLS13 (TLS 1.3)'
    }
];

export const LIST_METHOD = [
    {
        value: 'POST',
        label: 'POST'
    },
    {
        value: 'GET',
        label: 'GET'
    },
    {
        value: 'PUT',
        label: 'PUT'
    },
    {
        value: 'PATCH',
        label: 'PATCH'
    },
    {
        value: 'HEAD',
        label: 'HEAD'
    },
    {
        value: 'DELETE',
        label: 'DELETE'
    },
    {
        value: 'CONNECT',
        label: 'CONNECT'
    },
    {
        value: 'OPTIONS',
        label: 'OPTIONS'
    },
    {
        value: 'TRACE',
        label: 'TRACE'
    }
];

export default {
    WORKSPACE_DATA_TYPE
};
