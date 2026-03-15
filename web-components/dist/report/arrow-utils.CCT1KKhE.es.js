var ks = Object.defineProperty;
var js = (i, t, e) => t in i ? ks(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Li = (i, t, e) => js(i, typeof t != "symbol" ? t + "" : t, e);
function p(i, t, e, n) {
  function r(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function a(d) {
      try {
        u(n.next(d));
      } catch (h) {
        o(h);
      }
    }
    function c(d) {
      try {
        u(n.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? s(d.value) : r(d.value).then(a, c);
    }
    u((n = n.apply(i, t || [])).next());
  });
}
function _n(i) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && i[t], n = 0;
  if (e) return e.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && n >= i.length && (i = void 0), { value: i && i[n++], done: !i };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function S(i) {
  return this instanceof S ? (this.v = i, this) : new S(i);
}
function Bt(i, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(i, t || []), r, s = [];
  return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(F) {
    n[F] && (r[F] = function(j) {
      return new Promise(function(Q, Mi) {
        s.push([F, j, Q, Mi]) > 1 || a(F, j);
      });
    });
  }
  function a(F, j) {
    try {
      c(n[F](j));
    } catch (Q) {
      h(s[0][3], Q);
    }
  }
  function c(F) {
    F.value instanceof S ? Promise.resolve(F.value.v).then(u, d) : h(s[0][2], F);
  }
  function u(F) {
    a("next", F);
  }
  function d(F) {
    a("throw", F);
  }
  function h(F, j) {
    F(j), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function We(i) {
  var t, e;
  return t = {}, n("next"), n("throw", function(r) {
    throw r;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(r, s) {
    t[r] = i[r] ? function(o) {
      return (e = !e) ? { value: S(i[r](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function ue(i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = i[Symbol.asyncIterator], e;
  return t ? t.call(i) : (i = typeof _n == "function" ? _n(i) : i[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function n(s) {
    e[s] = i[s] && function(o) {
      return new Promise(function(a, c) {
        o = i[s](o), r(a, c, o.done, o.value);
      });
    };
  }
  function r(s, o, a, c) {
    Promise.resolve(c).then(function(u) {
      s({ value: u, done: a });
    }, o);
  }
}
const Ps = new TextDecoder("utf-8"), zi = (i) => Ps.decode(i), $s = new TextEncoder(), Zi = (i) => $s.encode(i), [xe] = /* @__PURE__ */ (() => {
  const i = () => {
    throw new Error("BigInt64Array is not available in this environment");
  };
  class t {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw i();
    }
    static from() {
      throw i();
    }
    constructor() {
      throw i();
    }
  }
  return typeof BigInt64Array < "u" ? [BigInt64Array, !0] : [t, !1];
})(), [Ee] = /* @__PURE__ */ (() => {
  const i = () => {
    throw new Error("BigUint64Array is not available in this environment");
  };
  class t {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw i();
    }
    static from() {
      throw i();
    }
    constructor() {
      throw i();
    }
  }
  return typeof BigUint64Array < "u" ? [BigUint64Array, !0] : [t, !1];
})(), Ws = (i) => typeof i == "number", Ys = (i) => typeof i == "boolean", $ = (i) => typeof i == "function", ut = (i) => i != null && Object(i) === i, Ne = (i) => ut(i) && $(i.then), Oi = (i) => ut(i) && $(i[Symbol.iterator]), qi = (i) => ut(i) && $(i[Symbol.asyncIterator]), ki = (i) => ut(i) && ut(i.schema), Pn = (i) => ut(i) && "done" in i && "value" in i, $n = (i) => ut(i) && $(i.stat) && Ws(i.fd), Wn = (i) => ut(i) && Xi(i.body), Yn = (i) => "_getDOMStream" in i && "_getNodeStream" in i, Xi = (i) => ut(i) && $(i.cancel) && $(i.getReader) && !Yn(i), Jn = (i) => ut(i) && $(i.read) && $(i.pipe) && Ys(i.readable) && !Yn(i), Js = (i) => ut(i) && $(i.clear) && $(i.bytes) && $(i.position) && $(i.setPosition) && $(i.capacity) && $(i.getBufferIdentifier) && $(i.createLong), Qi = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function Hs(i) {
  const t = i[0] ? [i[0]] : [];
  let e, n, r, s;
  for (let o, a, c = 0, u = 0, d = i.length; ++c < d; ) {
    if (o = t[u], a = i[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++u] = a);
      continue;
    }
    if ({ byteOffset: e, byteLength: r } = o, { byteOffset: n, byteLength: s } = a, e + r < n || n + s < e) {
      a && (t[++u] = a);
      continue;
    }
    t[u] = new Uint8Array(o.buffer, e, n - e + s);
  }
  return t;
}
function vn(i, t, e = 0, n = t.byteLength) {
  const r = i.byteLength, s = new Uint8Array(i.buffer, i.byteOffset, r), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, r));
  return s.set(o, e), i;
}
function At(i, t) {
  const e = Hs(i), n = e.reduce((d, h) => d + h.byteLength, 0);
  let r, s, o, a = 0, c = -1;
  const u = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const d = e.length; ++c < d; ) {
    if (r = e[c], s = r.subarray(0, Math.min(r.length, u - a)), u <= a + s.length) {
      s.length < r.length ? e[c] = r.subarray(s.length) : s.length === r.length && c++, o ? vn(o, s, a) : o = s;
      break;
    }
    vn(o || (o = new Uint8Array(u)), s, a), a += s.length;
  }
  return [o || new Uint8Array(0), e.slice(c), n - (o ? o.byteLength : 0)];
}
function R(i, t) {
  let e = Pn(t) ? t.value : t;
  return e instanceof i ? i === Uint8Array ? new i(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = Zi(e)), e instanceof ArrayBuffer ? new i(e) : e instanceof Qi ? new i(e) : Js(e) ? R(i, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new i(0) : new i(e.buffer, e.byteOffset, e.byteLength / i.BYTES_PER_ELEMENT) : i.from(e)) : new i(0);
}
const Ae = (i) => R(Int32Array, i), N = (i) => R(Uint8Array, i), ji = (i) => (i.next(), i);
function* Ks(i, t) {
  const e = function* (r) {
    yield r;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Qi ? e(t) : Oi(t) ? t : e(t);
  return yield* ji((function* (r) {
    let s = null;
    do
      s = r.next(yield R(i, s));
    while (!s.done);
  })(n[Symbol.iterator]())), new i();
}
const Gs = (i) => Ks(Uint8Array, i);
function Hn(i, t) {
  return Bt(this, arguments, function* () {
    if (Ne(t))
      return yield S(yield S(yield* We(ue(Hn(i, yield S(t))))));
    const n = function(o) {
      return Bt(this, arguments, function* () {
        yield yield S(yield S(o));
      });
    }, r = function(o) {
      return Bt(this, arguments, function* () {
        yield S(yield* We(ue(ji((function* (a) {
          let c = null;
          do
            c = a.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        })(o[Symbol.iterator]())))));
      });
    }, s = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Qi ? n(t) : Oi(t) ? r(t) : qi(t) ? t : n(t);
    return yield S(
      // otherwise if AsyncIterable, use it
      yield* We(ue(ji((function(o) {
        return Bt(this, arguments, function* () {
          let a = null;
          do
            a = yield S(o.next(yield yield S(R(i, a))));
          while (!a.done);
        });
      })(s[Symbol.asyncIterator]()))))
    ), yield S(new i());
  });
}
const Zs = (i) => Hn(Uint8Array, i);
function qs(i, t) {
  let e = 0;
  const n = i.length;
  if (n !== t.length)
    return !1;
  if (n > 0)
    do
      if (i[e] !== t[e])
        return !1;
    while (++e < n);
  return !0;
}
const et = {
  fromIterable(i) {
    return je(Xs(i));
  },
  fromAsyncIterable(i) {
    return je(Qs(i));
  },
  fromDOMStream(i) {
    return je(to(i));
  },
  fromNodeStream(i) {
    return je(io(i));
  },
  // @ts-ignore
  toDOMStream(i, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(i, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, je = (i) => (i.next(), i);
function* Xs(i) {
  let t, e = !1, n = [], r, s, o, a = 0;
  function c() {
    return s === "peek" ? At(n, o)[0] : ([r, n, a] = At(n, o), r);
  }
  ({ cmd: s, size: o } = yield null);
  const u = Gs(i)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: r } = Number.isNaN(o - a) ? u.next() : u.next(o - a), !t && r.byteLength > 0 && (n.push(r), a += r.byteLength), t || o <= a)
        do
          ({ cmd: s, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (d) {
    (e = !0) && typeof u.throw == "function" && u.throw(d);
  } finally {
    e === !1 && typeof u.return == "function" && u.return(null);
  }
  return null;
}
function Qs(i) {
  return Bt(this, arguments, function* () {
    let e, n = !1, r = [], s, o, a, c = 0;
    function u() {
      return o === "peek" ? At(r, a)[0] : ([s, r, c] = At(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield S(null));
    const d = Zs(i)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield S(d.next()) : yield S(d.next(a - c)), !e && s.byteLength > 0 && (r.push(s), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield S(u()));
          while (a < c);
      while (!e);
    } catch (h) {
      (n = !0) && typeof d.throw == "function" && (yield S(d.throw(h)));
    } finally {
      n === !1 && typeof d.return == "function" && (yield S(d.return(new Uint8Array(0))));
    }
    return yield S(null);
  });
}
function to(i) {
  return Bt(this, arguments, function* () {
    let e = !1, n = !1, r = [], s, o, a, c = 0;
    function u() {
      return o === "peek" ? At(r, a)[0] : ([s, r, c] = At(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield S(null));
    const d = new eo(i);
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield S(d.read()) : yield S(d.read(a - c)), !e && s.byteLength > 0 && (r.push(N(s)), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield S(u()));
          while (a < c);
      while (!e);
    } catch (h) {
      (n = !0) && (yield S(d.cancel(h)));
    } finally {
      n === !1 ? yield S(d.cancel()) : i.locked && d.releaseLock();
    }
    return yield S(null);
  });
}
class eo {
  constructor(t) {
    this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    this.reader && this.reader.releaseLock(), this.reader = null;
  }
  cancel(t) {
    return p(this, void 0, void 0, function* () {
      const { reader: e, source: n } = this;
      e && (yield e.cancel(t).catch(() => {
      })), n && n.locked && this.releaseLock();
    });
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = N(e)), e;
    });
  }
}
const Ui = (i, t) => {
  const e = (r) => n([t, r]);
  let n;
  return [t, e, new Promise((r) => (n = r) && i.once(t, e))];
};
function io(i) {
  return Bt(this, arguments, function* () {
    const e = [];
    let n = "error", r = !1, s = null, o, a, c = 0, u = [], d;
    function h() {
      return o === "peek" ? At(u, a)[0] : ([d, u, c] = At(u, a), d);
    }
    if ({ cmd: o, size: a } = yield yield S(null), i.isTTY)
      return yield yield S(new Uint8Array(0)), yield S(null);
    try {
      e[0] = Ui(i, "end"), e[1] = Ui(i, "error");
      do {
        if (e[2] = Ui(i, "readable"), [n, s] = yield S(Promise.race(e.map((j) => j[2]))), n === "error")
          break;
        if ((r = n === "end") || (Number.isFinite(a - c) ? (d = N(i.read(a - c)), d.byteLength < a - c && (d = N(i.read()))) : d = N(i.read()), d.byteLength > 0 && (u.push(d), c += d.byteLength)), r || a <= c)
          do
            ({ cmd: o, size: a } = yield yield S(h()));
          while (a < c);
      } while (!r);
    } finally {
      yield S(F(e, n === "error" ? s : null));
    }
    return yield S(null);
    function F(j, Q) {
      return d = u = null, new Promise((Mi, Vs) => {
        for (const [ne, zs] of j)
          i.off(ne, zs);
        try {
          const ne = i.destroy;
          ne && ne.call(i, Q), Q = void 0;
        } catch (ne) {
          Q = ne || Q;
        } finally {
          Q != null ? Vs(Q) : Mi();
        }
      });
    }
  });
}
var st;
(function(i) {
  i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5";
})(st || (st = {}));
var dt;
(function(i) {
  i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense";
})(dt || (dt = {}));
var Y;
(function(i) {
  i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE";
})(Y || (Y = {}));
var Et;
(function(i) {
  i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND";
})(Et || (Et = {}));
var D;
(function(i) {
  i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND";
})(D || (D = {}));
var Wt;
(function(i) {
  i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Wt || (Wt = {}));
var L;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor";
})(L || (L = {}));
var l;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.Float = 3] = "Float", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct = 13] = "Struct", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Dictionary = -1] = "Dictionary", i[i.Int8 = -2] = "Int8", i[i.Int16 = -3] = "Int16", i[i.Int32 = -4] = "Int32", i[i.Int64 = -5] = "Int64", i[i.Uint8 = -6] = "Uint8", i[i.Uint16 = -7] = "Uint16", i[i.Uint32 = -8] = "Uint32", i[i.Uint64 = -9] = "Uint64", i[i.Float16 = -10] = "Float16", i[i.Float32 = -11] = "Float32", i[i.Float64 = -12] = "Float64", i[i.DateDay = -13] = "DateDay", i[i.DateMillisecond = -14] = "DateMillisecond", i[i.TimestampSecond = -15] = "TimestampSecond", i[i.TimestampMillisecond = -16] = "TimestampMillisecond", i[i.TimestampMicrosecond = -17] = "TimestampMicrosecond", i[i.TimestampNanosecond = -18] = "TimestampNanosecond", i[i.TimeSecond = -19] = "TimeSecond", i[i.TimeMillisecond = -20] = "TimeMillisecond", i[i.TimeMicrosecond = -21] = "TimeMicrosecond", i[i.TimeNanosecond = -22] = "TimeNanosecond", i[i.DenseUnion = -23] = "DenseUnion", i[i.SparseUnion = -24] = "SparseUnion", i[i.IntervalDayTime = -25] = "IntervalDayTime", i[i.IntervalYearMonth = -26] = "IntervalYearMonth";
})(l || (l = {}));
var Nt;
(function(i) {
  i[i.OFFSET = 0] = "OFFSET", i[i.DATA = 1] = "DATA", i[i.VALIDITY = 2] = "VALIDITY", i[i.TYPE = 3] = "TYPE";
})(Nt || (Nt = {}));
const no = void 0;
function Te(i) {
  if (i === null)
    return "null";
  if (i === no)
    return "undefined";
  switch (typeof i) {
    case "number":
      return `${i}`;
    case "bigint":
      return `${i}`;
    case "string":
      return `"${i}"`;
  }
  return typeof i[Symbol.toPrimitive] == "function" ? i[Symbol.toPrimitive]("string") : ArrayBuffer.isView(i) ? i instanceof xe || i instanceof Ee ? `[${[...i].map((t) => Te(t))}]` : `[${i}]` : ArrayBuffer.isView(i) ? `[${i}]` : JSON.stringify(i, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const ro = Symbol.for("isArrowBigNum");
function pt(i, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(R(this.TypedArray, i), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(i, ...t), this.constructor.prototype);
}
pt.prototype[ro] = !0;
pt.prototype.toJSON = function() {
  return `"${qe(this)}"`;
};
pt.prototype.valueOf = function() {
  return Kn(this);
};
pt.prototype.toString = function() {
  return qe(this);
};
pt.prototype[Symbol.toPrimitive] = function(i = "default") {
  switch (i) {
    case "number":
      return Kn(this);
    case "string":
      return qe(this);
    case "default":
      return so(this);
  }
  return qe(this);
};
function de(...i) {
  return pt.apply(this, i);
}
function he(...i) {
  return pt.apply(this, i);
}
function Me(...i) {
  return pt.apply(this, i);
}
Object.setPrototypeOf(de.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(he.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(Me.prototype, Object.create(Uint32Array.prototype));
Object.assign(de.prototype, pt.prototype, { constructor: de, signed: !0, TypedArray: Int32Array, BigIntArray: xe });
Object.assign(he.prototype, pt.prototype, { constructor: he, signed: !1, TypedArray: Uint32Array, BigIntArray: Ee });
Object.assign(Me.prototype, pt.prototype, { constructor: Me, signed: !0, TypedArray: Uint32Array, BigIntArray: Ee });
function Kn(i) {
  const { buffer: t, byteOffset: e, length: n, signed: r } = i, s = new Ee(t, e, n), o = r && s[s.length - 1] & BigInt(1) << BigInt(63);
  let a = BigInt(o ? 1 : 0), c = BigInt(0);
  if (o) {
    for (const u of s)
      a += ~u * (BigInt(1) << BigInt(32) * c++);
    a *= BigInt(-1);
  } else
    for (const u of s)
      a += u * (BigInt(1) << BigInt(32) * c++);
  return a;
}
const qe = ((i) => i.byteLength === 8 ? `${new i.BigIntArray(i.buffer, i.byteOffset, 1)[0]}` : Gn(i)), so = ((i) => i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : Gn(i));
function Gn(i) {
  let t = "";
  const e = new Uint32Array(2);
  let n = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2);
  const r = new Uint32Array((n = new Uint16Array(n).reverse()).buffer);
  let s = -1;
  const o = n.length - 1;
  do {
    for (e[0] = n[s = 0]; s < o; )
      n[s++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + n[s];
    n[s] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`;
  } while (r[0] || r[1] || r[2] || r[3]);
  return t ?? "0";
}
class tn {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new de(t);
      case !1:
        return new he(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case xe:
        return new de(t);
    }
    return t.byteLength === 16 ? new Me(t) : new he(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new de(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new he(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new Me(t);
  }
  constructor(t, e) {
    return tn.new(t, e);
  }
}
function ht(i) {
  if (typeof i == "bigint" && (i < Number.MIN_SAFE_INTEGER || i > Number.MAX_SAFE_INTEGER))
    throw new TypeError(`${i} is not safe to convert to a number.`);
  return Number(i);
}
var Zn, qn, Xn, Qn, tr, er, ir, nr, rr, sr, or, ar, cr, lr, ur, dr, hr, fr, pr;
class f {
  /** @nocollapse */
  static isNull(t) {
    return (t == null ? void 0 : t.typeId) === l.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return (t == null ? void 0 : t.typeId) === l.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return (t == null ? void 0 : t.typeId) === l.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return (t == null ? void 0 : t.typeId) === l.Binary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return (t == null ? void 0 : t.typeId) === l.Utf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return (t == null ? void 0 : t.typeId) === l.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return (t == null ? void 0 : t.typeId) === l.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return (t == null ? void 0 : t.typeId) === l.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return (t == null ? void 0 : t.typeId) === l.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return (t == null ? void 0 : t.typeId) === l.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return (t == null ? void 0 : t.typeId) === l.Interval;
  }
  /** @nocollapse */
  static isList(t) {
    return (t == null ? void 0 : t.typeId) === l.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return (t == null ? void 0 : t.typeId) === l.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return (t == null ? void 0 : t.typeId) === l.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return (t == null ? void 0 : t.typeId) === l.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return (t == null ? void 0 : t.typeId) === l.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return (t == null ? void 0 : t.typeId) === l.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return (t == null ? void 0 : t.typeId) === l.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return f.isUnion(t) && t.mode === dt.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return f.isUnion(t) && t.mode === dt.Sparse;
  }
  get typeId() {
    return l.NONE;
  }
}
Zn = Symbol.toStringTag;
f[Zn] = ((i) => (i.children = null, i.ArrayType = Array, i[Symbol.toStringTag] = "DataType"))(f.prototype);
let Yt = class extends f {
  toString() {
    return "Null";
  }
  get typeId() {
    return l.Null;
  }
};
qn = Symbol.toStringTag;
Yt[qn] = ((i) => i[Symbol.toStringTag] = "Null")(Yt.prototype);
class Jt extends f {
  constructor(t, e) {
    super(), this.isSigned = t, this.bitWidth = e;
  }
  get typeId() {
    return l.Int;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? xe : Ee;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
Xn = Symbol.toStringTag;
Jt[Xn] = ((i) => (i.isSigned = null, i.bitWidth = null, i[Symbol.toStringTag] = "Int"))(Jt.prototype);
class Le extends Jt {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(Le.prototype, "ArrayType", { value: Int32Array });
class Ue extends f {
  constructor(t) {
    super(), this.precision = t;
  }
  get typeId() {
    return l.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Y.HALF:
        return Uint16Array;
      case Y.SINGLE:
        return Float32Array;
      case Y.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
Qn = Symbol.toStringTag;
Ue[Qn] = ((i) => (i.precision = null, i[Symbol.toStringTag] = "Float"))(Ue.prototype);
let Xe = class extends f {
  constructor() {
    super();
  }
  get typeId() {
    return l.Binary;
  }
  toString() {
    return "Binary";
  }
};
tr = Symbol.toStringTag;
Xe[tr] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Binary"))(Xe.prototype);
let Qe = class extends f {
  constructor() {
    super();
  }
  get typeId() {
    return l.Utf8;
  }
  toString() {
    return "Utf8";
  }
};
er = Symbol.toStringTag;
Qe[er] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Utf8"))(Qe.prototype);
let ti = class extends f {
  constructor() {
    super();
  }
  get typeId() {
    return l.Bool;
  }
  toString() {
    return "Bool";
  }
};
ir = Symbol.toStringTag;
ti[ir] = ((i) => (i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "Bool"))(ti.prototype);
let ei = class extends f {
  constructor(t, e, n = 128) {
    super(), this.scale = t, this.precision = e, this.bitWidth = n;
  }
  get typeId() {
    return l.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
nr = Symbol.toStringTag;
ei[nr] = ((i) => (i.scale = null, i.precision = null, i.ArrayType = Uint32Array, i[Symbol.toStringTag] = "Decimal"))(ei.prototype);
class ii extends f {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return l.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${Et[this.unit]}>`;
  }
}
rr = Symbol.toStringTag;
ii[rr] = ((i) => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Date"))(ii.prototype);
class Re extends f {
  constructor(t, e) {
    super(), this.unit = t, this.bitWidth = e;
  }
  get typeId() {
    return l.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${D[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return xe;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
sr = Symbol.toStringTag;
Re[sr] = ((i) => (i.unit = null, i.bitWidth = null, i[Symbol.toStringTag] = "Time"))(Re.prototype);
class ni extends f {
  constructor(t, e) {
    super(), this.unit = t, this.timezone = e;
  }
  get typeId() {
    return l.Timestamp;
  }
  toString() {
    return `Timestamp<${D[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
or = Symbol.toStringTag;
ni[or] = ((i) => (i.unit = null, i.timezone = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Timestamp"))(ni.prototype);
class ri extends f {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return l.Interval;
  }
  toString() {
    return `Interval<${Wt[this.unit]}>`;
  }
}
ar = Symbol.toStringTag;
ri[ar] = ((i) => (i.unit = null, i.ArrayType = Int32Array, i[Symbol.toStringTag] = "Interval"))(ri.prototype);
let si = class extends f {
  constructor(t) {
    super(), this.children = [t];
  }
  get typeId() {
    return l.List;
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
};
cr = Symbol.toStringTag;
si[cr] = ((i) => (i.children = null, i[Symbol.toStringTag] = "List"))(si.prototype);
class W extends f {
  constructor(t) {
    super(), this.children = t;
  }
  get typeId() {
    return l.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
lr = Symbol.toStringTag;
W[lr] = ((i) => (i.children = null, i[Symbol.toStringTag] = "Struct"))(W.prototype);
class oi extends f {
  constructor(t, e, n) {
    super(), this.mode = t, this.children = n, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((r, s, o) => (r[s] = o) && r || r, /* @__PURE__ */ Object.create(null));
  }
  get typeId() {
    return l.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
ur = Symbol.toStringTag;
oi[ur] = ((i) => (i.mode = null, i.typeIds = null, i.children = null, i.typeIdToChildIndex = null, i.ArrayType = Int8Array, i[Symbol.toStringTag] = "Union"))(oi.prototype);
let ai = class extends f {
  constructor(t) {
    super(), this.byteWidth = t;
  }
  get typeId() {
    return l.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
};
dr = Symbol.toStringTag;
ai[dr] = ((i) => (i.byteWidth = null, i.ArrayType = Uint8Array, i[Symbol.toStringTag] = "FixedSizeBinary"))(ai.prototype);
let ci = class extends f {
  constructor(t, e) {
    super(), this.listSize = t, this.children = [e];
  }
  get typeId() {
    return l.FixedSizeList;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
};
hr = Symbol.toStringTag;
ci[hr] = ((i) => (i.children = null, i.listSize = null, i[Symbol.toStringTag] = "FixedSizeList"))(ci.prototype);
class li extends f {
  constructor(t, e = !1) {
    super(), this.children = [t], this.keysSorted = e;
  }
  get typeId() {
    return l.Map;
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
fr = Symbol.toStringTag;
li[fr] = ((i) => (i.children = null, i.keysSorted = null, i[Symbol.toStringTag] = "Map_"))(li.prototype);
const oo = /* @__PURE__ */ ((i) => () => ++i)(-1);
class me extends f {
  constructor(t, e, n, r) {
    super(), this.indices = e, this.dictionary = t, this.isOrdered = r || !1, this.id = n == null ? oo() : ht(n);
  }
  get typeId() {
    return l.Dictionary;
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
pr = Symbol.toStringTag;
me[pr] = ((i) => (i.id = null, i.indices = null, i.isOrdered = null, i.dictionary = null, i[Symbol.toStringTag] = "Dictionary"))(me.prototype);
function Tt(i) {
  const t = i;
  switch (i.typeId) {
    case l.Decimal:
      return i.bitWidth / 32;
    case l.Timestamp:
      return 2;
    case l.Date:
      return 1 + t.unit;
    case l.Interval:
      return 1 + t.unit;
    // case Type.Int: return 1 + +((t as Int_).bitWidth > 32);
    // case Type.Time: return 1 + +((t as Time_).bitWidth > 32);
    case l.FixedSizeList:
      return t.listSize;
    case l.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class O {
  visitMany(t, ...e) {
    return t.map((n, r) => this.visit(n, ...e.map((s) => s[r])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return ao(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return se(this, t, e);
  }
  visitNull(t, ...e) {
    return null;
  }
  visitBool(t, ...e) {
    return null;
  }
  visitInt(t, ...e) {
    return null;
  }
  visitFloat(t, ...e) {
    return null;
  }
  visitUtf8(t, ...e) {
    return null;
  }
  visitBinary(t, ...e) {
    return null;
  }
  visitFixedSizeBinary(t, ...e) {
    return null;
  }
  visitDate(t, ...e) {
    return null;
  }
  visitTimestamp(t, ...e) {
    return null;
  }
  visitTime(t, ...e) {
    return null;
  }
  visitDecimal(t, ...e) {
    return null;
  }
  visitList(t, ...e) {
    return null;
  }
  visitStruct(t, ...e) {
    return null;
  }
  visitUnion(t, ...e) {
    return null;
  }
  visitDictionary(t, ...e) {
    return null;
  }
  visitInterval(t, ...e) {
    return null;
  }
  visitFixedSizeList(t, ...e) {
    return null;
  }
  visitMap(t, ...e) {
    return null;
  }
}
function ao(i, t, e = !0) {
  return typeof t == "number" ? se(i, t, e) : typeof t == "string" && t in l ? se(i, l[t], e) : t && t instanceof f ? se(i, wn(t), e) : t != null && t.type && t.type instanceof f ? se(i, wn(t.type), e) : se(i, l.NONE, e);
}
function se(i, t, e = !0) {
  let n = null;
  switch (t) {
    case l.Null:
      n = i.visitNull;
      break;
    case l.Bool:
      n = i.visitBool;
      break;
    case l.Int:
      n = i.visitInt;
      break;
    case l.Int8:
      n = i.visitInt8 || i.visitInt;
      break;
    case l.Int16:
      n = i.visitInt16 || i.visitInt;
      break;
    case l.Int32:
      n = i.visitInt32 || i.visitInt;
      break;
    case l.Int64:
      n = i.visitInt64 || i.visitInt;
      break;
    case l.Uint8:
      n = i.visitUint8 || i.visitInt;
      break;
    case l.Uint16:
      n = i.visitUint16 || i.visitInt;
      break;
    case l.Uint32:
      n = i.visitUint32 || i.visitInt;
      break;
    case l.Uint64:
      n = i.visitUint64 || i.visitInt;
      break;
    case l.Float:
      n = i.visitFloat;
      break;
    case l.Float16:
      n = i.visitFloat16 || i.visitFloat;
      break;
    case l.Float32:
      n = i.visitFloat32 || i.visitFloat;
      break;
    case l.Float64:
      n = i.visitFloat64 || i.visitFloat;
      break;
    case l.Utf8:
      n = i.visitUtf8;
      break;
    case l.Binary:
      n = i.visitBinary;
      break;
    case l.FixedSizeBinary:
      n = i.visitFixedSizeBinary;
      break;
    case l.Date:
      n = i.visitDate;
      break;
    case l.DateDay:
      n = i.visitDateDay || i.visitDate;
      break;
    case l.DateMillisecond:
      n = i.visitDateMillisecond || i.visitDate;
      break;
    case l.Timestamp:
      n = i.visitTimestamp;
      break;
    case l.TimestampSecond:
      n = i.visitTimestampSecond || i.visitTimestamp;
      break;
    case l.TimestampMillisecond:
      n = i.visitTimestampMillisecond || i.visitTimestamp;
      break;
    case l.TimestampMicrosecond:
      n = i.visitTimestampMicrosecond || i.visitTimestamp;
      break;
    case l.TimestampNanosecond:
      n = i.visitTimestampNanosecond || i.visitTimestamp;
      break;
    case l.Time:
      n = i.visitTime;
      break;
    case l.TimeSecond:
      n = i.visitTimeSecond || i.visitTime;
      break;
    case l.TimeMillisecond:
      n = i.visitTimeMillisecond || i.visitTime;
      break;
    case l.TimeMicrosecond:
      n = i.visitTimeMicrosecond || i.visitTime;
      break;
    case l.TimeNanosecond:
      n = i.visitTimeNanosecond || i.visitTime;
      break;
    case l.Decimal:
      n = i.visitDecimal;
      break;
    case l.List:
      n = i.visitList;
      break;
    case l.Struct:
      n = i.visitStruct;
      break;
    case l.Union:
      n = i.visitUnion;
      break;
    case l.DenseUnion:
      n = i.visitDenseUnion || i.visitUnion;
      break;
    case l.SparseUnion:
      n = i.visitSparseUnion || i.visitUnion;
      break;
    case l.Dictionary:
      n = i.visitDictionary;
      break;
    case l.Interval:
      n = i.visitInterval;
      break;
    case l.IntervalDayTime:
      n = i.visitIntervalDayTime || i.visitInterval;
      break;
    case l.IntervalYearMonth:
      n = i.visitIntervalYearMonth || i.visitInterval;
      break;
    case l.FixedSizeList:
      n = i.visitFixedSizeList;
      break;
    case l.Map:
      n = i.visitMap;
      break;
  }
  if (typeof n == "function")
    return n;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${l[t]}'`);
}
function wn(i) {
  switch (i.typeId) {
    case l.Null:
      return l.Null;
    case l.Int: {
      const { bitWidth: t, isSigned: e } = i;
      switch (t) {
        case 8:
          return e ? l.Int8 : l.Uint8;
        case 16:
          return e ? l.Int16 : l.Uint16;
        case 32:
          return e ? l.Int32 : l.Uint32;
        case 64:
          return e ? l.Int64 : l.Uint64;
      }
      return l.Int;
    }
    case l.Float:
      switch (i.precision) {
        case Y.HALF:
          return l.Float16;
        case Y.SINGLE:
          return l.Float32;
        case Y.DOUBLE:
          return l.Float64;
      }
      return l.Float;
    case l.Binary:
      return l.Binary;
    case l.Utf8:
      return l.Utf8;
    case l.Bool:
      return l.Bool;
    case l.Decimal:
      return l.Decimal;
    case l.Time:
      switch (i.unit) {
        case D.SECOND:
          return l.TimeSecond;
        case D.MILLISECOND:
          return l.TimeMillisecond;
        case D.MICROSECOND:
          return l.TimeMicrosecond;
        case D.NANOSECOND:
          return l.TimeNanosecond;
      }
      return l.Time;
    case l.Timestamp:
      switch (i.unit) {
        case D.SECOND:
          return l.TimestampSecond;
        case D.MILLISECOND:
          return l.TimestampMillisecond;
        case D.MICROSECOND:
          return l.TimestampMicrosecond;
        case D.NANOSECOND:
          return l.TimestampNanosecond;
      }
      return l.Timestamp;
    case l.Date:
      switch (i.unit) {
        case Et.DAY:
          return l.DateDay;
        case Et.MILLISECOND:
          return l.DateMillisecond;
      }
      return l.Date;
    case l.Interval:
      switch (i.unit) {
        case Wt.DAY_TIME:
          return l.IntervalDayTime;
        case Wt.YEAR_MONTH:
          return l.IntervalYearMonth;
      }
      return l.Interval;
    case l.Map:
      return l.Map;
    case l.List:
      return l.List;
    case l.Struct:
      return l.Struct;
    case l.Union:
      switch (i.mode) {
        case dt.Dense:
          return l.DenseUnion;
        case dt.Sparse:
          return l.SparseUnion;
      }
      return l.Union;
    case l.FixedSizeBinary:
      return l.FixedSizeBinary;
    case l.FixedSizeList:
      return l.FixedSizeList;
    case l.Dictionary:
      return l.Dictionary;
  }
  throw new Error(`Unrecognized type '${l[i.typeId]}'`);
}
O.prototype.visitInt8 = null;
O.prototype.visitInt16 = null;
O.prototype.visitInt32 = null;
O.prototype.visitInt64 = null;
O.prototype.visitUint8 = null;
O.prototype.visitUint16 = null;
O.prototype.visitUint32 = null;
O.prototype.visitUint64 = null;
O.prototype.visitFloat16 = null;
O.prototype.visitFloat32 = null;
O.prototype.visitFloat64 = null;
O.prototype.visitDateDay = null;
O.prototype.visitDateMillisecond = null;
O.prototype.visitTimestampSecond = null;
O.prototype.visitTimestampMillisecond = null;
O.prototype.visitTimestampMicrosecond = null;
O.prototype.visitTimestampNanosecond = null;
O.prototype.visitTimeSecond = null;
O.prototype.visitTimeMillisecond = null;
O.prototype.visitTimeMicrosecond = null;
O.prototype.visitTimeNanosecond = null;
O.prototype.visitDenseUnion = null;
O.prototype.visitSparseUnion = null;
O.prototype.visitIntervalDayTime = null;
O.prototype.visitIntervalYearMonth = null;
const yr = new Float64Array(1), re = new Uint32Array(yr.buffer);
function mr(i) {
  const t = (i & 31744) >> 10, e = (i & 1023) / 1024, n = Math.pow(-1, (i & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (e ? Number.NaN : 1 / 0);
    case 0:
      return n * (e ? 6103515625e-14 * e : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + e);
}
function co(i) {
  if (i !== i)
    return 32256;
  yr[0] = i;
  const t = (re[1] & 2147483648) >> 16 & 65535;
  let e = re[1] & 2146435072, n = 0;
  return e >= 1089470464 ? re[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, n = (re[1] & 1048575) >> 10) : e <= 1056964608 ? (n = 1048576 + (re[1] & 1048575), n = 1048576 + (n << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, n = (re[1] & 1048575) + 512 >> 10), t | e | n & 65535;
}
class _ extends O {
}
function I(i) {
  return (t, e, n) => {
    if (t.setValid(e, n != null))
      return i(t, e, n);
  };
}
const lo = (i, t, e) => {
  i[t] = Math.trunc(e / 864e5);
}, en = (i, t, e) => {
  i[t] = Math.trunc(e % 4294967296), i[t + 1] = Math.trunc(e / 4294967296);
}, uo = (i, t, e) => {
  i[t] = Math.trunc(e * 1e3 % 4294967296), i[t + 1] = Math.trunc(e * 1e3 / 4294967296);
}, ho = (i, t, e) => {
  i[t] = Math.trunc(e * 1e6 % 4294967296), i[t + 1] = Math.trunc(e * 1e6 / 4294967296);
}, br = (i, t, e, n) => {
  if (e + 1 < t.length) {
    const { [e]: r, [e + 1]: s } = t;
    i.set(n.subarray(0, s - r), r);
  }
}, fo = ({ offset: i, values: t }, e, n) => {
  const r = i + e;
  n ? t[r >> 3] |= 1 << r % 8 : t[r >> 3] &= ~(1 << r % 8);
}, Vt = ({ values: i }, t, e) => {
  i[t] = e;
}, nn = ({ values: i }, t, e) => {
  i[t] = e;
}, gr = ({ values: i }, t, e) => {
  i[t] = co(e);
}, po = (i, t, e) => {
  switch (i.type.precision) {
    case Y.HALF:
      return gr(i, t, e);
    case Y.SINGLE:
    case Y.DOUBLE:
      return nn(i, t, e);
  }
}, _r = ({ values: i }, t, e) => {
  lo(i, t, e.valueOf());
}, vr = ({ values: i }, t, e) => {
  en(i, t * 2, e.valueOf());
}, yo = ({ stride: i, values: t }, e, n) => {
  t.set(n.subarray(0, i), i * e);
}, mo = ({ values: i, valueOffsets: t }, e, n) => br(i, t, e, n), bo = ({ values: i, valueOffsets: t }, e, n) => {
  br(i, t, e, Zi(n));
}, go = (i, t, e) => {
  i.type.unit === Et.DAY ? _r(i, t, e) : vr(i, t, e);
}, wr = ({ values: i }, t, e) => en(i, t * 2, e / 1e3), Ir = ({ values: i }, t, e) => en(i, t * 2, e), Sr = ({ values: i }, t, e) => uo(i, t * 2, e), Br = ({ values: i }, t, e) => ho(i, t * 2, e), _o = (i, t, e) => {
  switch (i.type.unit) {
    case D.SECOND:
      return wr(i, t, e);
    case D.MILLISECOND:
      return Ir(i, t, e);
    case D.MICROSECOND:
      return Sr(i, t, e);
    case D.NANOSECOND:
      return Br(i, t, e);
  }
}, Fr = ({ values: i }, t, e) => {
  i[t] = e;
}, Ar = ({ values: i }, t, e) => {
  i[t] = e;
}, Or = ({ values: i }, t, e) => {
  i[t] = e;
}, Dr = ({ values: i }, t, e) => {
  i[t] = e;
}, vo = (i, t, e) => {
  switch (i.type.unit) {
    case D.SECOND:
      return Fr(i, t, e);
    case D.MILLISECOND:
      return Ar(i, t, e);
    case D.MICROSECOND:
      return Or(i, t, e);
    case D.NANOSECOND:
      return Dr(i, t, e);
  }
}, wo = ({ values: i, stride: t }, e, n) => {
  i.set(n.subarray(0, t), t * e);
}, Io = (i, t, e) => {
  const n = i.children[0], r = i.valueOffsets, s = ot.getVisitFn(n);
  if (Array.isArray(e))
    for (let o = -1, a = r[t], c = r[t + 1]; a < c; )
      s(n, a++, e[++o]);
  else
    for (let o = -1, a = r[t], c = r[t + 1]; a < c; )
      s(n, a++, e.get(++o));
}, So = (i, t, e) => {
  const n = i.children[0], { valueOffsets: r } = i, s = ot.getVisitFn(n);
  let { [t]: o, [t + 1]: a } = r;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const u of c)
    if (s(n, o, u), ++o >= a)
      break;
}, Bo = (i, t) => (e, n, r, s) => n && e(n, i, t[s]), Fo = (i, t) => (e, n, r, s) => n && e(n, i, t.get(s)), Ao = (i, t) => (e, n, r, s) => n && e(n, i, t.get(r.name)), Oo = (i, t) => (e, n, r, s) => n && e(n, i, t[r.name]), Do = (i, t, e) => {
  const n = i.type.children.map((s) => ot.getVisitFn(s.type)), r = e instanceof Map ? Ao(t, e) : e instanceof U ? Fo(t, e) : Array.isArray(e) ? Bo(t, e) : Oo(t, e);
  i.type.children.forEach((s, o) => r(n[o], i.children[o], s, o));
}, No = (i, t, e) => {
  i.type.mode === dt.Dense ? Nr(i, t, e) : Tr(i, t, e);
}, Nr = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], r = i.children[n];
  ot.visit(r, i.valueOffsets[t], e);
}, Tr = (i, t, e) => {
  const n = i.type.typeIdToChildIndex[i.typeIds[t]], r = i.children[n];
  ot.visit(r, t, e);
}, To = (i, t, e) => {
  var n;
  (n = i.dictionary) === null || n === void 0 || n.set(i.values[t], e);
}, Mo = (i, t, e) => {
  i.type.unit === Wt.DAY_TIME ? Mr(i, t, e) : Lr(i, t, e);
}, Mr = ({ values: i }, t, e) => {
  i.set(e.subarray(0, 2), 2 * t);
}, Lr = ({ values: i }, t, e) => {
  i[t] = e[0] * 12 + e[1] % 12;
}, Lo = (i, t, e) => {
  const { stride: n } = i, r = i.children[0], s = ot.getVisitFn(r);
  if (Array.isArray(e))
    for (let o = -1, a = t * n; ++o < n; )
      s(r, a + o, e[o]);
  else
    for (let o = -1, a = t * n; ++o < n; )
      s(r, a + o, e.get(o));
};
_.prototype.visitBool = I(fo);
_.prototype.visitInt = I(Vt);
_.prototype.visitInt8 = I(Vt);
_.prototype.visitInt16 = I(Vt);
_.prototype.visitInt32 = I(Vt);
_.prototype.visitInt64 = I(Vt);
_.prototype.visitUint8 = I(Vt);
_.prototype.visitUint16 = I(Vt);
_.prototype.visitUint32 = I(Vt);
_.prototype.visitUint64 = I(Vt);
_.prototype.visitFloat = I(po);
_.prototype.visitFloat16 = I(gr);
_.prototype.visitFloat32 = I(nn);
_.prototype.visitFloat64 = I(nn);
_.prototype.visitUtf8 = I(bo);
_.prototype.visitBinary = I(mo);
_.prototype.visitFixedSizeBinary = I(yo);
_.prototype.visitDate = I(go);
_.prototype.visitDateDay = I(_r);
_.prototype.visitDateMillisecond = I(vr);
_.prototype.visitTimestamp = I(_o);
_.prototype.visitTimestampSecond = I(wr);
_.prototype.visitTimestampMillisecond = I(Ir);
_.prototype.visitTimestampMicrosecond = I(Sr);
_.prototype.visitTimestampNanosecond = I(Br);
_.prototype.visitTime = I(vo);
_.prototype.visitTimeSecond = I(Fr);
_.prototype.visitTimeMillisecond = I(Ar);
_.prototype.visitTimeMicrosecond = I(Or);
_.prototype.visitTimeNanosecond = I(Dr);
_.prototype.visitDecimal = I(wo);
_.prototype.visitList = I(Io);
_.prototype.visitStruct = I(Do);
_.prototype.visitUnion = I(No);
_.prototype.visitDenseUnion = I(Nr);
_.prototype.visitSparseUnion = I(Tr);
_.prototype.visitDictionary = I(To);
_.prototype.visitInterval = I(Mo);
_.prototype.visitIntervalDayTime = I(Mr);
_.prototype.visitIntervalYearMonth = I(Lr);
_.prototype.visitFixedSizeList = I(Lo);
_.prototype.visitMap = I(So);
const ot = new _(), at = Symbol.for("parent"), fe = Symbol.for("rowIndex");
class rn {
  constructor(t, e) {
    return this[at] = t, this[fe] = e, new Proxy(this, new Ro());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[fe], e = this[at], n = e.type.children, r = {};
    for (let s = -1, o = n.length; ++s < o; )
      r[n[s].name] = G.visit(e.children[s], t);
    return r;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${Te(t)}: ${Te(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new Uo(this[at], this[fe]);
  }
}
class Uo {
  constructor(t, e) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.childIndex;
    return t < this.numChildren ? (this.childIndex = t + 1, {
      done: !1,
      value: [
        this.childFields[t].name,
        G.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(rn.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [at]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [fe]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class Ro {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[at].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[at].type.children.findIndex((n) => n.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[at].type.children.findIndex((n) => n.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[at].type.children.findIndex((r) => r.name === e);
    if (n !== -1) {
      const r = G.visit(t[at].children[n], t[fe]);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, n) {
    const r = t[at].type.children.findIndex((s) => s.name === e);
    return r !== -1 ? (ot.visit(t[at].children[r], t[fe], n), Reflect.set(t, e, n)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, n) : !1;
  }
}
class y extends O {
}
function v(i) {
  return (t, e) => t.getValid(e) ? i(t, e) : null;
}
const xo = (i, t) => 864e5 * i[t], sn = (i, t) => 4294967296 * i[t + 1] + (i[t] >>> 0), Eo = (i, t) => 4294967296 * (i[t + 1] / 1e3) + (i[t] >>> 0) / 1e3, Co = (i, t) => 4294967296 * (i[t + 1] / 1e6) + (i[t] >>> 0) / 1e6, Ur = (i) => new Date(i), Vo = (i, t) => Ur(xo(i, t)), zo = (i, t) => Ur(sn(i, t)), ko = (i, t) => null, Rr = (i, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const n = t[e], r = t[e + 1];
  return i.subarray(n, r);
}, jo = ({ offset: i, values: t }, e) => {
  const n = i + e;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, xr = ({ values: i }, t) => Vo(i, t), Er = ({ values: i }, t) => zo(i, t * 2), Kt = ({ stride: i, values: t }, e) => t[i * e], Po = ({ stride: i, values: t }, e) => mr(t[i * e]), Cr = ({ values: i }, t) => i[t], $o = ({ stride: i, values: t }, e) => t.subarray(i * e, i * (e + 1)), Wo = ({ values: i, valueOffsets: t }, e) => Rr(i, t, e), Yo = ({ values: i, valueOffsets: t }, e) => {
  const n = Rr(i, t, e);
  return n !== null ? zi(n) : null;
}, Jo = ({ values: i }, t) => i[t], Ho = ({ type: i, values: t }, e) => i.precision !== Y.HALF ? t[e] : mr(t[e]), Ko = (i, t) => i.type.unit === Et.DAY ? xr(i, t) : Er(i, t), Vr = ({ values: i }, t) => 1e3 * sn(i, t * 2), zr = ({ values: i }, t) => sn(i, t * 2), kr = ({ values: i }, t) => Eo(i, t * 2), jr = ({ values: i }, t) => Co(i, t * 2), Go = (i, t) => {
  switch (i.type.unit) {
    case D.SECOND:
      return Vr(i, t);
    case D.MILLISECOND:
      return zr(i, t);
    case D.MICROSECOND:
      return kr(i, t);
    case D.NANOSECOND:
      return jr(i, t);
  }
}, Pr = ({ values: i }, t) => i[t], $r = ({ values: i }, t) => i[t], Wr = ({ values: i }, t) => i[t], Yr = ({ values: i }, t) => i[t], Zo = (i, t) => {
  switch (i.type.unit) {
    case D.SECOND:
      return Pr(i, t);
    case D.MILLISECOND:
      return $r(i, t);
    case D.MICROSECOND:
      return Wr(i, t);
    case D.NANOSECOND:
      return Yr(i, t);
  }
}, qo = ({ values: i, stride: t }, e) => tn.decimal(i.subarray(t * e, t * (e + 1))), Xo = (i, t) => {
  const { valueOffsets: e, stride: n, children: r } = i, { [t * n]: s, [t * n + 1]: o } = e, c = r[0].slice(s, o - s);
  return new U([c]);
}, Qo = (i, t) => {
  const { valueOffsets: e, children: n } = i, { [t]: r, [t + 1]: s } = e, o = n[0];
  return new on(o.slice(r, s - r));
}, ta = (i, t) => new rn(i, t), ea = (i, t) => i.type.mode === dt.Dense ? Jr(i, t) : Hr(i, t), Jr = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return G.visit(n, i.valueOffsets[t]);
}, Hr = (i, t) => {
  const e = i.type.typeIdToChildIndex[i.typeIds[t]], n = i.children[e];
  return G.visit(n, t);
}, ia = (i, t) => {
  var e;
  return (e = i.dictionary) === null || e === void 0 ? void 0 : e.get(i.values[t]);
}, na = (i, t) => i.type.unit === Wt.DAY_TIME ? Kr(i, t) : Gr(i, t), Kr = ({ values: i }, t) => i.subarray(2 * t, 2 * (t + 1)), Gr = ({ values: i }, t) => {
  const e = i[t], n = new Int32Array(2);
  return n[0] = Math.trunc(e / 12), n[1] = Math.trunc(e % 12), n;
}, ra = (i, t) => {
  const { stride: e, children: n } = i, s = n[0].slice(t * e, e);
  return new U([s]);
};
y.prototype.visitNull = v(ko);
y.prototype.visitBool = v(jo);
y.prototype.visitInt = v(Jo);
y.prototype.visitInt8 = v(Kt);
y.prototype.visitInt16 = v(Kt);
y.prototype.visitInt32 = v(Kt);
y.prototype.visitInt64 = v(Cr);
y.prototype.visitUint8 = v(Kt);
y.prototype.visitUint16 = v(Kt);
y.prototype.visitUint32 = v(Kt);
y.prototype.visitUint64 = v(Cr);
y.prototype.visitFloat = v(Ho);
y.prototype.visitFloat16 = v(Po);
y.prototype.visitFloat32 = v(Kt);
y.prototype.visitFloat64 = v(Kt);
y.prototype.visitUtf8 = v(Yo);
y.prototype.visitBinary = v(Wo);
y.prototype.visitFixedSizeBinary = v($o);
y.prototype.visitDate = v(Ko);
y.prototype.visitDateDay = v(xr);
y.prototype.visitDateMillisecond = v(Er);
y.prototype.visitTimestamp = v(Go);
y.prototype.visitTimestampSecond = v(Vr);
y.prototype.visitTimestampMillisecond = v(zr);
y.prototype.visitTimestampMicrosecond = v(kr);
y.prototype.visitTimestampNanosecond = v(jr);
y.prototype.visitTime = v(Zo);
y.prototype.visitTimeSecond = v(Pr);
y.prototype.visitTimeMillisecond = v($r);
y.prototype.visitTimeMicrosecond = v(Wr);
y.prototype.visitTimeNanosecond = v(Yr);
y.prototype.visitDecimal = v(qo);
y.prototype.visitList = v(Xo);
y.prototype.visitStruct = v(ta);
y.prototype.visitUnion = v(ea);
y.prototype.visitDenseUnion = v(Jr);
y.prototype.visitSparseUnion = v(Hr);
y.prototype.visitDictionary = v(ia);
y.prototype.visitInterval = v(na);
y.prototype.visitIntervalDayTime = v(Kr);
y.prototype.visitIntervalYearMonth = v(Gr);
y.prototype.visitFixedSizeList = v(ra);
y.prototype.visitMap = v(Qo);
const G = new y(), gt = Symbol.for("keys"), pe = Symbol.for("vals");
class on {
  constructor(t) {
    return this[gt] = new U([t.children[0]]).memoize(), this[pe] = t.children[1], new Proxy(this, new oa());
  }
  [Symbol.iterator]() {
    return new sa(this[gt], this[pe]);
  }
  get size() {
    return this[gt].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[gt], e = this[pe], n = {};
    for (let r = -1, s = t.length; ++r < s; )
      n[t.get(r)] = G.visit(e, r);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${Te(t)}: ${Te(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class sa {
  constructor(t, e) {
    this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.keyIndex;
    return t === this.numKeys ? { done: !0, value: null } : (this.keyIndex++, {
      done: !1,
      value: [
        this.keys.get(t),
        G.visit(this.vals, t)
      ]
    });
  }
}
class oa {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[gt].toArray().map(String);
  }
  has(t, e) {
    return t[gt].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[gt].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const n = t[gt].indexOf(e);
    if (n !== -1) {
      const r = G.visit(Reflect.get(t, pe), n);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, n) {
    const r = t[gt].indexOf(e);
    return r !== -1 ? (ot.visit(Reflect.get(t, pe), r, n), Reflect.set(t, e, n)) : Reflect.has(t, e) ? Reflect.set(t, e, n) : !1;
  }
}
Object.defineProperties(on.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [gt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [pe]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let In;
function Zr(i, t, e, n) {
  const { length: r = 0 } = i;
  let s = typeof t != "number" ? 0 : t, o = typeof e != "number" ? r : e;
  return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (In = s, s = o, o = In), o > r && (o = r), n ? n(i, s, o) : [s, o];
}
const Sn = (i) => i !== i;
function Be(i) {
  if (typeof i !== "object" || i === null)
    return Sn(i) ? Sn : (e) => e === i;
  if (i instanceof Date) {
    const e = i.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(i) ? (e) => e ? qs(i, e) : !1 : i instanceof Map ? ca(i) : Array.isArray(i) ? aa(i) : i instanceof U ? la(i) : ua(i, !0);
}
function aa(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = Be(i[e]);
  return Di(t);
}
function ca(i) {
  let t = -1;
  const e = [];
  for (const n of i.values())
    e[++t] = Be(n);
  return Di(e);
}
function la(i) {
  const t = [];
  for (let e = -1, n = i.length; ++e < n; )
    t[e] = Be(i.get(e));
  return Di(t);
}
function ua(i, t = !1) {
  const e = Object.keys(i);
  if (!t && e.length === 0)
    return () => !1;
  const n = [];
  for (let r = -1, s = e.length; ++r < s; )
    n[r] = Be(i[e[r]]);
  return Di(n, e);
}
function Di(i, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return da(i, e);
      case Map:
        return Bn(i, e, e.keys());
      case on:
      case rn:
      case Object:
      case void 0:
        return Bn(i, e, t || Object.keys(e));
    }
    return e instanceof U ? ha(i, e) : !1;
  };
}
function da(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t[n]))
      return !1;
  return !0;
}
function ha(i, t) {
  const e = i.length;
  if (t.length !== e)
    return !1;
  for (let n = -1; ++n < e; )
    if (!i[n](t.get(n)))
      return !1;
  return !0;
}
function Bn(i, t, e) {
  const n = e[Symbol.iterator](), r = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), s = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = i.length;
  let c = s.next(), u = n.next(), d = r.next();
  for (; o < a && !u.done && !d.done && !c.done && !(u.value !== d.value || !i[o](c.value)); ++o, u = n.next(), d = r.next(), c = s.next())
    ;
  return o === a && u.done && d.done && c.done ? !0 : (n.return && n.return(), r.return && r.return(), s.return && s.return(), !1);
}
function qr(i, t, e, n) {
  return (e & 1 << n) !== 0;
}
function fa(i, t, e, n) {
  return (e & 1 << n) >> n;
}
function pa(i, t, e) {
  const n = e.byteLength + 7 & -8;
  if (i > 0 || e.byteLength < n) {
    const r = new Uint8Array(n);
    return r.set(i % 8 === 0 ? e.subarray(i >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Pi(new an(e, i, t, null, qr)).subarray(0, n)
    )), r;
  }
  return e;
}
function Pi(i) {
  const t = [];
  let e = 0, n = 0, r = 0;
  for (const o of i)
    o && (r |= 1 << n), ++n === 8 && (t[e++] = r, r = n = 0);
  (e === 0 || n > 0) && (t[e++] = r);
  const s = new Uint8Array(t.length + 7 & -8);
  return s.set(t), s;
}
class an {
  constructor(t, e, n, r, s) {
    this.bytes = t, this.length = n, this.context = r, this.get = s, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0;
  }
  next() {
    return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {
      value: this.get(this.context, this.index++, this.byte, this.bit++)
    }) : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function $i(i, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let s = 0;
    for (const o of new an(i, t, e - t, i, fa))
      s += o;
    return s;
  }
  const n = e >> 3 << 3, r = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    $i(i, t, r) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    $i(i, n, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    ya(i, r >> 3, n - r >> 3)
  );
}
function ya(i, t, e) {
  let n = 0, r = Math.trunc(t);
  const s = new DataView(i.buffer, i.byteOffset, i.byteLength), o = e === void 0 ? i.byteLength : r + e;
  for (; o - r >= 4; )
    n += Ri(s.getUint32(r)), r += 4;
  for (; o - r >= 2; )
    n += Ri(s.getUint16(r)), r += 2;
  for (; o - r >= 1; )
    n += Ri(s.getUint8(r)), r += 1;
  return n;
}
function Ri(i) {
  let t = Math.trunc(i);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const ma = -1;
class E {
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: n, nullBitmap: r, typeIds: s } = this;
    return e && (t += e.byteLength), n && (t += n.byteLength), r && (t += r.byteLength), s && (t += s.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    let t = this._nullCount, e;
    return t <= ma && (e = this.nullBitmap) && (this._nullCount = t = this.length - $i(e, this.offset, this.offset + this.length)), t;
  }
  constructor(t, e, n, r, s, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1));
    let c;
    s instanceof E ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets) : (this.stride = Tt(t), s && ((c = s[0]) && (this.valueOffsets = c), (c = s[1]) && (this.values = c), (c = s[2]) && (this.nullBitmap = c), (c = s[3]) && (this.typeIds = c))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
  }
  getValid(t) {
    if (this.nullable && this.nullCount > 0) {
      const e = this.offset + t;
      return (this.nullBitmap[e >> 3] & 1 << e % 8) !== 0;
    }
    return !0;
  }
  setValid(t, e) {
    if (!this.nullable)
      return e;
    if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
      const { nullBitmap: c } = this._changeLengthAndBackfillNullBitmap(this.length);
      Object.assign(this, { nullBitmap: c, _nullCount: 0 });
    }
    const { nullBitmap: n, offset: r } = this, s = r + t >> 3, o = (r + t) % 8, a = n[s] >> o & 1;
    return e ? a === 0 && (n[s] |= 1 << o, this._nullCount = this.nullCount + 1) : a === 1 && (n[s] &= ~(1 << o), this._nullCount = this.nullCount - 1), e;
  }
  clone(t = this.type, e = this.offset, n = this.length, r = this._nullCount, s = this, o = this.children) {
    return new E(t, e, n, r, s, o, this.dictionary);
  }
  slice(t, e) {
    const { stride: n, typeId: r, children: s } = this, o = +(this._nullCount === 0) - 1, a = r === 16 ? n : 1, c = this._sliceBuffers(t, e, n, r);
    return this.clone(
      this.type,
      this.offset + t,
      e,
      o,
      c,
      // Don't slice children if we have value offsets (the variable-width types)
      s.length === 0 || this.valueOffsets ? s : this._sliceChildren(s, a * t, a * e)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === l.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: n } = this, r = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    r[e >> 3] = (1 << e - (e & -8)) - 1, n > 0 && r.set(pa(this.offset, e, this.nullBitmap), 0);
    const s = this.buffers;
    return s[Nt.VALIDITY] = r, this.clone(this.type, 0, t, n + (t - e), s);
  }
  _sliceBuffers(t, e, n, r) {
    let s;
    const { buffers: o } = this;
    return (s = o[Nt.TYPE]) && (o[Nt.TYPE] = s.subarray(t, t + e)), (s = o[Nt.OFFSET]) && (o[Nt.OFFSET] = s.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (s = o[Nt.DATA]) && (o[Nt.DATA] = r === 6 ? s : s.subarray(n * t, n * (t + e))), o;
  }
  _sliceChildren(t, e, n) {
    return t.map((r) => r.slice(e, n));
  }
}
E.prototype.children = Object.freeze([]);
class De extends O {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["length"]: r = 0 } = t;
    return new E(e, n, r, 0);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.data), s = N(t.nullBitmap), o = Ae(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, a, c, [o, r, s]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.data), s = N(t.nullBitmap), o = Ae(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, a, c, [o, r, s]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: r } = t, s = N(t.nullBitmap), o = Ae(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, a, c, [o, void 0, s], [r]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: r = [] } = t, s = N(t.nullBitmap), { length: o = r.reduce((c, { length: u }) => Math.max(c, u), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, void 0, s], r);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["children"]: r = [] } = t, s = N(t.nullBitmap), o = R(e.ArrayType, t.typeIds), { ["length"]: a = o.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    if (f.isSparseUnion(e))
      return new E(e, n, a, c, [void 0, void 0, s, o], r);
    const u = Ae(t.valueOffsets);
    return new E(e, n, a, c, [u, void 0, s, o], r);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.indices.ArrayType, t.data), { ["dictionary"]: o = new U([new De().visit({ type: e.dictionary })]) } = t, { ["length"]: a = s.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, a, c, [void 0, s, r], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: n = 0 } = t, r = N(t.nullBitmap), s = R(e.ArrayType, t.data), { ["length"]: o = s.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, s, r]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: r = new De().visit({ type: e.valueType }) } = t, s = N(t.nullBitmap), { ["length"]: o = r.length / Tt(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, o, a, [void 0, void 0, s], [r]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: n = 0, ["child"]: r = new De().visit({ type: e.childType }) } = t, s = N(t.nullBitmap), o = Ae(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new E(e, n, a, c, [o, void 0, s], [r]);
  }
}
function A(i) {
  return new De().visit(i);
}
class Fn {
  constructor(t = 0, e) {
    this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    for (; this.chunkIndex < this.numChunks; ) {
      const t = this.chunkIterator.next();
      if (!t.done)
        return t;
      ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function Xr(i) {
  return i.reduce((t, e) => t + e.nullCount, 0);
}
function Qr(i) {
  return i.reduce((t, e, n) => (t[n + 1] = t[n] + e.length, t), new Uint32Array(i.length + 1));
}
function ts(i, t, e, n) {
  const r = [];
  for (let s = -1, o = i.length; ++s < o; ) {
    const a = i[s], c = t[s], { length: u } = a;
    if (c >= n)
      break;
    if (e >= c + u)
      continue;
    if (c >= e && c + u <= n) {
      r.push(a);
      continue;
    }
    const d = Math.max(0, e - c), h = Math.min(n - c, u);
    r.push(a.slice(d, h - d));
  }
  return r.length === 0 && r.push(i[0].slice(0, 0)), r;
}
function cn(i, t, e, n) {
  let r = 0, s = 0, o = t.length - 1;
  do {
    if (r >= o - 1)
      return e < t[o] ? n(i, r, e - t[r]) : null;
    s = r + Math.trunc((o - r) * 0.5), e < t[s] ? o = s : r = s;
  } while (r < o);
}
function ln(i, t) {
  return i.getValid(t);
}
function ye(i) {
  function t(e, n, r) {
    return i(e[n], r);
  }
  return function(e) {
    const n = this.data;
    return cn(n, this._offsets, e, t);
  };
}
function es(i) {
  let t;
  function e(n, r, s) {
    return i(n[r], s, t);
  }
  return function(n, r) {
    const s = this.data;
    t = r;
    const o = cn(s, this._offsets, n, e);
    return t = void 0, o;
  };
}
function is(i) {
  let t;
  function e(n, r, s) {
    let o = s, a = 0, c = 0;
    for (let u = r - 1, d = n.length; ++u < d; ) {
      const h = n[u];
      if (~(a = i(h, t, o)))
        return c + a;
      o = 0, c += h.length;
    }
    return -1;
  }
  return function(n, r) {
    t = n;
    const s = this.data, o = typeof r != "number" ? e(s, 0, 0) : cn(s, this._offsets, r, e);
    return t = void 0, o;
  };
}
class m extends O {
}
function ba(i, t) {
  return t === null && i.length > 0 ? 0 : -1;
}
function ga(i, t) {
  const { nullBitmap: e } = i;
  if (!e || i.nullCount <= 0)
    return -1;
  let n = 0;
  for (const r of new an(e, i.offset + (t || 0), i.length, e, qr)) {
    if (!r)
      return n;
    ++n;
  }
  return -1;
}
function B(i, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    return ga(i, e);
  const n = G.getVisitFn(i), r = Be(t);
  for (let s = (e || 0) - 1, o = i.length; ++s < o; )
    if (r(n(i, s)))
      return s;
  return -1;
}
function ns(i, t, e) {
  const n = G.getVisitFn(i), r = Be(t);
  for (let s = (e || 0) - 1, o = i.length; ++s < o; )
    if (r(n(i, s)))
      return s;
  return -1;
}
m.prototype.visitNull = ba;
m.prototype.visitBool = B;
m.prototype.visitInt = B;
m.prototype.visitInt8 = B;
m.prototype.visitInt16 = B;
m.prototype.visitInt32 = B;
m.prototype.visitInt64 = B;
m.prototype.visitUint8 = B;
m.prototype.visitUint16 = B;
m.prototype.visitUint32 = B;
m.prototype.visitUint64 = B;
m.prototype.visitFloat = B;
m.prototype.visitFloat16 = B;
m.prototype.visitFloat32 = B;
m.prototype.visitFloat64 = B;
m.prototype.visitUtf8 = B;
m.prototype.visitBinary = B;
m.prototype.visitFixedSizeBinary = B;
m.prototype.visitDate = B;
m.prototype.visitDateDay = B;
m.prototype.visitDateMillisecond = B;
m.prototype.visitTimestamp = B;
m.prototype.visitTimestampSecond = B;
m.prototype.visitTimestampMillisecond = B;
m.prototype.visitTimestampMicrosecond = B;
m.prototype.visitTimestampNanosecond = B;
m.prototype.visitTime = B;
m.prototype.visitTimeSecond = B;
m.prototype.visitTimeMillisecond = B;
m.prototype.visitTimeMicrosecond = B;
m.prototype.visitTimeNanosecond = B;
m.prototype.visitDecimal = B;
m.prototype.visitList = B;
m.prototype.visitStruct = B;
m.prototype.visitUnion = B;
m.prototype.visitDenseUnion = ns;
m.prototype.visitSparseUnion = ns;
m.prototype.visitDictionary = B;
m.prototype.visitInterval = B;
m.prototype.visitIntervalDayTime = B;
m.prototype.visitIntervalYearMonth = B;
m.prototype.visitFixedSizeList = B;
m.prototype.visitMap = B;
const ui = new m();
class b extends O {
}
function w(i) {
  const { type: t } = i;
  if (i.nullCount === 0 && i.stride === 1 && (t.typeId === l.Timestamp || t instanceof Jt && t.bitWidth !== 64 || t instanceof Re && t.bitWidth !== 64 || t instanceof Ue && t.precision !== Y.HALF))
    return new Fn(i.data.length, (n) => {
      const r = i.data[n];
      return r.values.subarray(0, r.length)[Symbol.iterator]();
    });
  let e = 0;
  return new Fn(i.data.length, (n) => {
    const s = i.data[n].length, o = i.slice(e, e + s);
    return e += s, new _a(o);
  });
}
class _a {
  constructor(t) {
    this.vector = t, this.index = 0;
  }
  next() {
    return this.index < this.vector.length ? {
      value: this.vector.get(this.index++)
    } : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
b.prototype.visitNull = w;
b.prototype.visitBool = w;
b.prototype.visitInt = w;
b.prototype.visitInt8 = w;
b.prototype.visitInt16 = w;
b.prototype.visitInt32 = w;
b.prototype.visitInt64 = w;
b.prototype.visitUint8 = w;
b.prototype.visitUint16 = w;
b.prototype.visitUint32 = w;
b.prototype.visitUint64 = w;
b.prototype.visitFloat = w;
b.prototype.visitFloat16 = w;
b.prototype.visitFloat32 = w;
b.prototype.visitFloat64 = w;
b.prototype.visitUtf8 = w;
b.prototype.visitBinary = w;
b.prototype.visitFixedSizeBinary = w;
b.prototype.visitDate = w;
b.prototype.visitDateDay = w;
b.prototype.visitDateMillisecond = w;
b.prototype.visitTimestamp = w;
b.prototype.visitTimestampSecond = w;
b.prototype.visitTimestampMillisecond = w;
b.prototype.visitTimestampMicrosecond = w;
b.prototype.visitTimestampNanosecond = w;
b.prototype.visitTime = w;
b.prototype.visitTimeSecond = w;
b.prototype.visitTimeMillisecond = w;
b.prototype.visitTimeMicrosecond = w;
b.prototype.visitTimeNanosecond = w;
b.prototype.visitDecimal = w;
b.prototype.visitList = w;
b.prototype.visitStruct = w;
b.prototype.visitUnion = w;
b.prototype.visitDenseUnion = w;
b.prototype.visitSparseUnion = w;
b.prototype.visitDictionary = w;
b.prototype.visitInterval = w;
b.prototype.visitIntervalDayTime = w;
b.prototype.visitIntervalYearMonth = w;
b.prototype.visitFixedSizeList = w;
b.prototype.visitMap = w;
const un = new b(), va = (i, t) => i + t;
class Gt extends O {
  visitNull(t, e) {
    return 0;
  }
  visitInt(t, e) {
    return t.type.bitWidth / 8;
  }
  visitFloat(t, e) {
    return t.type.ArrayType.BYTES_PER_ELEMENT;
  }
  visitBool(t, e) {
    return 1 / 8;
  }
  visitDecimal(t, e) {
    return t.type.bitWidth / 8;
  }
  visitDate(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitTime(t, e) {
    return t.type.bitWidth / 8;
  }
  visitTimestamp(t, e) {
    return t.type.unit === D.SECOND ? 4 : 8;
  }
  visitInterval(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitStruct(t, e) {
    return t.children.reduce((n, r) => n + Ot.visit(r, e), 0);
  }
  visitFixedSizeBinary(t, e) {
    return t.type.byteWidth;
  }
  visitMap(t, e) {
    return 8 + t.children.reduce((n, r) => n + Ot.visit(r, e), 0);
  }
  visitDictionary(t, e) {
    var n;
    return t.type.indices.bitWidth / 8 + (((n = t.dictionary) === null || n === void 0 ? void 0 : n.getByteLength(t.values[e])) || 0);
  }
}
const wa = ({ valueOffsets: i }, t) => 8 + (i[t + 1] - i[t]), Ia = ({ valueOffsets: i }, t) => 8 + (i[t + 1] - i[t]), Sa = ({ valueOffsets: i, stride: t, children: e }, n) => {
  const r = e[0], { [n * t]: s } = i, { [n * t + 1]: o } = i, a = Ot.getVisitFn(r.type), c = r.slice(s, o - s);
  let u = 8;
  for (let d = -1, h = o - s; ++d < h; )
    u += a(c, d);
  return u;
}, Ba = ({ stride: i, children: t }, e) => {
  const n = t[0], r = n.slice(e * i, i), s = Ot.getVisitFn(n.type);
  let o = 0;
  for (let a = -1, c = r.length; ++a < c; )
    o += s(r, a);
  return o;
}, Fa = (i, t) => i.type.mode === dt.Dense ? rs(i, t) : ss(i, t), rs = ({ type: i, children: t, typeIds: e, valueOffsets: n }, r) => {
  const s = i.typeIdToChildIndex[e[r]];
  return 8 + Ot.visit(t[s], n[r]);
}, ss = ({ children: i }, t) => 4 + Ot.visitMany(i, i.map(() => t)).reduce(va, 0);
Gt.prototype.visitUtf8 = wa;
Gt.prototype.visitBinary = Ia;
Gt.prototype.visitList = Sa;
Gt.prototype.visitFixedSizeList = Ba;
Gt.prototype.visitUnion = Fa;
Gt.prototype.visitDenseUnion = rs;
Gt.prototype.visitSparseUnion = ss;
const Ot = new Gt();
var os;
const as = {}, cs = {};
class U {
  constructor(t) {
    var e, n, r;
    const s = t[0] instanceof U ? t.flatMap((a) => a.data) : t;
    if (s.length === 0 || s.some((a) => !(a instanceof E)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
    switch (s.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: u, byteLength: d } = as[o.typeId], h = s[0];
        this.isValid = (F) => ln(h, F), this.get = (F) => a(h, F), this.set = (F, j) => c(h, F, j), this.indexOf = (F) => u(h, F), this.getByteLength = (F) => d(h, F), this._offsets = [0, h.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, cs[o.typeId]), this._offsets = Qr(s);
        break;
    }
    this.data = s, this.type = o, this.stride = Tt(o), this.numChildren = (r = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0, this.length = this._offsets[this._offsets.length - 1];
  }
  /**
   * The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
   */
  get byteLength() {
    return this._byteLength === -1 && (this._byteLength = this.data.reduce((t, e) => t + e.byteLength, 0)), this._byteLength;
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = Xr(this.data)), this._nullCount;
  }
  /**
   * The Array or TypedAray constructor used for the JS representation
   *  of the element's values in {@link Vector.prototype.toArray `toArray()`}.
   */
  get ArrayType() {
    return this.type.ArrayType;
  }
  /**
   * The name that should be printed when the Vector is logged in a message.
   */
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  /**
   * The name of this Vector.
   */
  get VectorName() {
    return `${l[this.type.typeId]}Vector`;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  includes(t, e) {
    return this.indexOf(t, e) > 0;
  }
  /**
   * Get the size in bytes of an element by index.
   * @param index The index at which to get the byteLength.
   */
  // @ts-ignore
  getByteLength(t) {
    return 0;
  }
  /**
   * Iterator for the Vector's elements.
   */
  [Symbol.iterator]() {
    return un.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new U(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new U(Zr(this, t, e, ({ data: n, _offsets: r }, s, o) => ts(n, r, s, o)));
  }
  toJSON() {
    return [...this];
  }
  /**
   * Return a JavaScript Array or TypedArray of the Vector's elements.
   *
   * @note If this Vector contains a single Data chunk and the Vector's type is a
   *  primitive numeric type corresponding to one of the JavaScript TypedArrays, this
   *  method returns a zero-copy slice of the underlying TypedArray values. If there's
   *  more than one chunk, the resulting TypedArray will be a copy of the data from each
   *  chunk's underlying TypedArray values.
   *
   * @returns An Array or TypedArray of the Vector's elements, based on the Vector's DataType.
   */
  toArray() {
    const { type: t, data: e, length: n, stride: r, ArrayType: s } = this;
    switch (t.typeId) {
      case l.Int:
      case l.Float:
      case l.Decimal:
      case l.Time:
      case l.Timestamp:
        switch (e.length) {
          case 0:
            return new s();
          case 1:
            return e[0].values.subarray(0, n * r);
          default:
            return e.reduce((o, { values: a, length: c }) => (o.array.set(a.subarray(0, c * r), o.offset), o.offset += c * r, o), { array: new s(n * r), offset: 0 }).array;
        }
    }
    return [...this];
  }
  /**
   * Returns a string representation of the Vector.
   *
   * @returns A string representation of the Vector.
   */
  toString() {
    return `[${[...this].join(",")}]`;
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex((n) => n.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new U(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return f.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
  }
  /**
   * Adds memoization to the Vector's {@link get} method. For dictionary
   * vectors, this method return a vector that memoizes only the dictionary
   * values.
   *
   * Memoization is very useful when decoding a value is expensive such as
   * Uft8. The memoization creates a cache of the size of the Vector and
   * therfore increases memory usage.
   *
   * @returns A new vector that memoizes calls to {@link get}.
   */
  memoize() {
    if (f.isDictionary(this.type)) {
      const t = new di(this.data[0].dictionary), e = this.data.map((n) => {
        const r = n.clone();
        return r.dictionary = t, r;
      });
      return new U(e);
    }
    return new di(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A a vector without memoization.
   */
  unmemoize() {
    if (f.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((n) => {
        const r = n.clone();
        return r.dictionary = t, r;
      });
      return new U(e);
    }
    return this;
  }
}
os = Symbol.toStringTag;
U[os] = ((i) => {
  i.type = f.prototype, i.data = [], i.length = 0, i.stride = 1, i.numChildren = 0, i._nullCount = -1, i._byteLength = -1, i._offsets = new Uint32Array([0]), i[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(l).map((e) => l[e]).filter((e) => typeof e == "number" && e !== l.NONE);
  for (const e of t) {
    const n = G.getVisitFnByTypeId(e), r = ot.getVisitFnByTypeId(e), s = ui.getVisitFnByTypeId(e), o = Ot.getVisitFnByTypeId(e);
    as[e] = { get: n, set: r, indexOf: s, byteLength: o }, cs[e] = Object.create(i, {
      isValid: { value: ye(ln) },
      get: { value: ye(G.getVisitFnByTypeId(e)) },
      set: { value: es(ot.getVisitFnByTypeId(e)) },
      indexOf: { value: is(ui.getVisitFnByTypeId(e)) },
      getByteLength: { value: ye(Ot.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(U.prototype);
class di extends U {
  constructor(t) {
    super(t.data);
    const e = this.get, n = this.set, r = this.slice, s = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(o) {
        const a = s[o];
        if (a !== void 0)
          return a;
        const c = e.call(this, o);
        return s[o] = c, c;
      }
    }), Object.defineProperty(this, "set", {
      value(o, a) {
        n.call(this, o, a), s[o] = a;
      }
    }), Object.defineProperty(this, "slice", {
      value: (o, a) => new di(r.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new U(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
class Wi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * Index to the start of the RecordBlock (note this is past the Message header)
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * Length of the metadata
   */
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  /**
   * Length of the data (this is aligned so there can be a gap between this and
   * the metadata).
   */
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(t, e, n, r) {
    return t.prep(8, 24), t.writeInt64(BigInt(r ?? 0)), t.pad(4), t.writeInt32(n), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}
const xi = 2, _t = 4, Lt = 4, x = 4, jt = new Int32Array(2), An = new Float32Array(jt.buffer), On = new Float64Array(jt.buffer), Pe = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var Yi;
(function(i) {
  i[i.UTF8_BYTES = 1] = "UTF8_BYTES", i[i.UTF16_STRING = 2] = "UTF16_STRING";
})(Yi || (Yi = {}));
let be = class ls {
  /**
   * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
   */
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  /**
   * Create and allocate a new ByteBuffer with a given size.
   */
  static allocate(t) {
    return new ls(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  /**
   * Get the underlying `Uint8Array`.
   */
  bytes() {
    return this.bytes_;
  }
  /**
   * Get the buffer's position.
   */
  position() {
    return this.position_;
  }
  /**
   * Set the buffer's position.
   */
  setPosition(t) {
    this.position_ = t;
  }
  /**
   * Get the buffer's capacity.
   */
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return BigInt.asIntN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readUint64(t) {
    return BigInt.asUintN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readFloat32(t) {
    return jt[0] = this.readInt32(t), An[0];
  }
  readFloat64(t) {
    return jt[Pe ? 0 : 1] = this.readInt32(t), jt[Pe ? 1 : 0] = this.readInt32(t + 4), On[0];
  }
  writeInt8(t, e) {
    this.bytes_[t] = e;
  }
  writeUint8(t, e) {
    this.bytes_[t] = e;
  }
  writeInt16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeUint16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeInt32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeUint32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeInt64(t, e) {
    this.writeInt32(t, Number(BigInt.asIntN(32, e))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, e >> BigInt(32))));
  }
  writeUint64(t, e) {
    this.writeUint32(t, Number(BigInt.asUintN(32, e))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, e >> BigInt(32))));
  }
  writeFloat32(t, e) {
    An[0] = e, this.writeInt32(t, jt[0]);
  }
  writeFloat64(t, e) {
    On[0] = e, this.writeInt32(t, jt[Pe ? 0 : 1]), this.writeInt32(t + 4, jt[Pe ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + _t + Lt)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < Lt; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + _t + e));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, e) {
    const n = t - this.readInt32(t);
    return e < this.readInt16(n) ? this.readInt16(n + e) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, e) {
    return t.bb_pos = e + this.readInt32(e), t.bb = this, t;
  }
  /**
   * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
   * This allocates a new string and converts to wide chars upon each access.
   *
   * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
   * "optionalEncoding" argument. This is useful for avoiding conversion when
   * the data will just be packaged back up in another FlatBuffer later on.
   *
   * @param offset
   * @param opt_encoding Defaults to UTF16_STRING
   */
  __string(t, e) {
    t += this.readInt32(t);
    const n = this.readInt32(t);
    t += _t;
    const r = this.bytes_.subarray(t, t + n);
    return e === Yi.UTF8_BYTES ? r : this.text_decoder_.decode(r);
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, e) {
    return typeof t == "string" ? this.__string(e) : this.__union(t, e);
  }
  /**
   * Retrieve the relative offset stored at "offset"
   */
  __indirect(t) {
    return t + this.readInt32(t);
  }
  /**
   * Get the start of data of a vector whose offset is stored at "offset" in this object.
   */
  __vector(t) {
    return t + this.readInt32(t) + _t;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != Lt)
      throw new Error("FlatBuffers: file identifier must be length " + Lt);
    for (let e = 0; e < Lt; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + _t + e))
        return !1;
    return !0;
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, e) {
    const n = [];
    for (let r = 0; r < e; ++r) {
      const s = t(r);
      s !== null && n.push(s);
    }
    return n;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, e) {
    const n = [];
    for (let r = 0; r < e; ++r) {
      const s = t(r);
      s !== null && n.push(s.unpack());
    }
    return n;
  }
}, us = class ds {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
    let e;
    t ? e = t : e = 1024, this.bb = be.allocate(e), this.space = e;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  /**
   * In order to save space, fields that are set to their default value
   * don't get serialized into the buffer. Forcing defaults provides a
   * way to manually disable this optimization.
   *
   * @param forceDefaults true always serializes default values
   */
  forceDefaults(t) {
    this.force_defaults = t;
  }
  /**
   * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
   * called finish(). The actual data starts at the ByteBuffer's current position,
   * not necessarily at 0.
   */
  dataBuffer() {
    return this.bb;
  }
  /**
   * Get the bytes representing the FlatBuffer. Only call this after you've
   * called finish().
   */
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  /**
   * Prepare to write an element of `size` after `additional_bytes` have been
   * written, e.g. if you write a string, you need to align such the int length
   * field is aligned to 4 bytes, and the string data follows it directly. If all
   * you need to do is alignment, `additional_bytes` will be 0.
   *
   * @param size This is the of the new element to write
   * @param additional_bytes The padding size
   */
  prep(t, e) {
    t > this.minalign && (this.minalign = t);
    const n = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
    for (; this.space < n + t + e; ) {
      const r = this.bb.capacity();
      this.bb = ds.growByteBuffer(this.bb), this.space += this.bb.capacity() - r;
    }
    this.pad(n);
  }
  pad(t) {
    for (let e = 0; e < t; e++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  /**
   * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int8` to add the buffer.
   */
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  /**
   * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int16` to add the buffer.
   */
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  /**
   * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int32` to add the buffer.
   */
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  /**
   * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int64` to add the buffer.
   */
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  /**
   * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float32` to add the buffer.
   */
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  /**
   * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float64` to add the buffer.
   */
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, e, n) {
    (this.force_defaults || e != n) && (this.addInt8(e), this.slot(t));
  }
  addFieldInt16(t, e, n) {
    (this.force_defaults || e != n) && (this.addInt16(e), this.slot(t));
  }
  addFieldInt32(t, e, n) {
    (this.force_defaults || e != n) && (this.addInt32(e), this.slot(t));
  }
  addFieldInt64(t, e, n) {
    (this.force_defaults || e !== n) && (this.addInt64(e), this.slot(t));
  }
  addFieldFloat32(t, e, n) {
    (this.force_defaults || e != n) && (this.addFloat32(e), this.slot(t));
  }
  addFieldFloat64(t, e, n) {
    (this.force_defaults || e != n) && (this.addFloat64(e), this.slot(t));
  }
  addFieldOffset(t, e, n) {
    (this.force_defaults || e != n) && (this.addOffset(e), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, e, n) {
    e != n && (this.nested(e), this.slot(t));
  }
  /**
   * Structures are always stored inline, they need to be created right
   * where they're used.  You'll get this assertion failure if you
   * created it elsewhere.
   */
  nested(t) {
    if (t != this.offset())
      throw new Error("FlatBuffers: struct must be serialized inline.");
  }
  /**
   * Should not be creating any other object, string or vector
   * while an object is being constructed
   */
  notNested() {
    if (this.isNested)
      throw new Error("FlatBuffers: object serialization must not be nested.");
  }
  /**
   * Set the current vtable at `voffset` to the current location in the buffer.
   */
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  /**
   * @returns Offset relative to the end of the buffer.
   */
  offset() {
    return this.bb.capacity() - this.space;
  }
  /**
   * Doubles the size of the backing ByteBuffer and copies the old data towards
   * the end of the new buffer (since we build the buffer backwards).
   *
   * @param bb The current buffer with the existing data
   * @returns A new byte buffer with the old data copied
   * to it. The data is located at the end of the buffer.
   *
   * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
   * it a uint8Array we need to suppress the type check:
   * @suppress {checkTypes}
   */
  static growByteBuffer(t) {
    const e = t.capacity();
    if (e & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const n = e << 1, r = be.allocate(n);
    return r.setPosition(n - e), r.bytes().set(t.bytes(), n - e), r;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(_t, 0), this.writeInt32(this.offset() - t + _t);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let e = 0; e < t; e++)
      this.vtable[e] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  /**
   * Finish off writing the object that is under construction.
   *
   * @returns The offset to the object inside `dataBuffer`
   */
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let e = this.vtable_in_use - 1;
    for (; e >= 0 && this.vtable[e] == 0; e--)
      ;
    const n = e + 1;
    for (; e >= 0; e--)
      this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
    const r = 2;
    this.addInt16(t - this.object_start);
    const s = (n + r) * xi;
    this.addInt16(s);
    let o = 0;
    const a = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (s == this.bb.readInt16(c)) {
        for (let u = xi; u < s; u += xi)
          if (this.bb.readInt16(a + u) != this.bb.readInt16(c + u))
            continue t;
        o = this.vtables[e];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, e, n) {
    const r = n ? x : 0;
    if (e) {
      const s = e;
      if (this.prep(this.minalign, _t + Lt + r), s.length != Lt)
        throw new Error("FlatBuffers: file identifier must be length " + Lt);
      for (let o = Lt - 1; o >= 0; o--)
        this.writeInt8(s.charCodeAt(o));
    }
    this.prep(this.minalign, _t + r), this.addOffset(t), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, e) {
    this.finish(t, e, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, e) {
    const n = this.bb.capacity() - t, r = n - this.bb.readInt32(n);
    if (!(e < this.bb.readInt16(r) && this.bb.readInt16(r + e) != 0))
      throw new Error("FlatBuffers: field " + e + " must be set");
  }
  /**
   * Start a new array/vector of objects.  Users usually will not call
   * this directly. The FlatBuffers compiler will create a start/end
   * method for vector types in generated code.
   *
   * @param elem_size The size of each element in the array
   * @param num_elems The number of elements in the array
   * @param alignment The alignment of the array
   */
  startVector(t, e, n) {
    this.notNested(), this.vector_num_elems = e, this.prep(_t, t * e), this.prep(n, t * e);
  }
  /**
   * Finish off the creation of an array and all its elements. The array must be
   * created with `startVector`.
   *
   * @returns The offset at which the newly created array
   * starts.
   */
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If the string passed has
   * already been seen, we return the offset of the already written string
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createSharedString(t) {
    if (!t)
      return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t))
      return this.string_maps.get(t);
    const e = this.createString(t);
    return this.string_maps.set(t, e), e;
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
   * instead of a string, it is assumed to contain valid UTF-8 encoded data.
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createString(t) {
    if (t == null)
      return 0;
    let e;
    t instanceof Uint8Array ? e = t : e = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
    for (let n = 0, r = this.space, s = this.bb.bytes(); n < e.length; n++)
      s[r++] = e[n];
    return this.endVector();
  }
  /**
   * A helper function to pack an object
   *
   * @returns offset of obj
   */
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  /**
   * A helper function to pack a list of object
   *
   * @returns list of offsets of each non null object
   */
  createObjectOffsetList(t) {
    const e = [];
    for (let n = 0; n < t.length; ++n) {
      const r = t[n];
      if (r !== null)
        e.push(this.createObjectOffset(r));
      else
        throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return e;
  }
  createStructOffsetList(t, e) {
    return e(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
};
class P {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new P()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + x), (e || new P()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, e, n) {
    return P.startKeyValue(t), P.addKey(t, e), P.addValue(t, n), P.endKeyValue(t);
  }
}
var ge;
(function(i) {
  i[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2", i[i.V3 = 2] = "V3", i[i.V4 = 3] = "V4", i[i.V5 = 4] = "V5";
})(ge || (ge = {}));
var _e;
(function(i) {
  i[i.Little = 0] = "Little", i[i.Big = 1] = "Big";
})(_e || (_e = {}));
var hi;
(function(i) {
  i[i.DenseArray = 0] = "DenseArray";
})(hi || (hi = {}));
class X {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new X()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + x), (e || new X()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  isSigned() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startInt(t) {
    t.startObject(2);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addIsSigned(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, e, n) {
    return X.startInt(t), X.addBitWidth(t, e), X.addIsSigned(t, n), X.endInt(t);
  }
}
class Ut {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new Ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + x), (e || new Ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * The known dictionary id in the application where this data is used. In
   * the file or streaming formats, the dictionary ids are found in the
   * DictionaryBatch messages
   */
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  /**
   * The dictionary indices are constrained to be non-negative integers. If
   * this field is null, the indices must be signed int32. To maximize
   * cross-language compatibility and performance, implementations are
   * recommended to prefer signed integer types over unsigned integer types
   * and to avoid uint64 indices unless they are required by an application.
   */
  indexType(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new X()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * By default, dictionaries are not ordered, or the order does not have
   * semantic meaning. In some statistical, applications, dictionary-encoding
   * is used to represent ordered categorical data, and we provide a way to
   * preserve that metadata here
   */
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : hi.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, BigInt("0"));
  }
  static addIndexType(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsOrdered(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static addDictionaryKind(t, e) {
    t.addFieldInt16(3, e, hi.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + x), (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return qt.startBinary(t), qt.endBinary(t);
  }
}
class Xt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new Xt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + x), (e || new Xt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Xt.startBool(t), Xt.endBool(t);
  }
}
var fi;
(function(i) {
  i[i.DAY = 0] = "DAY", i[i.MILLISECOND = 1] = "MILLISECOND";
})(fi || (fi = {}));
let Ye = class oe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new oe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + x), (e || new oe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : fi.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, fi.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return oe.startDate(t), oe.addUnit(t, e), oe.endDate(t);
  }
};
class H {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new H()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + x), (e || new H()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Total number of decimal digits
   */
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of digits after the decimal point "."
   */
  scale() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of bits per value. The only accepted widths are 128 and 256.
   * We use bitWidth for consistency with Int::bitWidth.
   */
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readInt32(this.bb_pos + t) : 128;
  }
  static startDecimal(t) {
    t.startObject(3);
  }
  static addPrecision(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addScale(t, e) {
    t.addFieldInt32(1, e, 0);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(2, e, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, e, n, r) {
    return H.startDecimal(t), H.addPrecision(t, e), H.addScale(t, n), H.addBitWidth(t, r), H.endDecimal(t);
  }
}
var ve;
(function(i) {
  i[i.SECOND = 0] = "SECOND", i[i.MILLISECOND = 1] = "MILLISECOND", i[i.MICROSECOND = 2] = "MICROSECOND", i[i.NANOSECOND = 3] = "NANOSECOND";
})(ve || (ve = {}));
class vt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + x), (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of bytes per value
   */
  byteWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeBinary(t) {
    t.startObject(1);
  }
  static addByteWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, e) {
    return vt.startFixedSizeBinary(t), vt.addByteWidth(t, e), vt.endFixedSizeBinary(t);
  }
}
class wt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new wt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + x), (e || new wt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of list items per value
   */
  listSize() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeList(t) {
    t.startObject(1);
  }
  static addListSize(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, e) {
    return wt.startFixedSizeList(t), wt.addListSize(t, e), wt.endFixedSizeList(t);
  }
}
var pi;
(function(i) {
  i[i.HALF = 0] = "HALF", i[i.SINGLE = 1] = "SINGLE", i[i.DOUBLE = 2] = "DOUBLE";
})(pi || (pi = {}));
class It {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new It()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + x), (e || new It()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : pi.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, pi.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return It.startFloatingPoint(t), It.addPrecision(t, e), It.endFloatingPoint(t);
  }
}
var yi;
(function(i) {
  i[i.YEAR_MONTH = 0] = "YEAR_MONTH", i[i.DAY_TIME = 1] = "DAY_TIME", i[i.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(yi || (yi = {}));
class St {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new St()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + x), (e || new St()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : yi.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, yi.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return St.startInterval(t), St.addUnit(t, e), St.endInterval(t);
  }
}
class Qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + x), (e || new Qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Qt.startList(t), Qt.endList(t);
  }
}
let Je = class ae {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new ae()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + x), (e || new ae()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Set to true if the keys within each value are sorted
   */
  keysSorted() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startMap(t) {
    t.startObject(1);
  }
  static addKeysSorted(t, e) {
    t.addFieldInt8(0, +e, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, e) {
    return ae.startMap(t), ae.addKeysSorted(t, e), ae.endMap(t);
  }
};
class te {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + x), (e || new te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return te.startNull(t), te.endNull(t);
  }
}
class ee {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + x), (e || new ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return ee.startStruct_(t), ee.endStruct_(t);
  }
}
class it {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new it()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + x), (e || new it()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ve.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, ve.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, n) {
    return it.startTime(t), it.addUnit(t, e), it.addBitWidth(t, n), it.endTime(t);
  }
}
class nt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + x), (e || new nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ve.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, ve.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, n) {
    return nt.startTimestamp(t), nt.addUnit(t, e), nt.addTimezone(t, n), nt.endTimestamp(t);
  }
}
var mi;
(function(i) {
  i[i.Sparse = 0] = "Sparse", i[i.Dense = 1] = "Dense";
})(mi || (mi = {}));
class K {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new K()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + x), (e || new K()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : mi.Sparse;
  }
  typeIds(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + t * 4) : 0;
  }
  typeIdsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  typeIdsArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUnion(t) {
    t.startObject(2);
  }
  static addMode(t, e) {
    t.addFieldInt16(0, e, mi.Sparse);
  }
  static addTypeIds(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createTypeIdsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addInt32(e[n]);
    return t.endVector();
  }
  static startTypeIdsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, e, n) {
    return K.startUnion(t), K.addMode(t, e), K.addTypeIds(t, n), K.endUnion(t);
  }
}
class ie {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new ie()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + x), (e || new ie()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return ie.startUtf8(t), ie.endUtf8(t);
  }
}
var V;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Null = 1] = "Null", i[i.Int = 2] = "Int", i[i.FloatingPoint = 3] = "FloatingPoint", i[i.Binary = 4] = "Binary", i[i.Utf8 = 5] = "Utf8", i[i.Bool = 6] = "Bool", i[i.Decimal = 7] = "Decimal", i[i.Date = 8] = "Date", i[i.Time = 9] = "Time", i[i.Timestamp = 10] = "Timestamp", i[i.Interval = 11] = "Interval", i[i.List = 12] = "List", i[i.Struct_ = 13] = "Struct_", i[i.Union = 14] = "Union", i[i.FixedSizeBinary = 15] = "FixedSizeBinary", i[i.FixedSizeList = 16] = "FixedSizeList", i[i.Map = 17] = "Map", i[i.Duration = 18] = "Duration", i[i.LargeBinary = 19] = "LargeBinary", i[i.LargeUtf8 = 20] = "LargeUtf8", i[i.LargeList = 21] = "LargeList", i[i.RunEndEncoded = 22] = "RunEndEncoded";
})(V || (V = {}));
let tt = class He {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new He()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + x), (e || new He()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  /**
   * Whether or not this field can contain nulls. Should be true in general.
   */
  nullable() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  typeType() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readUint8(this.bb_pos + t) : V.NONE;
  }
  /**
   * This is the type of the decoded value if the field is dictionary encoded.
   */
  type(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  /**
   * Present only if the field is dictionary encoded.
   */
  dictionary(t) {
    const e = this.bb.__offset(this.bb_pos, 12);
    return e ? (t || new Ut()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (e || new He()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 16);
    return n ? (e || new P()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addNullable(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static addTypeType(t, e) {
    t.addFieldInt8(2, e, V.NONE);
  }
  static addType(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static addDictionary(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static addChildren(t, e) {
    t.addFieldOffset(5, e, 0);
  }
  static createChildrenVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startChildrenVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(6, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, mt = class Dt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new Dt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + x), (e || new Dt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : _e.Little;
  }
  fields(t, e) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (e || new tt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new P()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Features used in the stream/file.
   */
  features(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8) : BigInt(0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, e) {
    t.addFieldInt16(0, e, _e.Little);
  }
  static addFields(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createFieldsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startFieldsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addFeatures(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static createFeaturesVector(t, e) {
    t.startVector(8, e.length, 8);
    for (let n = e.length - 1; n >= 0; n--)
      t.addInt64(e[n]);
    return t.endVector();
  }
  static startFeaturesVector(t, e) {
    t.startVector(8, e, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedSchemaBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createSchema(t, e, n, r, s) {
    return Dt.startSchema(t), Dt.addEndianness(t, e), Dt.addFields(t, n), Dt.addCustomMetadata(t, r), Dt.addFeatures(t, s), Dt.endSchema(t);
  }
};
class q {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new q()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + x), (e || new q()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ge.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new mt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new Wi()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (e || new Wi()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (e || new P()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, ge.V1);
  }
  static addSchema(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addDictionaries(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startDictionariesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addRecordBatches(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static startRecordBatchesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedFooterBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
}
class T {
  constructor(t = [], e, n) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), n || (n = Ji(t)), this.dictionaries = n;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, e) => `${e}: ${t}`).join(", ")} }>`;
  }
  /**
   * Construct a new Schema containing only specified fields.
   *
   * @param fieldNames Names of fields to keep.
   * @returns A new Schema of fields matching the specified names.
   */
  select(t) {
    const e = new Set(t), n = this.fields.filter((r) => e.has(r.name));
    return new T(n, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((n) => this.fields[n]).filter(Boolean);
    return new T(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof T ? t[0] : Array.isArray(t[0]) ? new T(t[0]) : new T(t), n = [...this.fields], r = $e($e(/* @__PURE__ */ new Map(), this.metadata), e.metadata), s = e.fields.filter((a) => {
      const c = n.findIndex((u) => u.name === a.name);
      return ~c ? (n[c] = a.clone({
        metadata: $e($e(/* @__PURE__ */ new Map(), n[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = Ji(s, /* @__PURE__ */ new Map());
    return new T([...n, ...s], r, new Map([...this.dictionaries, ...o]));
  }
}
T.prototype.fields = null;
T.prototype.metadata = null;
T.prototype.dictionaries = null;
class C {
  /** @nocollapse */
  static new(...t) {
    let [e, n, r, s] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], n === void 0 && (n = t[0].type), r === void 0 && (r = t[0].nullable), s === void 0 && (s = t[0].metadata)), new C(`${e}`, n, r, s);
  }
  constructor(t, e, n = !1, r) {
    this.name = t, this.type = e, this.nullable = n, this.metadata = r || /* @__PURE__ */ new Map();
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...t) {
    let [e, n, r, s] = t;
    return !t[0] || typeof t[0] != "object" ? [e = this.name, n = this.type, r = this.nullable, s = this.metadata] = t : { name: e = this.name, type: n = this.type, nullable: r = this.nullable, metadata: s = this.metadata } = t[0], C.new(e, n, r, s);
  }
}
C.prototype.type = null;
C.prototype.name = null;
C.prototype.nullable = null;
C.prototype.metadata = null;
function $e(i, t) {
  return new Map([...i || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function Ji(i, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, n = i.length; ++e < n; ) {
    const s = i[e].type;
    if (f.isDictionary(s)) {
      if (!t.has(s.id))
        t.set(s.id, s.dictionary);
      else if (t.get(s.id) !== s.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    s.children && s.children.length > 0 && Ji(s.children, t);
  }
  return t;
}
var Aa = us, Oa = be;
class dn {
  /** @nocollapse */
  static decode(t) {
    t = new Oa(N(t));
    const e = q.getRootAsFooter(t), n = T.decode(e.schema());
    return new Da(n, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Aa(), n = T.encode(e, t.schema);
    q.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      we.encode(e, o);
    const r = e.endVector();
    q.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      we.encode(e, o);
    const s = e.endVector();
    return q.startFooter(e), q.addSchema(e, n), q.addVersion(e, st.V4), q.addRecordBatches(e, r), q.addDictionaries(e, s), q.finishFooterBuffer(e, q.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, e = st.V4, n, r) {
    this.schema = t, this.version = e, n && (this._recordBatches = n), r && (this._dictionaryBatches = r);
  }
  *recordBatches() {
    for (let t, e = -1, n = this.numRecordBatches; ++e < n; )
      (t = this.getRecordBatch(e)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, e = -1, n = this.numDictionaries; ++e < n; )
      (t = this.getDictionaryBatch(e)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class Da extends dn {
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  constructor(t, e) {
    super(t, e.version()), this._footer = e;
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const e = this._footer.recordBatches(t);
      if (e)
        return we.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return we.decode(e);
    }
    return null;
  }
}
class we {
  /** @nocollapse */
  static decode(t) {
    return new we(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: n } = e, r = BigInt(e.offset), s = BigInt(e.bodyLength);
    return Wi.createBlock(t, r, n, s);
  }
  constructor(t, e, n) {
    this.metaDataLength = t, this.offset = ht(n), this.bodyLength = ht(e);
  }
}
const k = Object.freeze({ done: !0, value: void 0 });
class Dn {
  constructor(t) {
    this._json = t;
  }
  get schema() {
    return this._json.schema;
  }
  get batches() {
    return this._json.batches || [];
  }
  get dictionaries() {
    return this._json.dictionaries || [];
  }
}
class hs {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(t, e) {
    return this._getNodeStream().pipe(t, e);
  }
  pipeTo(t, e) {
    return this._getDOMStream().pipeTo(t, e);
  }
  pipeThrough(t, e) {
    return this._getDOMStream().pipeThrough(t, e);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class Na extends hs {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return p(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  write(t) {
    this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({ done: !1, value: t }));
  }
  abort(t) {
    this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: t } : this.resolvers.shift().reject({ done: !0, value: t }));
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers: t } = this;
      for (; t.length > 0; )
        t.shift().resolve(k);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return et.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return et.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.abort(t), k;
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.close(), k;
    });
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, n) => {
      this.resolvers.push({ resolve: e, reject: n });
    }) : Promise.resolve(k);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class Ta extends Na {
  write(t) {
    if ((t = N(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? zi(this.toUint8Array(!0)) : this.toUint8Array(!1).then(zi);
  }
  toUint8Array(t = !1) {
    return t ? At(this._values)[0] : p(this, void 0, void 0, function* () {
      var e, n, r, s;
      const o = [];
      let a = 0;
      try {
        for (var c = !0, u = ue(this), d; d = yield u.next(), e = d.done, !e; ) {
          s = d.value, c = !1;
          try {
            const h = s;
            o.push(h), a += h.byteLength;
          } finally {
            c = !0;
          }
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          !c && !e && (r = u.return) && (yield r.call(u));
        } finally {
          if (n) throw n.error;
        }
      }
      return At(o, a)[0];
    });
  }
}
class bi {
  constructor(t) {
    t && (this.source = new Ma(et.fromIterable(t)));
  }
  [Symbol.iterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class Ie {
  constructor(t) {
    t instanceof Ie ? this.source = t.source : t instanceof Ta ? this.source = new Zt(et.fromAsyncIterable(t)) : Jn(t) ? this.source = new Zt(et.fromNodeStream(t)) : Xi(t) ? this.source = new Zt(et.fromDOMStream(t)) : Wn(t) ? this.source = new Zt(et.fromDOMStream(t.body)) : Oi(t) ? this.source = new Zt(et.fromIterable(t)) : Ne(t) ? this.source = new Zt(et.fromAsyncIterable(t)) : qi(t) && (this.source = new Zt(et.fromAsyncIterable(t)));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(t) {
    return this.source.cancel(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class Ma {
  constructor(t) {
    this.source = t;
  }
  cancel(t) {
    this.return(t);
  }
  peek(t) {
    return this.next(t, "peek").value;
  }
  read(t) {
    return this.next(t, "read").value;
  }
  next(t, e = "read") {
    return this.source.next({ cmd: e, size: t });
  }
  throw(t) {
    return Object.create(this.source.throw && this.source.throw(t) || k);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || k);
  }
}
class Zt {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return p(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return p(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t, e = "read") {
    return p(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd: e, size: t });
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || k;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || k;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class Nn extends bi {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = N(t), this.size = e === void 0 ? this.buffer.byteLength : e;
  }
  readInt32(t) {
    const { buffer: e, byteOffset: n } = this.readAt(t, 4);
    return new DataView(e, n).getInt32(0, !0);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: e, size: n, position: r } = this;
    return e && r < n ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(n, r + Math.min(n - r, t)), e.subarray(r, this.position)) : null;
  }
  readAt(t, e) {
    const n = this.buffer, r = Math.min(this.size, t + e);
    return n ? n.subarray(t, r) : new Uint8Array(e);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(t) {
    return this.close(), { done: !0, value: t };
  }
  return(t) {
    return this.close(), { done: !0, value: t };
  }
}
class gi extends Ie {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = p(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return p(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: n } = yield this.readAt(t, 4);
      return new DataView(e, n).getInt32(0, !0);
    });
  }
  seek(t) {
    return p(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return p(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: n, position: r } = this;
      if (e && r < n) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let s = r, o = 0, a = 0;
        const c = Math.min(n, s + Math.min(n - s, t)), u = new Uint8Array(Math.max(0, (this.position = c) - s));
        for (; (s += a) < c && (o += a) < u.byteLength; )
          ({ bytesRead: a } = yield e.read(u, o, u.byteLength - o, s));
        return u;
      }
      return null;
    });
  }
  readAt(t, e) {
    return p(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: n, size: r } = this;
      if (n && t + e < r) {
        const s = Math.min(r, t + e), o = new Uint8Array(s - t);
        return (yield n.read(o, 0, e, t)).buffer;
      }
      return new Uint8Array(e);
    });
  }
  close() {
    return p(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const La = 65536;
function le(i) {
  return i < 0 && (i = 4294967295 + i + 1), `0x${i.toString(16)}`;
}
const Se = 8, hn = [
  1,
  10,
  100,
  1e3,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];
class fs {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(t) {
    const e = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]), n = new Uint32Array([
      t.buffer[1] >>> 16,
      t.buffer[1] & 65535,
      t.buffer[0] >>> 16,
      t.buffer[0] & 65535
    ]);
    let r = e[3] * n[3];
    this.buffer[0] = r & 65535;
    let s = r >>> 16;
    return r = e[2] * n[3], s += r, r = e[3] * n[2] >>> 0, s += r, this.buffer[0] += s << 16, this.buffer[1] = s >>> 0 < r ? La : 0, this.buffer[1] += s >>> 16, this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1], this.buffer[1] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0] << 16, this;
  }
  _plus(t) {
    const e = this.buffer[0] + t.buffer[0] >>> 0;
    this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e;
  }
  lessThan(t) {
    return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0];
  }
  equals(t) {
    return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0];
  }
  greaterThan(t) {
    return t.lessThan(this);
  }
  hex() {
    return `${le(this.buffer[1])} ${le(this.buffer[0])}`;
  }
}
class M extends fs {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return M.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return M.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.length, r = new M(e);
    for (let s = 0; s < n; ) {
      const o = Se < n - s ? Se : n - s, a = new M(new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])), c = new M(new Uint32Array([hn[o], 0]));
      r.times(c), r.plus(a), s += o;
    }
    return r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, r = t.length; ++n < r; )
      M.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new M(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new M(new Uint32Array(t.buffer)).plus(e);
  }
}
class J extends fs {
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this;
  }
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  lessThan(t) {
    const e = this.buffer[1] << 0, n = t.buffer[1] << 0;
    return e < n || e === n && this.buffer[0] < t.buffer[0];
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return J.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return J.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const n = t.startsWith("-"), r = t.length, s = new J(e);
    for (let o = n ? 1 : 0; o < r; ) {
      const a = Se < r - o ? Se : r - o, c = new J(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), u = new J(new Uint32Array([hn[a], 0]));
      s.times(u), s.plus(c), o += a;
    }
    return n ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let n = -1, r = t.length; ++n < r; )
      J.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new J(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new J(new Uint32Array(t.buffer)).plus(e);
  }
}
class bt {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new J(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new J(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new M(new Uint32Array([this.buffer[3], 0])), n = new M(new Uint32Array([this.buffer[2], 0])), r = new M(new Uint32Array([this.buffer[1], 0])), s = new M(new Uint32Array([this.buffer[0], 0])), o = new M(new Uint32Array([t.buffer[3], 0])), a = new M(new Uint32Array([t.buffer[2], 0])), c = new M(new Uint32Array([t.buffer[1], 0])), u = new M(new Uint32Array([t.buffer[0], 0]));
    let d = M.multiply(s, u);
    this.buffer[0] = d.low();
    const h = new M(new Uint32Array([d.high(), 0]));
    return d = M.multiply(r, u), h.plus(d), d = M.multiply(s, c), h.plus(d), this.buffer[1] = h.low(), this.buffer[3] = h.lessThan(d) ? 1 : 0, this.buffer[2] = h.high(), new M(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(M.multiply(n, u)).plus(M.multiply(r, c)).plus(M.multiply(s, a)), this.buffer[3] += M.multiply(e, u).plus(M.multiply(n, c)).plus(M.multiply(r, a)).plus(M.multiply(s, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${le(this.buffer[3])} ${le(this.buffer[2])} ${le(this.buffer[1])} ${le(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new bt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new bt(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return bt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return bt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const n = t.startsWith("-"), r = t.length, s = new bt(e);
    for (let o = n ? 1 : 0; o < r; ) {
      const a = Se < r - o ? Se : r - o, c = new bt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), u = new bt(new Uint32Array([hn[a], 0, 0, 0]));
      s.times(u), s.plus(c), o += a;
    }
    return n ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let n = -1, r = t.length; ++n < r; )
      bt.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 16 * n, 4));
    return e;
  }
}
class ps extends O {
  constructor(t, e, n, r) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = n, this.dictionaries = r;
  }
  visit(t) {
    return super.visit(t instanceof C ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return A({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), children: this.visitMany(t.children) });
  }
  visitUnion(t) {
    return t.mode === dt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t);
  }
  visitDenseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: n } = this.nextFieldNode()) {
    return A({ type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, e, n = this.nextBufferRange()) {
    return e > 0 && this.readData(t, n) || new Uint8Array(0);
  }
  readOffsets(t, e) {
    return this.readData(t, e);
  }
  readTypeIds(t, e) {
    return this.readData(t, e);
  }
  readData(t, { length: e, offset: n } = this.nextBufferRange()) {
    return this.bytes.subarray(n, n + e);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class Ua extends ps {
  constructor(t, e, n, r) {
    super(new Uint8Array(0), e, n, r), this.sources = t;
  }
  readNullBitmap(t, e, { offset: n } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : Pi(this.sources[n]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return R(Uint8Array, R(Int32Array, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return R(Uint8Array, R(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: n } = this;
    return f.isTimestamp(t) || (f.isInt(t) || f.isTime(t)) && t.bitWidth === 64 || f.isDate(t) && t.unit === Et.MILLISECOND ? R(Uint8Array, J.convertArray(n[e])) : f.isDecimal(t) ? R(Uint8Array, bt.convertArray(n[e])) : f.isBinary(t) || f.isFixedSizeBinary(t) ? Ra(n[e]) : f.isBool(t) ? Pi(n[e]) : f.isUtf8(t) ? Zi(n[e].join("")) : R(Uint8Array, R(t.ArrayType, n[e].map((r) => +r)));
  }
}
function Ra(i) {
  const t = i.join(""), e = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2)
    e[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return e;
}
class g extends O {
  compareSchemas(t, e) {
    return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
  }
  compareManyFields(t, e) {
    return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((n, r) => this.compareFields(n, e[r]));
  }
  compareFields(t, e) {
    return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
  }
}
function Z(i, t) {
  return t instanceof i.constructor;
}
function Ce(i, t) {
  return i === t || Z(i, t);
}
function zt(i, t) {
  return i === t || Z(i, t) && i.bitWidth === t.bitWidth && i.isSigned === t.isSigned;
}
function Ni(i, t) {
  return i === t || Z(i, t) && i.precision === t.precision;
}
function xa(i, t) {
  return i === t || Z(i, t) && i.byteWidth === t.byteWidth;
}
function fn(i, t) {
  return i === t || Z(i, t) && i.unit === t.unit;
}
function Ve(i, t) {
  return i === t || Z(i, t) && i.unit === t.unit && i.timezone === t.timezone;
}
function ze(i, t) {
  return i === t || Z(i, t) && i.unit === t.unit && i.bitWidth === t.bitWidth;
}
function Ea(i, t) {
  return i === t || Z(i, t) && i.children.length === t.children.length && Ht.compareManyFields(i.children, t.children);
}
function Ca(i, t) {
  return i === t || Z(i, t) && i.children.length === t.children.length && Ht.compareManyFields(i.children, t.children);
}
function pn(i, t) {
  return i === t || Z(i, t) && i.mode === t.mode && i.typeIds.every((e, n) => e === t.typeIds[n]) && Ht.compareManyFields(i.children, t.children);
}
function Va(i, t) {
  return i === t || Z(i, t) && i.id === t.id && i.isOrdered === t.isOrdered && Ht.visit(i.indices, t.indices) && Ht.visit(i.dictionary, t.dictionary);
}
function yn(i, t) {
  return i === t || Z(i, t) && i.unit === t.unit;
}
function za(i, t) {
  return i === t || Z(i, t) && i.listSize === t.listSize && i.children.length === t.children.length && Ht.compareManyFields(i.children, t.children);
}
function ka(i, t) {
  return i === t || Z(i, t) && i.keysSorted === t.keysSorted && i.children.length === t.children.length && Ht.compareManyFields(i.children, t.children);
}
g.prototype.visitNull = Ce;
g.prototype.visitBool = Ce;
g.prototype.visitInt = zt;
g.prototype.visitInt8 = zt;
g.prototype.visitInt16 = zt;
g.prototype.visitInt32 = zt;
g.prototype.visitInt64 = zt;
g.prototype.visitUint8 = zt;
g.prototype.visitUint16 = zt;
g.prototype.visitUint32 = zt;
g.prototype.visitUint64 = zt;
g.prototype.visitFloat = Ni;
g.prototype.visitFloat16 = Ni;
g.prototype.visitFloat32 = Ni;
g.prototype.visitFloat64 = Ni;
g.prototype.visitUtf8 = Ce;
g.prototype.visitBinary = Ce;
g.prototype.visitFixedSizeBinary = xa;
g.prototype.visitDate = fn;
g.prototype.visitDateDay = fn;
g.prototype.visitDateMillisecond = fn;
g.prototype.visitTimestamp = Ve;
g.prototype.visitTimestampSecond = Ve;
g.prototype.visitTimestampMillisecond = Ve;
g.prototype.visitTimestampMicrosecond = Ve;
g.prototype.visitTimestampNanosecond = Ve;
g.prototype.visitTime = ze;
g.prototype.visitTimeSecond = ze;
g.prototype.visitTimeMillisecond = ze;
g.prototype.visitTimeMicrosecond = ze;
g.prototype.visitTimeNanosecond = ze;
g.prototype.visitDecimal = Ce;
g.prototype.visitList = Ea;
g.prototype.visitStruct = Ca;
g.prototype.visitUnion = pn;
g.prototype.visitDenseUnion = pn;
g.prototype.visitSparseUnion = pn;
g.prototype.visitDictionary = Va;
g.prototype.visitInterval = yn;
g.prototype.visitIntervalDayTime = yn;
g.prototype.visitIntervalYearMonth = yn;
g.prototype.visitFixedSizeList = za;
g.prototype.visitMap = ka;
const Ht = new g();
function ja(i, t) {
  return Ht.compareSchemas(i, t);
}
function Ei(i, t) {
  return Pa(i, t.map((e) => e.data.concat()));
}
function Pa(i, t) {
  const e = [...i.fields], n = [], r = { numBatches: t.reduce((h, F) => Math.max(h, F.length), 0) };
  let s = 0, o = 0, a = -1;
  const c = t.length;
  let u, d = [];
  for (; r.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      d[a] = u = t[a].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (d = $a(e, o, d, t, r), o > 0 && (n[s++] = A({
      type: new W(e),
      length: o,
      nullCount: 0,
      children: d.slice()
    })));
  }
  return [
    i = i.assign(e),
    n.map((h) => new ct(i, h))
  ];
}
function $a(i, t, e, n, r) {
  var s;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = n.length; ++a < c; ) {
    const u = e[a], d = u == null ? void 0 : u.length;
    if (d >= t)
      d === t ? e[a] = u : (e[a] = u.slice(0, t), r.numBatches = Math.max(r.numBatches, n[a].unshift(u.slice(t, d - t))));
    else {
      const h = i[a];
      i[a] = h.clone({ nullable: !0 }), e[a] = (s = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(t)) !== null && s !== void 0 ? s : A({
        type: h.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var ys;
class rt {
  constructor(...t) {
    var e, n;
    if (t.length === 0)
      return this.batches = [], this.schema = new T([]), this._offsets = [0], this;
    let r, s;
    t[0] instanceof T && (r = t.shift()), t[t.length - 1] instanceof Uint32Array && (s = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof ct)
          return [c];
        if (c instanceof rt)
          return c.batches;
        if (c instanceof E) {
          if (c.type instanceof W)
            return [new ct(new T(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((u) => o(u));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((u) => o(u));
          if (typeof c == "object") {
            const u = Object.keys(c), d = u.map((j) => new U([c[j]])), h = new T(u.map((j, Q) => new C(String(j), d[Q].type))), [, F] = Ei(h, d);
            return F.length === 0 ? [new ct(c)] : F;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (r = (n = r ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && n !== void 0 ? n : new T([]), !(r instanceof T))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof ct))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!ja(r, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = r, this.batches = a, this._offsets = s ?? Qr(this.data);
  }
  /**
   * The contiguous {@link RecordBatch `RecordBatch`} chunks of the Table rows.
   */
  get data() {
    return this.batches.map(({ data: t }) => t);
  }
  /**
   * The number of columns in this Table.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this Table.
   */
  get numRows() {
    return this.data.reduce((t, e) => t + e.length, 0);
  }
  /**
   * The number of null rows in this Table.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = Xr(this.data)), this._nullCount;
  }
  /**
   * Check whether an element is null.
   *
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   *
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   *
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   *
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  /**
   * Get the size in bytes of an element by index.
   * @param index The index at which to get the byteLength.
   */
  // @ts-ignore
  getByteLength(t) {
    return 0;
  }
  /**
   * Iterator for rows in this Table.
   */
  [Symbol.iterator]() {
    return this.batches.length > 0 ? un.visit(new U(this.data)) : new Array(0)[Symbol.iterator]();
  }
  /**
   * Return a JavaScript Array of the Table rows.
   *
   * @returns An Array of Table rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Returns a string representation of the Table rows.
   *
   * @returns A string representation of the Table rows.
   */
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  /**
   * Combines two or more Tables of the same schema.
   *
   * @param others Additional Tables to add to the end of this Tables.
   */
  concat(...t) {
    const e = this.schema, n = this.data.concat(t.flatMap(({ data: r }) => r));
    return new rt(e, n.map((r) => new ct(e, r)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const n = this.schema;
    [t, e] = Zr({ length: this.numRows }, t, e);
    const r = ts(this.data, this._offsets, t, e);
    return new rt(n, r.map((s) => new ct(n, s)));
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   *
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   *
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const e = this.data.map((n) => n.children[t]);
      if (e.length === 0) {
        const { type: n } = this.schema.fields[t], r = A({ type: n, length: 0, nullCount: 0 });
        e.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new U(e);
    }
    return null;
  }
  /**
   * Sets a child Vector by name.
   *
   * @param name The name of the child to overwrite.
   * @returns A new Table with the supplied child for the specified name.
   */
  setChild(t, e) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((r) => r.name === t), e);
  }
  setChildAt(t, e) {
    let n = this.schema, r = [...this.batches];
    if (t > -1 && t < this.numCols) {
      e || (e = new U([A({ type: new Yt(), length: this.numRows })]));
      const s = n.fields.slice(), o = s[t].clone({ type: e.type }), a = this.schema.fields.map((c, u) => this.getChildAt(u));
      [s[t], a[t]] = [o, e], [n, r] = Ei(n, a);
    }
    return new rt(n, r);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.fields.reduce((n, r, s) => n.set(r.name, s), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((n) => e.get(n)).filter((n) => n > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = this.batches.map((r) => r.selectAt(t));
    return new rt(e, n);
  }
  assign(t) {
    const e = this.schema.fields, [n, r] = t.schema.fields.reduce((a, c, u) => {
      const [d, h] = a, F = e.findIndex((j) => j.name === c.name);
      return ~F ? h[F] = u : d.push(u), a;
    }, [[], []]), s = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, r[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...n.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new rt(...Ei(s, o));
  }
}
ys = Symbol.toStringTag;
rt[ys] = ((i) => (i.schema = null, i.batches = [], i._offsets = new Uint32Array([0]), i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, i.isValid = ye(ln), i.get = ye(G.getVisitFn(l.Struct)), i.set = es(ot.getVisitFn(l.Struct)), i.indexOf = is(ui.getVisitFn(l.Struct)), i.getByteLength = ye(Ot.getVisitFn(l.Struct)), "Table"))(rt.prototype);
var ms;
let ct = class Oe {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof T))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = A({
            nullCount: 0,
            type: new W(this.schema.fields),
            children: this.schema.fields.map((e) => A({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof E))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Tn(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: n, children: r, length: s } = Object.keys(e).reduce((c, u, d) => (c.children[d] = e[u], c.length = Math.max(c.length, e[u].length), c.fields[d] = C.new({ name: u, type: e[u].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new T(n), a = A({ type: new W(n), length: s, children: r, nullCount: 0 });
        [this.schema, this.data] = Tn(o, a.children, s);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = bs(this.schema.fields, this.data.children));
  }
  /**
   * The number of columns in this RecordBatch.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this RecordBatch.
   */
  get numRows() {
    return this.data.length;
  }
  /**
   * The number of null rows in this RecordBatch.
   */
  get nullCount() {
    return this.data.nullCount;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  isValid(t) {
    return this.data.getValid(t);
  }
  /**
   * Get a row by position.
   * @param index The index of the element to read.
   */
  get(t) {
    return G.visit(this.data, t);
  }
  /**
   * Set a row by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  set(t, e) {
    return ot.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return ui.visit(this.data, t, e);
  }
  /**
   * Get the size (in bytes) of a row by index.
   * @param index The row index for which to compute the byteLength.
   */
  getByteLength(t) {
    return Ot.visit(this.data, t);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return un.visit(new U([this.data]));
  }
  /**
   * Return a JavaScript Array of the RecordBatch rows.
   * @returns An Array of RecordBatch rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Combines two or more RecordBatch of the same schema.
   * @param others Additional RecordBatch to add to the end of this RecordBatch.
   */
  concat(...t) {
    return new rt(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const [n] = new U([this.data]).slice(t, e).data;
    return new Oe(this.schema, n);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex((n) => n.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new U([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, e) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((r) => r.name === t), e);
  }
  setChildAt(t, e) {
    let n = this.schema, r = this.data;
    if (t > -1 && t < this.numCols) {
      e || (e = new U([A({ type: new Yt(), length: this.numRows })]));
      const s = n.fields.slice(), o = r.children.slice(), a = s[t].clone({ type: e.type });
      [s[t], o[t]] = [a, e.data[0]], n = new T(s, new Map(this.schema.metadata)), r = A({ type: new W(s), children: o });
    }
    return new Oe(n, r);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), n = new W(e.fields), r = [];
    for (const s of t) {
      const o = this.schema.fields.findIndex((a) => a.name === s);
      ~o && (r[o] = this.data.children[o]);
    }
    return new Oe(e, A({ type: n, length: this.numRows, children: r }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), n = t.map((s) => this.data.children[s]).filter(Boolean), r = A({ type: new W(e.fields), length: this.numRows, children: n });
    return new Oe(e, r);
  }
};
ms = Symbol.toStringTag;
ct[ms] = ((i) => (i._nullCount = -1, i[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(ct.prototype);
function Tn(i, t, e = t.reduce((n, r) => Math.max(n, r.length), 0)) {
  var n;
  const r = [...i.fields], s = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of i.fields.entries()) {
    const u = t[a];
    (!u || u.length !== e) && (r[a] = c.clone({ nullable: !0 }), s[a] = (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(e)) !== null && n !== void 0 ? n : A({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    i.assign(r),
    A({ type: new W(r), length: e, children: s })
  ];
}
function bs(i, t, e = /* @__PURE__ */ new Map()) {
  for (let n = -1, r = i.length; ++n < r; ) {
    const o = i[n].type, a = t[n];
    if (f.isDictionary(o)) {
      if (!e.has(o.id))
        a.dictionary && e.set(o.id, a.dictionary);
      else if (e.get(o.id) !== a.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    o.children && o.children.length > 0 && bs(o.children, a.children, e);
  }
  return e;
}
class gs extends ct {
  constructor(t) {
    const e = t.fields.map((r) => A({ type: r.type })), n = A({ type: new W(t.fields), nullCount: 0, children: e });
    super(t, n);
  }
}
var _i;
(function(i) {
  i[i.BUFFER = 0] = "BUFFER";
})(_i || (_i = {}));
var vi;
(function(i) {
  i[i.LZ4_FRAME = 0] = "LZ4_FRAME", i[i.ZSTD = 1] = "ZSTD";
})(vi || (vi = {}));
class Pt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + x), (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : vi.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : _i.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, vi.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, _i.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, n) {
    return Pt.startBodyCompression(t), Pt.addCodec(t, e), Pt.addMethod(t, n), Pt.endBodyCompression(t);
  }
}
class _s {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The relative offset into the shared memory page where the bytes for this
   * buffer starts
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The absolute length (in bytes) of the memory buffer. The memory is found
   * from offset (inclusive) to offset + length (non-inclusive). When building
   * messages using the encapsulated IPC message, padding bytes may be written
   * after a buffer, but such padding bytes do not need to be accounted for in
   * the size here.
   */
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(t, e, n) {
    return t.prep(8, 16), t.writeInt64(BigInt(n ?? 0)), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}
let vs = class {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The number of value slots in the Arrow array at this level of a nested
   * tree
   */
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The number of observed nulls. Fields with null_count == 0 may choose not
   * to write their physical validity bitmap out as a materialized buffer,
   * instead setting the length of the bitmap buffer to 0.
   */
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(t, e, n) {
    return t.prep(8, 16), t.writeInt64(BigInt(n ?? 0)), t.writeInt64(BigInt(e ?? 0)), t.offset();
  }
}, Mt = class Hi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new Hi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + x), (e || new Hi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * number of records / rows. The arrays in the batch should all have this
   * length
   */
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  /**
   * Nodes correspond to the pre-ordered flattened logical schema
   */
  nodes(t, e) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (e || new vs()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Buffers correspond to the pre-ordered flattened buffer tree
   *
   * The number of buffers appended to this list depends on the schema. For
   * example, most primitive arrays will have 2 buffers, 1 for the validity
   * bitmap and 1 for the values. For struct arrays, there will only be a
   * single buffer for the validity (nulls) bitmap
   */
  buffers(t, e) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (e || new _s()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Optional compression of the message body
   */
  compression(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? (t || new Pt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, e) {
    t.addFieldInt64(0, e, BigInt("0"));
  }
  static addNodes(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static startNodesVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addBuffers(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startBuffersVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addCompression(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}, ce = class Ki {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new Ki()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + x), (e || new Ki()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Mt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * If isDelta is true the values in the dictionary are to be appended to a
   * dictionary with the indicated id. If isDelta is false this dictionary
   * should replace the existing dictionary.
   */
  isDelta() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startDictionaryBatch(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, BigInt("0"));
  }
  static addData(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsDelta(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
};
var wi;
(function(i) {
  i[i.NONE = 0] = "NONE", i[i.Schema = 1] = "Schema", i[i.DictionaryBatch = 2] = "DictionaryBatch", i[i.RecordBatch = 3] = "RecordBatch", i[i.Tensor = 4] = "Tensor", i[i.SparseTensor = 5] = "SparseTensor";
})(wi || (wi = {}));
let kt = class yt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new yt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + x), (e || new yt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ge.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : wi.NONE;
  }
  header(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  customMetadata(t, e) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (e || new P()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, ge.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, wi.NONE);
  }
  static addHeader(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static addBodyLength(t, e) {
    t.addFieldInt64(3, e, BigInt("0"));
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let n = e.length - 1; n >= 0; n--)
      t.addOffset(e[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedMessageBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createMessage(t, e, n, r, s, o) {
    return yt.startMessage(t), yt.addVersion(t, e), yt.addHeaderType(t, n), yt.addHeader(t, r), yt.addBodyLength(t, s), yt.addCustomMetadata(t, o), yt.endMessage(t);
  }
};
class Wa extends O {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return te.startNull(e), te.endNull(e);
  }
  visitInt(t, e) {
    return X.startInt(e), X.addBitWidth(e, t.bitWidth), X.addIsSigned(e, t.isSigned), X.endInt(e);
  }
  visitFloat(t, e) {
    return It.startFloatingPoint(e), It.addPrecision(e, t.precision), It.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return qt.startBinary(e), qt.endBinary(e);
  }
  visitBool(t, e) {
    return Xt.startBool(e), Xt.endBool(e);
  }
  visitUtf8(t, e) {
    return ie.startUtf8(e), ie.endUtf8(e);
  }
  visitDecimal(t, e) {
    return H.startDecimal(e), H.addScale(e, t.scale), H.addPrecision(e, t.precision), H.addBitWidth(e, t.bitWidth), H.endDecimal(e);
  }
  visitDate(t, e) {
    return Ye.startDate(e), Ye.addUnit(e, t.unit), Ye.endDate(e);
  }
  visitTime(t, e) {
    return it.startTime(e), it.addUnit(e, t.unit), it.addBitWidth(e, t.bitWidth), it.endTime(e);
  }
  visitTimestamp(t, e) {
    const n = t.timezone && e.createString(t.timezone) || void 0;
    return nt.startTimestamp(e), nt.addUnit(e, t.unit), n !== void 0 && nt.addTimezone(e, n), nt.endTimestamp(e);
  }
  visitInterval(t, e) {
    return St.startInterval(e), St.addUnit(e, t.unit), St.endInterval(e);
  }
  visitList(t, e) {
    return Qt.startList(e), Qt.endList(e);
  }
  visitStruct(t, e) {
    return ee.startStruct_(e), ee.endStruct_(e);
  }
  visitUnion(t, e) {
    K.startTypeIdsVector(e, t.typeIds.length);
    const n = K.createTypeIdsVector(e, t.typeIds);
    return K.startUnion(e), K.addMode(e, t.mode), K.addTypeIds(e, n), K.endUnion(e);
  }
  visitDictionary(t, e) {
    const n = this.visit(t.indices, e);
    return Ut.startDictionaryEncoding(e), Ut.addId(e, BigInt(t.id)), Ut.addIsOrdered(e, t.isOrdered), n !== void 0 && Ut.addIndexType(e, n), Ut.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return vt.startFixedSizeBinary(e), vt.addByteWidth(e, t.byteWidth), vt.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return wt.startFixedSizeList(e), wt.addListSize(e, t.listSize), wt.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return Je.startMap(e), Je.addKeysSorted(e, t.keysSorted), Je.endMap(e);
  }
}
const Ci = new Wa();
function Ya(i, t = /* @__PURE__ */ new Map()) {
  return new T(Ha(i, t), Ke(i.customMetadata), t);
}
function ws(i) {
  return new ft(i.count, Is(i.columns), Ss(i.columns));
}
function Ja(i) {
  return new Ct(ws(i.data), i.id, i.isDelta);
}
function Ha(i, t) {
  return (i.fields || []).filter(Boolean).map((e) => C.fromJSON(e, t));
}
function Mn(i, t) {
  return (i.children || []).filter(Boolean).map((e) => C.fromJSON(e, t));
}
function Is(i) {
  return (i || []).reduce((t, e) => [
    ...t,
    new Fe(e.count, Ka(e.VALIDITY)),
    ...Is(e.children)
  ], []);
}
function Ss(i, t = []) {
  for (let e = -1, n = (i || []).length; ++e < n; ) {
    const r = i[e];
    r.VALIDITY && t.push(new Rt(t.length, r.VALIDITY.length)), r.TYPE && t.push(new Rt(t.length, r.TYPE.length)), r.OFFSET && t.push(new Rt(t.length, r.OFFSET.length)), r.DATA && t.push(new Rt(t.length, r.DATA.length)), t = Ss(r.children, t);
  }
  return t;
}
function Ka(i) {
  return (i || []).reduce((t, e) => t + +(e === 0), 0);
}
function Ga(i, t) {
  let e, n, r, s, o, a;
  return !t || !(s = i.dictionary) ? (o = Un(i, Mn(i, t)), r = new C(i.name, o, i.nullable, Ke(i.customMetadata))) : t.has(e = s.id) ? (n = (n = s.indexType) ? Ln(n) : new Le(), a = new me(t.get(e), n, e, s.isOrdered), r = new C(i.name, a, i.nullable, Ke(i.customMetadata))) : (n = (n = s.indexType) ? Ln(n) : new Le(), t.set(e, o = Un(i, Mn(i, t))), a = new me(o, n, e, s.isOrdered), r = new C(i.name, a, i.nullable, Ke(i.customMetadata))), r || null;
}
function Ke(i) {
  return new Map(Object.entries(i || {}));
}
function Ln(i) {
  return new Jt(i.isSigned, i.bitWidth);
}
function Un(i, t) {
  const e = i.type.name;
  switch (e) {
    case "NONE":
      return new Yt();
    case "null":
      return new Yt();
    case "binary":
      return new Xe();
    case "utf8":
      return new Qe();
    case "bool":
      return new ti();
    case "list":
      return new si((t || [])[0]);
    case "struct":
      return new W(t || []);
    case "struct_":
      return new W(t || []);
  }
  switch (e) {
    case "int": {
      const n = i.type;
      return new Jt(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = i.type;
      return new Ue(Y[n.precision]);
    }
    case "decimal": {
      const n = i.type;
      return new ei(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = i.type;
      return new ii(Et[n.unit]);
    }
    case "time": {
      const n = i.type;
      return new Re(D[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = i.type;
      return new ni(D[n.unit], n.timezone);
    }
    case "interval": {
      const n = i.type;
      return new ri(Wt[n.unit]);
    }
    case "union": {
      const n = i.type;
      return new oi(dt[n.mode], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = i.type;
      return new ai(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = i.type;
      return new ci(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = i.type;
      return new li((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var Za = us, qa = be;
class lt {
  /** @nocollapse */
  static fromJSON(t, e) {
    const n = new lt(0, st.V4, e);
    return n._createHeader = Xa(t, e), n;
  }
  /** @nocollapse */
  static decode(t) {
    t = new qa(N(t));
    const e = kt.getRootAsMessage(t), n = e.bodyLength(), r = e.version(), s = e.headerType(), o = new lt(n, r, s);
    return o._createHeader = Qa(e, s), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Za();
    let n = -1;
    return t.isSchema() ? n = T.encode(e, t.header()) : t.isRecordBatch() ? n = ft.encode(e, t.header()) : t.isDictionaryBatch() && (n = Ct.encode(e, t.header())), kt.startMessage(e), kt.addVersion(e, st.V4), kt.addHeader(e, n), kt.addHeaderType(e, t.headerType), kt.addBodyLength(e, BigInt(t.bodyLength)), kt.finishMessageBuffer(e, kt.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof T)
      return new lt(0, st.V4, L.Schema, t);
    if (t instanceof ft)
      return new lt(e, st.V4, L.RecordBatch, t);
    if (t instanceof Ct)
      return new lt(e, st.V4, L.DictionaryBatch, t);
    throw new Error(`Unrecognized Message header: ${t}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === L.Schema;
  }
  isRecordBatch() {
    return this.headerType === L.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === L.DictionaryBatch;
  }
  constructor(t, e, n, r) {
    this._version = e, this._headerType = n, this.body = new Uint8Array(0), r && (this._createHeader = () => r), this._bodyLength = ht(t);
  }
}
class ft {
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
  constructor(t, e, n) {
    this._nodes = e, this._buffers = n, this._length = ht(t);
  }
}
class Ct {
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
  constructor(t, e, n = !1) {
    this._data = t, this._isDelta = n, this._id = ht(e);
  }
}
class Rt {
  constructor(t, e) {
    this.offset = ht(t), this.length = ht(e);
  }
}
class Fe {
  constructor(t, e) {
    this.length = ht(t), this.nullCount = ht(e);
  }
}
function Xa(i, t) {
  return (() => {
    switch (t) {
      case L.Schema:
        return T.fromJSON(i);
      case L.RecordBatch:
        return ft.fromJSON(i);
      case L.DictionaryBatch:
        return Ct.fromJSON(i);
    }
    throw new Error(`Unrecognized Message type: { name: ${L[t]}, type: ${t} }`);
  });
}
function Qa(i, t) {
  return (() => {
    switch (t) {
      case L.Schema:
        return T.decode(i.header(new mt()));
      case L.RecordBatch:
        return ft.decode(i.header(new Mt()), i.version());
      case L.DictionaryBatch:
        return Ct.decode(i.header(new ce()), i.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${L[t]}, type: ${t} }`);
  });
}
C.encode = uc;
C.decode = cc;
C.fromJSON = Ga;
T.encode = lc;
T.decode = tc;
T.fromJSON = Ya;
ft.encode = dc;
ft.decode = ec;
ft.fromJSON = ws;
Ct.encode = hc;
Ct.decode = ic;
Ct.fromJSON = Ja;
Fe.encode = fc;
Fe.decode = rc;
Rt.encode = pc;
Rt.decode = nc;
function tc(i, t = /* @__PURE__ */ new Map()) {
  const e = ac(i, t);
  return new T(e, Ge(i), t);
}
function ec(i, t = st.V4) {
  if (i.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new ft(i.length(), sc(i), oc(i, t));
}
function ic(i, t = st.V4) {
  return new Ct(ft.decode(i.data(), t), i.id(), i.isDelta());
}
function nc(i) {
  return new Rt(i.offset(), i.length());
}
function rc(i) {
  return new Fe(i.length(), i.nullCount());
}
function sc(i) {
  const t = [];
  for (let e, n = -1, r = -1, s = i.nodesLength(); ++n < s; )
    (e = i.nodes(n)) && (t[++r] = Fe.decode(e));
  return t;
}
function oc(i, t) {
  const e = [];
  for (let n, r = -1, s = -1, o = i.buffersLength(); ++r < o; )
    (n = i.buffers(r)) && (t < st.V4 && (n.bb_pos += 8 * (r + 1)), e[++s] = Rt.decode(n));
  return e;
}
function ac(i, t) {
  const e = [];
  for (let n, r = -1, s = -1, o = i.fieldsLength(); ++r < o; )
    (n = i.fields(r)) && (e[++s] = C.decode(n, t));
  return e;
}
function Rn(i, t) {
  const e = [];
  for (let n, r = -1, s = -1, o = i.childrenLength(); ++r < o; )
    (n = i.children(r)) && (e[++s] = C.decode(n, t));
  return e;
}
function cc(i, t) {
  let e, n, r, s, o, a;
  return !t || !(a = i.dictionary()) ? (r = En(i, Rn(i, t)), n = new C(i.name(), r, i.nullable(), Ge(i))) : t.has(e = ht(a.id())) ? (s = (s = a.indexType()) ? xn(s) : new Le(), o = new me(t.get(e), s, e, a.isOrdered()), n = new C(i.name(), o, i.nullable(), Ge(i))) : (s = (s = a.indexType()) ? xn(s) : new Le(), t.set(e, r = En(i, Rn(i, t))), o = new me(r, s, e, a.isOrdered()), n = new C(i.name(), o, i.nullable(), Ge(i))), n || null;
}
function Ge(i) {
  const t = /* @__PURE__ */ new Map();
  if (i)
    for (let e, n, r = -1, s = Math.trunc(i.customMetadataLength()); ++r < s; )
      (e = i.customMetadata(r)) && (n = e.key()) != null && t.set(n, e.value());
  return t;
}
function xn(i) {
  return new Jt(i.isSigned(), i.bitWidth());
}
function En(i, t) {
  const e = i.typeType();
  switch (e) {
    case V.NONE:
      return new Yt();
    case V.Null:
      return new Yt();
    case V.Binary:
      return new Xe();
    case V.Utf8:
      return new Qe();
    case V.Bool:
      return new ti();
    case V.List:
      return new si((t || [])[0]);
    case V.Struct_:
      return new W(t || []);
  }
  switch (e) {
    case V.Int: {
      const n = i.type(new X());
      return new Jt(n.isSigned(), n.bitWidth());
    }
    case V.FloatingPoint: {
      const n = i.type(new It());
      return new Ue(n.precision());
    }
    case V.Decimal: {
      const n = i.type(new H());
      return new ei(n.scale(), n.precision(), n.bitWidth());
    }
    case V.Date: {
      const n = i.type(new Ye());
      return new ii(n.unit());
    }
    case V.Time: {
      const n = i.type(new it());
      return new Re(n.unit(), n.bitWidth());
    }
    case V.Timestamp: {
      const n = i.type(new nt());
      return new ni(n.unit(), n.timezone());
    }
    case V.Interval: {
      const n = i.type(new St());
      return new ri(n.unit());
    }
    case V.Union: {
      const n = i.type(new K());
      return new oi(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case V.FixedSizeBinary: {
      const n = i.type(new vt());
      return new ai(n.byteWidth());
    }
    case V.FixedSizeList: {
      const n = i.type(new wt());
      return new ci(n.listSize(), (t || [])[0]);
    }
    case V.Map: {
      const n = i.type(new Je());
      return new li((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${V[e]}" (${e})`);
}
function lc(i, t) {
  const e = t.fields.map((s) => C.encode(i, s));
  mt.startFieldsVector(i, e.length);
  const n = mt.createFieldsVector(i, e), r = t.metadata && t.metadata.size > 0 ? mt.createCustomMetadataVector(i, [...t.metadata].map(([s, o]) => {
    const a = i.createString(`${s}`), c = i.createString(`${o}`);
    return P.startKeyValue(i), P.addKey(i, a), P.addValue(i, c), P.endKeyValue(i);
  })) : -1;
  return mt.startSchema(i), mt.addFields(i, n), mt.addEndianness(i, yc ? _e.Little : _e.Big), r !== -1 && mt.addCustomMetadata(i, r), mt.endSchema(i);
}
function uc(i, t) {
  let e = -1, n = -1, r = -1;
  const s = t.type;
  let o = t.typeId;
  f.isDictionary(s) ? (o = s.dictionary.typeId, r = Ci.visit(s, i), n = Ci.visit(s.dictionary, i)) : n = Ci.visit(s, i);
  const a = (s.children || []).map((d) => C.encode(i, d)), c = tt.createChildrenVector(i, a), u = t.metadata && t.metadata.size > 0 ? tt.createCustomMetadataVector(i, [...t.metadata].map(([d, h]) => {
    const F = i.createString(`${d}`), j = i.createString(`${h}`);
    return P.startKeyValue(i), P.addKey(i, F), P.addValue(i, j), P.endKeyValue(i);
  })) : -1;
  return t.name && (e = i.createString(t.name)), tt.startField(i), tt.addType(i, n), tt.addTypeType(i, o), tt.addChildren(i, c), tt.addNullable(i, !!t.nullable), e !== -1 && tt.addName(i, e), r !== -1 && tt.addDictionary(i, r), u !== -1 && tt.addCustomMetadata(i, u), tt.endField(i);
}
function dc(i, t) {
  const e = t.nodes || [], n = t.buffers || [];
  Mt.startNodesVector(i, e.length);
  for (const o of e.slice().reverse())
    Fe.encode(i, o);
  const r = i.endVector();
  Mt.startBuffersVector(i, n.length);
  for (const o of n.slice().reverse())
    Rt.encode(i, o);
  const s = i.endVector();
  return Mt.startRecordBatch(i), Mt.addLength(i, BigInt(t.length)), Mt.addNodes(i, r), Mt.addBuffers(i, s), Mt.endRecordBatch(i);
}
function hc(i, t) {
  const e = ft.encode(i, t.data);
  return ce.startDictionaryBatch(i), ce.addId(i, BigInt(t.id)), ce.addIsDelta(i, t.isDelta), ce.addData(i, e), ce.endDictionaryBatch(i);
}
function fc(i, t) {
  return vs.createFieldNode(i, BigInt(t.length), BigInt(t.nullCount));
}
function pc(i, t) {
  return _s.createBuffer(i, BigInt(t.offset), BigInt(t.length));
}
const yc = (() => {
  const i = new ArrayBuffer(2);
  return new DataView(i).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(i)[0] === 256;
})(), mn = (i) => `Expected ${L[i]} Message in stream, but was null or length 0.`, bn = (i) => `Header pointer of flatbuffer-encoded ${L[i]} Message is null or length 0.`, Bs = (i, t) => `Expected to read ${i} metadata bytes, but only read ${t}.`, Fs = (i, t) => `Expected to read ${i} bytes for message body, but only read ${t}.`;
class As {
  constructor(t) {
    this.source = t instanceof bi ? t : new bi(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? k : t;
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(mn(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = N(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(Fs(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = L.Schema, n = this.readMessage(e), r = n == null ? void 0 : n.header();
    if (t && !r)
      throw new Error(bn(e));
    return r;
  }
  readMetadataLength() {
    const t = this.source.read(Ti), e = t && new be(t), n = (e == null ? void 0 : e.readInt32(0)) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return k;
    if (e.byteLength < t)
      throw new Error(Bs(t, e.byteLength));
    return { done: !1, value: lt.decode(e) };
  }
}
class mc {
  constructor(t, e) {
    this.source = t instanceof Ie ? t : $n(t) ? new gi(t, e) : new Ie(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return p(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? k : t;
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return p(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(mn(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return p(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = N(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(Fs(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema(t = !1) {
    return p(this, void 0, void 0, function* () {
      const e = L.Schema, n = yield this.readMessage(e), r = n == null ? void 0 : n.header();
      if (t && !r)
        throw new Error(bn(e));
      return r;
    });
  }
  readMetadataLength() {
    return p(this, void 0, void 0, function* () {
      const t = yield this.source.read(Ti), e = t && new be(t), n = (e == null ? void 0 : e.readInt32(0)) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return p(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return k;
      if (e.byteLength < t)
        throw new Error(Bs(t, e.byteLength));
      return { done: !1, value: lt.decode(e) };
    });
  }
}
class bc extends As {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Dn ? t : new Dn(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: lt.fromJSON(t.schema, L.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: lt.fromJSON(e, L.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: lt.fromJSON(e, L.RecordBatch) };
    }
    return this._body = [], k;
  }
  readMessageBody(t) {
    return e(this._body);
    function e(n) {
      return (n || []).reduce((r, s) => [
        ...r,
        ...s.VALIDITY && [s.VALIDITY] || [],
        ...s.TYPE && [s.TYPE] || [],
        ...s.OFFSET && [s.OFFSET] || [],
        ...s.DATA && [s.DATA] || [],
        ...e(s.children)
      ], []);
    }
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(mn(t));
    return e.value;
  }
  readSchema() {
    const t = L.Schema, e = this.readMessage(t), n = e == null ? void 0 : e.header();
    if (!e || !n)
      throw new Error(bn(t));
    return n;
  }
}
const Ti = 4, Gi = "ARROW1", Ii = new Uint8Array(Gi.length);
for (let i = 0; i < Gi.length; i += 1)
  Ii[i] = Gi.codePointAt(i);
function gn(i, t = 0) {
  for (let e = -1, n = Ii.length; ++e < n; )
    if (Ii[e] !== i[t + e])
      return !1;
  return !0;
}
const ke = Ii.length, Os = ke + Ti, gc = ke * 2 + Ti;
class xt extends hs {
  constructor(t) {
    super(), this._impl = t;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(t) {
    return this._impl.throw(t);
  }
  return(t) {
    return this._impl.return(t);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(t) {
    return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this;
  }
  open(t) {
    const e = this._impl.open(t);
    return Ne(e) ? e.then(() => this) : this;
  }
  readRecordBatch(t) {
    return this._impl.isFile() ? this._impl.readRecordBatch(t) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return et.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return et.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /** @nocollapse */
  static from(t) {
    return t instanceof xt ? t : ki(t) ? Ic(t) : $n(t) ? Fc(t) : Ne(t) ? p(this, void 0, void 0, function* () {
      return yield xt.from(yield t);
    }) : Wn(t) || Xi(t) || Jn(t) || qi(t) ? Bc(new Ie(t)) : Sc(new bi(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof xt ? t.isSync() ? Cn(t) : Vn(t) : ki(t) || ArrayBuffer.isView(t) || Oi(t) || Pn(t) ? Cn(t) : Vn(t);
  }
}
class Si extends xt {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return Bt(this, arguments, function* () {
      yield S(yield* We(ue(this[Symbol.iterator]())));
    });
  }
}
class Bi extends xt {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    var t, e, n, r;
    return p(this, void 0, void 0, function* () {
      const s = new Array();
      try {
        for (var o = !0, a = ue(this), c; c = yield a.next(), t = c.done, !t; ) {
          r = c.value, o = !1;
          try {
            const u = r;
            s.push(u);
          } finally {
            o = !0;
          }
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          !o && !t && (n = a.return) && (yield n.call(a));
        } finally {
          if (e) throw e.error;
        }
      }
      return s;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class Ds extends Si {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class _c extends Bi {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Ns {
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  constructor(t = /* @__PURE__ */ new Map()) {
    this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t;
  }
  isSync() {
    return !1;
  }
  isAsync() {
    return !1;
  }
  isFile() {
    return !1;
  }
  isStream() {
    return !1;
  }
  reset(t) {
    return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = /* @__PURE__ */ new Map(), this;
  }
  _loadRecordBatch(t, e) {
    const n = this._loadVectors(t, e, this.schema.fields), r = A({ type: new W(this.schema.fields), length: t.length, children: n });
    return new ct(this.schema, r);
  }
  _loadDictionaryBatch(t, e) {
    const { id: n, isDelta: r } = t, { dictionaries: s, schema: o } = this, a = s.get(n);
    if (r || !a) {
      const c = o.dictionaries.get(n), u = this._loadVectors(t.data, e, [c]);
      return (a && r ? a.concat(new U(u)) : new U(u)).memoize();
    }
    return a.memoize();
  }
  _loadVectors(t, e, n) {
    return new ps(e, t.nodes, t.buffers, this.dictionaries).visitMany(n);
  }
}
class Fi extends Ns {
  constructor(t, e) {
    super(e), this._reader = ki(t) ? new bc(this._handle = t) : new As(this._handle = t);
  }
  isSync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
  }
  open(t) {
    return this.closed || (this.autoDestroy = Ms(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : k;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : k;
  }
  next() {
    if (this.closed)
      return k;
    let t;
    const { _reader: e } = this;
    for (; t = this._readNextMessageAndValidate(); )
      if (t.isSchema())
        this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const n = t.header(), r = e.readMessageBody(t.bodyLength);
        return { done: !1, value: this._loadRecordBatch(n, r) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const n = t.header(), r = e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(n, r);
        this.dictionaries.set(n.id, s);
      }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new gs(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class Ai extends Ns {
  constructor(t, e) {
    super(e), this._reader = new mc(this._handle = t);
  }
  isAsync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return p(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return p(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Ms(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return p(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : k;
    });
  }
  return(t) {
    return p(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : k;
    });
  }
  next() {
    return p(this, void 0, void 0, function* () {
      if (this.closed)
        return k;
      let t;
      const { _reader: e } = this;
      for (; t = yield this._readNextMessageAndValidate(); )
        if (t.isSchema())
          yield this.reset(t.header());
        else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          const n = t.header(), r = yield e.readMessageBody(t.bodyLength);
          return { done: !1, value: this._loadRecordBatch(n, r) };
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const n = t.header(), r = yield e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(n, r);
          this.dictionaries.set(n.id, s);
        }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new gs(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return p(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class Ts extends Fi {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, e) {
    super(t instanceof Nn ? t : new Nn(t), e);
  }
  isSync() {
    return !0;
  }
  isFile() {
    return !0;
  }
  open(t) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const e of this._footer.dictionaryBatches())
        e && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(t);
  }
  readRecordBatch(t) {
    var e;
    if (this.closed)
      return null;
    this._footer || this.open();
    const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
    if (n && this._handle.seek(n.offset)) {
      const r = this._reader.readMessage(L.RecordBatch);
      if (r != null && r.isRecordBatch()) {
        const s = r.header(), o = this._reader.readMessageBody(r.bodyLength);
        return this._loadRecordBatch(s, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var e;
    const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
    if (n && this._handle.seek(n.offset)) {
      const r = this._reader.readMessage(L.DictionaryBatch);
      if (r != null && r.isDictionaryBatch()) {
        const s = r.header(), o = this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
        this.dictionaries.set(s.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Os, n = t.readInt32(e), r = t.readAt(e - n, n);
    return dn.decode(r);
  }
  _readNextMessageAndValidate(t) {
    var e;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
      if (n && this._handle.seek(n.offset))
        return this._reader.readMessage(t);
    }
    return null;
  }
}
class vc extends Ai {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, ...e) {
    const n = typeof e[0] != "number" ? e.shift() : void 0, r = e[0] instanceof Map ? e.shift() : void 0;
    super(t instanceof gi ? t : new gi(t, n), r);
  }
  isFile() {
    return !0;
  }
  isAsync() {
    return !0;
  }
  open(t) {
    const e = Object.create(null, {
      open: { get: () => super.open }
    });
    return p(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const n of this._footer.dictionaryBatches())
          n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    var e;
    return p(this, void 0, void 0, function* () {
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const r = yield this._reader.readMessage(L.RecordBatch);
        if (r != null && r.isRecordBatch()) {
          const s = r.header(), o = yield this._reader.readMessageBody(r.bodyLength);
          return this._loadRecordBatch(s, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    var e;
    return p(this, void 0, void 0, function* () {
      const n = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const r = yield this._reader.readMessage(L.DictionaryBatch);
        if (r != null && r.isDictionaryBatch()) {
          const s = r.header(), o = yield this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
          this.dictionaries.set(s.id, a);
        }
      }
    });
  }
  _readFooter() {
    return p(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - Os, n = yield t.readInt32(e), r = yield t.readAt(e - n, n);
      return dn.decode(r);
    });
  }
  _readNextMessageAndValidate(t) {
    return p(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class wc extends Fi {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, n) {
    return new Ua(e, t.nodes, t.buffers, this.dictionaries).visitMany(n);
  }
}
function Ms(i, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : i.autoDestroy;
}
function* Cn(i) {
  const t = xt.from(i);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function Vn(i) {
  return Bt(this, arguments, function* () {
    const e = yield S(xt.from(i));
    try {
      if (!(yield S(e.open({ autoDestroy: !1 }))).closed)
        do
          yield yield S(e);
        while (!(yield S(e.reset().open())).closed);
    } finally {
      yield S(e.cancel());
    }
  });
}
function Ic(i) {
  return new Si(new wc(i));
}
function Sc(i) {
  const t = i.peek(ke + 7 & -8);
  return t && t.byteLength >= 4 ? gn(t) ? new Ds(new Ts(i.read())) : new Si(new Fi(i)) : new Si(new Fi((function* () {
  })()));
}
function Bc(i) {
  return p(this, void 0, void 0, function* () {
    const t = yield i.peek(ke + 7 & -8);
    return t && t.byteLength >= 4 ? gn(t) ? new Ds(new Ts(yield i.read())) : new Bi(new Ai(i)) : new Bi(new Ai((function() {
      return Bt(this, arguments, function* () {
      });
    })()));
  });
}
function Fc(i) {
  return p(this, void 0, void 0, function* () {
    const { size: t } = yield i.stat(), e = new gi(i, t);
    return t >= gc && gn(yield e.readAt(0, ke + 7 & -8)) ? new _c(new vc(e)) : new Bi(new Ai(e));
  });
}
function Ls(i) {
  const t = xt.from(i);
  return Ne(t) ? t.then((e) => Ls(e)) : t.isAsync() ? t.readAll().then((e) => new rt(e)) : new rt(t.readAll());
}
function z(i) {
  return i != null && typeof i == "object" && i["@@functional/placeholder"] === !0;
}
function Ft(i) {
  return function t(e) {
    return arguments.length === 0 || z(e) ? t : i.apply(this, arguments);
  };
}
function $t(i) {
  return function t(e, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return z(e) ? t : Ft(function(r) {
          return i(e, r);
        });
      default:
        return z(e) && z(n) ? t : z(e) ? Ft(function(r) {
          return i(r, n);
        }) : z(n) ? Ft(function(r) {
          return i(e, r);
        }) : i(e, n);
    }
  };
}
function Us(i, t) {
  switch (i) {
    case 0:
      return function() {
        return t.apply(this, arguments);
      };
    case 1:
      return function(e) {
        return t.apply(this, arguments);
      };
    case 2:
      return function(e, n) {
        return t.apply(this, arguments);
      };
    case 3:
      return function(e, n, r) {
        return t.apply(this, arguments);
      };
    case 4:
      return function(e, n, r, s) {
        return t.apply(this, arguments);
      };
    case 5:
      return function(e, n, r, s, o) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(e, n, r, s, o, a) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(e, n, r, s, o, a, c) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(e, n, r, s, o, a, c, u) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(e, n, r, s, o, a, c, u, d) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(e, n, r, s, o, a, c, u, d, h) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Rs(i) {
  return function t(e, n, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return z(e) ? t : $t(function(s, o) {
          return i(e, s, o);
        });
      case 2:
        return z(e) && z(n) ? t : z(e) ? $t(function(s, o) {
          return i(s, n, o);
        }) : z(n) ? $t(function(s, o) {
          return i(e, s, o);
        }) : Ft(function(s) {
          return i(e, n, s);
        });
      default:
        return z(e) && z(n) && z(r) ? t : z(e) && z(n) ? $t(function(s, o) {
          return i(s, o, r);
        }) : z(e) && z(r) ? $t(function(s, o) {
          return i(s, n, o);
        }) : z(n) && z(r) ? $t(function(s, o) {
          return i(e, s, o);
        }) : z(e) ? Ft(function(s) {
          return i(s, n, r);
        }) : z(n) ? Ft(function(s) {
          return i(e, s, r);
        }) : z(r) ? Ft(function(s) {
          return i(e, n, s);
        }) : i(e, n, r);
    }
  };
}
const xs = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function Es(i) {
  return Object.prototype.toString.call(i) === "[object String]";
}
var Ac = /* @__PURE__ */ Ft(function(t) {
  return xs(t) ? !0 : !t || typeof t != "object" || Es(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), Oc = /* @__PURE__ */ (function() {
  function i(t) {
    this.f = t;
  }
  return i.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, i.prototype["@@transducer/result"] = function(t) {
    return t;
  }, i.prototype["@@transducer/step"] = function(t, e) {
    return this.f(t, e);
  }, i;
})();
function Dc(i) {
  return new Oc(i);
}
var Nc = /* @__PURE__ */ $t(function(t, e) {
  return Us(t.length, function() {
    return t.apply(e, arguments);
  });
});
function Tc(i, t, e) {
  for (var n = 0, r = e.length; n < r; ) {
    if (t = i["@@transducer/step"](t, e[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return i["@@transducer/result"](t);
}
function zn(i, t, e) {
  for (var n = e.next(); !n.done; ) {
    if (t = i["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = e.next();
  }
  return i["@@transducer/result"](t);
}
function kn(i, t, e, n) {
  return i["@@transducer/result"](e[n](Nc(i["@@transducer/step"], i), t));
}
var jn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Mc(i, t, e) {
  if (typeof i == "function" && (i = Dc(i)), Ac(e))
    return Tc(i, t, e);
  if (typeof e["fantasy-land/reduce"] == "function")
    return kn(i, t, e, "fantasy-land/reduce");
  if (e[jn] != null)
    return zn(i, t, e[jn]());
  if (typeof e.next == "function")
    return zn(i, t, e);
  if (typeof e.reduce == "function")
    return kn(i, t, e, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
var Lc = /* @__PURE__ */ Rs(Mc);
function Uc(i, t) {
  return function() {
    return t.call(this, i.apply(this, arguments));
  };
}
function Cs(i, t) {
  return function() {
    var e = arguments.length;
    if (e === 0)
      return t();
    var n = arguments[e - 1];
    return xs(n) || typeof n[i] != "function" ? t.apply(this, arguments) : n[i].apply(n, Array.prototype.slice.call(arguments, 0, e - 1));
  };
}
var Rc = /* @__PURE__ */ Rs(
  /* @__PURE__ */ Cs("slice", function(t, e, n) {
    return Array.prototype.slice.call(n, t, e);
  })
), xc = /* @__PURE__ */ Ft(
  /* @__PURE__ */ Cs(
    "tail",
    /* @__PURE__ */ Rc(1, 1 / 0)
  )
);
function Ec() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Us(arguments[0].length, Lc(Uc, arguments[0], xc(arguments)));
}
var Cc = /* @__PURE__ */ Ft(function(t) {
  return Es(t) ? t.split("").reverse().join("") : Array.prototype.slice.call(t, 0).reverse();
});
function Vi() {
  if (arguments.length === 0)
    throw new Error("compose requires at least one argument");
  return Ec.apply(this, Cc(arguments));
}
var Vc = /* @__PURE__ */ $t(function(t, e) {
  for (var n = {}, r = 0; r < t.length; )
    t[r] in e && (n[t[r]] = e[t[r]]), r += 1;
  return n;
});
class zc {
  constructor(t) {
    Li(this, "fieldNames", []);
    Li(this, "coerceRow", (t) => Vc(this.fieldNames, t));
    for (const e of t)
      f.isTimestamp(e) ? this.composeTimestampField(e) : f.isInt(e) ? this.composeIntField(e) : f.isFloat(e) && this.composeFloatField(e), this.fieldNames.push(e.name);
  }
  composeIntField(t) {
    t.type.bitWidth >= 64 && (this.coerceRow = Vi((e) => e, this.coerceRow));
  }
  composeFloatField(t) {
    this.coerceRow = Vi((e) => {
      const n = e[t.name];
      return n && (e[t.name] = parseFloat(n)), e;
    }, this.coerceRow);
  }
  composeTimestampField(t) {
    // only handle UTC or local timetamps
    (t.type.timezone === null || t.type.timezone === "UTC") && (this.coerceRow = Vi((e) => {
      const n = e[t.name];
      return n && (e[t.name] = new Date(n).toISOString()), e;
    }, this.coerceRow));
  }
}
const Ze = (i) => {
  switch (i.typeId) {
    case l.Null:
      return "null";
    case l.Int:
      return "integer";
    case l.Float:
      return i.precision === Y.DOUBLE ? "double" : "float";
    case l.Binary:
    case l.FixedSizeBinary:
      return "binary";
    case l.Utf8:
      return "string";
    case l.Bool:
      return "boolean";
    case l.Decimal:
      return "decimal";
    case l.Date:
      return "date";
    case l.Time:
      return "time";
    case l.Timestamp:
      return "timestamp";
    case l.Interval:
      return "interval";
    case l.List:
    case l.FixedSizeList:
      return `[${Ze(i.children[0].type)}]`;
    case l.Struct:
      return "struct";
    case l.Union:
      return i.children.map((t) => Ze(t.type)).filter((t) => t !== "null").join(" or ");
    case l.Map:
      return "map";
    case l.Dictionary:
      return f.isUtf8(i.valueType) ? "category" : Ze(i.valueType);
    default:
      return i.toString();
  }
}, kc = (i) => i.fields.map((t) => ({
  name: t.name,
  type: Ze(t.type)
})), qc = (i) => {
  const t = [], e = Ls(i), n = new zc(e.schema.fields);
  for (const r of e)
    t.push(n.coerceRow(r));
  return {
    schema: kc(e.schema),
    data: t,
    // For now we want to disable sanddance for datasets containing int64 columns
    containsBigInt: e.schema.fields.some(
      (r) => r.type.bitWidth && r.type.bitWidth >= 64
    )
  };
};
export {
  qc as apiResponseToArrow
};
