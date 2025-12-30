(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Pets/ambilux/frontend/node_modules/libbase64/lib/libbase64.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
var stream = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
var util = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
var Transform = stream.Transform;
// expose to the world
module.exports = {
    encode: encode,
    decode: decode,
    wrap: wrap,
    Encoder: Encoder,
    Decoder: Decoder
};
/**
 * Encodes a Buffer into a base64 encoded string
 *
 * @param {Buffer} buffer Buffer to convert
 * @returns {String} base64 encoded string
 */ function encode(buffer) {
    if (typeof buffer === 'string') {
        buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](buffer, 'utf-8');
    }
    return buffer.toString('base64');
}
/**
 * Decodes a base64 encoded string to a Buffer object
 *
 * @param {String} str base64 encoded string
 * @returns {Buffer} Decoded value
 */ function decode(str) {
    str = str || '';
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](str, 'base64');
}
/**
 * Adds soft line breaks to a base64 string
 *
 * @param {String} str base64 encoded string that might need line wrapping
 * @param {Number} [lineLength=76] Maximum allowed length for a line
 * @returns {String} Soft-wrapped base64 encoded string
 */ function wrap(str, lineLength) {
    str = (str || '').toString();
    lineLength = lineLength || 76;
    if (str.length <= lineLength) {
        return str;
    }
    return str.replace(new RegExp('.{' + lineLength + '}', 'g'), '$&\r\n').trim();
}
/**
 * Creates a transform stream for encoding data to base64 encoding
 *
 * @constructor
 * @param {Object} options Stream options
 * @param {Number} [options.lineLength=76] Maximum lenght for lines, set to false to disable wrapping
 */ function Encoder(options) {
    // init Transform
    this.options = options || {};
    if (this.options.lineLength !== false) {
        this.options.lineLength = this.options.lineLength || 76;
    }
    this._curLine = '';
    this._remainingBytes = false;
    this.inputBytes = 0;
    this.outputBytes = 0;
    Transform.call(this, this.options);
}
util.inherits(Encoder, Transform);
Encoder.prototype._transform = function(chunk, encoding, done) {
    var b64, _self = this;
    if (encoding !== 'buffer') {
        chunk = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](chunk, encoding);
    }
    if (!chunk || !chunk.length) {
        return done();
    }
    this.inputBytes += chunk.length;
    if (this._remainingBytes && this._remainingBytes.length) {
        chunk = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            this._remainingBytes,
            chunk
        ]);
        this._remainingBytes = false;
    }
    if (chunk.length % 3) {
        this._remainingBytes = chunk.slice(chunk.length - chunk.length % 3);
        chunk = chunk.slice(0, chunk.length - chunk.length % 3);
    } else {
        this._remainingBytes = false;
    }
    b64 = this._curLine + encode(chunk);
    if (this.options.lineLength) {
        b64 = wrap(b64, this.options.lineLength);
        b64 = b64.replace(/(^|\n)([^\n]*)$/, function(match, lineBreak, lastLine) {
            _self._curLine = lastLine;
            return lineBreak;
        });
    }
    if (b64) {
        this.outputBytes += b64.length;
        this.push(b64);
    }
    done();
};
Encoder.prototype._flush = function(done) {
    if (this._remainingBytes && this._remainingBytes.length) {
        this._curLine += encode(this._remainingBytes);
    }
    if (this._curLine) {
        this._curLine = wrap(this._curLine, this.options.lineLength);
        this.outputBytes += this._curLine.length;
        this.push(this._curLine, 'ascii');
        this._curLine = '';
    }
    done();
};
/**
 * Creates a transform stream for decoding base64 encoded strings
 *
 * @constructor
 * @param {Object} options Stream options
 */ function Decoder(options) {
    // init Transform
    this.options = options || {};
    this._curLine = '';
    this.inputBytes = 0;
    this.outputBytes = 0;
    Transform.call(this, this.options);
}
util.inherits(Decoder, Transform);
Decoder.prototype._transform = function(chunk, encoding, done) {
    var b64, buf;
    chunk = chunk.toString('ascii');
    if (!chunk || !chunk.length) {
        return done();
    }
    this.inputBytes += chunk.length;
    b64 = this._curLine + chunk;
    this._curLine = '';
    b64 = b64.replace(/[^a-zA-Z0-9+\/=]/g, '');
    if (b64.length % 4) {
        this._curLine = b64.substr(-b64.length % 4);
        if (this._curLine.length == b64.length) {
            b64 = '';
        } else {
            b64 = b64.substr(0, this._curLine.length);
        }
    }
    if (b64) {
        buf = decode(b64);
        this.outputBytes += buf.length;
        this.push(buf);
    }
    done();
};
Decoder.prototype._flush = function(done) {
    var b64, buf;
    if (this._curLine) {
        buf = decode(this._curLine);
        this.outputBytes += buf.length;
        this.push(buf);
        this._curLine = '';
    }
    done();
};
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/libqp/lib/libqp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
var stream = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
var util = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
var Transform = stream.Transform;
// expose to the world
module.exports = {
    encode: encode,
    decode: decode,
    wrap: wrap,
    Encoder: Encoder,
    Decoder: Decoder
};
/**
 * Encodes a Buffer into a Quoted-Printable encoded string
 *
 * @param {Buffer} buffer Buffer to convert
 * @returns {String} Quoted-Printable encoded string
 */ function encode(buffer) {
    if (typeof buffer === 'string') {
        buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](buffer, 'utf-8');
    }
    // usable characters that do not need encoding
    var ranges = [
        // https://tools.ietf.org/html/rfc2045#section-6.7
        [
            0x09
        ],
        [
            0x0A
        ],
        [
            0x0D
        ],
        [
            0x20,
            0x3C
        ],
        [
            0x3E,
            0x7E
        ] // >?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}
    ];
    var result = '';
    var ord;
    for(var i = 0, len = buffer.length; i < len; i++){
        ord = buffer[i];
        // if the char is in allowed range, then keep as is, unless it is a ws in the end of a line
        if (checkRanges(ord, ranges) && !((ord === 0x20 || ord === 0x09) && (i === len - 1 || buffer[i + 1] === 0x0a || buffer[i + 1] === 0x0d))) {
            result += String.fromCharCode(ord);
            continue;
        }
        result += '=' + (ord < 0x10 ? '0' : '') + ord.toString(16).toUpperCase();
    }
    return result;
}
/**
 * Decodes a Quoted-Printable encoded string to a Buffer object
 *
 * @param {String} str Quoted-Printable encoded string
 * @returns {Buffer} Decoded value
 */ function decode(str) {
    str = (str || '').toString().// remove invalid whitespace from the end of lines
    replace(/[\t ]+$/gm, '').// remove soft line breaks
    replace(/\=(?:\r?\n|$)/g, '');
    var encodedBytesCount = (str.match(/\=[\da-fA-F]{2}/g) || []).length, bufferLength = str.length - encodedBytesCount * 2, chr, hex, buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](bufferLength), bufferPos = 0;
    for(var i = 0, len = str.length; i < len; i++){
        chr = str.charAt(i);
        if (chr === '=' && (hex = str.substr(i + 1, 2)) && /[\da-fA-F]{2}/.test(hex)) {
            buffer[bufferPos++] = parseInt(hex, 16);
            i += 2;
            continue;
        }
        buffer[bufferPos++] = chr.charCodeAt(0);
    }
    return buffer;
}
/**
 * Adds soft line breaks to a Quoted-Printable string
 *
 * @param {String} str Quoted-Printable encoded string that might need line wrapping
 * @param {Number} [lineLength=76] Maximum allowed length for a line
 * @returns {String} Soft-wrapped Quoted-Printable encoded string
 */ function wrap(str, lineLength) {
    str = (str || '').toString();
    lineLength = lineLength || 76;
    if (str.length <= lineLength) {
        return str;
    }
    var pos = 0, len = str.length, match, code, line, lineMargin = Math.floor(lineLength / 3), result = '';
    // insert soft linebreaks where needed
    while(pos < len){
        line = str.substr(pos, lineLength);
        if (match = line.match(/\r\n/)) {
            line = line.substr(0, match.index + match[0].length);
            result += line;
            pos += line.length;
            continue;
        }
        if (line.substr(-1) === '\n') {
            // nothing to change here
            result += line;
            pos += line.length;
            continue;
        } else if (match = line.substr(-lineMargin).match(/\n.*?$/)) {
            // truncate to nearest line break
            line = line.substr(0, line.length - (match[0].length - 1));
            result += line;
            pos += line.length;
            continue;
        } else if (line.length > lineLength - lineMargin && (match = line.substr(-lineMargin).match(/[ \t\.,!\?][^ \t\.,!\?]*$/))) {
            // truncate to nearest space
            line = line.substr(0, line.length - (match[0].length - 1));
        } else {
            if (line.match(/\=[\da-f]{0,2}$/i)) {
                // push incomplete encoding sequences to the next line
                if (match = line.match(/\=[\da-f]{0,1}$/i)) {
                    line = line.substr(0, line.length - match[0].length);
                }
                // ensure that utf-8 sequences are not split
                while(line.length > 3 && line.length < len - pos && !line.match(/^(?:=[\da-f]{2}){1,4}$/i) && (match = line.match(/\=[\da-f]{2}$/ig))){
                    code = parseInt(match[0].substr(1, 2), 16);
                    if (code < 128) {
                        break;
                    }
                    line = line.substr(0, line.length - 3);
                    if (code >= 0xC0) {
                        break;
                    }
                }
            }
        }
        if (pos + line.length < len && line.substr(-1) !== '\n') {
            if (line.length === lineLength && line.match(/\=[\da-f]{2}$/i)) {
                line = line.substr(0, line.length - 3);
            } else if (line.length === lineLength) {
                line = line.substr(0, line.length - 1);
            }
            pos += line.length;
            line += '=\r\n';
        } else {
            pos += line.length;
        }
        result += line;
    }
    return result;
}
/**
 * Helper function to check if a number is inside provided ranges
 *
 * @param {Number} nr Number to check for
 * @param {Array} ranges An Array of allowed values
 * @returns {Boolean} True if the value was found inside allowed ranges, false otherwise
 */ function checkRanges(nr, ranges) {
    for(var i = ranges.length - 1; i >= 0; i--){
        if (!ranges[i].length) {
            continue;
        }
        if (ranges[i].length === 1 && nr === ranges[i][0]) {
            return true;
        }
        if (ranges[i].length === 2 && nr >= ranges[i][0] && nr <= ranges[i][1]) {
            return true;
        }
    }
    return false;
}
/**
 * Creates a transform stream for encoding data to Quoted-Printable encoding
 *
 * @constructor
 * @param {Object} options Stream options
 * @param {Number} [options.lineLength=76] Maximum lenght for lines, set to false to disable wrapping
 */ function Encoder(options) {
    // init Transform
    this.options = options || {};
    if (this.options.lineLength !== false) {
        this.options.lineLength = this.options.lineLength || 76;
    }
    this._curLine = '';
    this.inputBytes = 0;
    this.outputBytes = 0;
    Transform.call(this, this.options);
}
util.inherits(Encoder, Transform);
Encoder.prototype._transform = function(chunk, encoding, done) {
    var qp, _self = this;
    if (encoding !== 'buffer') {
        chunk = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](chunk, encoding);
    }
    if (!chunk || !chunk.length) {
        return done();
    }
    this.inputBytes += chunk.length;
    if (this.options.lineLength) {
        qp = this._curLine + encode(chunk);
        qp = wrap(qp, this.options.lineLength);
        qp = qp.replace(/(^|\n)([^\n]*)$/, function(match, lineBreak, lastLine) {
            _self._curLine = lastLine;
            return lineBreak;
        });
        if (qp) {
            this.outputBytes += qp.length;
            this.push(qp);
        }
    } else {
        qp = encode(chunk);
        this.outputBytes += qp.length;
        this.push(qp, 'ascii');
    }
    done();
};
Encoder.prototype._flush = function(done) {
    if (this._curLine) {
        this.outputBytes += this._curLine.length;
        this.push(this._curLine, 'ascii');
    }
    done();
};
/**
 * Creates a transform stream for decoding Quoted-Printable encoded strings
 *
 * @constructor
 * @param {Object} options Stream options
 */ function Decoder(options) {
    // init Transform
    this.options = options || {};
    this._curLine = '';
    this.inputBytes = 0;
    this.outputBytes = 0;
    Transform.call(this, this.options);
}
util.inherits(Decoder, Transform);
Decoder.prototype._transform = function(chunk, encoding, done) {
    var qp, buf, _self = this;
    chunk = chunk.toString('ascii');
    if (!chunk || !chunk.length) {
        return done();
    }
    this.inputBytes += chunk.length;
    qp = this._curLine + chunk;
    this._curLine = '';
    qp = qp.replace(/=[^\n]?$/, function(lastLine) {
        _self._curLine = lastLine;
        return '';
    });
    if (qp) {
        buf = decode(qp);
        this.outputBytes += buf.length;
        this.push(buf);
    }
    done();
};
Decoder.prototype._flush = function(done) {
    var qp, buf;
    if (this._curLine) {
        buf = decode(this._curLine);
        this.outputBytes += buf.length;
        this.push(buf);
    }
    done();
};
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/addressparser/lib/addressparser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// expose to the world
module.exports = addressparser;
/**
 * Parses structured e-mail addresses from an address field
 *
 * Example:
 *
 *    'Name <address@domain>'
 *
 * will be converted to
 *
 *     [{name: 'Name', address: 'address@domain'}]
 *
 * @param {String} str Address field
 * @return {Array} An array of address objects
 */ function addressparser(str) {
    var tokenizer = new Tokenizer(str);
    var tokens = tokenizer.tokenize();
    var addresses = [];
    var address = [];
    var parsedAddresses = [];
    tokens.forEach(function(token) {
        if (token.type === 'operator' && (token.value === ',' || token.value === ';')) {
            if (address.length) {
                addresses.push(address);
            }
            address = [];
        } else {
            address.push(token);
        }
    });
    if (address.length) {
        addresses.push(address);
    }
    addresses.forEach(function(address) {
        address = _handleAddress(address);
        if (address.length) {
            parsedAddresses = parsedAddresses.concat(address);
        }
    });
    return parsedAddresses;
}
/**
 * Converts tokens for a single address into an address object
 *
 * @param {Array} tokens Tokens object
 * @return {Object} Address object
 */ function _handleAddress(tokens) {
    var token;
    var isGroup = false;
    var state = 'text';
    var address;
    var addresses = [];
    var data = {
        address: [],
        comment: [],
        group: [],
        text: []
    };
    var i;
    var len;
    // Filter out <addresses>, (comments) and regular text
    for(i = 0, len = tokens.length; i < len; i++){
        token = tokens[i];
        if (token.type === 'operator') {
            switch(token.value){
                case '<':
                    state = 'address';
                    break;
                case '(':
                    state = 'comment';
                    break;
                case ':':
                    state = 'group';
                    isGroup = true;
                    break;
                default:
                    state = 'text';
            }
        } else if (token.value) {
            if (state === 'address') {
                // handle use case where unquoted name includes a "<"
                // Apple Mail truncates everything between an unexpected < and an address
                // and so will we
                token.value = token.value.replace(/^[^<]*<\s*/, '');
            }
            data[state].push(token.value);
        }
    }
    // If there is no text but a comment, replace the two
    if (!data.text.length && data.comment.length) {
        data.text = data.comment;
        data.comment = [];
    }
    if (isGroup) {
        // http://tools.ietf.org/html/rfc2822#appendix-A.1.3
        data.text = data.text.join(' ');
        addresses.push({
            name: data.text || address && address.name,
            group: data.group.length ? addressparser(data.group.join(',')) : []
        });
    } else {
        // If no address was found, try to detect one from regular text
        if (!data.address.length && data.text.length) {
            for(i = data.text.length - 1; i >= 0; i--){
                if (data.text[i].match(/^[^@\s]+@[^@\s]+$/)) {
                    data.address = data.text.splice(i, 1);
                    break;
                }
            }
            var _regexHandler = function(address) {
                if (!data.address.length) {
                    data.address = [
                        address.trim()
                    ];
                    return ' ';
                } else {
                    return address;
                }
            };
            // still no address
            if (!data.address.length) {
                for(i = data.text.length - 1; i >= 0; i--){
                    // fixed the regex to parse email address correctly when email address has more than one @
                    data.text[i] = data.text[i].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/, _regexHandler).trim();
                    if (data.address.length) {
                        break;
                    }
                }
            }
        }
        // If there's still is no text but a comment exixts, replace the two
        if (!data.text.length && data.comment.length) {
            data.text = data.comment;
            data.comment = [];
        }
        // Keep only the first address occurence, push others to regular text
        if (data.address.length > 1) {
            data.text = data.text.concat(data.address.splice(1));
        }
        // Join values with spaces
        data.text = data.text.join(' ');
        data.address = data.address.join(' ');
        if (!data.address && isGroup) {
            return [];
        } else {
            address = {
                address: data.address || data.text || '',
                name: data.text || data.address || ''
            };
            if (address.address === address.name) {
                if ((address.address || '').match(/@/)) {
                    address.name = '';
                } else {
                    address.address = '';
                }
            }
            addresses.push(address);
        }
    }
    return addresses;
}
/**
 * Creates a Tokenizer object for tokenizing address field strings
 *
 * @constructor
 * @param {String} str Address field string
 */ function Tokenizer(str) {
    this.str = (str || '').toString();
    this.operatorCurrent = '';
    this.operatorExpecting = '';
    this.node = null;
    this.escaped = false;
    this.list = [];
}
/**
 * Operator tokens and which tokens are expected to end the sequence
 */ Tokenizer.prototype.operators = {
    '"': '"',
    '(': ')',
    '<': '>',
    ',': '',
    ':': ';',
    // Semicolons are not a legal delimiter per the RFC2822 grammar other
    // than for terminating a group, but they are also not valid for any
    // other use in this context.  Given that some mail clients have
    // historically allowed the semicolon as a delimiter equivalent to the
    // comma in their UI, it makes sense to treat them the same as a comma
    // when used outside of a group.
    ';': ''
};
/**
 * Tokenizes the original input string
 *
 * @return {Array} An array of operator|text tokens
 */ Tokenizer.prototype.tokenize = function() {
    var chr, list = [];
    for(var i = 0, len = this.str.length; i < len; i++){
        chr = this.str.charAt(i);
        this.checkChar(chr);
    }
    this.list.forEach(function(node) {
        node.value = (node.value || '').toString().trim();
        if (node.value) {
            list.push(node);
        }
    });
    return list;
};
/**
 * Checks if a character is an operator or text and acts accordingly
 *
 * @param {String} chr Character from the address field
 */ Tokenizer.prototype.checkChar = function(chr) {
    if ((chr in this.operators || chr === '\\') && this.escaped) {
        this.escaped = false;
    } else if (this.operatorExpecting && chr === this.operatorExpecting) {
        this.node = {
            type: 'operator',
            value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = '';
        this.escaped = false;
        return;
    } else if (!this.operatorExpecting && chr in this.operators) {
        this.node = {
            type: 'operator',
            value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = this.operators[chr];
        this.escaped = false;
        return;
    }
    if (!this.escaped && chr === '\\') {
        this.escaped = true;
        return;
    }
    if (!this.node) {
        this.node = {
            type: 'text',
            value: ''
        };
        this.list.push(this.node);
    }
    if (this.escaped && chr !== '\\') {
        this.node.value += '\\';
    }
    this.node.value += chr;
    this.escaped = false;
};
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/nodemailer-fetch/lib/cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// module to handle cookies
var urllib = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
var SESSION_TIMEOUT = 1800; // 30 min
module.exports = Cookies;
/**
 * Creates a biskviit cookie jar for managing cookie values in memory
 *
 * @constructor
 * @param {Object} [options] Optional options object
 */ function Cookies(options) {
    this.options = options || {};
    this.cookies = [];
}
/**
 * Stores a cookie string to the cookie storage
 *
 * @param {String} cookieStr Value from the 'Set-Cookie:' header
 * @param {String} url Current URL
 */ Cookies.prototype.set = function(cookieStr, url) {
    var urlparts = urllib.parse(url || '');
    var cookie = this.parse(cookieStr);
    var domain;
    if (cookie.domain) {
        domain = cookie.domain.replace(/^\./, '');
        // do not allow cross origin cookies
        if (// can't be valid if the requested domain is shorter than current hostname
        urlparts.hostname.length < domain.length || // prefix domains with dot to be sure that partial matches are not used
        ('.' + urlparts.hostname).substr(-domain.length + 1) !== '.' + domain) {
            cookie.domain = urlparts.hostname;
        }
    } else {
        cookie.domain = urlparts.hostname;
    }
    if (!cookie.path) {
        cookie.path = this.getPath(urlparts.pathname);
    }
    // if no expire date, then use sessionTimeout value
    if (!cookie.expires) {
        cookie.expires = new Date(Date.now() + (Number(this.options.sessionTimeout || SESSION_TIMEOUT) || SESSION_TIMEOUT) * 1000);
    }
    return this.add(cookie);
};
/**
 * Returns cookie string for the 'Cookie:' header.
 *
 * @param {String} url URL to check for
 * @returns {String} Cookie header or empty string if no matches were found
 */ Cookies.prototype.get = function(url) {
    return this.list(url).map(function(cookie) {
        return cookie.name + '=' + cookie.value;
    }).join('; ');
};
/**
 * Lists all valied cookie objects for the specified URL
 *
 * @param {String} url URL to check for
 * @returns {Array} An array of cookie objects
 */ Cookies.prototype.list = function(url) {
    var result = [];
    var i;
    var cookie;
    for(i = this.cookies.length - 1; i >= 0; i--){
        cookie = this.cookies[i];
        if (this.isExpired(cookie)) {
            this.cookies.splice(i, i);
            continue;
        }
        if (this.match(cookie, url)) {
            result.unshift(cookie);
        }
    }
    return result;
};
/**
 * Parses cookie string from the 'Set-Cookie:' header
 *
 * @param {String} cookieStr String from the 'Set-Cookie:' header
 * @returns {Object} Cookie object
 */ Cookies.prototype.parse = function(cookieStr) {
    var cookie = {};
    (cookieStr || '').toString().split(';').forEach(function(cookiePart) {
        var valueParts = cookiePart.split('=');
        var key = valueParts.shift().trim().toLowerCase();
        var value = valueParts.join('=').trim();
        var domain;
        if (!key) {
            // skip empty parts
            return;
        }
        switch(key){
            case 'expires':
                value = new Date(value);
                // ignore date if can not parse it
                if (value.toString() !== 'Invalid Date') {
                    cookie.expires = value;
                }
                break;
            case 'path':
                cookie.path = value;
                break;
            case 'domain':
                domain = value.toLowerCase();
                if (domain.length && domain.charAt(0) !== '.') {
                    domain = '.' + domain; // ensure preceeding dot for user set domains
                }
                cookie.domain = domain;
                break;
            case 'max-age':
                cookie.expires = new Date(Date.now() + (Number(value) || 0) * 1000);
                break;
            case 'secure':
                cookie.secure = true;
                break;
            case 'httponly':
                cookie.httponly = true;
                break;
            default:
                if (!cookie.name) {
                    cookie.name = key;
                    cookie.value = value;
                }
        }
    });
    return cookie;
};
/**
 * Checks if a cookie object is valid for a specified URL
 *
 * @param {Object} cookie Cookie object
 * @param {String} url URL to check for
 * @returns {Boolean} true if cookie is valid for specifiec URL
 */ Cookies.prototype.match = function(cookie, url) {
    var urlparts = urllib.parse(url || '');
    // check if hostname matches
    // .foo.com also matches subdomains, foo.com does not
    if (urlparts.hostname !== cookie.domain && (cookie.domain.charAt(0) !== '.' || ('.' + urlparts.hostname).substr(-cookie.domain.length) !== cookie.domain)) {
        return false;
    }
    // check if path matches
    var path = this.getPath(urlparts.pathname);
    if (path.substr(0, cookie.path.length) !== cookie.path) {
        return false;
    }
    // check secure argument
    if (cookie.secure && urlparts.protocol !== 'https:') {
        return false;
    }
    return true;
};
/**
 * Adds (or updates/removes if needed) a cookie object to the cookie storage
 *
 * @param {Object} cookie Cookie value to be stored
 */ Cookies.prototype.add = function(cookie) {
    var i;
    var len;
    // nothing to do here
    if (!cookie || !cookie.name) {
        return false;
    }
    // overwrite if has same params
    for(i = 0, len = this.cookies.length; i < len; i++){
        if (this.compare(this.cookies[i], cookie)) {
            // check if the cookie needs to be removed instead
            if (this.isExpired(cookie)) {
                this.cookies.splice(i, 1); // remove expired/unset cookie
                return false;
            }
            this.cookies[i] = cookie;
            return true;
        }
    }
    // add as new if not already expired
    if (!this.isExpired(cookie)) {
        this.cookies.push(cookie);
    }
    return true;
};
/**
 * Checks if two cookie objects are the same
 *
 * @param {Object} a Cookie to check against
 * @param {Object} b Cookie to check against
 * @returns {Boolean} True, if the cookies are the same
 */ Cookies.prototype.compare = function(a, b) {
    return a.name === b.name && a.path === b.path && a.domain === b.domain && a.secure === b.secure && a.httponly === a.httponly;
};
/**
 * Checks if a cookie is expired
 *
 * @param {Object} cookie Cookie object to check against
 * @returns {Boolean} True, if the cookie is expired
 */ Cookies.prototype.isExpired = function(cookie) {
    return cookie.expires && cookie.expires < new Date() || !cookie.value;
};
/**
 * Returns normalized cookie path for an URL path argument
 *
 * @param {String} pathname
 * @returns {String} Normalized path
 */ Cookies.prototype.getPath = function(pathname) {
    var path = (pathname || '/').split('/');
    path.pop(); // remove filename part
    path = path.join('/').trim();
    // ensure path prefix /
    if (path.charAt(0) !== '/') {
        path = '/' + path;
    }
    // ensure path suffix /
    if (path.substr(-1) !== '/') {
        path += '/';
    }
    return path;
};
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/nodemailer-fetch/lib/fetch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
var http = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/stream-http/index.js [app-client] (ecmascript)");
var https = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)");
var urllib = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
var zlib = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/browserify-zlib/index.js [app-client] (ecmascript)");
var PassThrough = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)").PassThrough;
var Cookies = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/nodemailer-fetch/lib/cookies.js [app-client] (ecmascript)");
var MAX_REDIRECTS = 5;
module.exports = function(url, options) {
    return fetch(url, options);
};
module.exports.Cookies = Cookies;
function fetch(url, options) {
    options = options || {};
    options.fetchRes = options.fetchRes || new PassThrough();
    options.cookies = options.cookies || new Cookies();
    options.redirects = options.redirects || 0;
    options.maxRedirects = isNaN(options.maxRedirects) ? MAX_REDIRECTS : options.maxRedirects;
    if (options.cookie) {
        [].concat(options.cookie || []).forEach(function(cookie) {
            options.cookies.set(cookie, url);
        });
        options.cookie = false;
    }
    var fetchRes = options.fetchRes;
    var parsed = urllib.parse(url);
    var method = (options.method || '').toString().trim().toUpperCase() || 'GET';
    var finished = false;
    var cookies;
    var body;
    var handler = parsed.protocol === 'https:' ? https : http;
    var headers = {
        'accept-encoding': 'gzip,deflate'
    };
    Object.keys(options.headers || {}).forEach(function(key) {
        headers[key.toLowerCase().trim()] = options.headers[key];
    });
    if (options.userAgent) {
        headers['User-Agent'] = options.userAgent;
    }
    if (parsed.auth) {
        headers.Authorization = 'Basic ' + new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](parsed.auth).toString('base64');
    }
    if (cookies = options.cookies.get(url)) {
        headers.cookie = cookies;
    }
    if (options.body) {
        if (options.contentType !== false) {
            headers['Content-Type'] = options.contentType || 'application/x-www-form-urlencoded';
        }
        if (typeof options.body.pipe === 'function') {
            // it's a stream
            headers['Transfer-Encoding'] = 'chunked';
            body = options.body;
            body.on('error', function(err) {
                if (finished) {
                    return;
                }
                finished = true;
                fetchRes.emit('error', err);
            });
        } else {
            if (options.body instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
                body = options.body;
            } else if (typeof options.body === 'object') {
                body = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](Object.keys(options.body).map(function(key) {
                    var value = options.body[key].toString().trim();
                    return encodeURIComponent(key) + '=' + encodeURIComponent(value);
                }).join('&'));
            } else {
                body = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](options.body.toString().trim());
            }
            headers['Content-Type'] = options.contentType || 'application/x-www-form-urlencoded';
            headers['Content-Length'] = body.length;
        }
        // if method is not provided, use POST instead of GET
        method = (options.method || '').toString().trim().toUpperCase() || 'POST';
    }
    var req;
    var reqOptions = {
        method: method,
        host: parsed.hostname,
        path: parsed.path,
        port: parsed.port ? parsed.port : parsed.protocol === 'https:' ? 443 : 80,
        headers: headers,
        rejectUnauthorized: false,
        agent: false
    };
    if (options.tls) {
        Object.keys(options.tls).forEach(function(key) {
            reqOptions[key] = options.tls[key];
        });
    }
    try {
        req = handler.request(reqOptions);
    } catch (E) {
        finished = true;
        setImmediate(function() {
            fetchRes.emit('error', E);
        });
        return fetchRes;
    }
    if (options.timeout) {
        req.setTimeout(options.timeout, function() {
            if (finished) {
                return;
            }
            finished = true;
            req.abort();
            fetchRes.emit('error', new Error('Request Tiemout'));
        });
    }
    req.on('error', function(err) {
        if (finished) {
            return;
        }
        finished = true;
        fetchRes.emit('error', err);
    });
    req.on('response', function(res) {
        var inflate;
        if (finished) {
            return;
        }
        switch(res.headers['content-encoding']){
            case 'gzip':
            case 'deflate':
                inflate = zlib.createUnzip();
                break;
        }
        if (res.headers['set-cookie']) {
            [].concat(res.headers['set-cookie'] || []).forEach(function(cookie) {
                options.cookies.set(cookie, url);
            });
        }
        if ([
            301,
            302,
            303,
            307,
            308
        ].indexOf(res.statusCode) >= 0 && res.headers.location) {
            // redirect
            options.redirects++;
            if (options.redirects > options.maxRedirects) {
                finished = true;
                fetchRes.emit('error', new Error('Maximum redirect count exceeded'));
                req.abort();
                return;
            }
            return fetch(urllib.resolve(url, res.headers.location), options);
        }
        if (res.statusCode >= 300) {
            finished = true;
            fetchRes.emit('error', new Error('Invalid status code ' + res.statusCode));
            req.abort();
            return;
        }
        res.on('error', function(err) {
            if (finished) {
                return;
            }
            finished = true;
            fetchRes.emit('error', err);
            req.abort();
        });
        if (inflate) {
            res.pipe(inflate).pipe(fetchRes);
            inflate.on('error', function(err) {
                if (finished) {
                    return;
                }
                finished = true;
                fetchRes.emit('error', err);
                req.abort();
            });
        } else {
            res.pipe(fetchRes);
        }
    });
    setImmediate(function() {
        if (body) {
            try {
                if (typeof body.pipe === 'function') {
                    return body.pipe(req);
                } else {
                    req.write(body);
                }
            } catch (err) {
                finished = true;
                fetchRes.emit('error', err);
                return;
            }
        }
        req.end();
    });
    return fetchRes;
}
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/buildmail/lib/buildmail.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
var libmime = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/buildmail/node_modules/libmime/lib/libmime.js [app-client] (ecmascript)");
var libqp = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/libqp/lib/libqp.js [app-client] (ecmascript)");
var libbase64 = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/libbase64/lib/libbase64.js [app-client] (ecmascript)");
var punycode = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/punycode/punycode.js [app-client] (ecmascript)");
var addressparser = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/addressparser/lib/addressparser.js [app-client] (ecmascript)");
var stream = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
var PassThrough = stream.PassThrough;
var fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var fetch = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/nodemailer-fetch/lib/fetch.js [app-client] (ecmascript)");
var crypto = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
var os = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
module.exports = MimeNode;
/**
 * Creates a new mime tree node. Assumes 'multipart/*' as the content type
 * if it is a branch, anything else counts as leaf. If rootNode is missing from
 * the options, assumes this is the root.
 *
 * @param {String} contentType Define the content type for the node. Can be left blank for attachments (derived from filename)
 * @param {Object} [options] optional options
 * @param {Object} [options.rootNode] root node for this tree
 * @param {Object} [options.parentNode] immediate parent for this node
 * @param {Object} [options.filename] filename for an attachment node
 * @param {String} [options.baseBoundary] shared part of the unique multipart boundary
 * @param {Boolean} [options.keepBcc] If true, do not exclude Bcc from the generated headers
 * @param {String} [options.textEncoding] either 'Q' (the default) or 'B'
 */ function MimeNode(contentType, options) {
    this.nodeCounter = 0;
    options = options || {};
    /**
     * shared part of the unique multipart boundary
     */ this.baseBoundary = options.baseBoundary || Date.now().toString() + Math.random();
    this.boundaryPrefix = options.boundaryPrefix || '----sinikael';
    this.disableFileAccess = !!options.disableFileAccess;
    this.disableUrlAccess = !!options.disableUrlAccess;
    /**
     * If date headers is missing and current node is the root, this value is used instead
     */ this.date = new Date();
    /**
     * Root node for current mime tree
     */ this.rootNode = options.rootNode || this;
    /**
     * If true include Bcc in generated headers (if available)
     */ this.keepBcc = !!options.keepBcc;
    /**
     * If filename is specified but contentType is not (probably an attachment)
     * detect the content type from filename extension
     */ if (options.filename) {
        /**
         * Filename for this node. Useful with attachments
         */ this.filename = options.filename;
        if (!contentType) {
            contentType = libmime.detectMimeType(this.filename.split('.').pop());
        }
    }
    /**
     * Indicates which encoding should be used for header strings: "Q" or "B"
     */ this.textEncoding = (options.textEncoding || '').toString().trim().charAt(0).toUpperCase();
    /**
     * Immediate parent for this node (or undefined if not set)
     */ this.parentNode = options.parentNode;
    /**
     * Hostname for default message-id values
     */ this.hostname = options.hostname;
    /**
     * An array for possible child nodes
     */ this.childNodes = [];
    /**
     * Used for generating unique boundaries (prepended to the shared base)
     */ this._nodeId = ++this.rootNode.nodeCounter;
    /**
     * A list of header values for this node in the form of [{key:'', value:''}]
     */ this._headers = [];
    /**
     * True if the content only uses ASCII printable characters
     * @type {Boolean}
     */ this._isPlainText = false;
    /**
     * True if the content is plain text but has longer lines than allowed
     * @type {Boolean}
     */ this._hasLongLines = false;
    /**
     * If set, use instead this value for envelopes instead of generating one
     * @type {Boolean}
     */ this._envelope = false;
    /**
     * If set then use this value as the stream content instead of building it
     * @type {String|Buffer|Stream}
     */ this._raw = false;
    /**
     * Additional transform streams that the message will be piped before
     * exposing by createReadStream
     * @type {Array}
     */ this._transforms = [];
    /**
     * If content type is set (or derived from the filename) add it to headers
     */ if (contentType) {
        this.setHeader('Content-Type', contentType);
    }
}
/////// PUBLIC METHODS
/**
 * Creates and appends a child node.Arguments provided are passed to MimeNode constructor
 *
 * @param {String} [contentType] Optional content type
 * @param {Object} [options] Optional options object
 * @return {Object} Created node object
 */ MimeNode.prototype.createChild = function(contentType, options) {
    if (!options && typeof contentType === 'object') {
        options = contentType;
        contentType = undefined;
    }
    var node = new MimeNode(contentType, options);
    this.appendChild(node);
    return node;
};
/**
 * Appends an existing node to the mime tree. Removes the node from an existing
 * tree if needed
 *
 * @param {Object} childNode node to be appended
 * @return {Object} Appended node object
 */ MimeNode.prototype.appendChild = function(childNode) {
    if (childNode.rootNode !== this.rootNode) {
        childNode.rootNode = this.rootNode;
        childNode._nodeId = ++this.rootNode.nodeCounter;
    }
    childNode.parentNode = this;
    this.childNodes.push(childNode);
    return childNode;
};
/**
 * Replaces current node with another node
 *
 * @param {Object} node Replacement node
 * @return {Object} Replacement node
 */ MimeNode.prototype.replace = function(node) {
    if (node === this) {
        return this;
    }
    this.parentNode.childNodes.forEach((function(childNode, i) {
        if (childNode === this) {
            node.rootNode = this.rootNode;
            node.parentNode = this.parentNode;
            node._nodeId = this._nodeId;
            this.rootNode = this;
            this.parentNode = undefined;
            node.parentNode.childNodes[i] = node;
        }
    }).bind(this));
    return node;
};
/**
 * Removes current node from the mime tree
 *
 * @return {Object} removed node
 */ MimeNode.prototype.remove = function() {
    if (!this.parentNode) {
        return this;
    }
    for(var i = this.parentNode.childNodes.length - 1; i >= 0; i--){
        if (this.parentNode.childNodes[i] === this) {
            this.parentNode.childNodes.splice(i, 1);
            this.parentNode = undefined;
            this.rootNode = this;
            return this;
        }
    }
};
/**
 * Sets a header value. If the value for selected key exists, it is overwritten.
 * You can set multiple values as well by using [{key:'', value:''}] or
 * {key: 'value'} as the first argument.
 *
 * @param {String|Array|Object} key Header key or a list of key value pairs
 * @param {String} value Header value
 * @return {Object} current node
 */ MimeNode.prototype.setHeader = function(key, value) {
    var added = false, headerValue;
    // Allow setting multiple headers at once
    if (!value && key && typeof key === 'object') {
        // allow {key:'content-type', value: 'text/plain'}
        if (key.key && 'value' in key) {
            this.setHeader(key.key, key.value);
        } else if (Array.isArray(key)) {
            key.forEach((function(i) {
                this.setHeader(i.key, i.value);
            }).bind(this));
        } else {
            Object.keys(key).forEach((function(i) {
                this.setHeader(i, key[i]);
            }).bind(this));
        }
        return this;
    }
    key = this._normalizeHeaderKey(key);
    headerValue = {
        key: key,
        value: value
    };
    // Check if the value exists and overwrite
    for(var i = 0, len = this._headers.length; i < len; i++){
        if (this._headers[i].key === key) {
            if (!added) {
                // replace the first match
                this._headers[i] = headerValue;
                added = true;
            } else {
                // remove following matches
                this._headers.splice(i, 1);
                i--;
                len--;
            }
        }
    }
    // match not found, append the value
    if (!added) {
        this._headers.push(headerValue);
    }
    return this;
};
/**
 * Adds a header value. If the value for selected key exists, the value is appended
 * as a new field and old one is not touched.
 * You can set multiple values as well by using [{key:'', value:''}] or
 * {key: 'value'} as the first argument.
 *
 * @param {String|Array|Object} key Header key or a list of key value pairs
 * @param {String} value Header value
 * @return {Object} current node
 */ MimeNode.prototype.addHeader = function(key, value) {
    // Allow setting multiple headers at once
    if (!value && key && typeof key === 'object') {
        // allow {key:'content-type', value: 'text/plain'}
        if (key.key && key.value) {
            this.addHeader(key.key, key.value);
        } else if (Array.isArray(key)) {
            key.forEach((function(i) {
                this.addHeader(i.key, i.value);
            }).bind(this));
        } else {
            Object.keys(key).forEach((function(i) {
                this.addHeader(i, key[i]);
            }).bind(this));
        }
        return this;
    } else if (Array.isArray(value)) {
        value.forEach((function(val) {
            this.addHeader(key, val);
        }).bind(this));
        return this;
    }
    this._headers.push({
        key: this._normalizeHeaderKey(key),
        value: value
    });
    return this;
};
/**
 * Retrieves the first mathcing value of a selected key
 *
 * @param {String} key Key to search for
 * @retun {String} Value for the key
 */ MimeNode.prototype.getHeader = function(key) {
    key = this._normalizeHeaderKey(key);
    for(var i = 0, len = this._headers.length; i < len; i++){
        if (this._headers[i].key === key) {
            return this._headers[i].value;
        }
    }
};
/**
 * Sets body content for current node. If the value is a string, charset is added automatically
 * to Content-Type (if it is text/*). If the value is a Buffer, you need to specify
 * the charset yourself
 *
 * @param (String|Buffer) content Body content
 * @return {Object} current node
 */ MimeNode.prototype.setContent = function(content) {
    var _self = this;
    this.content = content;
    if (typeof this.content.pipe === 'function') {
        // pre-stream handler. might be triggered if a stream is set as content
        // and 'error' fires before anything is done with this stream
        this._contentErrorHandler = function(err) {
            _self.content.removeListener('error', _self._contentErrorHandler);
            _self.content = err;
        };
        this.content.once('error', this._contentErrorHandler);
    } else if (typeof this.content === 'string') {
        this._isPlainText = libmime.isPlainText(this.content);
        if (this._isPlainText && libmime.hasLongerLines(this.content, 76)) {
            // If there are lines longer than 76 symbols/bytes do not use 7bit
            this._hasLongLines = true;
        }
    }
    return this;
};
MimeNode.prototype.build = function(callback) {
    var stream = this.createReadStream();
    var buf = [];
    var buflen = 0;
    var returned = false;
    stream.on('readable', function() {
        var chunk;
        while((chunk = stream.read()) !== null){
            buf.push(chunk);
            buflen += chunk.length;
        }
    });
    stream.once('error', function(err) {
        if (returned) {
            return;
        }
        returned = true;
        return callback(err);
    });
    stream.once('end', function(chunk) {
        if (returned) {
            return;
        }
        returned = true;
        if (chunk && chunk.length) {
            buf.push(chunk);
            buflen += chunk.length;
        }
        return callback(null, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat(buf, buflen));
    });
};
MimeNode.prototype.getTransferEncoding = function() {
    var transferEncoding = false;
    var contentType = (this.getHeader('Content-Type') || '').toString().toLowerCase().trim();
    if (this.content) {
        transferEncoding = (this.getHeader('Content-Transfer-Encoding') || '').toString().toLowerCase().trim();
        if (!transferEncoding || [
            'base64',
            'quoted-printable'
        ].indexOf(transferEncoding) < 0) {
            if (/^text\//i.test(contentType)) {
                // If there are no special symbols, no need to modify the text
                if (this._isPlainText && !this._hasLongLines) {
                    transferEncoding = '7bit';
                } else if (typeof this.content === 'string' || this.content instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
                    // detect preferred encoding for string value
                    transferEncoding = this._getTextEncoding(this.content) === 'Q' ? 'quoted-printable' : 'base64';
                } else {
                    // we can not check content for a stream, so either use preferred encoding or fallback to QP
                    transferEncoding = this.transferEncoding === 'B' ? 'base64' : 'quoted-printable';
                }
            } else if (!/^(multipart|message)\//i.test(contentType)) {
                transferEncoding = transferEncoding || 'base64';
            }
        }
    }
    return transferEncoding;
};
/**
 * Builds the header block for the mime node. Append \r\n\r\n before writing the content
 *
 * @returns {String} Headers
 */ MimeNode.prototype.buildHeaders = function() {
    var _self = this;
    var transferEncoding = this.getTransferEncoding();
    var headers = [];
    if (transferEncoding) {
        this.setHeader('Content-Transfer-Encoding', transferEncoding);
    }
    if (this.filename && !this.getHeader('Content-Disposition')) {
        this.setHeader('Content-Disposition', 'attachment');
    }
    // Ensure mandatory header fields
    if (this.rootNode === this) {
        if (!this.getHeader('Date')) {
            this.setHeader('Date', this.date.toUTCString().replace(/GMT/, '+0000'));
        }
        // ensure that Message-Id is present
        this.messageId();
        if (!this.getHeader('MIME-Version')) {
            this.setHeader('MIME-Version', '1.0');
        }
    }
    this._headers.forEach((function(header) {
        var key = header.key;
        var value = header.value;
        var structured;
        var param;
        var options = {};
        var formattedHeaders = [
            'From',
            'Sender',
            'To',
            'Cc',
            'Bcc',
            'Reply-To',
            'Date',
            'References'
        ];
        if (value && formattedHeaders.indexOf(key) < 0 && typeof value === 'object') {
            Object.keys(value).forEach(function(key) {
                if (key !== 'value') {
                    options[key] = value[key];
                }
            });
            value = (value.value || '').toString();
            if (!value.trim()) {
                return;
            }
        }
        if (options.prepared) {
            // header value is
            headers.push(key + ': ' + value);
            return;
        }
        switch(header.key){
            case 'Content-Disposition':
                structured = libmime.parseHeaderValue(value);
                if (_self.filename) {
                    structured.params.filename = _self.filename;
                }
                value = libmime.buildHeaderValue(structured);
                break;
            case 'Content-Type':
                structured = libmime.parseHeaderValue(value);
                _self._handleContentType(structured);
                if (structured.value.match(/^text\/plain\b/) && typeof _self.content === 'string' && /[\u0080-\uFFFF]/.test(_self.content)) {
                    structured.params.charset = 'utf-8';
                }
                value = libmime.buildHeaderValue(structured);
                if (_self.filename) {
                    // add support for non-compliant clients like QQ webmail
                    // we can't build the value with buildHeaderValue as the value is non standard and
                    // would be converted to parameter continuation encoding that we do not want
                    param = this._encodeWords(_self.filename);
                    if (param !== _self.filename || /[\s"=;]/.test(param)) {
                        // include value in quotes if needed
                        param = '"' + param + '"';
                    }
                    value += '; name=' + param;
                }
                break;
            case 'Bcc':
                if (!_self.keepBcc) {
                    // skip BCC values
                    return;
                }
                break;
        }
        value = _self._encodeHeaderValue(key, value);
        // skip empty lines
        if (!(value || '').toString().trim()) {
            return;
        }
        headers.push(libmime.foldLines(key + ': ' + value, 76));
    }).bind(this));
    return headers.join('\r\n');
};
/**
 * Streams the rfc2822 message from the current node. If this is a root node,
 * mandatory header fields are set if missing (Date, Message-Id, MIME-Version)
 *
 * @return {String} Compiled message
 */ MimeNode.prototype.createReadStream = function(options) {
    options = options || {};
    var outputStream = new PassThrough(options);
    var transform;
    this.stream(outputStream, options, function(err) {
        if (err) {
            outputStream.emit('error', err);
            return;
        }
        outputStream.end();
    });
    for(var i = 0, len = this._transforms.length; i < len; i++){
        transform = typeof this._transforms[i] === 'function' ? this._transforms[i]() : this._transforms[i];
        outputStream.once('error', function(err) {
            transform.emit('error', err);
        });
        outputStream = outputStream.pipe(transform);
    }
    return outputStream;
};
/**
 * Appends a transform stream object to the transforms list. Final output
 * is passed through this stream before exposing
 *
 * @param {Object} transform Read-Write stream
 */ MimeNode.prototype.transform = function(transform) {
    this._transforms.push(transform);
};
MimeNode.prototype.stream = function(outputStream, options, done) {
    var _self = this;
    var transferEncoding = this.getTransferEncoding();
    var contentStream;
    var localStream;
    // protect actual callback against multiple triggering
    var returned = false;
    var callback = function(err) {
        if (returned) {
            return;
        }
        returned = true;
        done(err);
    };
    // pushes node content
    function sendContent() {
        if (_self.content) {
            if (Object.prototype.toString.call(_self.content) === '[object Error]') {
                // content is already errored
                return callback(_self.content);
            }
            if (typeof _self.content.pipe === 'function') {
                _self.content.removeListener('error', _self._contentErrorHandler);
                _self._contentErrorHandler = function(err) {
                    return callback(err);
                };
                _self.content.once('error', _self._contentErrorHandler);
            }
            if ([
                'quoted-printable',
                'base64'
            ].indexOf(transferEncoding) >= 0) {
                contentStream = new (transferEncoding === 'base64' ? libbase64 : libqp).Encoder(options);
                contentStream.pipe(outputStream, {
                    end: false
                });
                contentStream.once('end', finalize);
                contentStream.once('error', function(err) {
                    return callback(err);
                });
                localStream = _self._getStream(_self.content);
                localStream.pipe(contentStream);
            } else {
                // anything that is not QP or Base54 passes as-is
                localStream = _self._getStream(_self.content);
                localStream.pipe(outputStream, {
                    end: false
                });
                localStream.once('end', finalize);
            }
            localStream.once('error', function(err) {
                return callback(err);
            });
            return;
        } else {
            return setImmediate(finalize);
        }
    }
    // for multipart nodes, push child nodes
    // for content nodes end the stream
    function finalize() {
        var childId = 0;
        var processChildNode = function() {
            if (childId >= _self.childNodes.length) {
                outputStream.write('\r\n--' + _self.boundary + '--\r\n');
                return callback();
            }
            var child = _self.childNodes[childId++];
            outputStream.write((childId > 1 ? '\r\n' : '') + '--' + _self.boundary + '\r\n');
            child.stream(outputStream, options, function(err) {
                if (err) {
                    return callback(err);
                }
                setImmediate(processChildNode);
            });
        };
        if (_self.multipart) {
            setImmediate(processChildNode);
        } else {
            return callback();
        }
    }
    if (this._raw) {
        setImmediate(function() {
            if (Object.prototype.toString.call(_self._raw) === '[object Error]') {
                // content is already errored
                return callback(_self._raw);
            }
            // remove default error handler (if set)
            if (typeof _self._raw.pipe === 'function') {
                _self._raw.removeListener('error', _self._contentErrorHandler);
            }
            var raw = _self._getStream(_self._raw);
            raw.pipe(outputStream, {
                end: false
            });
            raw.on('error', function(err) {
                outputStream.emit('error', err);
            });
            raw.on('end', finalize);
        });
    } else {
        outputStream.write(this.buildHeaders() + '\r\n\r\n');
        setImmediate(sendContent);
    }
};
/**
 * Sets envelope to be used instead of the generated one
 *
 * @return {Object} SMTP envelope in the form of {from: 'from@example.com', to: ['to@example.com']}
 */ MimeNode.prototype.setEnvelope = function(envelope) {
    var list;
    this._envelope = {
        from: false,
        to: []
    };
    if (envelope.from) {
        list = [];
        this._convertAddresses(this._parseAddresses(envelope.from), list);
        list = list.filter(function(address) {
            return address && address.address;
        });
        if (list.length && list[0]) {
            this._envelope.from = list[0].address;
        }
    }
    [
        'to',
        'cc',
        'bcc'
    ].forEach((function(key) {
        if (envelope[key]) {
            this._convertAddresses(this._parseAddresses(envelope[key]), this._envelope.to);
        }
    }).bind(this));
    this._envelope.to = this._envelope.to.map(function(to) {
        return to.address;
    }).filter(function(address) {
        return address;
    });
    return this;
};
/**
 * Generates and returns an object with parsed address fields
 *
 * @return {Object} Address object
 */ MimeNode.prototype.getAddresses = function() {
    var addresses = {};
    this._headers.forEach((function(header) {
        var key = header.key.toLowerCase();
        if ([
            'from',
            'sender',
            'reply-to',
            'to',
            'cc',
            'bcc'
        ].indexOf(key) >= 0) {
            if (!Array.isArray(addresses[key])) {
                addresses[key] = [];
            }
            this._convertAddresses(this._parseAddresses(header.value), addresses[key]);
        }
    }).bind(this));
    return addresses;
};
/**
 * Generates and returns SMTP envelope with the sender address and a list of recipients addresses
 *
 * @return {Object} SMTP envelope in the form of {from: 'from@example.com', to: ['to@example.com']}
 */ MimeNode.prototype.getEnvelope = function() {
    if (this._envelope) {
        return this._envelope;
    }
    var envelope = {
        from: false,
        to: []
    };
    this._headers.forEach((function(header) {
        var list = [];
        if (header.key === 'From' || !envelope.from && [
            'Reply-To',
            'Sender'
        ].indexOf(header.key) >= 0) {
            this._convertAddresses(this._parseAddresses(header.value), list);
            if (list.length && list[0]) {
                envelope.from = list[0].address;
            }
        } else if ([
            'To',
            'Cc',
            'Bcc'
        ].indexOf(header.key) >= 0) {
            this._convertAddresses(this._parseAddresses(header.value), envelope.to);
        }
    }).bind(this));
    envelope.to = envelope.to.map(function(to) {
        return to.address;
    });
    return envelope;
};
/**
 * Returns Message-Id value. If it does not exist, then creates one
 *
 * @return {String} Message-Id value
 */ MimeNode.prototype.messageId = function() {
    var messageId = this.getHeader('Message-ID');
    // You really should define your own Message-Id field!
    if (!messageId) {
        messageId = this._generateMessageId();
        this.setHeader('Message-ID', messageId);
    }
    return messageId;
};
/**
 * Sets pregenerated content that will be used as the output of this node
 *
 * @param {String|Buffer|Stream} Raw MIME contents
 */ MimeNode.prototype.setRaw = function(raw) {
    var _self = this;
    this._raw = raw;
    if (this._raw && typeof this._raw.pipe === 'function') {
        // pre-stream handler. might be triggered if a stream is set as content
        // and 'error' fires before anything is done with this stream
        this._contentErrorHandler = function(err) {
            _self._raw.removeListener('error', _self._contentErrorHandler);
            _self._raw = err;
        };
        _self._raw.once('error', this._contentErrorHandler);
    }
    return this;
};
/////// PRIVATE METHODS
/**
 * Detects and returns handle to a stream related with the content.
 *
 * @param {Mixed} content Node content
 * @returns {Object} Stream object
 */ MimeNode.prototype._getStream = function(content) {
    var contentStream;
    if (typeof content.pipe === 'function') {
        // assume as stream
        return content;
    } else if (content && typeof content.path === 'string' && !content.href) {
        if (this.disableFileAccess) {
            contentStream = new PassThrough();
            setImmediate(function() {
                contentStream.emit('error', new Error('File access rejected for ' + content.path));
            });
            return contentStream;
        }
        // read file
        return fs.createReadStream(content.path);
    } else if (content && typeof content.href === 'string') {
        if (this.disableUrlAccess) {
            contentStream = new PassThrough();
            setImmediate(function() {
                contentStream.emit('error', new Error('Url access rejected for ' + content.href));
            });
            return contentStream;
        }
        // fetch URL
        return fetch(content.href);
    } else {
        // pass string or buffer content as a stream
        contentStream = new PassThrough();
        setImmediate(function() {
            contentStream.end(content || '');
        });
        return contentStream;
    }
};
/**
 * Parses addresses. Takes in a single address or an array or an
 * array of address arrays (eg. To: [[first group], [second group],...])
 *
 * @param {Mixed} addresses Addresses to be parsed
 * @return {Array} An array of address objects
 */ MimeNode.prototype._parseAddresses = function(addresses) {
    return [].concat.apply([], [].concat(addresses).map((function(address) {
        if (address && address.address) {
            address = this._convertAddresses(address);
        }
        return addressparser(address);
    }).bind(this)));
};
/**
 * Normalizes a header key, uses Camel-Case form, except for uppercase MIME-
 *
 * @param {String} key Key to be normalized
 * @return {String} key in Camel-Case form
 */ MimeNode.prototype._normalizeHeaderKey = function(key) {
    return (key || '').toString().// no newlines in keys
    replace(/\r?\n|\r/g, ' ').trim().toLowerCase().// use uppercase words, except MIME
    replace(/^X\-SMTPAPI$|^(MIME|DKIM)\b|^[a-z]|\-(SPF|FBL|ID|MD5)$|\-[a-z]/ig, function(c) {
        return c.toUpperCase();
    }).// special case
    replace(/^Content\-Features$/i, 'Content-features');
};
/**
 * Checks if the content type is multipart and defines boundary if needed.
 * Doesn't return anything, modifies object argument instead.
 *
 * @param {Object} structured Parsed header value for 'Content-Type' key
 */ MimeNode.prototype._handleContentType = function(structured) {
    this.contentType = structured.value.trim().toLowerCase();
    this.multipart = this.contentType.split('/').reduce(function(prev, value) {
        return prev === 'multipart' ? value : false;
    });
    if (this.multipart) {
        this.boundary = structured.params.boundary = structured.params.boundary || this.boundary || this._generateBoundary();
    } else {
        this.boundary = false;
    }
};
/**
 * Generates a multipart boundary value
 *
 * @return {String} boundary value
 */ MimeNode.prototype._generateBoundary = function() {
    return this.rootNode.boundaryPrefix + '-?=_' + this._nodeId + '-' + this.rootNode.baseBoundary;
};
/**
 * Encodes a header value for use in the generated rfc2822 email.
 *
 * @param {String} key Header key
 * @param {String} value Header value
 */ MimeNode.prototype._encodeHeaderValue = function(key, value) {
    key = this._normalizeHeaderKey(key);
    switch(key){
        // Structured headers
        case 'From':
        case 'Sender':
        case 'To':
        case 'Cc':
        case 'Bcc':
        case 'Reply-To':
            return this._convertAddresses(this._parseAddresses(value));
        // values enclosed in <>
        case 'Message-ID':
        case 'In-Reply-To':
        case 'Content-Id':
            value = (value || '').toString().replace(/\r?\n|\r/g, ' ');
            if (value.charAt(0) !== '<') {
                value = '<' + value;
            }
            if (value.charAt(value.length - 1) !== '>') {
                value = value + '>';
            }
            return value;
        // space separated list of values enclosed in <>
        case 'References':
            value = [].concat.apply([], [].concat(value || '').map(function(elm) {
                elm = (elm || '').toString().replace(/\r?\n|\r/g, ' ').trim();
                return elm.replace(/<[^>]*>/g, function(str) {
                    return str.replace(/\s/g, '');
                }).split(/\s+/);
            })).map(function(elm) {
                if (elm.charAt(0) !== '<') {
                    elm = '<' + elm;
                }
                if (elm.charAt(elm.length - 1) !== '>') {
                    elm = elm + '>';
                }
                return elm;
            });
            return value.join(' ').trim();
        case 'Date':
            if (Object.prototype.toString.call(value) === '[object Date]') {
                return value.toUTCString().replace(/GMT/, '+0000');
            }
            value = (value || '').toString().replace(/\r?\n|\r/g, ' ');
            return this._encodeWords(value);
        default:
            value = (value || '').toString().replace(/\r?\n|\r/g, ' ');
            // encodeWords only encodes if needed, otherwise the original string is returned
            return this._encodeWords(value);
    }
};
/**
 * Rebuilds address object using punycode and other adjustments
 *
 * @param {Array} addresses An array of address objects
 * @param {Array} [uniqueList] An array to be populated with addresses
 * @return {String} address string
 */ MimeNode.prototype._convertAddresses = function(addresses, uniqueList) {
    var values = [];
    uniqueList = uniqueList || [];
    [].concat(addresses || []).forEach((function(address) {
        if (address.address) {
            address.address = address.address.replace(/@.+$/, function(domain) {
                // usernames are not touched and are kept as is even if these include unicode
                // domains are punycoded by default
                // 'jõgeva.ee' will be converted to 'xn--jgeva-dua.ee'
                // non-unicode domains are left as is
                return '@' + punycode.toASCII(domain.substr(1));
            });
            if (!address.name) {
                values.push(address.address);
            } else if (address.name) {
                values.push(this._encodeAddressName(address.name) + ' <' + address.address + '>');
            }
            if (address.address) {
                if (!uniqueList.filter(function(a) {
                    return a.address === address.address;
                }).length) {
                    uniqueList.push(address);
                }
            }
        } else if (address.group) {
            values.push(this._encodeAddressName(address.name) + ':' + (address.group.length ? this._convertAddresses(address.group, uniqueList) : '').trim() + ';');
        }
    }).bind(this));
    return values.join(', ');
};
/**
 * If needed, mime encodes the name part
 *
 * @param {String} name Name part of an address
 * @returns {String} Mime word encoded string if needed
 */ MimeNode.prototype._encodeAddressName = function(name) {
    if (!/^[\w ']*$/.test(name)) {
        if (/^[\x20-\x7e]*$/.test(name)) {
            return '"' + name.replace(/([\\"])/g, '\\$1') + '"';
        } else {
            return libmime.encodeWord(name, this._getTextEncoding(name), 52);
        }
    }
    return name;
};
/**
 * If needed, mime encodes the name part
 *
 * @param {String} name Name part of an address
 * @returns {String} Mime word encoded string if needed
 */ MimeNode.prototype._encodeWords = function(value) {
    return libmime.encodeWords(value, this._getTextEncoding(value), 52);
};
/**
 * Detects best mime encoding for a text value
 *
 * @param {String} value Value to check for
 * @return {String} either 'Q' or 'B'
 */ MimeNode.prototype._getTextEncoding = function(value) {
    value = (value || '').toString();
    var encoding = this.textEncoding;
    var latinLen;
    var nonLatinLen;
    if (!encoding) {
        // count latin alphabet symbols and 8-bit range symbols + control symbols
        // if there are more latin characters, then use quoted-printable
        // encoding, otherwise use base64
        nonLatinLen = (value.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\u0080-\uFFFF]/g) || []).length;
        latinLen = (value.match(/[a-z]/gi) || []).length;
        // if there are more latin symbols than binary/unicode, then prefer Q, otherwise B
        encoding = nonLatinLen < latinLen ? 'Q' : 'B';
    }
    return encoding;
};
/**
 * Generates a message id
 *
 * @return {String} Random Message-ID value
 */ MimeNode.prototype._generateMessageId = function() {
    return '<' + [
        2,
        2,
        2,
        6
    ].reduce(// crux to generate UUID-like random strings
    function(prev, len) {
        return prev + '-' + crypto.randomBytes(len).toString('hex');
    }, crypto.randomBytes(4).toString('hex')) + '@' + // try to use the domain of the FROM address or fallback to server hostname
    (this.getEnvelope().from || this.hostname || os.hostname() || 'localhost').split('@').pop() + '>';
};
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/mailcomposer/lib/mailcomposer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
var BuildMail = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/buildmail/lib/buildmail.js [app-client] (ecmascript)");
var libmime = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/mailcomposer/node_modules/libmime/lib/libmime.js [app-client] (ecmascript)");
module.exports = function(mail) {
    return new MailComposer(mail).compile();
};
module.exports.MailComposer = MailComposer;
/**
 * Creates the object for composing a BuildMail instance out from the mail options
 *
 * @constructor
 * @param {Object} mail Mail options
 */ function MailComposer(mail) {
    if (!(this instanceof MailComposer)) {
        return new MailComposer(mail);
    }
    this.mail = mail || {};
    this.message = false;
}
/**
 * Builds BuildMail instance
 */ MailComposer.prototype.compile = function() {
    this._alternatives = this.getAlternatives();
    this._htmlNode = this._alternatives.filter(function(alternative) {
        return /^text\/html\b/i.test(alternative.contentType);
    }).pop();
    this._attachments = this.getAttachments(!!this._htmlNode);
    this._useRelated = !!(this._htmlNode && this._attachments.related.length);
    this._useAlternative = this._alternatives.length > 1;
    this._useMixed = this._attachments.attached.length > 1 || this._alternatives.length && this._attachments.attached.length === 1;
    // Compose MIME tree
    if (this.mail.raw) {
        this.message = new BuildMail().setRaw(this.mail.raw);
    } else if (this._useMixed) {
        this.message = this._createMixed();
    } else if (this._useAlternative) {
        this.message = this._createAlternative();
    } else if (this._useRelated) {
        this.message = this._createRelated();
    } else {
        this.message = this._createContentNode(false, [].concat(this._alternatives || []).concat(this._attachments.attached || []).shift() || {
            contentType: 'text/plain',
            content: ''
        });
    }
    // Add custom headers
    if (this.mail.headers) {
        this.message.addHeader(this.mail.headers);
    }
    // Add headers to the root node, always overrides custom headers
    [
        'from',
        'sender',
        'to',
        'cc',
        'bcc',
        'reply-to',
        'in-reply-to',
        'references',
        'subject',
        'message-id',
        'date'
    ].forEach((function(header) {
        var key = header.replace(/-(\w)/g, function(o, c) {
            return c.toUpperCase();
        });
        if (this.mail[key]) {
            this.message.setHeader(header, this.mail[key]);
        }
    }).bind(this));
    // Sets custom envelope
    if (this.mail.envelope) {
        this.message.setEnvelope(this.mail.envelope);
    }
    // ensure Message-Id value
    this.message.messageId();
    return this.message;
};
/**
 * List all attachments. Resulting attachment objects can be used as input for BuildMail nodes
 *
 * @param {Boolean} findRelated If true separate related attachments from attached ones
 * @returns {Object} An object of arrays (`related` and `attached`)
 */ MailComposer.prototype.getAttachments = function(findRelated) {
    var attachments = [].concat(this.mail.attachments || []).map((function(attachment, i) {
        var data;
        var isMessageNode = /^message\//i.test(attachment.contentType);
        if (/^data:/i.test(attachment.path || attachment.href)) {
            attachment = this._processDataUrl(attachment);
        }
        data = {
            contentType: attachment.contentType || libmime.detectMimeType(attachment.filename || attachment.path || attachment.href || 'bin'),
            contentDisposition: attachment.contentDisposition || (isMessageNode ? 'inline' : 'attachment'),
            contentTransferEncoding: attachment.contentTransferEncoding
        };
        if (attachment.filename) {
            data.filename = attachment.filename;
        } else if (!isMessageNode && attachment.filename !== false) {
            data.filename = (attachment.path || attachment.href || '').split('/').pop() || 'attachment-' + (i + 1);
            if (data.filename.indexOf('.') < 0) {
                data.filename += '.' + libmime.detectExtension(data.contentType);
            }
        }
        if (/^https?:\/\//i.test(attachment.path)) {
            attachment.href = attachment.path;
            attachment.path = undefined;
        }
        if (attachment.cid) {
            data.cid = attachment.cid;
        }
        if (attachment.raw) {
            data.raw = attachment.raw;
        } else if (attachment.path) {
            data.content = {
                path: attachment.path
            };
        } else if (attachment.href) {
            data.content = {
                href: attachment.href
            };
        } else {
            data.content = attachment.content || '';
        }
        if (attachment.encoding) {
            data.encoding = attachment.encoding;
        }
        if (attachment.headers) {
            data.headers = attachment.headers;
        }
        return data;
    }).bind(this));
    if (!findRelated) {
        return {
            attached: attachments,
            related: []
        };
    } else {
        return {
            attached: attachments.filter(function(attachment) {
                return !attachment.cid;
            }),
            related: attachments.filter(function(attachment) {
                return !!attachment.cid;
            })
        };
    }
};
/**
 * List alternatives. Resulting objects can be used as input for BuildMail nodes
 *
 * @returns {Array} An array of alternative elements. Includes the `text` and `html` values as well
 */ MailComposer.prototype.getAlternatives = function() {
    var alternatives = [], text, html, watchHtml, icalEvent;
    if (this.mail.text) {
        if (typeof this.mail.text === 'object' && (this.mail.text.content || this.mail.text.path || this.mail.text.href || this.mail.text.raw)) {
            text = this.mail.text;
        } else {
            text = {
                content: this.mail.text
            };
        }
        text.contentType = 'text/plain' + (!text.encoding && libmime.isPlainText(text.content) ? '' : '; charset=utf-8');
    }
    if (this.mail.watchHtml) {
        if (typeof this.mail.watchHtml === 'object' && (this.mail.watchHtml.content || this.mail.watchHtml.path || this.mail.watchHtml.href || this.mail.watchHtml.raw)) {
            watchHtml = this.mail.watchHtml;
        } else {
            watchHtml = {
                content: this.mail.watchHtml
            };
        }
        watchHtml.contentType = 'text/watch-html' + (!watchHtml.encoding && libmime.isPlainText(watchHtml.content) ? '' : '; charset=utf-8');
    }
    if (this.mail.icalEvent) {
        if (typeof this.mail.icalEvent === 'object' && (this.mail.icalEvent.content || this.mail.icalEvent.path || this.mail.icalEvent.href || this.mail.icalEvent.raw)) {
            icalEvent = this.mail.icalEvent;
        } else {
            icalEvent = {
                content: this.mail.icalEvent
            };
        }
        icalEvent.contentType = 'text/calendar; charset="utf-8"; method=' + (icalEvent.method || 'PUBLISH').toString().trim().toUpperCase();
        if (!icalEvent.headers) {
            icalEvent.headers = {};
        }
        icalEvent.headers['Content-Transfer-Encoding'] = 'base64';
    }
    if (this.mail.html) {
        if (typeof this.mail.html === 'object' && (this.mail.html.content || this.mail.html.path || this.mail.html.href || this.mail.html.raw)) {
            html = this.mail.html;
        } else {
            html = {
                content: this.mail.html
            };
        }
        html.contentType = 'text/html' + (!html.encoding && libmime.isPlainText(html.content) ? '' : '; charset=utf-8');
    }
    [].concat(text || []).concat(watchHtml || []).concat(html || []).concat(icalEvent || []).concat(this.mail.alternatives || []).forEach((function(alternative) {
        var data;
        if (/^data:/i.test(alternative.path || alternative.href)) {
            alternative = this._processDataUrl(alternative);
        }
        data = {
            contentType: alternative.contentType || libmime.detectMimeType(alternative.filename || alternative.path || alternative.href || 'txt'),
            contentTransferEncoding: alternative.contentTransferEncoding
        };
        if (alternative.filename) {
            data.filename = alternative.filename;
        }
        if (/^https?:\/\//i.test(alternative.path)) {
            alternative.href = alternative.path;
            alternative.path = undefined;
        }
        if (alternative.raw) {
            data.raw = alternative.raw;
        } else if (alternative.path) {
            data.content = {
                path: alternative.path
            };
        } else if (alternative.href) {
            data.content = {
                href: alternative.href
            };
        } else {
            data.content = alternative.content || '';
        }
        if (alternative.encoding) {
            data.encoding = alternative.encoding;
        }
        if (alternative.headers) {
            data.headers = alternative.headers;
        }
        alternatives.push(data);
    }).bind(this));
    return alternatives;
};
/**
 * Builds multipart/mixed node. It should always contain different type of elements on the same level
 * eg. text + attachments
 *
 * @param {Object} parentNode Parent for this note. If it does not exist, a root node is created
 * @returns {Object} BuildMail node element
 */ MailComposer.prototype._createMixed = function(parentNode) {
    var node;
    if (!parentNode) {
        node = new BuildMail('multipart/mixed', {
            baseBoundary: this.mail.baseBoundary,
            textEncoding: this.mail.textEncoding,
            boundaryPrefix: this.mail.boundaryPrefix,
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    } else {
        node = parentNode.createChild('multipart/mixed', {
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    }
    if (this._useAlternative) {
        this._createAlternative(node);
    } else if (this._useRelated) {
        this._createRelated(node);
    }
    [].concat(!this._useAlternative && this._alternatives || []).concat(this._attachments.attached || []).forEach((function(element) {
        // if the element is a html node from related subpart then ignore it
        if (!this._useRelated || element !== this._htmlNode) {
            this._createContentNode(node, element);
        }
    }).bind(this));
    return node;
};
/**
 * Builds multipart/alternative node. It should always contain same type of elements on the same level
 * eg. text + html view of the same data
 *
 * @param {Object} parentNode Parent for this note. If it does not exist, a root node is created
 * @returns {Object} BuildMail node element
 */ MailComposer.prototype._createAlternative = function(parentNode) {
    var node;
    if (!parentNode) {
        node = new BuildMail('multipart/alternative', {
            baseBoundary: this.mail.baseBoundary,
            textEncoding: this.mail.textEncoding,
            boundaryPrefix: this.mail.boundaryPrefix,
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    } else {
        node = parentNode.createChild('multipart/alternative', {
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    }
    this._alternatives.forEach((function(alternative) {
        if (this._useRelated && this._htmlNode === alternative) {
            this._createRelated(node);
        } else {
            this._createContentNode(node, alternative);
        }
    }).bind(this));
    return node;
};
/**
 * Builds multipart/related node. It should always contain html node with related attachments
 *
 * @param {Object} parentNode Parent for this note. If it does not exist, a root node is created
 * @returns {Object} BuildMail node element
 */ MailComposer.prototype._createRelated = function(parentNode) {
    var node;
    if (!parentNode) {
        node = new BuildMail('multipart/related; type="text/html"', {
            baseBoundary: this.mail.baseBoundary,
            textEncoding: this.mail.textEncoding,
            boundaryPrefix: this.mail.boundaryPrefix,
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    } else {
        node = parentNode.createChild('multipart/related; type="text/html"', {
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    }
    this._createContentNode(node, this._htmlNode);
    this._attachments.related.forEach((function(alternative) {
        this._createContentNode(node, alternative);
    }).bind(this));
    return node;
};
/**
 * Creates a regular node with contents
 *
 * @param {Object} parentNode Parent for this note. If it does not exist, a root node is created
 * @param {Object} element Node data
 * @returns {Object} BuildMail node element
 */ MailComposer.prototype._createContentNode = function(parentNode, element) {
    element = element || {};
    element.content = element.content || '';
    var node;
    var encoding = (element.encoding || 'utf8').toString().toLowerCase().replace(/[-_\s]/g, '');
    if (!parentNode) {
        node = new BuildMail(element.contentType, {
            filename: element.filename,
            baseBoundary: this.mail.baseBoundary,
            textEncoding: this.mail.textEncoding,
            boundaryPrefix: this.mail.boundaryPrefix,
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    } else {
        node = parentNode.createChild(element.contentType, {
            filename: element.filename,
            disableUrlAccess: this.mail.disableUrlAccess,
            disableFileAccess: this.mail.disableFileAccess
        });
    }
    // add custom headers
    if (element.headers) {
        node.addHeader(element.headers);
    }
    if (element.cid) {
        node.setHeader('Content-Id', '<' + element.cid.replace(/[<>]/g, '') + '>');
    }
    if (element.contentTransferEncoding) {
        node.setHeader('Content-Transfer-Encoding', element.contentTransferEncoding);
    } else if (this.mail.encoding && /^text\//i.test(element.contentType)) {
        node.setHeader('Content-Transfer-Encoding', this.mail.encoding);
    }
    if (!/^text\//i.test(element.contentType) || element.contentDisposition) {
        node.setHeader('Content-Disposition', element.contentDisposition || (element.cid ? 'inline' : 'attachment'));
    }
    if (typeof element.content === 'string' && [
        'utf8',
        'usascii',
        'ascii'
    ].indexOf(encoding) < 0) {
        element.content = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](element.content, encoding);
    }
    // prefer pregenerated raw content
    if (element.raw) {
        node.setRaw(element.raw);
    } else {
        node.setContent(element.content);
    }
    return node;
};
/**
 * Parses data uri and converts it to a Buffer
 *
 * @param {Object} element Content element
 * @return {Object} Parsed element
 */ MailComposer.prototype._processDataUrl = function(element) {
    var parts = (element.path || element.href).match(/^data:((?:[^;]*;)*(?:[^,]*)),(.*)$/i);
    if (!parts) {
        return element;
    }
    element.content = /\bbase64$/i.test(parts[1]) ? new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](parts[2], 'base64') : new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Pets$2f$ambilux$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](decodeURIComponent(parts[2]));
    if ('path' in element) {
        element.path = false;
    }
    if ('href' in element) {
        element.href = false;
    }
    parts[1].split(';').forEach(function(item) {
        if (/^\w+\/[^\/]+$/i.test(item)) {
            element.contentType = element.contentType || item.toLowerCase();
        }
    });
    return element;
};
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/dkim-signer/lib/dkim.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var crypto = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
var libmime = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/libmime/lib/libmime.js [app-client] (ecmascript)");
var punycode = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/next/dist/compiled/punycode/punycode.js [app-client] (ecmascript)");
/**
 * @namespace DKIM Signer module
 * @name dkimsign
 */ module.exports.DKIMSign = DKIMSign;
module.exports.generateDKIMHeader = generateDKIMHeader;
module.exports.sha256 = sha256;
/**
 * <p>Sign an email with provided DKIM key, uses RSA-SHA256.</p>
 *
 * @memberOf dkimsign
 * @param {String} email Full e-mail source complete with headers and body to sign
 * @param {Object} options DKIM options
 * @param {String} [options.headerFieldNames='from:to:cc:subject'] Header fields to sign
 * @param {String} options.privateKey DKMI private key
 * @param {String} options.domainName Domain name to use for signing (ie: 'domain.com')
 * @param {String} options.keySelector Selector for the DKMI public key (ie. 'dkim' if you have set up a TXT record for 'dkim._domainkey.domain.com')
 *
 * @return {String} Signed DKIM-Signature header field for prepending
 */ function DKIMSign(email, options) {
    options = options || {};
    email = (email || '').toString('utf-8');
    var match = email.match(/^\r?\n|(?:\r?\n){2}/), headers = match && email.substr(0, match.index) || '', body = match && email.substr(match.index + match[0].length) || email;
    // all listed fields from RFC4871 #5.5
    // Some prociders do not like Message-Id, Date, Bounces-To and Return-Path
    // fields in DKIM signed data so these are not automatcially included
    var defaultFieldNames = 'From:Sender:Reply-To:Subject:To:' + 'Cc:MIME-Version:Content-Type:Content-Transfer-Encoding:Content-ID:' + 'Content-Description:Resent-Date:Resent-From:Resent-Sender:' + 'Resent-To:Resent-Cc:Resent-Message-ID:In-Reply-To:References:' + 'List-Id:List-Help:List-Unsubscribe:List-Subscribe:List-Post:' + 'List-Owner:List-Archive';
    var dkim = generateDKIMHeader(options.domainName, options.keySelector, options.headerFieldNames || defaultFieldNames, headers, body), canonicalizedHeaderData = DKIMCanonicalizer.relaxedHeaders(headers, options.headerFieldNames || defaultFieldNames), canonicalizedDKIMHeader = DKIMCanonicalizer.relaxedHeaderLine(dkim), signer, signature;
    canonicalizedHeaderData.headers += canonicalizedDKIMHeader.key + ':' + canonicalizedDKIMHeader.value;
    signer = crypto.createSign('RSA-SHA256');
    signer.update(canonicalizedHeaderData.headers);
    signature = signer.sign(options.privateKey, 'base64');
    return dkim + signature.replace(/(^.{73}|.{75}(?!\r?\n|\r))/g, '$&\r\n ').trim();
}
/**
 * <p>Generates a DKIM-Signature header field without the signature part ('b=' is empty)</p>
 *
 * @memberOf dkimsign
 * @private
 * @param {String} domainName Domain name to use for signing
 * @param {String} keySelector Selector for the DKMI public key
 * @param {String} headerFieldNames Header fields to sign
 * @param {String} headers E-mail headers
 * @param {String} body E-mail body
 *
 * @return {String} Mime folded DKIM-Signature string
 */ function generateDKIMHeader(domainName, keySelector, headerFieldNames, headers, body) {
    var canonicalizedBody = DKIMCanonicalizer.relaxedBody(body), canonicalizedBodyHash = sha256(canonicalizedBody, 'base64'), canonicalizedHeaderData = DKIMCanonicalizer.relaxedHeaders(headers, headerFieldNames), dkim;
    if (hasUTFChars(domainName)) {
        domainName = punycode.toASCII(domainName);
    }
    dkim = [
        'v=1',
        'a=rsa-sha256',
        'c=relaxed/relaxed',
        'd=' + domainName,
        'q=dns/txt',
        's=' + keySelector,
        'bh=' + canonicalizedBodyHash,
        'h=' + canonicalizedHeaderData.fieldNames
    ].join('; ');
    return libmime.foldLines('DKIM-Signature: ' + dkim, 76) + ';\r\n b=';
}
/**
 * <p>DKIM canonicalization functions</p>
 *
 * @memberOf dkimsign
 * @private
 */ var DKIMCanonicalizer = {
    /**
     * <p>Simple body canonicalization by rfc4871 #3.4.3</p>
     *
     * @param {String} body E-mail body part
     * @return {String} Canonicalized body
     */ simpleBody: function(body) {
        return (body || '').toString().replace(/(?:\r?\n|\r)*$/, '\r\n');
    },
    /**
     * <p>Relaxed body canonicalization by rfc4871 #3.4.4</p>
     *
     * @param {String} body E-mail body part
     * @return {String} Canonicalized body
     */ relaxedBody: function(body) {
        return (body || '').toString().replace(/\r?\n|\r/g, '\n').split('\n').map(function(line) {
            return line.replace(/\s*$/, '').replace(/\s+/g, ' '); // only single spaces
        }).join('\n').replace(/\n*$/, '\n').replace(/\n/g, '\r\n');
    },
    /**
     * <p>Relaxed headers canonicalization by rfc4871 #3.4.2 with filtering</p>
     *
     * @param {String} body E-mail headers part
     * @return {String} Canonicalized headers
     */ relaxedHeaders: function(headers, fieldNames) {
        var includedFields = (fieldNames || '').toLowerCase().split(':').map(function(field) {
            return field.trim();
        }), headerFields = {}, headerLines = headers.split(/\r?\n|\r/), line, i;
        // join lines
        for(i = headerLines.length - 1; i >= 0; i--){
            if (i && headerLines[i].match(/^\s/)) {
                headerLines[i - 1] += headerLines.splice(i, 1);
            } else {
                line = DKIMCanonicalizer.relaxedHeaderLine(headerLines[i]);
                // on multiple values, include only the first one (the one in the bottom of the list)
                if (includedFields.indexOf(line.key) >= 0 && !(line.key in headerFields)) {
                    headerFields[line.key] = line.value;
                }
            }
        }
        headers = [];
        for(i = includedFields.length - 1; i >= 0; i--){
            if (!headerFields[includedFields[i]]) {
                includedFields.splice(i, 1);
            } else {
                headers.unshift(includedFields[i] + ':' + headerFields[includedFields[i]]);
            }
        }
        return {
            headers: headers.join('\r\n') + '\r\n',
            fieldNames: includedFields.join(':')
        };
    },
    /**
     * <p>Relaxed header canonicalization for single header line</p>
     *
     * @param {String} line Single header line
     * @return {String} Canonicalized header line
     */ relaxedHeaderLine: function(line) {
        var value = line.split(':'), key = (value.shift() || '').toLowerCase().trim();
        value = value.join(':').replace(/\s+/g, ' ').trim();
        return {
            key: key,
            value: value
        };
    }
};
module.exports.DKIMCanonicalizer = DKIMCanonicalizer;
/**
 * <p>Generates a SHA-256 hash</p>
 *
 * @param {String} str String to be hashed
 * @param {String} [encoding='hex'] Output encoding
 * @return {String} SHA-256 hash in the selected output encoding
 */ function sha256(str, encoding) {
    var shasum = crypto.createHash('sha256');
    shasum.update(str);
    return shasum.digest(encoding || 'hex');
}
/**
 * <p>Detects if a string includes unicode symbols</p>
 *
 * @param {String} str String to be checked
 * @return {String} true, if string contains non-ascii symbols
 */ function hasUTFChars(str) {
    var rforeign = /[^\u0000-\u007f]/;
    return !!rforeign.test(str);
}
}),
"[project]/Documents/Pets/ambilux/frontend/node_modules/sendmail/sendmail.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { createConnection } = (()=>{
    const e = new Error("Cannot find module 'net'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const { resolveMx } = (()=>{
    const e = new Error("Cannot find module 'dns'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const { DKIMSign } = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/dkim-signer/lib/dkim.js [app-client] (ecmascript)");
const CRLF = '\r\n';
function dummy() {}
module.exports = function(options) {
    options = options || {};
    const logger = options.logger || options.silent && {
        debug: dummy,
        info: dummy,
        warn: dummy,
        error: dummy
    } || {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
    };
    const dkimPrivateKey = (options.dkim || {}).privateKey;
    const dkimKeySelector = (options.dkim || {}).keySelector || 'dkim';
    const devPort = options.devPort || -1;
    const devHost = options.devHost || 'localhost';
    const smtpPort = options.smtpPort || 25;
    const smtpHost = options.smtpHost || -1;
    /*
   *   邮件服务返回代码含义 Mail service return code Meaning
   *   500   格式错误，命令不可识别（此错误也包括命令行过长）format error, command unrecognized (This error also includes command line too long)
   *   501   参数格式错误 parameter format error
   *   502   命令不可实现 command can not be achieved
   *   503   错误的命令序列 Bad sequence of commands
   *   504   命令参数不可实现 command parameter can not be achieved
   *   211   系统状态或系统帮助响应 System status, or system help response
   *   214   帮助信息 help
   *   220   服务就绪 Services Ready
   *   221   服务关闭传输信道 Service closing transmission channel
   *   421   服务未就绪，关闭传输信道（当必须关闭时，此应答可以作为对任何命令的响应）service is not ready to close the transmission channel (when it is necessary to close, this response may be in response to any command)
   *   250   要求的邮件操作完成 requested mail action completed
   *   251   用户非本地，将转发向 non-local users will be forwarded to
   *   450   要求的邮件操作未完成，邮箱不可用（例如，邮箱忙）Mail the required operation 450 unfinished, mailbox unavailable (for example, mailbox busy)
   *   550   要求的邮件操作未完成，邮箱不可用（例如，邮箱未找到，或不可访问）Mail action not completed the required 550 mailbox unavailable (eg, mailbox not found, no access)
   *   451   放弃要求的操作；处理过程中出错 waiver operation; processing error
   *   551   用户非本地，请尝试 non-local user, please try
   *   452   系统存储不足，要求的操作未执行 Less than 452 storage system, requiring action not taken
   *   552   过量的存储分配，要求的操作未执行 excess storage allocation requires action not taken
   *   553   邮箱名不可用，要求的操作未执行（例如邮箱格式错误） mailbox name is not available, that the requested operation is not performed (for example, mailbox format error)
   *   354   开始邮件输入，以.结束 Start Mail input to. End
   *   554   操作失败  The operation failed
   *   535   用户验证失败 User authentication failed
   *   235   用户验证成功 user authentication is successful
   *   334   等待用户输入验证信息 waits for the user to enter authentication information
   */ function getHost(email) {
        const m = /[^@]+@([\w\d\-\.]+)/.exec(email);
        return m && m[1];
    }
    function groupRecipients(recipients) {
        let groups = {};
        let host;
        const recipients_length = recipients.length;
        for(let i = 0; i < recipients_length; i++){
            host = getHost(recipients[i]);
            (groups[host] || (groups[host] = [])).push(recipients[i]);
        }
        return groups;
    }
    /**
   * connect to domain by Mx record
   */ function connectMx(domain, callback) {
        if (devPort === -1) {
            resolveMx(domain, function(err, data) {
                if (err) {
                    return callback(err);
                }
                data.sort(function(a, b) {
                    return a.priority > b.priority;
                });
                logger.debug('mx resolved: ', data);
                if (!data || data.length === 0) {
                    return callback(new Error('can not resolve Mx of <' + domain + '>'));
                }
                if (smtpHost !== -1) data.push({
                    exchange: smtpHost
                });
                function tryConnect(i) {
                    if (i >= data.length) return callback(new Error('can not connect to any SMTP server'));
                    const sock = createConnection(smtpPort, data[i].exchange);
                    sock.on('error', function(err) {
                        logger.error('Error on connectMx for: ', data[i], err);
                        tryConnect(++i);
                    });
                    sock.on('connect', function() {
                        logger.debug('MX connection created: ', data[i].exchange);
                        sock.removeAllListeners('error');
                        callback(null, sock);
                    });
                }
                tryConnect(0);
            });
        } else {
            const sock = createConnection(devPort, devHost);
            sock.on('error', function(err) {
                callback(new Error('Error on connectMx (development) for "' + devHost + ':' + devPort + '": ' + err));
            });
            sock.on('connect', function() {
                logger.debug('MX (development) connection created: ' + devHost + ':' + devPort);
                sock.removeAllListeners('error');
                callback(null, sock);
            });
        }
    }
    function sendToSMTP(domain, srcHost, from, recipients, body, cb) {
        const callback = typeof cb === 'function' ? cb : function() {};
        connectMx(domain, function(err, sock) {
            if (err) {
                logger.error('error on connectMx', err.stack);
                return callback(err);
            }
            function w(s) {
                logger.debug('send ' + domain + '>' + s);
                sock.write(s + CRLF);
            }
            sock.setEncoding('utf8');
            sock.on('data', function(chunk) {
                data += chunk;
                parts = data.split(CRLF);
                const parts_length = parts.length - 1;
                for(let i = 0, len = parts_length; i < len; i++){
                    onLine(parts[i]);
                }
                data = parts[parts.length - 1];
            });
            sock.on('error', function(err) {
                logger.error('fail to connect ' + domain);
                callback(err);
            });
            let data = '';
            let step = 0;
            let loginStep = 0;
            const queue = [];
            const login = [];
            let parts;
            let cmd;
            /*
         if(mail.user && mail.pass){
           queue.push('AUTH LOGIN');
           login.push(new Buffer(mail.user).toString("base64"));
           login.push(new Buffer(mail.pass).toString("base64"));
         }
         */ queue.push('MAIL FROM:<' + from + '>');
            const recipients_length = recipients.length;
            for(let i = 0; i < recipients_length; i++){
                queue.push('RCPT TO:<' + recipients[i] + '>');
            }
            queue.push('DATA');
            queue.push('QUIT');
            queue.push('');
            function response(code, msg) {
                switch(code){
                    case 220:
                        //*   220   on server ready
                        //*   220   服务就绪
                        if (/\besmtp\b/i.test(msg)) {
                            // TODO:  determin AUTH type; auth login, auth crm-md5, auth plain
                            cmd = 'EHLO';
                        } else {
                            cmd = 'HELO';
                        }
                        w(cmd + ' ' + srcHost);
                        break;
                    case 221:
                    case 235:
                    case 250:
                    case 251:
                        if (step === queue.length - 1) {
                            logger.info('OK:', code, msg);
                            callback(null, msg);
                        }
                        w(queue[step]);
                        step++;
                        break;
                    case 354:
                        logger.info('sending mail', body);
                        w(body);
                        w('');
                        w('.');
                        break;
                    case 334:
                        w(login[loginStep]);
                        loginStep++;
                        break;
                    default:
                        if (code >= 400) {
                            logger.warn('SMTP responds error code', code);
                            callback(new Error('SMTP code:' + code + ' msg:' + msg));
                            sock.end();
                        }
                }
            }
            let msg = '';
            function onLine(line) {
                logger.debug('recv ' + domain + '>' + line);
                msg += line + CRLF;
                if (line[3] === ' ') {
                    // 250-information dash is not complete.
                    // 250 OK. space is complete.
                    let lineNumber = parseInt(line);
                    response(lineNumber, msg);
                    msg = '';
                }
            }
        });
    }
    function getAddress(address) {
        return address.replace(/^.+</, '').replace(/>\s*$/, '').trim();
    }
    function getAddresses(addresses) {
        const results = [];
        if (!Array.isArray(addresses)) {
            addresses = addresses.split(',');
        }
        const addresses_length = addresses.length;
        for(let i = 0; i < addresses_length; i++){
            results.push(getAddress(addresses[i]));
        }
        return results;
    }
    /**
   * sendmail directly
   *
   * @param mail {object}
   *             from
   *             to
   *             cc
   *             bcc
   *             replyTo
   *             returnTo
   *             subject
   *             type         default 'text/plain', 'text/html'
   *             charset      default 'utf-8'
   *             encoding     default 'base64'
   *             id           default timestamp+from
   *             headers      object
   *             content
   *             attachments
   *               [{
   *                 type
   *                 filename
   *                 content
   *               }].
   *
   * @param callback function(err, domain).
   *
   */ function sendmail(mail, callback) {
        const mailcomposer = __turbopack_context__.r("[project]/Documents/Pets/ambilux/frontend/node_modules/mailcomposer/lib/mailcomposer.js [app-client] (ecmascript)");
        const mailMe = mailcomposer(mail);
        let recipients = [];
        let groups;
        let srcHost;
        if (mail.to) {
            recipients = recipients.concat(getAddresses(mail.to));
        }
        if (mail.cc) {
            recipients = recipients.concat(getAddresses(mail.cc));
        }
        if (mail.bcc) {
            recipients = recipients.concat(getAddresses(mail.bcc));
        }
        groups = groupRecipients(recipients);
        const from = getAddress(mail.from);
        srcHost = getHost(from);
        mailMe.build(function(err, message) {
            if (err) {
                logger.error('Error on creating message : ', err);
                callback(err, null);
                return;
            }
            if (dkimPrivateKey) {
                const signature = DKIMSign(message, {
                    privateKey: dkimPrivateKey,
                    keySelector: dkimKeySelector,
                    domainName: srcHost
                });
                message = signature + '\r\n' + message;
            }
            for(let domain in groups){
                sendToSMTP(domain, srcHost, from, groups[domain], message, callback);
            }
        });
    }
    return sendmail;
};
}),
]);

//# sourceMappingURL=c4e9c_da448724._.js.map