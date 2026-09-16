import { hostSlot as e, sandboxPoll as t } from "@intentic/extension-api";
import { useMutation as n, useQuery as r, useQueryClient as i } from "@tanstack/vue-query";
import { Fragment as a, computed as o, createBlock as s, createCommentVNode as c, createElementBlock as l, createElementVNode as u, createTextVNode as d, createVNode as f, defineComponent as p, normalizeClass as ee, openBlock as m, ref as te, renderList as ne, toDisplayString as h, unref as g, withCtx as _ } from "vue";
import { ExtensionManifestSchema as re } from "@intentic/extension-manifest";
import { Button as ie, Code as ae, ConfirmDialog as oe, DisclosureRow as se, Notice as ce, NoticeStack as le, Row as ue, RowGroup as de, SkeletonRows as fe, SplitView as pe, StatusBadge as me, formatTimestamp as he, timeAgo as ge, ui as _e, useAsyncAction as ve, useLoadingReveal as ye, useNow as be } from "@intentic/extension-ui";
//#region \0rolldown/runtime.js
var xe = Object.defineProperty, v = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Se = (e, t) => {
	let n = {};
	for (var r in e) xe(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || xe(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ce, we, Te = v((() => {
	({bindHost: Ce, host: we} = e("ext-issues"));
}));
//#endregion
//#region src/useIssues.ts
function Ee() {
	let e = we(), t = i(), a = De(), { data: s, error: c, isLoading: l } = r({
		...a,
		enabled: o(() => e.sandbox.reachable())
	}), u = () => t.invalidateQueries({ queryKey: a.queryKey }), d = n({
		mutationFn: ({ id: t, status: n }) => e.sandbox.rpc.issues.status({
			id: t,
			status: n
		}),
		onSuccess: u
	}), f = n({
		mutationFn: (t) => e.sandbox.rpc.issues.investigate({ id: t }),
		onSuccess: u
	}), p = n({
		mutationFn: (t) => e.sandbox.rpc.issues.remove({ id: t }),
		onSuccess: u
	});
	return {
		issues: o(() => (s.value?.issues ?? []).toSorted((e, t) => ke[e.status] - ke[t.status] || t.lastSeen - e.lastSeen)),
		invalid: o(() => s.value?.invalid ?? []),
		owed: o(() => Oe(s.value).owed),
		broken: o(() => Oe(s.value).broken),
		error: o(() => c.value?.message),
		isLoading: l,
		setStatus: d,
		investigate: f,
		remove: p
	};
}
var De, Oe, ke, Ae = v((() => {
	Te(), De = () => ({
		queryKey: we().sandbox.key("issues"),
		queryFn: () => we().sandbox.rpc.issues.list()
	}), Oe = (e) => {
		let t = (e?.issues ?? []).filter((e) => e.status === "open"), n = t.filter((e) => (e.runs?.length ?? 0) > 0).length;
		return {
			owed: t.length,
			broken: n + (e?.invalid.length ?? 0)
		};
	}, ke = {
		open: 0,
		investigating: 1,
		resolved: 2,
		ignored: 3
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js
function je(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Me(e, t = "|") {
	return e.map((e) => qe(e)).join(t);
}
function Ne(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function Pe(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function Fe(e) {
	return e == null;
}
function Ie(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Le(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function Re(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== yt) return r === void 0 && (r = yt, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function y(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function ze(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Be(e) {
	return JSON.stringify(e);
}
function Ve(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function He(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ue(e) {
	if (He(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return He(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function We(e) {
	return Ue(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function Ge(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ke(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function b(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function qe(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Je(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function Ye(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return Ke(e, ze(e._zod.def, {
		get shape() {
			let e = {};
			for (let r of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, r)) throw Error(`Unrecognized key: "${String(r)}"`);
				t[r] && y(e, r, n.shape[r]);
			}
			return y(this, "shape", e), e;
		},
		checks: []
	}));
}
function Xe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return Ke(e, ze(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, e)) throw Error(`Unrecognized key: "${String(e)}"`);
				t[e] && delete r[e];
			}
			return y(this, "shape", r), r;
		},
		checks: []
	}));
}
function Ze(e, t) {
	if (!Ue(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return Ke(e, ze(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return y(this, "shape", n), n;
	} }));
}
function Qe(e, t) {
	if (!Ue(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return Ke(e, ze(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return y(this, "shape", n), n;
	} }));
}
function $e(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return Ke(e, ze(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return y(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function et(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	return Ke(t, ze(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t of Reflect.ownKeys(n)) {
				if (!Object.prototype.hasOwnProperty.call(r, t)) throw Error(`Unrecognized key: "${String(t)}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t of Reflect.ownKeys(r)) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return y(this, "shape", i), i;
		},
		checks: []
	}));
}
function tt(e, t, n) {
	return Ke(t, ze(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t of Reflect.ownKeys(n)) {
			if (!Object.prototype.hasOwnProperty.call(i, t)) throw Error(`Unrecognized key: "${String(t)}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t of Reflect.ownKeys(r)) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return y(this, "shape", i), i;
	} }));
}
function nt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function rt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function it(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function at(e) {
	return typeof e == "string" ? e : e?.message;
}
function ot(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function st(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : at(e.inst?._zod.def?.error?.(e)) ?? at(a?.(e)) ?? at(t?.error?.(e)) ?? at(n.customError?.(e)) ?? at(n.localeError?.(e)) ?? "Invalid input", { inst: s, schema: c, continue: l, input: u, ...d } = e;
	return d.path ??= [], d.message = o, t?.reportInput && (d.input = u), d;
}
function ct(e) {
	let t = e.length;
	if (!wt.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function lt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ut(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function dt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function ft(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : ht(e, n, r.value);
	}
}
function pt(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function mt(e, t, n) {
	return pt(e, t, n, !1);
}
function ht(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : pt(this, t, n.bind(this));
		},
		set(e) {
			pt(this, t, e);
		}
	});
}
function gt(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function x(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Tt !== e._zod) {
		Tt = void 0;
		return;
	}
	Tt = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Dt);
			let e = Et;
			Et = !1;
			try {
				let r = n(this);
				return Et ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Et ||= e, r;
			} catch (n) {
				throw delete this[t], Et ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function _t(e, t, n, r) {
	let i = gt(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
function vt(e) {
	let t = () => e;
	return t[Ot] = !0, t;
}
var yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt = v((() => {
	Lt(), yt = /* @__PURE__*/ Symbol("evaluating"), bt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}, xt = /* @__PURE__*/ Pe(() => {
		if (C.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
		try {
			return Function(""), !0;
		} catch {
			return !1;
		}
	}), St = /* @__PURE__*/ new Set([
		"string",
		"number",
		"symbol"
	]), Ct = {
		safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	}, wt = /[\uD800-\uDBFF]/, Et = !1, Dt = {
		configurable: !0,
		get() {
			Et = !0;
		}
	}, Ot = "~constantCatch";
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js
function At(e) {
	let t = Pt;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Pt = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function S(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Nt.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Nt);
			} finally {
				Nt.value = void 0;
			}
		}
		if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), ft(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? At(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
function jt(e) {
	return e && Object.assign(C, e), C;
}
var Mt, Nt, Pt, Ft, It, C, Lt = v((() => {
	kt(), Nt = {
		value: void 0,
		enumerable: !1
	}, Pt = "captureStackTrace" in Error ? Error : null, Ft = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, It = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Mt = globalThis).__zod_globalConfig ?? (Mt.__zod_globalConfig = {}), C = globalThis.__zod_globalConfig;
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js
function Rt() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Ne, 2), e.message;
}
function zt(e) {
	this._zod.message = e;
}
function Bt(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Vt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Bt(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Ht(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
var Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt = v((() => {
	Lt(), kt(), Ut = {
		get: Rt,
		set: zt,
		enumerable: !0,
		configurable: !0
	}, Wt = {
		value: void 0,
		enumerable: !1
	}, Gt = {
		value: void 0,
		enumerable: !1
	}, Kt = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), qt = (e, t) => {
		e.name = "$ZodError", Wt.value = e._zod, Object.defineProperty(e, "_zod", Wt), Gt.value = t, Object.defineProperty(e, "issues", Gt), Wt.value = void 0, Gt.value = void 0, Object.defineProperty(e, "message", Ut);
		let n = Object.getPrototypeOf(e);
		Kt.has(n) || (Kt.add(n), Object.defineProperty(n, "toString", {
			configurable: !0,
			enumerable: !1,
			get() {
				let e = () => this.message;
				return Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				}), e;
			},
			set(e) {
				Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				});
			}
		}));
	}, Jt = S("$ZodError", qt), Yt = S("$ZodError", qt, void 0, { Parent: Error });
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js
function Zt(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn = v((() => {
	Lt(), Xt(), kt(), Qt = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new Ft();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => st(e, o, jt())));
				throw bt(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, $t = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => st(e, o, jt())));
				throw bt(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, en = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new Ft();
		return a.issues.length ? {
			success: !1,
			error: new (e ?? Jt)(a.issues.map((e) => st(e, i, jt())))
		} : {
			success: !0,
			data: a.value
		};
	}, tn = /* @__PURE__*/ en(Yt), nn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? {
			success: !1,
			error: new e(a.issues.map((e) => st(e, i, jt())))
		} : {
			success: !0,
			data: a.value
		};
	}, rn = /* @__PURE__*/ nn(Yt), an = (e) => {
		let t = Qt(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, Zt(n, a));
		};
		return n;
	}, on = (e) => {
		let t = Qt(e), n = (e, r, i, a) => t(e, r, i, Zt(n, a));
		return n;
	}, sn = (e) => {
		let t = $t(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, Zt(n, a));
		};
		return n;
	}, cn = (e) => {
		let t = $t(e), n = async (e, r, i, a) => await t(e, r, i, Zt(n, a));
		return n;
	}, ln = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return en(e)(t, n, i);
	}, un = (e) => (t, n, r) => en(e)(t, n, r), dn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return nn(e)(t, n, i);
	}, fn = (e) => async (t, n, r) => nn(e)(t, n, r);
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/regexes.js
function mn(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function hn() {
	return new RegExp(An, "u");
}
function gn(e) {
	return RegExp(`^${e}$`);
}
function _n(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function vn(e) {
	return RegExp(`^${_n(e)}$`);
}
function yn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${_n({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${_n({ precision: e.precision })}` : n;
	return RegExp(`^${zn}T(?:${r})$`);
}
var bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn = v((() => {
	bn = /^[cC][0-9a-z]{6,}$/, xn = /^[0-9a-z]+$/, Sn = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Cn = /^[0-9a-vA-V]{20}$/, wn = /^[A-Za-z0-9]{27}$/, Tn = /^[a-zA-Z0-9_-]{21}$/, En = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Dn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, On = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, kn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, An = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", jn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Mn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Nn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Pn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Fn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, In = /^[A-Za-z0-9_-]*$/, Ln = /^https?$/, Rn = /^\+[1-9]\d{6,14}$/, zn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Bn = /*@__PURE__*/ gn(zn), Vn = (e) => {
		let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
		return RegExp(`^${t}$`);
	}, Hn = /^-?\d+$/, Un = /^-?\d+(?:\.\d+)?$/, Wn = /^(?:true|false)$/i, Gn = /^[^A-Z]*$/, Kn = /^[^a-z]*$/;
})), w, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr = v((() => {
	Lt(), qn(), kt(), w = /*@__PURE__*/ S("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), Jn = (e) => {
		let t = e.value;
		return !Fe(t) && t.length !== void 0;
	}, Yn = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, Xn = /*@__PURE__*/ S("$ZodCheckLessThan", (e, t) => {
		w.init(e, t);
		let n = Yn[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
			t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: Yn[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), Zn = /*@__PURE__*/ S("$ZodCheckGreaterThan", (e, t) => {
		w.init(e, t);
		let n = Yn[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
			t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: Yn[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), Qn = /*@__PURE__*/ S("$ZodCheckMultipleOf", (e, t) => {
		w.init(e, t), e._zod.onattach.push((e) => {
			var n;
			(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
		}), e._zod.check = (n) => {
			if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
			(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : Le(n.value, t.value) === 0) || n.issues.push({
				origin: typeof n.value,
				code: "not_multiple_of",
				divisor: t.value,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), $n = /*@__PURE__*/ S("$ZodCheckNumberFormat", (e, t) => {
		w.init(e, t), t.format = t.format || "float64";
		let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Ct[t.format];
		e._zod.onattach.push((e) => {
			let r = e._zod.bag;
			r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = Hn);
		}), e._zod.check = (o) => {
			let s = o.value;
			if (n) {
				if (!Number.isInteger(s)) {
					o.issues.push({
						expected: r,
						format: t.format,
						code: "invalid_type",
						continue: !1,
						input: s,
						inst: e
					});
					return;
				}
				if (!Number.isSafeInteger(s)) {
					s > 0 ? o.issues.push({
						input: s,
						code: "too_big",
						maximum: 2 ** 53 - 1,
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					}) : o.issues.push({
						input: s,
						code: "too_small",
						minimum: -(2 ** 53 - 1),
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					});
					return;
				}
			}
			s < i && o.issues.push({
				origin: "number",
				input: s,
				code: "too_small",
				minimum: i,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			}), s > a && o.issues.push({
				origin: "number",
				input: s,
				code: "too_big",
				maximum: a,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			});
		};
	}), er = /*@__PURE__*/ S("$ZodCheckMaxLength", (e, t) => {
		var n;
		w.init(e, t), (n = e._zod.def).when ?? (n.when = Jn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.maximum ?? Infinity;
			t.maximum < n && (e._zod.bag.maximum = t.maximum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? ct(r) : i) <= t.maximum) return;
			let a = lt(r);
			n.issues.push({
				origin: a,
				code: "too_big",
				maximum: t.maximum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), tr = /*@__PURE__*/ S("$ZodCheckMinLength", (e, t) => {
		var n;
		w.init(e, t), (n = e._zod.def).when ?? (n.when = Jn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.minimum ?? -Infinity;
			t.minimum > n && (e._zod.bag.minimum = t.minimum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? ct(r) : i) >= t.minimum) return;
			let a = lt(r);
			n.issues.push({
				origin: a,
				code: "too_small",
				minimum: t.minimum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), nr = /*@__PURE__*/ S("$ZodCheckLengthEquals", (e, t) => {
		var n;
		w.init(e, t), (n = e._zod.def).when ?? (n.when = Jn), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.minimum = t.length, n.maximum = t.length, n.length = t.length;
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? ct(r) : i;
			if (a === t.length) return;
			let o = lt(r), s = a > t.length;
			n.issues.push({
				origin: o,
				...s ? {
					code: "too_big",
					maximum: t.length
				} : {
					code: "too_small",
					minimum: t.length
				},
				inclusive: !0,
				exact: !0,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), rr = /*@__PURE__*/ S("$ZodCheckStringFormat", (e, t) => {
		var n, r;
		w.init(e, t), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
		}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: t.format,
				input: n.value,
				...t.pattern ? { pattern: t.pattern.toString() } : {},
				inst: e,
				continue: !t.abort
			});
		}) : (r = e._zod).check ?? (r.check = () => {});
	}), ir = /*@__PURE__*/ S("$ZodCheckRegex", (e, t) => {
		rr.init(e, t), e._zod.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "regex",
				input: n.value,
				pattern: t.pattern.toString(),
				inst: e,
				continue: !t.abort
			});
		};
	}), ar = /*@__PURE__*/ S("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= Gn, rr.init(e, t);
	}), or = /*@__PURE__*/ S("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= Kn, rr.init(e, t);
	}), sr = /*@__PURE__*/ S("$ZodCheckIncludes", (e, t) => {
		w.init(e, t);
		let n = Ge(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
		t.pattern = r, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
		}), e._zod.check = (n) => {
			n.value.includes(t.includes, t.position) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "includes",
				includes: t.includes,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), cr = /*@__PURE__*/ S("$ZodCheckStartsWith", (e, t) => {
		w.init(e, t);
		let n = RegExp(`^${Ge(t.prefix)}.*`);
		t.pattern ??= n, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
		}), e._zod.check = (n) => {
			n.value.startsWith(t.prefix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "starts_with",
				prefix: t.prefix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), lr = /*@__PURE__*/ S("$ZodCheckEndsWith", (e, t) => {
		w.init(e, t);
		let n = RegExp(`.*${Ge(t.suffix)}$`);
		t.pattern ??= n, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
		}), e._zod.check = (n) => {
			n.value.endsWith(t.suffix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "ends_with",
				suffix: t.suffix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), ur = /*@__PURE__*/ S("$ZodCheckOverwrite", (e, t) => {
		w.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), fr, pr = v((() => {
	fr = class {
		constructor(e = [], t = {}) {
			this.content = [], this.indent = 0, this.args = e, this.closed = t;
		}
		indented(e) {
			this.indent += 1, e(this), --this.indent;
		}
		write(e) {
			if (typeof e == "function") {
				e(this, { execution: "sync" }), e(this, { execution: "async" });
				return;
			}
			let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
			for (let e of r) this.content.push(e);
		}
		compile() {
			let e = Function, t = this?.content ?? [""];
			return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
		}
	};
})), mr, hr = v((() => {
	mr = {
		major: 4,
		minor: 5,
		patch: 4
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/schemas.js
function gr(e) {
	return {
		validate: (t) => {
			try {
				return Gr(tn(e, t));
			} catch {
				return rn(e, t).then(Gr);
			}
		},
		vendor: "zod",
		version: 1
	};
}
function _r(e, t) {
	if (!t.normalize && t.protocol?.source === Ln.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		return new URL(e);
	} catch {
		return 2;
	}
}
function vr(e) {
	return e.replace(Xr, "");
}
function yr(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function br(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function xr(e) {
	if (!ui.test(e)) return !1;
	try {
		return new URL(`http://[${e}]`), !0;
	} catch {
		return !1;
	}
}
function Sr(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : xr(n);
}
function Cr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function wr(e) {
	if (!In.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Cr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Tr(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
function Er(e, t, n) {
	e.issues.length && t.issues.push(...it(n, e.issues)), t.value[n] = e.value;
}
function Dr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...it(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
function Or(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : wi, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Je(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function kr(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin, d = c.optout;
	for (let i in t) {
		if (s.has(i)) continue;
		if (i === "__proto__") {
			l === "never" && o.push(i);
			continue;
		}
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Dr(e, n, i, t, u, d))) : Dr(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Ar(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !nt(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => st(e, r, jt())))
	}), t);
}
function jr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Ue(e) && Ue(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = jr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = jr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Mr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = jr(t.value, n.value);
	if (!c.valid) {
		if (nt(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function Nr(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional")) return n + 1;
	return 0;
}
function Pr(e, t, n) {
	e.issues.length && t.issues.push(...it(n, e.issues)), t.value[n] = e.value;
}
function Fr(e, t, n, r, i) {
	for (let a = 0; a < n.length; a++) {
		let o = e[a], s = a < r.length;
		if (!s && a >= i && n[a]._zod.optin === "optional") {
			t.value.length = a;
			break;
		}
		if (o.issues.length) {
			if (!s && a >= i) {
				t.value.length = a;
				break;
			}
			t.issues.push(...it(a, o.issues));
		}
		t.value[a] = o.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
function Ir(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function Lr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Rr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function zr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => st(e, r, jt())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function Br(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function Vr(e, t, n) {
	if (e.issues.length) return e.aborted = !0, e;
	if ((n.direction || "forward") === "forward") {
		let r = t.transform(e.value, e);
		return r instanceof Promise ? r.then((r) => Hr(e, r, t.out, n)) : Hr(e, r, t.out, n);
	}
	{
		let r = t.reverseTransform(e.value, e);
		return r instanceof Promise ? r.then((r) => Hr(e, r, t.in, n)) : Hr(e, r, t.in, n);
	}
}
function Hr(e, t, n, r) {
	return e.issues.length ? (e.aborted = !0, e) : n._zod.run({
		value: t,
		issues: e.issues
	}, r);
}
function Ur(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function Wr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(dt(e));
	}
}
var T, Gr, Kr, E, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji = v((() => {
	dr(), Lt(), pr(), pn(), qn(), kt(), hr(), T = /*@__PURE__*/ S("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = mr;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = nt(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (rt(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new Ft();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (ot(t.issues, n, e), i ||= nt(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						ot(t.issues, n, e), i ||= nt(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (nt(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Ft();
					return o.then((t) => e._zod.parse(t, a));
				}
				return e._zod.parse(o, a);
			};
			e._zod.run = (r, a) => {
				if (a.skipChecks) return e._zod.parse(r, a);
				if (a.direction === "backward") {
					let t = e._zod.parse({
						value: r.value,
						issues: []
					}, {
						...a,
						skipChecks: !0
					});
					return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
				}
				let o = e._zod.parse(r, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Ft();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return mt(this, "~standard", gr(this));
		},
		set "~standard"(e) {
			pt(this, "~standard", e);
		}
	}), Gr = (e) => e.success ? { value: e.data } : { issues: e.error?.issues }, Kr = /*@__PURE__*/ S("$ZodString", (e, t) => {
		T.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Vn(e._zod.bag), e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = String(n.value);
			} catch {}
			return typeof n.value == "string" || n.issues.push({
				expected: "string",
				code: "invalid_type",
				input: n.value,
				inst: e
			}), n;
		};
	}), E = /*@__PURE__*/ S("$ZodStringFormat", (e, t) => {
		rr.init(e, t), Kr.init(e, t);
	}), qr = /*@__PURE__*/ S("$ZodGUID", (e, t) => {
		t.pattern ??= Dn, E.init(e, t);
	}), Jr = /*@__PURE__*/ S("$ZodUUID", (e, t) => {
		if (t.version) {
			let e = {
				v1: 1,
				v2: 2,
				v3: 3,
				v4: 4,
				v5: 5,
				v6: 6,
				v7: 7,
				v8: 8
			}[t.version];
			if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
			t.pattern ??= On(e);
		} else t.pattern ??= On();
		E.init(e, t);
	}), Yr = /*@__PURE__*/ S("$ZodEmail", (e, t) => {
		t.pattern ??= kn, E.init(e, t);
	}), Xr = /[\t\n\r]/g, Zr = /*@__PURE__*/ S("$ZodURL", (e, t) => {
		E.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = _r(r, t);
				if (i === 1) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				if (i === 2) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				t.hostname && !yr(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !br(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : vr(r);
				return;
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
			}
		};
	}), Qr = /*@__PURE__*/ S("$ZodEmoji", (e, t) => {
		t.pattern ??= hn(), E.init(e, t);
	}), $r = /*@__PURE__*/ S("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? Tn : mn(t.length), E.init(e, t);
	}), ei = /*@__PURE__*/ S("$ZodCUID", (e, t) => {
		t.pattern ??= bn, E.init(e, t);
	}), ti = /*@__PURE__*/ S("$ZodCUID2", (e, t) => {
		t.pattern ??= xn, E.init(e, t);
	}), ni = /*@__PURE__*/ S("$ZodULID", (e, t) => {
		t.pattern ??= Sn, E.init(e, t);
	}), ri = /*@__PURE__*/ S("$ZodXID", (e, t) => {
		t.pattern ??= Cn, E.init(e, t);
	}), ii = /*@__PURE__*/ S("$ZodKSUID", (e, t) => {
		t.pattern ??= wn, E.init(e, t);
	}), ai = /*@__PURE__*/ S("$ZodISODateTime", (e, t) => {
		t.pattern ??= yn(t), E.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((e) => {
			e._zod.bag.laxFormat = !0;
		}));
	}), oi = /*@__PURE__*/ S("$ZodISODate", (e, t) => {
		t.pattern ??= Bn, E.init(e, t);
	}), si = /*@__PURE__*/ S("$ZodISOTime", (e, t) => {
		t.pattern ??= vn(t), E.init(e, t);
	}), ci = /*@__PURE__*/ S("$ZodISODuration", (e, t) => {
		t.pattern ??= En, E.init(e, t);
	}), li = /*@__PURE__*/ S("$ZodIPv4", (e, t) => {
		t.pattern ??= jn, E.init(e, t), e._zod.bag.format = "ipv4";
	}), ui = /^[0-9a-fA-F:.]+$/, di = /*@__PURE__*/ S("$ZodIPv6", (e, t) => {
		t.pattern ??= Mn, E.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
			xr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), fi = /*@__PURE__*/ S("$ZodCIDRv4", (e, t) => {
		t.pattern ??= Nn, E.init(e, t);
	}), pi = /*@__PURE__*/ S("$ZodCIDRv6", (e, t) => {
		t.pattern ??= Pn, E.init(e, t), e._zod.check = (n) => {
			Sr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), mi = /*@__PURE__*/ S("$ZodBase64", (e, t) => {
		t.pattern ??= Fn, E.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
			Cr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), hi = /*@__PURE__*/ S("$ZodBase64URL", (e, t) => {
		t.pattern ??= In, E.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
			wr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), gi = /*@__PURE__*/ S("$ZodE164", (e, t) => {
		t.pattern ??= Rn, E.init(e, t);
	}), _i = /*@__PURE__*/ S("$ZodJWT", (e, t) => {
		E.init(e, t), e._zod.check = (n) => {
			Tr(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), vi = /*@__PURE__*/ S("$ZodNumber", (e, t) => {
		T.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Un, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = Number(n.value);
			} catch {}
			let i = n.value;
			if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
			let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
			return n.issues.push({
				expected: "number",
				code: "invalid_type",
				input: i,
				inst: e,
				...a ? { received: a } : {}
			}), n;
		};
	}), yi = /*@__PURE__*/ S("$ZodNumberFormat", (e, t) => {
		$n.init(e, t), vi.init(e, t);
	}), bi = /*@__PURE__*/ S("$ZodBoolean", (e, t) => {
		T.init(e, t), e._zod.pattern = Wn, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = !!n.value;
			} catch {}
			let i = n.value;
			return typeof i == "boolean" || n.issues.push({
				expected: "boolean",
				code: "invalid_type",
				input: i,
				inst: e
			}), n;
		};
	}), xi = /*@__PURE__*/ S("$ZodUnknown", (e, t) => {
		T.init(e, t), e._zod.parse = (e) => e;
	}), Si = /*@__PURE__*/ S("$ZodNever", (e, t) => {
		T.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Ci = /*@__PURE__*/ S("$ZodArray", (e, t) => {
		T.init(e, t);
		let n = C.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Array.isArray(a)) return r.issues.push({
				expected: "array",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
			let o = [];
			for (let e = 0; e < a.length; e++) {
				let n = a[e], s = t.element._zod.run({
					value: n,
					issues: []
				}, i);
				s instanceof Promise ? o.push(s.then((t) => Er(t, r, e))) : Er(s, r, e);
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), wi = [], Ti = /* @__PURE__ */ new WeakMap(), Ei = /*@__PURE__*/ S("$ZodObject", (e, t) => {
		if (T.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
			let e = t.shape;
			Ti.set(t, e), Object.defineProperty(t, "shape", { get: () => {
				let n = { ...e };
				return Object.defineProperty(t, "shape", { value: n }), Ti.set(t, n), n;
			} });
		}
		let n = Pe(() => Or(t));
		x(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || y(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let r = He, i = t.catchall, a, o = C.memoizer;
		o?.attach(e), e._zod.parse = (t, s) => {
			a ??= n.value;
			let c = t.value;
			if (!r(c)) return t.issues.push({
				expected: "object",
				code: "invalid_type",
				input: c,
				inst: e
			}), t;
			t.value = o ? o.alloc(e, t, {}, s) : {};
			let l = [], u = a.shape;
			for (let e of a.allKeys) {
				if (e === "__proto__") continue;
				let n = u[e], r = n._zod.optin, i = n._zod.optout, a = n._zod.run({
					value: c[e],
					issues: []
				}, s);
				a instanceof Promise ? l.push(a.then((n) => Dr(n, t, e, c, r, i))) : Dr(a, t, e, c, r, i);
			}
			return i ? kr(l, c, t, s, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), Di = /*@__PURE__*/ S("$ZodObjectJIT", (e, t) => {
		Ei.init(e, t);
		let n = e._zod.parse, r = Pe(() => Or(t)), i = C.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new fr(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: a
			}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
          }`;
			o.write("const input = payload.value;");
			let l = Object.create(null), u = 0;
			for (let e of n.allKeys) l[e] = `key_${u++}`;
			o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (let e of n.allKeys) {
				if (e === "__proto__") continue;
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Be(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
				if (o.write(`const ${n} = ${s(r)};`), f && p) {
					let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
				} else f ? o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
        
        if (${n}.value === undefined) {
          if (${i}) {
            newResult[${r}] = undefined;
          }
        } else {
          newResult[${r}] = ${n}.value;
        }

      `) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
			}
			return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
		}, o, s = He, c = !C.jitless, l = c && xt.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? kr([], p, i, f, d, e) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), Oi = /*@__PURE__*/ S("$ZodUnion", (e, t) => {
		T.init(e, t), x(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), x(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), x(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), x(e, "pattern", (e) => {
			if (e.def.options.every((e) => e._zod.pattern)) {
				let t = e.def.options.map((e) => e._zod.pattern);
				return RegExp(`^(${t.map((e) => Ie(e.source)).join("|")})$`);
			}
		});
		let n = t.options.length === 1 ? t.options[0]._zod.run : null;
		e._zod.parse = (r, i) => {
			if (n) return n(r, i);
			let a = !1, o = [];
			for (let e of t.options) {
				let t = e._zod.run({
					value: r.value,
					issues: []
				}, i);
				if (t instanceof Promise) o.push(t), a = !0;
				else {
					if (t.issues.length === 0) return t;
					o.push(t);
				}
			}
			return a ? Promise.all(o).then((t) => Ar(t, r, e, i)) : Ar(o, r, e, i);
		};
	}), ki = /*@__PURE__*/ S("$ZodDiscriminatedUnion", (e, t) => {
		t.inclusive = !1, Oi.init(e, t);
		let n = e._zod.parse;
		x(e, "propValues", (e) => {
			let t = {};
			for (let n of e.def.options) {
				let r = n._zod.propValues;
				if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(n)}"`);
				for (let [e, n] of Object.entries(r)) {
					Object.prototype.hasOwnProperty.call(t, e) || y(t, e, /* @__PURE__ */ new Set());
					for (let r of n) t[e].add(r);
				}
			}
			return t;
		}), t.options.forEach((e, n) => {
			let r = Ti.get(e._zod.def);
			if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
		});
		let r = Pe(() => {
			let e = t.options, n = /* @__PURE__ */ new Map();
			for (let r of e) {
				let e = r._zod.propValues?.[t.discriminator];
				if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
				for (let t of e) {
					if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
					n.set(t, r);
				}
			}
			return n;
		});
		e._zod.parse = (i, a) => {
			let o = i.value;
			if (!He(o)) return i.issues.push({
				code: "invalid_type",
				expected: "object",
				input: o,
				inst: e
			}), i;
			let s = r.value.get(o?.[t.discriminator]);
			return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
				code: "invalid_union",
				errors: [],
				note: "No matching discriminator",
				discriminator: t.discriminator,
				options: Array.from(r.value.keys()),
				input: o,
				path: [t.discriminator],
				inst: e
			}), i);
		};
	}), Ai = /*@__PURE__*/ S("$ZodIntersection", (e, t) => {
		T.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Mr(e, t, n)) : Mr(e, i, a);
		};
	}), ji = /*@__PURE__*/ S("$ZodTuple", (e, t) => {
		T.init(e, t);
		let n = t.items, r = C.memoizer;
		r?.attach(e), e._zod.parse = (i, a) => {
			let o = i.value;
			if (!Array.isArray(o)) return i.issues.push({
				input: o,
				inst: e,
				expected: "tuple",
				code: "invalid_type"
			}), i;
			i.value = r ? r.alloc(e, i, [], a) : [];
			let s = [], c = Nr(n, "optin"), l = Nr(n, "optout");
			if (!t.rest) {
				if (o.length < c) return i.issues.push({
					code: "too_small",
					minimum: c,
					inclusive: !0,
					input: o,
					inst: e,
					origin: "array"
				}), i;
				o.length > n.length && i.issues.push({
					code: "too_big",
					maximum: n.length,
					inclusive: !0,
					input: o,
					inst: e,
					origin: "array"
				});
			}
			let u = Array(n.length);
			for (let e = 0; e < n.length; e++) {
				let t = n[e]._zod.run({
					value: o[e],
					issues: []
				}, a);
				t instanceof Promise ? s.push(t.then((t) => {
					u[e] = t;
				})) : u[e] = t;
			}
			if (t.rest) {
				let e = n.length - 1, r = o.slice(n.length);
				for (let n of r) {
					e++;
					let r = t.rest._zod.run({
						value: n,
						issues: []
					}, a);
					r instanceof Promise ? s.push(r.then((t) => Pr(t, i, e))) : Pr(r, i, e);
				}
			}
			return s.length ? Promise.all(s).then(() => Fr(u, i, n, o, l)) : Fr(u, i, n, o, l);
		};
	}), Mi = /*@__PURE__*/ S("$ZodRecord", (e, t) => {
		T.init(e, t);
		let n = C.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Ue(a)) return r.issues.push({
				expected: "record",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			let o = [], s = t.keyType._zod.values;
			if (s && !t.partial) {
				r.value = n ? n.alloc(e, r, {}, i) : {};
				let c = /* @__PURE__ */ new Set();
				for (let n of s) if (typeof n == "string" || typeof n == "number" || typeof n == "symbol") {
					if (c.add(typeof n == "number" ? n.toString() : n), n === "__proto__") continue;
					let s = t.keyType._zod.run({
						value: n,
						issues: []
					}, i);
					if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					if (s.issues.length) {
						r.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: s.issues.map((e) => st(e, i, jt())),
							input: n,
							path: [n],
							inst: e
						});
						continue;
					}
					let l = s.value;
					if (l === "__proto__") continue;
					let u = t.valueType._zod.run({
						value: a[n],
						issues: []
					}, i);
					u instanceof Promise ? o.push(u.then((e) => {
						e.issues.length && r.issues.push(...it(n, e.issues)), r.value[l] = e.value;
					})) : (u.issues.length && r.issues.push(...it(n, u.issues)), r.value[l] = u.value);
				}
				let l;
				for (let e in a) if (!c.has(e)) {
					if (t.mode === "loose") {
						if (e === "__proto__") continue;
						r.value[e] = a[e];
					} else l ??= [], l.push(e);
				}
				l && l.length > 0 && r.issues.push({
					code: "unrecognized_keys",
					input: a,
					inst: e,
					keys: l,
					continue: !0
				});
			} else {
				r.value = n ? n.alloc(e, r, {}, i) : {};
				let c;
				for (let n of Reflect.ownKeys(a)) {
					if (n === "__proto__" || !Object.prototype.propertyIsEnumerable.call(a, n)) continue;
					let l = t.keyType._zod.run({
						value: n,
						issues: []
					}, i);
					if (l instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					if (typeof n == "string" && Un.test(n) && l.issues.length) {
						let e = t.keyType._zod.run({
							value: Number(n),
							issues: []
						}, i);
						if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
						e.issues.length === 0 && (l = e);
					}
					if (l.issues.length) {
						t.mode === "loose" ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: l.issues.map((e) => st(e, i, jt())),
							input: n,
							path: [n],
							inst: e
						});
						continue;
					}
					let u = l.value;
					if (u === "__proto__") continue;
					let d = t.valueType._zod.run({
						value: a[n],
						issues: []
					}, i);
					d instanceof Promise ? o.push(d.then((e) => {
						e.issues.length && r.issues.push(...it(n, e.issues)), r.value[u] = e.value;
					})) : (d.issues.length && r.issues.push(...it(n, d.issues)), r.value[u] = d.value);
				}
				c && c.length > 0 && r.issues.push({
					code: "unrecognized_keys",
					input: a,
					inst: e,
					keys: c,
					continue: !0
				});
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Ni = /*@__PURE__*/ S("$ZodEnum", (e, t) => {
		T.init(e, t);
		let n = je(t.entries), r = new Set(n);
		e._zod.values = r;
		let i = n.filter((e) => St.has(typeof e));
		e._zod.pattern = RegExp(i.length ? `^(${i.map((e) => Ge(e.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), Pi = /*@__PURE__*/ S("$ZodLiteral", (e, t) => {
		T.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, e._zod.pattern = RegExp(t.values.length ? `^(${t.values.map((e) => typeof e == "string" ? Ge(e) : e ? Ge(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), Fi = /*@__PURE__*/ S("$ZodTransform", (e, t) => {
		T.init(e, t), e._zod.optin = "optional", C.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new It(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new Ft();
			return n.value = i, n;
		};
	}), Ii = /*@__PURE__*/ S("$ZodOptional", (e, t) => {
		T.init(e, t), x(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", x(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), x(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Ie(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => Ir(e, t)) : Ir(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), Li = /*@__PURE__*/ S("$ZodExactOptional", (e, t) => {
		Ii.init(e, t), x(e, "values", (e) => e.def.innerType._zod.values), x(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Ri = /*@__PURE__*/ S("$ZodNullable", (e, t) => {
		T.init(e, t), x(e, "optin", (e) => e.def.innerType._zod.optin), x(e, "optout", (e) => e.def.innerType._zod.optout), x(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Ie(t.source)}|null)$`) : void 0;
		}), x(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), zi = /*@__PURE__*/ S("$ZodDefault", (e, t) => {
		T.init(e, t), e._zod.optin = "defaulted", x(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Lr(e, t)) : Lr(r, t);
		};
	}), Bi = /*@__PURE__*/ S("$ZodPrefault", (e, t) => {
		T.init(e, t), e._zod.optin = "defaulted", x(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), Vi = /*@__PURE__*/ S("$ZodNonOptional", (e, t) => {
		T.init(e, t), x(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => Rr(t, e)) : Rr(i, e);
		};
	}), Hi = /*@__PURE__*/ S("$ZodCatch", (e, t) => {
		T.init(e, t), x(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), x(e, "optout", (e) => e.def.innerType._zod.optout), x(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => zr(e, r, t, n)) : zr(e, r, t, n);
		};
	}), Ui = /*@__PURE__*/ S("$ZodPipe", (e, t) => {
		T.init(e, t), x(e, "values", (e) => e.def.in._zod.values), x(e, "optin", (e) => e.def.in._zod.optin), x(e, "optout", (e) => e.def.out._zod.optout), x(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Br(e, t.in, n)) : Br(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Br(e, t.out, n)) : Br(r, t.out, n);
		};
	}), Wi = /*@__PURE__*/ S("$ZodCodec", (e, t) => {
		T.init(e, t), x(e, "values", (e) => e.def.in._zod.values), x(e, "optin", (e) => e.def.in._zod.optin), x(e, "optout", (e) => e.def.out._zod.optout), x(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if ((n.direction || "forward") === "forward") {
				let r = t.in._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Vr(e, t, n)) : Vr(r, t, n);
			}
			{
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Vr(e, t, n)) : Vr(r, t, n);
			}
		};
	}), Gi = /*@__PURE__*/ S("$ZodReadonly", (e, t) => {
		T.init(e, t), x(e, "propValues", (e) => e.def.innerType._zod.propValues), x(e, "values", (e) => e.def.innerType._zod.values), x(e, "optin", (e) => e.def.innerType?._zod?.optin), x(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then(Ur) : Ur(r);
		};
	}), Ki = /*@__PURE__*/ S("$ZodLazy", (e, t) => {
		T.init(e, t), Re(e._zod, "innerType", () => {
			let e = t;
			return e._cachedInner ||= t.getter(), e._cachedInner;
		}), x(e, "pattern", (e) => e.innerType?._zod?.pattern), x(e, "propValues", (e) => e.innerType?._zod?.propValues), x(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0), x(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
	}), qi = /*@__PURE__*/ S("$ZodCustom", (e, t) => {
		w.init(e, t), T.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => Wr(t, n, r, e));
			Wr(i, n, r, e);
		};
	});
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/memoizer.js
function Yi(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function Xi(e, t) {
	let n = ra.get(e);
	if (n !== void 0) return n;
	if (t.has(e)) return !0;
	t.add(e);
	let r = !1, i = (e) => {
		!r && e?._zod && Xi(e, t) && (r = !0);
	}, a = e._zod.def;
	switch (a.type) {
		case "object":
			for (let e of Reflect.ownKeys(a.shape)) i(a.shape[e]);
			i(a.catchall);
			break;
		case "array":
			i(a.element);
			break;
		case "tuple":
			for (let e of a.items) i(e);
			i(a.rest);
			break;
		case "record":
		case "map":
			i(a.keyType), i(a.valueType);
			break;
		case "set":
			i(a.valueType);
			break;
		case "union":
			for (let e of a.options) i(e);
			break;
		case "intersection":
			i(a.left), i(a.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			i(a.innerType);
			break;
		case "pipe":
			i(a.in), i(a.out);
			break;
		case "function":
			i(a.input), i(a.output);
			break;
		case "lazy":
			i(e._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in a) {
			let t = Object.getOwnPropertyDescriptor(a, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) i(n);
				else if (Array.isArray(n)) for (let e of n) i(e);
			}
		}
	}
	return t.delete(e), ra.set(e, r), r;
}
function Zi(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new Map(), e.buckets.set(t, n)), n;
}
function Qi() {
	return oa;
}
function $i(e, t) {
	let n = e[ta]?.backEdges;
	return n !== void 0 && typeof t == "object" && !!t && n.has(t);
}
var ea, ta, na, ra, ia, aa, oa, sa = v((() => {
	ea = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, ta = "~memo", na = [], ra = /*@__PURE__*/ new WeakMap(), aa = [], oa = {
		alloc(e, t, n) {
			let r = ia;
			if (!r) return n;
			ia = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), aa.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && $i(n, e.value)) throw new ea();
					return t(e, n);
				};
				e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
			});
		},
		attach(e) {
			var t;
			let n, r, i;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, a = (o, s) => {
					if (n === void 0 && (n = Xi(e, /* @__PURE__ */ new Set()), !n)) return e._zod.parse = t, e._zod.run === a && (e._zod.run = t), t(o, s);
					let c = o.value;
					if (typeof c != "object" || !c) return t(o, s);
					let l = s[ta];
					l || (l = {
						buckets: /* @__PURE__ */ new Map(),
						backEdges: void 0
					}, s[ta] = l);
					let u;
					r === s ? u = i : (u = Zi(l, e), r = s, i = u);
					let d = u.get(c);
					if (d) return o.value = d.value, d.issues ? d.issues.length && o.issues.push(...Yi(d.issues)) : (o.memo = !0, l.backEdges ?? (l.backEdges = /* @__PURE__ */ new Set()), l.backEdges.add(d.value)), o;
					ia = u;
					let f = aa.length, p = t(o, s);
					ia = void 0;
					let ee = aa.length > f ? aa.pop() : void 0;
					return p instanceof Promise ? p.then((e) => (ee && (ee.issues = e.issues.length ? Yi(e.issues) : na), e)) : (ee && (ee.issues = p.issues.length ? Yi(p.issues) : na), p);
				};
				e._zod.parse = a, e._zod.run === t && (e._zod.run = a);
			});
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/locales/en.js
function ca() {
	return { localeError: la() };
}
var la, ua = v((() => {
	kt(), la = () => {
		let e = {
			string: {
				unit: "characters",
				verb: "to have"
			},
			file: {
				unit: "bytes",
				verb: "to have"
			},
			array: {
				unit: "items",
				verb: "to have"
			},
			set: {
				unit: "items",
				verb: "to have"
			},
			map: {
				unit: "entries",
				verb: "to have"
			}
		};
		function t(t) {
			return e[t] ?? null;
		}
		let n = {
			regex: "input",
			email: "email address",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datetime",
			date: "ISO date",
			time: "ISO time",
			duration: "ISO duration",
			ipv4: "IPv4 address",
			ipv6: "IPv6 address",
			mac: "MAC address",
			cidrv4: "IPv4 range",
			cidrv6: "IPv6 range",
			base64: "base64-encoded string",
			base64url: "base64url-encoded string",
			json_string: "JSON string",
			e164: "E.164 number",
			credit_card: "credit card number",
			jwt: "JWT",
			template_literal: "input"
		}, r = { nan: "NaN" };
		function i(e, t) {
			return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
		}
		return (e) => {
			switch (e.code) {
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(ut(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${qe(e.values[0])}` : `Invalid option: expected one of ${Me(e.values, "|")}`;
				case "too_big": {
					let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
					return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
				}
				case "too_small": {
					let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
					return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
				}
				case "invalid_format": {
					let t = e;
					return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
				}
				case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
				case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Me(e.keys, ", ")}`;
				case "invalid_key": return `Invalid key in ${e.origin}`;
				case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
				case "invalid_element": return `Invalid value in ${e.origin}`;
				default: return "Invalid input";
			}
		};
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js
function da() {
	return new pa();
}
var fa, pa, ma, ha = v((() => {
	pa = class {
		constructor() {
			this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
		}
		add(e, ...t) {
			let n = t[0];
			return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
		}
		clear() {
			return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
		}
		remove(e) {
			let t = this._map.get(e);
			return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
		}
		get(e) {
			let t = e._zod.parent;
			if (t) {
				let n = { ...this.get(t) ?? {} };
				delete n.id;
				let r = {
					...n,
					...this._map.get(e)
				};
				return Object.keys(r).length ? r : void 0;
			}
			return this._map.get(e);
		}
		has(e) {
			return this._map.has(e);
		}
	}, (fa = globalThis).__zod_globalRegistry ?? (fa.__zod_globalRegistry = da()), ma = globalThis.__zod_globalRegistry;
})), ga = v((() => {}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _a(e, t) {
	return new e({
		type: "string",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function va(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ya(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ba(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Da(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oa(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Aa(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "number",
		checks: [],
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "number",
		coerce: !0,
		checks: [],
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "boolean",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "never",
		...b(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new Xn({
		check: "less_than",
		...b(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
	return new Xn({
		check: "less_than",
		...b(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t) {
	return new Zn({
		check: "greater_than",
		...b(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new Zn({
		check: "greater_than",
		...b(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
	return new Qn({
		check: "multiple_of",
		...b(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new er({
		check: "max_length",
		...b(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new tr({
		check: "min_length",
		...b(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new nr({
		check: "length_equals",
		...b(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new ir({
		check: "string_format",
		format: "regex",
		...b(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
	return new ar({
		check: "string_format",
		format: "lowercase",
		...b(e)
	});
}
// @__NO_SIDE_EFFECTS__
function oo(e) {
	return new or({
		check: "string_format",
		format: "uppercase",
		...b(e)
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new sr({
		check: "string_format",
		format: "includes",
		...b(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
	return new cr({
		check: "string_format",
		format: "starts_with",
		...b(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
	return new lr({
		check: "string_format",
		format: "ends_with",
		...b(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
	return new ur({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
	return /* @__PURE__ */ uo((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function po() {
	return /* @__PURE__ */ uo((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function mo() {
	return /* @__PURE__ */ uo((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function ho() {
	return /* @__PURE__ */ uo((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function go() {
	return /* @__PURE__ */ uo((e) => Ve(e));
}
// @__NO_SIDE_EFFECTS__
function _o(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...b(n)
	});
}
// @__NO_SIDE_EFFECTS__
function vo(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...b(n)
	});
}
// @__NO_SIDE_EFFECTS__
function yo(e, t) {
	let n = /* @__PURE__ */ bo((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(dt(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(dt(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function bo(e, t) {
	let n = new w({
		check: "custom",
		...b(t)
	});
	return n._zod.check = e, n;
}
// @__NO_SIDE_EFFECTS__
function xo(e, t) {
	let n = b(t), r = n.truthy ?? [
		"true",
		"1",
		"yes",
		"on",
		"y",
		"enabled"
	], i = n.falsy ?? [
		"false",
		"0",
		"no",
		"off",
		"n",
		"disabled"
	];
	n.case !== "sensitive" && (r = r.map((e) => typeof e == "string" ? e.toLowerCase() : e), i = i.map((e) => typeof e == "string" ? e.toLowerCase() : e));
	let a = new Set(r), o = new Set(i), s = e.Codec ?? Wi, c = e.Boolean ?? bi, l = new s({
		type: "pipe",
		in: new (e.String ?? Kr)({
			type: "string",
			error: n.error
		}),
		out: new c({
			type: "boolean",
			error: n.error
		}),
		transform: ((e, t) => {
			let r = e;
			return n.case !== "sensitive" && (r = r.toLowerCase()), a.has(r) ? !0 : !o.has(r) && (t.issues.push({
				code: "invalid_value",
				expected: "stringbool",
				values: [...a, ...o],
				input: t.value,
				inst: l,
				continue: !1
			}), {});
		}),
		reverseTransform: ((e, t) => e === !0 ? r[0] || "true" : i[0] || "false"),
		error: n.error
	});
	return l._zod.bag.truthy = r, l._zod.bag.falsy = i, l._zod.bag.case = n.case ?? "insensitive", l;
}
var So = v((() => {
	dr(), Ji(), kt();
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js
function Co(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && y(e, t, n[t]);
	return e;
}
function wo(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? ma,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function D(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function O(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, O(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Co(o.schema, c), t.io === "input" && k(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function To(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Eo(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${To(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + To(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Do(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Do(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
function Oo(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function ko(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Mo.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Oo(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			y(n, r, e.length === 1 ? e[0] : ko(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = Oo(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Ao(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Mo) if (t in e) return;
	let n = t.filter((e) => No.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = ko(t);
	else {
		let e = n[0], i = No.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => ko([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Co(e, r));
}
function jo(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Co(i, s), Co(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Do(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Ao(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Co(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, y(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Fo(t, "input", e.processors),
					output: Fo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function k(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return k(r.element, n);
	if (r.type === "set") return k(r.valueType, n);
	if (r.type === "lazy") return k(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return k(r.innerType, n);
	if (r.type === "intersection") return k(r.left, n) || k(r.right, n);
	if (r.type === "record" || r.type === "map") return k(r.keyType, n) || k(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : k(r.in, n) || k(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (k(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (k(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (k(e, n)) return !0;
		return !!(r.rest && k(r.rest, n));
	}
	return !1;
}
var Mo, No, Po, Fo, Io = v((() => {
	ha(), kt(), Mo = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), No = ["oneOf", "anyOf"], Po = (e, t = {}) => (n) => {
		let r = wo({
			...n,
			processors: t
		});
		return O(e, r), Eo(r, e), jo(r, e);
	}, Fo = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = wo({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return O(e, o), Eo(o, e), jo(o, e);
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/json-schema-processors.js
function Lo(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Lo(t.out) : t.type === "catch" ? Lo(t.innerType) : e._zod.optin;
}
function Ro(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Ro(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Ro(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? Un : Hn).source), p) : p;
}
function zo(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of _s.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Ro(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
function Bo(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (D(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), xs) : JSON.parse(o);
}
function Vo(e, t) {
	if ("_idmap" in e) {
		let n = e, r = wo({
			...t,
			processors: As
		}), i = {};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			O(n, r);
		}
		let a = {};
		r.external = {
			registry: n,
			uri: t?.uri,
			defs: i
		};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			Eo(r, n), y(a, t, jo(r, n));
		}
		return Object.keys(i).length > 0 && (a.__shared = { [r.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: a };
	}
	let n = wo({
		...t,
		processors: As
	});
	return O(e, n), Eo(n, e), jo(n, e);
}
var Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js = v((() => {
	qn(), Io(), kt(), Ho = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, Uo = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = e._zod.bag;
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Ho[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c];
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, Wo = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
		i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
		let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (Number.isFinite(c) && c !== 0 ? i.multipleOf = Math.abs(c) : D(e, t, i, r, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`));
	}, Go = (e, t, n, r) => {
		n.type = "boolean";
	}, Ko = (e, t, n, r) => {
		D(e, t, n, r, "BigInt cannot be represented in JSON Schema");
	}, qo = (e, t, n, r) => {
		D(e, t, n, r, "Symbols cannot be represented in JSON Schema");
	}, Jo = (e, t, n, r) => {
		t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
	}, Yo = (e, t, n, r) => {
		D(e, t, n, r, "Undefined cannot be represented in JSON Schema");
	}, Xo = (e, t, n, r) => {
		D(e, t, n, r, "Void cannot be represented in JSON Schema");
	}, Zo = (e, t, n, r) => {
		n.not = {};
	}, Qo = (e, t, n, r) => {}, $o = (e, t, n, r) => {}, es = (e, t, n, r) => {
		D(e, t, n, r, "Date cannot be represented in JSON Schema");
	}, ts = (e, t, n, r) => {
		let i = e._zod.def, a = je(i.entries);
		if (a.length === 0) {
			n.not = {};
			return;
		}
		a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
	}, ns = (e, t, n, r) => {
		let i = e._zod.def;
		if (i.values.length === 0) {
			n.not = {};
			return;
		}
		let a = [];
		for (let o of i.values) if (o === void 0) {
			if (D(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (D(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, rs = (e, t, n, r) => {
		D(e, t, n, r, "NaN cannot be represented in JSON Schema");
	}, is = (e, t, n, r) => {
		let i = n, a = e._zod.pattern;
		if (!a) throw Error("Pattern not found in template literal");
		i.type = "string", i.pattern = a.source;
	}, as = (e, t, n, r) => {
		let i = n, a = {
			type: "string",
			format: "binary",
			contentEncoding: "binary"
		}, { minimum: o, maximum: s, mime: c } = e._zod.bag;
		o !== void 0 && (a.minLength = o), s !== void 0 && (a.maxLength = s), c ? c.length === 1 ? (a.contentMediaType = c[0], Object.assign(i, a)) : (Object.assign(i, a), i.anyOf = c.map((e) => ({ contentMediaType: e }))) : Object.assign(i, a);
	}, os = (e, t, n, r) => {
		n.type = "boolean";
	}, ss = (e, t, n, r) => {
		D(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, cs = (e, t, n, r) => {
		D(e, t, n, r, "Function types cannot be represented in JSON Schema");
	}, ls = (e, t, n, r) => {
		D(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, us = (e, t, n, r) => {
		D(e, t, n, r, "Map cannot be represented in JSON Schema");
	}, ds = (e, t, n, r) => {
		D(e, t, n, r, "Set cannot be represented in JSON Schema");
	}, fs = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = O(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, ps = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && D(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) y(i.properties, e, O(o[e], t, {
			...r,
			path: [
				...r.path,
				"properties",
				e
			]
		}));
		let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
			let n = a.shape[e];
			return t.io === "input" ? Lo(n) === void 0 : n._zod.optout === void 0;
		}));
		c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = O(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, ms = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => O(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, hs = (e, t, n, r) => {
		let i = e._zod.def, a = O(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = O(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, gs = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "array";
		let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => O(e, t, {
			...r,
			path: [
				...r.path,
				o,
				n
			]
		})), l = a.rest ? O(a.rest, t, {
			...r,
			path: [
				...r.path,
				s,
				...t.target === "openapi-3.0" ? [a.items.length] : []
			]
		}) : null, u = a.items.length;
		for (; u > 0;) {
			let e = a.items[u - 1];
			if (!(t.io === "input" ? Lo(e) !== void 0 : e._zod.optout === "optional")) break;
			u--;
		}
		let d = a.items.length, f = !a.rest;
		t.target === "draft-2020-12" ? (i.prefixItems = c, f ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : (i.items = c, f ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), f && (i.maxItems = d));
		let { minimum: p, maximum: ee } = e._zod.bag;
		typeof p == "number" && (i.minItems = p), typeof ee == "number" && (i.maxItems = ee);
	}, _s = /* @__PURE__ */ new WeakMap(), vs = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "object";
		let o = a.keyType, s = o._zod.bag?.patterns;
		if (a.mode === "loose" && s && s.size > 0) {
			let e = O(a.valueType, t, {
				...r,
				path: [
					...r.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (let t of s) y(i.patternProperties, t.source, e);
		} else {
			if (t.target === "draft-07" || t.target === "draft-2020-12") {
				i.propertyNames = O(a.keyType, t, {
					...r,
					path: [...r.path, "propertyNames"]
				});
				let n = _s.get(t);
				n || (n = [], _s.set(t, n), t.deferred.push(() => zo(t))), n.push(e);
			}
			i.additionalProperties = O(a.valueType, t, {
				...r,
				path: [...r.path, "additionalProperties"]
			});
		}
		let c = o._zod.values, l = t.io === "input" && Lo(a.valueType) !== void 0;
		if (c && !a.partial && !l) {
			let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
			e.length > 0 && (i.required = e.map(String));
		}
	}, ys = (e, t, n, r) => {
		let i = e._zod.def, a = O(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, bs = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, xs = Symbol(), Ss = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = Bo(i.defaultValue, e, t, n, r);
		o !== xs && (n.default = o);
	}, Cs = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = Bo(i.defaultValue, e, t, n, r);
		o !== xs && (n._prefault = o);
	}, ws = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			D(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, Ts = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		O(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, Es = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, Ds = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Os = (e, t, n, r) => {
		let i = e._zod.def;
		O(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, ks = (e, t, n, r) => {
		let i = e._zod.innerType;
		O(i, t, r);
		let a = t.seen.get(e);
		a.ref = i;
	}, As = {
		string: Uo,
		number: Wo,
		boolean: Go,
		bigint: Ko,
		symbol: qo,
		null: Jo,
		undefined: Yo,
		void: Xo,
		never: Zo,
		any: Qo,
		unknown: $o,
		date: es,
		enum: ts,
		literal: ns,
		nan: rs,
		template_literal: is,
		file: as,
		success: os,
		custom: ss,
		function: cs,
		transform: ls,
		map: us,
		set: ds,
		array: fs,
		object: ps,
		union: ms,
		intersection: hs,
		tuple: gs,
		record: vs,
		nullable: ys,
		nonoptional: bs,
		default: Ss,
		prefault: Cs,
		catch: ws,
		pipe: Ts,
		readonly: Es,
		promise: Ds,
		optional: Os,
		lazy: ks
	};
})), Ms = v((() => {
	Lt(), pn(), Xt(), Ji(), sa(), dr(), hr(), kt(), qn(), ua(), ha(), pr(), ga(), So(), Io(), js(), Io();
})), Ns = v((() => {
	Ms();
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/errors.js
function Ps(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var Fs, Is, A, Ls = v((() => {
	Ms(), kt(), Fs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Is = (e, t) => {
		Jt.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		Fs.has(n) || (Fs.add(n), Ps(n, "format", (e) => (t) => Ht(e, t)), Ps(n, "flatten", (e) => (t) => Vt(e, t)), Ps(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Ne, 2);
		}), Ps(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Ne, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, A = /*@__PURE__*/ S("ZodError", Is, void 0, { Parent: Error });
})), Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs = v((() => {
	Ms(), Ls(), Rs = /* @__PURE__ */ Qt(A), zs = /* @__PURE__ */ $t(A), Bs = /* @__PURE__ */ en(A), Vs = /* @__PURE__ */ nn(A), Hs = /* @__PURE__ */ an(A), Us = /* @__PURE__ */ on(A), Ws = /* @__PURE__ */ sn(A), Gs = /* @__PURE__ */ cn(A), Ks = /* @__PURE__ */ ln(A), qs = /* @__PURE__ */ un(A), Js = /* @__PURE__ */ dn(A), Ys = /* @__PURE__ */ fn(A);
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/schemas.js
function Zs() {
	C.localeError || jt(ca());
}
function Qs() {
	C.memoizer || jt({ memoizer: Qi() });
}
function j(e) {
	return /* @__PURE__ */ _a(wc, e);
}
function M(e) {
	return /* @__PURE__ */ wa(Mc, e);
}
function $s(e) {
	return /* @__PURE__ */ Pa(Hc, e);
}
function ec(e) {
	return /* @__PURE__ */ Fa(Uc, e);
}
function N(e) {
	return /* @__PURE__ */ Wa(Jc, e);
}
function tc(e) {
	return /* @__PURE__ */ Ka(Yc, e);
}
function P(e) {
	return /* @__PURE__ */ qa(Xc, e);
}
function nc() {
	return /* @__PURE__ */ Ja(Zc);
}
function rc(e) {
	return /* @__PURE__ */ Ya(Qc, e);
}
function F(e, t) {
	return /* @__PURE__ */ _o($c, e, t);
}
function I(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...b(t)
	};
	return new el(n);
}
function ic(e, t) {
	return new el({
		type: "object",
		shape: e,
		catchall: rc(),
		...b(t)
	});
}
function ac(e, t) {
	return new el({
		type: "object",
		shape: e,
		catchall: nc(),
		...b(t)
	});
}
function oc(e, t) {
	return new tl({
		type: "union",
		options: e,
		...b(t)
	});
}
function L(e, t, n) {
	return new nl({
		type: "union",
		options: t,
		discriminator: e,
		...b(n)
	});
}
function sc(e, t) {
	return new rl({
		type: "intersection",
		left: e,
		right: t
	});
}
function cc(e, t, n) {
	let r = t instanceof T;
	return new il({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...b(r ? n : t)
	});
}
function R(e, t, n) {
	return !t || !t._zod ? new al({
		type: "record",
		keyType: j(),
		valueType: e,
		...b(t)
	}) : new al({
		type: "record",
		keyType: e,
		valueType: t,
		...b(n)
	});
}
function lc(e, t, n) {
	return new al({
		type: "record",
		keyType: e,
		valueType: t,
		...b(n),
		partial: !0
	});
}
function z(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new ol({
		type: "enum",
		entries: n,
		...b(t)
	});
}
function B(e, t) {
	return new sl({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...b(t)
	});
}
function uc(e) {
	return new cl({
		type: "transform",
		transform: e
	});
}
function dc(e) {
	return new ll({
		type: "optional",
		innerType: e
	});
}
function fc(e) {
	return new ul({
		type: "optional",
		innerType: e
	});
}
function pc(e) {
	return new dl({
		type: "nullable",
		innerType: e
	});
}
function mc(e, t) {
	return new fl({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : We(t);
		}
	});
}
function hc(e, t) {
	return new pl({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : We(t);
		}
	});
}
function gc(e, t) {
	return new ml({
		type: "nonoptional",
		innerType: e,
		...b(t)
	});
}
function _c(e, t) {
	return new hl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : vt(t)
	});
}
function vc(e, t) {
	return new gl({
		type: "pipe",
		in: e,
		out: t
	});
}
function yc(e) {
	return new vl({
		type: "readonly",
		innerType: e
	});
}
function bc(e) {
	return new yl({
		type: "lazy",
		getter: e
	});
}
function xc(e, t = {}) {
	return /* @__PURE__ */ vo(bl, e, t);
}
function Sc(e, t) {
	return /* @__PURE__ */ yo(e, t);
}
var V, Cc, wc, H, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl = v((() => {
	Ms(), js(), Io(), ua(), Ns(), Xs(), V = /*@__PURE__*/ S("ZodType", (e, t) => (Zs(), T.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(ze(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return Ke(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(xc(e, t));
		},
		superRefine(e, t) {
			return this.check(Sc(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ uo(e));
		},
		optional() {
			return dc(this);
		},
		exactOptional() {
			return fc(this);
		},
		nullable() {
			return pc(this);
		},
		nullish() {
			return dc(pc(this));
		},
		nonoptional(e) {
			return gc(this, e);
		},
		array() {
			return F(this);
		},
		or(e) {
			return oc([this, e]);
		},
		and(e) {
			return sc(this, e);
		},
		transform(e) {
			return vc(this, uc(e));
		},
		default(e) {
			return mc(this, e);
		},
		prefault(e) {
			return hc(this, e);
		},
		catch(e) {
			return _c(this, e);
		},
		pipe(e) {
			return vc(this, e);
		},
		readonly() {
			return yc(this);
		},
		describe(e) {
			let t = this.clone();
			return ma.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return ma.get(this);
			let t = this.clone();
			return ma.add(t, e[0]), t;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(e, ...t) {
			return t.length === 0 ? e(this) : e(this, ...t);
		},
		get "~standard"() {
			return mt(this, "~standard", {
				...gr(this),
				jsonSchema: {
					input: Fo(this, "input"),
					output: Fo(this, "output")
				}
			});
		},
		set "~standard"(e) {
			pt(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Rs(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await zs(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Bs(this, e, t);
		},
		async safeParseAsync(e, t) {
			return Vs(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			pt(this, "spa", e);
		},
		encode: function e(t, n) {
			return Hs(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return Us(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Ws(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await Gs(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return Ks(this, e, t);
		},
		safeDecode(e, t) {
			return qs(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return Js(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return Ys(this, e, t);
		},
		toJSONSchema(e) {
			return Po(this, {})(e);
		},
		get description() {
			return ma.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), Cc = /*@__PURE__*/ S("_ZodString", (e, t) => {
		Kr.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Uo(e, t, n, r);
		let n = e._zod.bag;
		e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null;
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ io(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ so(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ co(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ lo(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ no(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ to(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ ro(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ no(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ ao(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ oo(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ po());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ fo(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ mo());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ ho());
		},
		slugify() {
			return this.check(/* @__PURE__ */ go());
		}
	}), wc = /*@__PURE__*/ S("ZodString", (e, t) => {
		Kr.init(e, t), Cc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ va(kc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ wa(Mc, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ za(qc, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ Ta(Nc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ ya(Ac, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ ba(jc, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ xa(jc, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ Sa(jc, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ Ca(jc, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ Ea(Pc, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ Da(Fc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ Oa(Ic, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ ka(Lc, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ Ia(Wc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ La(Gc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ Aa(Rc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ ja(zc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ Ma(Bc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ Na(Vc, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ Pa(Hc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ Fa(Uc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ Ra(Kc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ Ba(Tc, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ Va(Ec, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ Ha(Dc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ Ua(Oc, e));
		}
	}), H = /*@__PURE__*/ S("ZodStringFormat", (e, t) => {
		E.init(e, t), Cc.init(e, t);
	}), Tc = /*@__PURE__*/ S("ZodISODateTime", (e, t) => {
		ai.init(e, t), H.init(e, t);
	}), Ec = /*@__PURE__*/ S("ZodISODate", (e, t) => {
		oi.init(e, t), H.init(e, t);
	}), Dc = /*@__PURE__*/ S("ZodISOTime", (e, t) => {
		si.init(e, t), H.init(e, t);
	}), Oc = /*@__PURE__*/ S("ZodISODuration", (e, t) => {
		ci.init(e, t), H.init(e, t);
	}), kc = /*@__PURE__*/ S("ZodEmail", (e, t) => {
		Yr.init(e, t), H.init(e, t);
	}), Ac = /*@__PURE__*/ S("ZodGUID", (e, t) => {
		qr.init(e, t), H.init(e, t);
	}), jc = /*@__PURE__*/ S("ZodUUID", (e, t) => {
		Jr.init(e, t), H.init(e, t);
	}), Mc = /*@__PURE__*/ S("ZodURL", (e, t) => {
		Zr.init(e, t), H.init(e, t);
	}), Nc = /*@__PURE__*/ S("ZodEmoji", (e, t) => {
		Qr.init(e, t), H.init(e, t);
	}), Pc = /*@__PURE__*/ S("ZodNanoID", (e, t) => {
		$r.init(e, t), H.init(e, t);
	}), Fc = /*@__PURE__*/ S("ZodCUID", (e, t) => {
		ei.init(e, t), H.init(e, t);
	}), Ic = /*@__PURE__*/ S("ZodCUID2", (e, t) => {
		ti.init(e, t), H.init(e, t);
	}), Lc = /*@__PURE__*/ S("ZodULID", (e, t) => {
		ni.init(e, t), H.init(e, t);
	}), Rc = /*@__PURE__*/ S("ZodXID", (e, t) => {
		ri.init(e, t), H.init(e, t);
	}), zc = /*@__PURE__*/ S("ZodKSUID", (e, t) => {
		ii.init(e, t), H.init(e, t);
	}), Bc = /*@__PURE__*/ S("ZodIPv4", (e, t) => {
		li.init(e, t), H.init(e, t);
	}), Vc = /*@__PURE__*/ S("ZodIPv6", (e, t) => {
		di.init(e, t), H.init(e, t);
	}), Hc = /*@__PURE__*/ S("ZodCIDRv4", (e, t) => {
		fi.init(e, t), H.init(e, t);
	}), Uc = /*@__PURE__*/ S("ZodCIDRv6", (e, t) => {
		pi.init(e, t), H.init(e, t);
	}), Wc = /*@__PURE__*/ S("ZodBase64", (e, t) => {
		mi.init(e, t), H.init(e, t);
	}), Gc = /*@__PURE__*/ S("ZodBase64URL", (e, t) => {
		hi.init(e, t), H.init(e, t);
	}), Kc = /*@__PURE__*/ S("ZodE164", (e, t) => {
		gi.init(e, t), H.init(e, t);
	}), qc = /*@__PURE__*/ S("ZodJWT", (e, t) => {
		_i.init(e, t), H.init(e, t);
	}), Jc = /*@__PURE__*/ S("ZodNumber", (e, t) => {
		vi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Wo(e, t, n, r);
		let n = e._zod.bag;
		e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ Qa(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ $a(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ $a(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ Xa(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ Za(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ Za(e, t));
		},
		int(e) {
			return this.check(tc(e));
		},
		safe(e) {
			return this.check(tc(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ Qa(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ $a(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ Xa(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ Za(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		finite() {
			return this;
		}
	}), Yc = /*@__PURE__*/ S("ZodNumberFormat", (e, t) => {
		yi.init(e, t), Jc.init(e, t);
	}), Xc = /*@__PURE__*/ S("ZodBoolean", (e, t) => {
		bi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Go(e, t, n, r);
	}), Zc = /*@__PURE__*/ S("ZodUnknown", (e, t) => {
		xi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => $o(e, t, n, r);
	}), Qc = /*@__PURE__*/ S("ZodNever", (e, t) => {
		Si.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zo(e, t, n, r);
	}), $c = /*@__PURE__*/ S("ZodArray", (e, t) => {
		Qs(), Ci.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => fs(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ no(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ to(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), el = /*@__PURE__*/ S("ZodObject", (e, t) => {
		Qs(), Di.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ps(e, t, n, r), _t(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return z(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: nc()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: nc()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: rc()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return Ze(this, e);
		},
		safeExtend(e) {
			return Qe(this, e);
		},
		merge(e) {
			return $e(this, e);
		},
		pick(e) {
			return Ye(this, e);
		},
		omit(e) {
			return Xe(this, e);
		},
		partial(...e) {
			return et(ll, this, e[0]);
		},
		exactPartial(...e) {
			return et(ul, this, e[0], "exactPartial");
		},
		required(...e) {
			return tt(ml, this, e[0]);
		}
	}), tl = /*@__PURE__*/ S("ZodUnion", (e, t) => {
		Oi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ms(e, t, n, r), e.options = t.options;
	}), nl = /*@__PURE__*/ S("ZodDiscriminatedUnion", (e, t) => {
		tl.init(e, t), ki.init(e, t);
	}), rl = /*@__PURE__*/ S("ZodIntersection", (e, t) => {
		Ai.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => hs(e, t, n, r);
	}), il = /*@__PURE__*/ S("ZodTuple", (e, t) => {
		Qs(), ji.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r);
	}, {
		rest(e) {
			return this.clone({
				...this._zod.def,
				rest: e
			});
		},
		partial() {
			let e = this._zod.def;
			if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
			return this.clone({
				...e,
				items: e.items.map((e) => new ll({
					type: "optional",
					innerType: e
				}))
			});
		}
	}), al = /*@__PURE__*/ S("ZodRecord", (e, t) => {
		Qs(), Mi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => vs(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
	}), ol = /*@__PURE__*/ S("ZodEnum", (e, t) => {
		Ni.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ts(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new ol({
				...t,
				checks: [],
				...b(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new ol({
				...t,
				checks: [],
				...b(r),
				entries: i
			});
		};
	}), sl = /*@__PURE__*/ S("ZodLiteral", (e, t) => {
		Pi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ns(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), cl = /*@__PURE__*/ S("ZodTransform", (e, t) => {
		Qs(), Fi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ls(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new It(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(dt(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(dt(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), ll = /*@__PURE__*/ S("ZodOptional", (e, t) => {
		Ii.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Os(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), ul = /*@__PURE__*/ S("ZodExactOptional", (e, t) => {
		Li.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Os(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), dl = /*@__PURE__*/ S("ZodNullable", (e, t) => {
		Ri.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), fl = /*@__PURE__*/ S("ZodDefault", (e, t) => {
		zi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), pl = /*@__PURE__*/ S("ZodPrefault", (e, t) => {
		Bi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), ml = /*@__PURE__*/ S("ZodNonOptional", (e, t) => {
		Vi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => bs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), hl = /*@__PURE__*/ S("ZodCatch", (e, t) => {
		Hi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), gl = /*@__PURE__*/ S("ZodPipe", (e, t) => {
		Ui.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ts(e, t, n, r), e.in = t.in, e.out = t.out;
	}), _l = /*@__PURE__*/ S("ZodCodec", (e, t) => {
		gl.init(e, t), Wi.init(e, t);
	}), vl = /*@__PURE__*/ S("ZodReadonly", (e, t) => {
		Gi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Es(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), yl = /*@__PURE__*/ S("ZodLazy", (e, t) => {
		Ki.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ks(e, t, n, r), e.unwrap = () => e._zod.def.getter();
	}), bl = /*@__PURE__*/ S("ZodCustom", (e, t) => {
		qi.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ss(e, t, n, r);
	}), xl = (...e) => /* @__PURE__ */ xo({
		Codec: _l,
		Boolean: Xc,
		String: wc
	}, ...e);
})), Cl = v((() => {
	Ms();
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/iso.js
function wl(e) {
	return /* @__PURE__ */ Ba(Tc, e);
}
var Tl = v((() => {
	Ms(), Sl();
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/coerce.js
function U(e) {
	return /* @__PURE__ */ Ga(Jc, e);
}
var El = v((() => {
	Ms(), Sl();
})), Dl = v((() => {
	Ms(), Sl(), Ns(), Ls(), Xs(), Cl(), js(), ha(), kt(), Ns(), Tl(), Sl(), Ji(), ua(), El();
})), W = v((() => {
	Dl(), Dl();
})), Ol, kl, Al, jl, Ml, Nl, Pl, Fl = v((() => {
	W(), Ol = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { route: t } = e["~orpc"];
		if (t?.method !== void 0 && t.path !== void 0) return {
			method: t.method,
			path: t.path
		};
	}, kl = (e) => {
		let t = [];
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			let r = Ol(i);
			r !== void 0 && t.push({
				name: `${n}.${e}`,
				method: r.method,
				path: r.path
			});
		}
		return t.toSorted((e, t) => e.name.localeCompare(t.name));
	}, Al = /* @__PURE__ */ new Set([
		"required",
		"enum",
		"anyOf",
		"oneOf",
		"allOf"
	]), jl = (e, t) => {
		if (Array.isArray(e)) {
			let n = e.map((e) => jl(e));
			return t !== void 0 && Al.has(t) ? n.toSorted((e, t) => JSON.stringify(e).localeCompare(JSON.stringify(t))) : n;
		}
		return typeof e != "object" || !e ? e : Object.entries(e).toSorted(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, jl(t, e)]);
	}, Ml = (e) => {
		let t = JSON.stringify(jl(e)), n = 2166136261;
		for (let e = 0; e < t.length; e++) n ^= t.charCodeAt(e), n = Math.imul(n, 16777619) >>> 0;
		return n.toString(36);
	}, Nl = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { inputSchema: t, outputSchema: n } = e["~orpc"];
		try {
			return Ml({
				in: t === void 0 ? void 0 : Vo(t, { io: "input" }),
				out: n === void 0 ? void 0 : Vo(n, { io: "output" })
			});
		} catch {
			return;
		}
	}, Pl = (e) => {
		let t = {};
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			if (Ol(i) === void 0) continue;
			let r = Nl(i);
			r !== void 0 && (t[`${n}.${e}`] = r);
		}
		return t;
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/@orpc+shared@1.14.13/node_modules/@orpc/shared/dist/index.mjs
function Il(e) {
	return e[0] ?? {};
}
function Ll(e) {
	let t = Promise.resolve();
	return (...n) => t = t.catch(() => {}).then(() => e(...n));
}
function Rl(e) {
	return !e || typeof e != "object" ? !1 : "next" in e && typeof e.next == "function" && Symbol.asyncIterator in e && typeof e[Symbol.asyncIterator] == "function";
}
function zl(e) {
	return Bl(e) ? Object.getPrototypeOf(e)?.constructor : null;
}
function Bl(e) {
	return !!e && (typeof e == "object" || typeof e == "function");
}
var Vl, Hl, Ul, Wl, Gl = v((() => {
	Vl = "@orpc/shared", Hl = "1.14.13", `${Vl}${Hl}`, Ul = Symbol.asyncDispose ?? Symbol.for("asyncDispose"), Wl = class {
		#e = !1;
		#t = !1;
		#n;
		#r;
		constructor(e, t) {
			this.#n = t, this.#r = Ll(async () => {
				if (this.#e) return {
					done: !0,
					value: void 0
				};
				try {
					let t = await e();
					return t.done && (this.#e = !0), t;
				} catch (e) {
					throw this.#e = !0, e;
				} finally {
					this.#e && !this.#t && (this.#t = !0, await this.#n("next"));
				}
			});
		}
		next() {
			return this.#r();
		}
		async return(e) {
			return this.#e = !0, this.#t || (this.#t = !0, await this.#n("return")), {
				done: !0,
				value: e
			};
		}
		async throw(e) {
			throw this.#e = !0, this.#t || (this.#t = !0, await this.#n("throw")), e;
		}
		async [Ul]() {
			this.#e = !0, this.#t || (this.#t = !0, await this.#n("dispose"));
		}
		[Symbol.asyncIterator]() {
			return this;
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.DexhfmWd.mjs
function Kl(e, t) {
	return t ?? Zl[e]?.status ?? 500;
}
function ql(e, t) {
	return t || Zl[e]?.message || e;
}
function Jl(e) {
	return e < 200 || e >= 400;
}
var Yl, Xl, Zl, Ql, $l, eu = v((() => {
	Gl(), Yl = "@orpc/client", Xl = "1.14.13", Zl = {
		BAD_REQUEST: {
			status: 400,
			message: "Bad Request"
		},
		UNAUTHORIZED: {
			status: 401,
			message: "Unauthorized"
		},
		FORBIDDEN: {
			status: 403,
			message: "Forbidden"
		},
		NOT_FOUND: {
			status: 404,
			message: "Not Found"
		},
		METHOD_NOT_SUPPORTED: {
			status: 405,
			message: "Method Not Supported"
		},
		NOT_ACCEPTABLE: {
			status: 406,
			message: "Not Acceptable"
		},
		TIMEOUT: {
			status: 408,
			message: "Request Timeout"
		},
		CONFLICT: {
			status: 409,
			message: "Conflict"
		},
		PRECONDITION_FAILED: {
			status: 412,
			message: "Precondition Failed"
		},
		PAYLOAD_TOO_LARGE: {
			status: 413,
			message: "Payload Too Large"
		},
		UNSUPPORTED_MEDIA_TYPE: {
			status: 415,
			message: "Unsupported Media Type"
		},
		UNPROCESSABLE_CONTENT: {
			status: 422,
			message: "Unprocessable Content"
		},
		TOO_MANY_REQUESTS: {
			status: 429,
			message: "Too Many Requests"
		},
		CLIENT_CLOSED_REQUEST: {
			status: 499,
			message: "Client Closed Request"
		},
		INTERNAL_SERVER_ERROR: {
			status: 500,
			message: "Internal Server Error"
		},
		NOT_IMPLEMENTED: {
			status: 501,
			message: "Not Implemented"
		},
		BAD_GATEWAY: {
			status: 502,
			message: "Bad Gateway"
		},
		SERVICE_UNAVAILABLE: {
			status: 503,
			message: "Service Unavailable"
		},
		GATEWAY_TIMEOUT: {
			status: 504,
			message: "Gateway Timeout"
		}
	}, $l = class e extends Error {
		defined;
		code;
		status;
		data;
		static {
			let t = Symbol.for(`__${Yl}@${Xl}/error/ORPC_ERROR_CONSTRUCTORS__`);
			globalThis[t] ??= /* @__PURE__ */ new WeakSet(), Ql = globalThis[t], Ql.add(e);
		}
		constructor(e, ...t) {
			let n = Il(t);
			if (n.status !== void 0 && !Jl(n.status)) throw Error("[ORPCError] Invalid error status code.");
			let r = ql(e, n.message);
			super(r, n), this.code = e, this.status = Kl(e, n.status), this.defined = n.defined ?? !1, this.data = n.data;
		}
		toJSON() {
			return {
				defined: this.defined,
				code: this.code,
				status: this.status,
				message: this.message,
				data: this.data
			};
		}
		static [Symbol.hasInstance](e) {
			if (Ql.has(this)) {
				let t = zl(e);
				if (t && Ql.has(t)) return !0;
			}
			return super[Symbol.hasInstance](e);
		}
	};
}));
function tu(e) {
	return cu.test(e);
}
function nu(e) {
	if (tu(e)) throw new su("Event's id must not contain a carriage return or newline character");
}
function ru(e) {
	if (!Number.isInteger(e) || e < 0) throw new su("Event's retry must be a integer and >= 0");
}
function iu(e) {
	if (tu(e)) throw new su("Event's comment must not contain a carriage return or newline character");
}
function au(e, t) {
	if (t.id === void 0 && t.retry === void 0 && !t.comments?.length) return e;
	if (t.id !== void 0 && nu(t.id), t.retry !== void 0 && ru(t.retry), t.comments !== void 0) for (let e of t.comments) iu(e);
	return new Proxy(e, { get(e, n, r) {
		return n === lu ? t : Reflect.get(e, n, r);
	} });
}
function ou(e) {
	return Bl(e) ? Reflect.get(e, lu) : void 0;
}
var su, cu, lu, uu = v((() => {
	Gl(), su = class extends TypeError {}, TransformStream, cu = /\r\n|[\n\r]/, lu = Symbol("ORPC_EVENT_SOURCE_META");
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.BLtwTQUg.mjs
function du(e, t) {
	let n = async (e) => {
		let n = await t.error(e);
		if (n !== e) {
			let t = ou(e);
			t && Bl(n) && (n = au(n, t));
		}
		return n;
	};
	return new Wl(async () => {
		let { done: r, value: i } = await (async () => {
			try {
				return await e.next();
			} catch (e) {
				throw await n(e);
			}
		})(), a = await t.value(i, r);
		if (a !== i) {
			let e = ou(i);
			e && Bl(a) && (a = au(a, e));
		}
		return {
			done: r,
			value: a
		};
	}, async () => {
		try {
			await e.return?.();
		} catch (e) {
			throw await n(e);
		}
	});
}
var fu = v((() => {
	Gl(), uu();
})), pu = v((() => {
	Gl(), eu(), fu(), uu();
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/shared/contract.D_dZrO__.mjs
function mu(e, t) {
	return {
		...e,
		...t
	};
}
function hu(e) {
	return e instanceof _u || (typeof e == "object" || typeof e == "function") && e !== null && "~orpc" in e && typeof e["~orpc"] == "object" && e["~orpc"] !== null && "errorMap" in e["~orpc"] && "route" in e["~orpc"] && "meta" in e["~orpc"];
}
var gu, _u, vu = v((() => {
	pu(), gu = class extends Error {
		issues;
		data;
		constructor(e) {
			super(e.message, e), this.issues = e.issues, this.data = e.data;
		}
	}, _u = class {
		"~orpc";
		constructor(e) {
			if (e.route?.successStatus && Jl(e.route.successStatus)) throw Error("[ContractProcedure] Invalid successStatus.");
			if (Object.values(e.errorMap).some((e) => e && e.status && !Jl(e.status))) throw Error("[ContractProcedure] Invalid error status code.");
			this["~orpc"] = e;
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/issues/node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/index.mjs
function yu(e, t) {
	return {
		...e,
		...t
	};
}
function bu(e, t) {
	return {
		...e,
		...t
	};
}
function xu(e, t) {
	return e.path ? {
		...e,
		path: `${t}${e.path}`
	} : e;
}
function Su(e, t) {
	return {
		...e,
		tags: [...t, ...e.tags ?? []]
	};
}
function Cu(e, t) {
	return e ? `${e}${t}` : t;
}
function wu(e, t) {
	return e ? [...e, ...t] : t;
}
function Tu(e, t) {
	let n = e;
	return t.prefix && (n = xu(n, t.prefix)), t.tags?.length && (n = Su(n, t.tags)), n;
}
function Eu(e, t) {
	if (hu(e)) return new _u({
		...e["~orpc"],
		errorMap: mu(t.errorMap, e["~orpc"].errorMap),
		route: Tu(e["~orpc"].route, t)
	});
	if (typeof e != "object" || !e) return e;
	let n = {};
	for (let r in e) n[r] = Eu(e[r], t);
	return n;
}
function G(e, t) {
	return { "~standard": {
		[Ou]: {
			yields: e,
			returns: t
		},
		vendor: "orpc",
		version: 1,
		validate(n) {
			return Rl(n) ? { value: du(n, {
				async value(n, r) {
					let i = r ? t : e;
					if (!i) return n;
					let a = await i["~standard"].validate(n);
					if (a.issues) throw new $l("EVENT_ITERATOR_VALIDATION_FAILED", {
						message: "Event iterator validation failed",
						cause: new gu({
							issues: a.issues,
							message: "Event iterator validation failed",
							data: n
						})
					});
					return a.value;
				},
				error: async (e) => e
			}) } : { issues: [{
				message: "Expect event iterator",
				path: []
			}] };
		}
	} };
}
var Du, K, Ou, q = v((() => {
	vu(), Gl(), pu(), Du = class e extends _u {
		constructor(e) {
			super(e), this["~orpc"].prefix = e.prefix, this["~orpc"].tags = e.tags;
		}
		$meta(t) {
			return new e({
				...this["~orpc"],
				meta: t
			});
		}
		$route(t) {
			return new e({
				...this["~orpc"],
				route: t
			});
		}
		$input(t) {
			return new e({
				...this["~orpc"],
				inputSchema: t
			});
		}
		errors(t) {
			return new e({
				...this["~orpc"],
				errorMap: mu(this["~orpc"].errorMap, t)
			});
		}
		meta(t) {
			return new e({
				...this["~orpc"],
				meta: yu(this["~orpc"].meta, t)
			});
		}
		route(t) {
			return new e({
				...this["~orpc"],
				route: bu(this["~orpc"].route, t)
			});
		}
		input(t) {
			return new e({
				...this["~orpc"],
				inputSchema: t
			});
		}
		output(t) {
			return new e({
				...this["~orpc"],
				outputSchema: t
			});
		}
		prefix(t) {
			return new e({
				...this["~orpc"],
				prefix: Cu(this["~orpc"].prefix, t)
			});
		}
		tag(...t) {
			return new e({
				...this["~orpc"],
				tags: wu(this["~orpc"].tags, t)
			});
		}
		router(e) {
			return Eu(e, this["~orpc"]);
		}
	}, K = new Du({
		errorMap: {},
		route: {},
		meta: {}
	}), Ou = Symbol("ORPC_EVENT_ITERATOR_DETAILS");
})), ku, Au = v((() => {
	ku = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/;
})), ju, Mu, Nu, Pu, Fu = v((() => {
	W(), z(["helper", "run"]), ju = [
		{
			id: "commit-message",
			label: "Commit messages",
			blurb: "The subject written when an agent's work lands, and the release note under it.",
			kind: "helper",
			icon: "file-edit"
		},
		{
			id: "session-title",
			label: "Session titles",
			blurb: "The name a conversation wears on the board, written a second into its first turn.",
			kind: "helper",
			icon: "pencil"
		},
		{
			id: "safety-judge",
			label: "Safety judge",
			blurb: "Which model reads your safety policy before a flagged command runs.",
			kind: "helper",
			icon: "shield"
		},
		{
			id: "loop-verdict",
			label: "Loop verdicts",
			blurb: "Whether a loop's iteration met the goal, or the loop goes round again.",
			kind: "helper",
			icon: "check-square"
		},
		{
			id: "persona-router",
			label: "Persona routing",
			blurb: "Which model reads a new chat's first message and picks the persona for it.",
			kind: "helper",
			icon: "users"
		},
		{
			id: "pipeline-fix",
			label: "Pipeline fixes",
			blurb: "The agent started by Fix on a red pipeline.",
			kind: "run",
			trigger: "pressed",
			icon: "wave-pulse"
		},
		{
			id: "deployment-fix",
			label: "Deployment fixes",
			blurb: "The agent started by Fix on a deployment that is down.",
			kind: "run",
			trigger: "pressed",
			icon: "server"
		},
		{
			id: "maintenance-chore",
			label: "Maintenance chores",
			blurb: "A chore run started from the Maintenance board.",
			kind: "run",
			trigger: "pressed",
			icon: "wrench"
		},
		{
			id: "documentation-run",
			label: "Documentation runs",
			blurb: "A pass over a repo's own documentation.",
			kind: "run",
			trigger: "pressed",
			icon: "book"
		},
		{
			id: "acceptance-run",
			label: "Acceptance runs",
			blurb: "One session per story in an acceptance fan-out.",
			kind: "run",
			trigger: "pressed",
			icon: "list-check"
		},
		{
			id: "pre-push-fix",
			label: "Pre-push fixes",
			blurb: "The fix proposed when a check fails on the way to a push.",
			kind: "run",
			trigger: "pressed",
			icon: "cloud-upload"
		},
		{
			id: "approval-queue",
			label: "Approvals queue",
			blurb: "The turn that publishes or acts on what you approved.",
			kind: "run",
			trigger: "pressed",
			icon: "check-circle"
		},
		{
			id: "extension-review",
			label: "Extension update reviews",
			blurb: "The agent that reads an extension update before it is applied.",
			kind: "run",
			trigger: "unprompted",
			icon: "box"
		},
		{
			id: "loop-iteration",
			label: "Loop iterations",
			blurb: "Each round of a loop working towards its goal.",
			kind: "run",
			trigger: "unprompted",
			icon: "repeat"
		}
	], Mu = ju.map((e) => e.id), Nu = z(Mu), Pu = (e) => ju.filter((t) => e(t)), Pu((e) => e.kind === "helper"), Pu((e) => e.kind === "run" && e.trigger === "pressed"), Pu((e) => e.kind === "run" && e.trigger === "unprompted");
})), Iu, Lu, Ru, zu, Bu, Vu = v((() => {
	Iu = {
		runtime: "claude-code",
		steering: !0,
		permissions: "modes",
		questions: !0,
		mcp: "full",
		execution: ["shell", "js"],
		effort: !0,
		fastMode: !0,
		isolation: "namespace",
		commands: !0,
		terminals: !0,
		recovery: !0,
		instructions: "replace",
		skillDiscovery: "native",
		rulebook: "hooks",
		secrets: "masked"
	}, Lu = {
		runtime: "codex",
		steering: !0,
		permissions: "plan",
		questions: !0,
		mcp: "browser",
		execution: ["shell"],
		effort: !0,
		fastMode: !1,
		isolation: "namespace",
		commands: !0,
		terminals: !1,
		recovery: !1,
		instructions: "replace",
		skillDiscovery: "native",
		rulebook: "approval",
		secrets: "none"
	}, Ru = {
		runtime: "opencode",
		steering: !1,
		permissions: "plan",
		questions: !1,
		mcp: "none",
		execution: ["shell"],
		effort: !1,
		fastMode: !1,
		isolation: "cwd",
		commands: !1,
		terminals: !1,
		recovery: !1,
		instructions: "append",
		skillDiscovery: "prompt",
		rulebook: "refuse-only",
		secrets: "none"
	}, zu = {
		...Ru,
		runtime: "opencode-gemini"
	}, Bu = {
		runtime: "cursor",
		steering: !1,
		permissions: "plan",
		questions: !0,
		mcp: "tools",
		execution: ["shell"],
		effort: !0,
		fastMode: !1,
		isolation: "cwd",
		commands: !1,
		terminals: !1,
		recovery: !0,
		instructions: "append",
		skillDiscovery: "prompt",
		rulebook: "hooks",
		secrets: "none"
	};
})), Hu, Uu, Wu, Gu = v((() => {
	Vu(), Hu = [
		{
			id: "claude",
			label: "Claude Code",
			vendor: "Claude",
			accountLabel: "Claude",
			destination: "Anthropic",
			brand: "claude",
			access: {
				kind: "subscription",
				requirement: "Claude subscription",
				runs: "Claude Code"
			},
			auth: { kind: "oauth" },
			planLimits: !0,
			runtimes: {
				native: Iu,
				claudeCode: Iu
			}
		},
		{
			id: "codex",
			label: "Codex",
			vendor: "ChatGPT",
			accountLabel: "ChatGPT",
			destination: "ChatGPT",
			brand: "codex",
			access: {
				kind: "subscription",
				requirement: "ChatGPT subscription",
				runs: "Codex"
			},
			auth: {
				kind: "translator",
				cliProxy: "codex"
			},
			planLimits: !0,
			runtimes: {
				native: Lu,
				claudeCode: Iu
			}
		},
		{
			id: "grok",
			label: "Grok",
			vendor: "xAI",
			accountLabel: "Grok",
			destination: "x.ai",
			brand: "grok",
			access: {
				kind: "subscription",
				requirement: "SuperGrok subscription",
				runs: "Grok"
			},
			auth: {
				kind: "translator",
				cliProxy: "xai"
			},
			planLimits: !1,
			runtimes: {
				native: Ru,
				claudeCode: Iu
			}
		},
		{
			id: "kimi",
			label: "Kimi Code",
			vendor: "Kimi Code",
			accountLabel: "Kimi Code",
			destination: "Kimi Code",
			brand: "kimi",
			access: {
				kind: "subscription",
				requirement: "Kimi Code subscription",
				runs: "Kimi Code"
			},
			auth: {
				kind: "translator",
				cliProxy: "kimi"
			},
			planLimits: !0,
			runtimes: {
				native: Iu,
				claudeCode: Iu
			}
		},
		{
			id: "gemini",
			label: "Google",
			vendor: "Google",
			accountLabel: "Google",
			destination: "Google",
			brand: "gemini",
			access: {
				kind: "free",
				requirement: "Google sign-in",
				runs: "Gemini, Claude and GPT-OSS under Claude Code"
			},
			auth: {
				kind: "translator",
				cliProxy: "antigravity"
			},
			planLimits: !0,
			runtimes: {
				native: zu,
				claudeCode: zu
			}
		},
		{
			id: "cursor",
			label: "Cursor",
			vendor: "Cursor",
			accountLabel: "Cursor",
			destination: "Cursor",
			brand: "cursor",
			access: {
				kind: "subscription",
				requirement: "Cursor Pro subscription",
				runs: "Cursor Agent"
			},
			auth: { kind: "oauth" },
			planLimits: !1,
			runtimes: {
				native: Bu,
				claudeCode: Bu
			}
		},
		{
			id: "meta",
			label: "Meta",
			vendor: "Meta",
			accountLabel: "Meta",
			destination: "Meta",
			brand: "meta",
			access: {
				kind: "subscription",
				requirement: "Muse Code subscription",
				runs: "Muse Spark under Claude Code"
			},
			auth: {
				kind: "minted",
				variants: [{
					id: "meta",
					label: "Meta",
					flow: "device",
					anthropicBase: "https://api.meta.ai",
					catalogBase: "https://api.meta.ai/v1"
				}]
			},
			planLimits: !1,
			runtimes: {
				native: Iu,
				claudeCode: Iu
			}
		},
		{
			id: "zai",
			label: "Z.ai",
			vendor: "Z.ai",
			accountLabel: "Z.ai",
			destination: "Z.ai",
			brand: "zai",
			access: {
				kind: "subscription",
				requirement: "Z.ai GLM Coding Plan",
				runs: "GLM under Claude Code"
			},
			auth: {
				kind: "minted",
				variants: [{
					id: "zai",
					label: "Z.ai international",
					flow: "device",
					anthropicBase: "https://api.z.ai/api/anthropic",
					catalogBase: "https://api.z.ai/api/coding/paas/v4"
				}, {
					id: "bigmodel",
					label: "BigModel (中国大陆)",
					flow: "redirect",
					anthropicBase: "https://open.bigmodel.cn/api/anthropic",
					catalogBase: "https://open.bigmodel.cn/api/coding/paas/v4"
				}]
			},
			planLimits: !1,
			runtimes: {
				native: Iu,
				claudeCode: Iu
			}
		}
	], Uu = Hu.map((e) => e.id), new Map(Hu.map((e) => [e.id, e])), Wu = Hu.filter((e) => e.auth.kind === "translator").map((e) => e.id), Hu.filter((e) => e.auth.kind === "minted").map((e) => e.id);
})), Ku, qu = v((() => {
	W(), Ku = I({
		subject: j(),
		detail: j()
	});
})), Ju, Yu, Xu, Zu, Qu, $u, ed = v((() => {
	W(), qu(), I({
		type: B("runner-hello"),
		token: j(),
		version: j(),
		image: j(),
		channel: j().optional(),
		overlayHash: j().optional(),
		definitionToml: j().optional()
	}), I({
		agent: j().optional(),
		account: j().optional(),
		model: j().optional()
	}), oc([
		I({
			ok: B(!0),
			kind: B("oauth"),
			accessToken: j(),
			account: j().optional()
		}),
		I({
			ok: B(!0),
			kind: B("parent-translator"),
			model: j(),
			trial: P().optional()
		}),
		I({
			ok: B(!0),
			kind: B("endpoint"),
			baseUrl: j(),
			authToken: j(),
			model: j(),
			trial: P().optional()
		}),
		I({
			ok: B(!1),
			code: z([
				"subscription-required",
				"claude-reauth",
				"trial-unavailable"
			]).optional(),
			message: j()
		})
	]), I({
		account: j().min(1),
		rejected: j().min(1)
	}), I({ accessToken: j().optional() }), Ju = I({
		cpus: N().int().positive(),
		memoryMb: N().int().positive(),
		freeDiskMb: N().int().nonnegative(),
		load: N().nonnegative()
	}), Yu = z([
		"current",
		"outdated",
		"unknown"
	]), I({
		id: j(),
		host: j().optional(),
		online: P(),
		version: j().optional(),
		image: j().optional(),
		channel: j().optional(),
		overlayHash: j().optional(),
		facts: Ju.optional(),
		lastSeen: N().optional(),
		parity: Yu,
		drift: F(Ku).optional()
	}), Xu = I({
		op: z(["pull", "push"]),
		conversationId: j().min(1),
		branch: j().min(1),
		repos: F(I({
			repo: j().min(1),
			dir: j(),
			mainBranch: j().min(1)
		}))
	}), Zu = oc([I({
		kind: B("line"),
		text: j()
	}), I({
		kind: B("done"),
		ok: P(),
		detail: j().optional()
	})]), Qu = I({
		conversationId: j().min(1),
		branch: j().min(1),
		prompt: j(),
		provider: j(),
		harness: j(),
		model: j().optional(),
		effort: j().optional(),
		thinking: P().optional(),
		fast: P().optional(),
		account: j().optional(),
		sessionId: j().optional(),
		attachments: F(I({
			path: j().min(1),
			bytesBase64: j()
		})).optional()
	}), $u = oc([I({ kind: B("local") }), I({
		kind: B("runner"),
		id: j().min(1)
	})]);
})), J, td, nd, rd = v((() => {
	W(), J = j().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/), td = j().regex(/^[A-Za-z0-9][A-Za-z0-9._/-]*$/).max(200), nd = z(["on", "off"]).default("off");
})), id, ad, od, sd, cd, ld, ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Y = v((() => {
	W(), Au(), Fu(), Gu(), ed(), rd(), id = j().min(1), ad = I({ provider: z(Uu) }), od = z(["native", "claude-code"]), sd = I({
		repo: j(),
		base: j().min(1)
	}), cd = I({
		file: j().min(1).describe("The file open in the editor, as a workspace path."),
		startLine: N().int().min(1).optional().describe("First line of the selection, counting from one. Leave both out when the whole file is the context."),
		endLine: N().int().min(1).optional().describe("Last line of the selection, counting from one."),
		selection: j().max(2e4).optional().describe("The selected text itself. Cut it down before sending if it is long: this is context, not an upload.")
	}), ld = j().regex(ku), ud = I({
		automationId: j(),
		provider: j(),
		channelId: j().optional(),
		author: j().optional()
	}), z([
		"schedule",
		"event",
		"listener",
		"webchat",
		"issues",
		"workspace",
		"workflow"
	]), dd = z([
		"allow",
		"hold",
		"deny"
	]), fd = z(["sandbox", "device"]), pd = z([
		"git.destructive",
		"files.destructive",
		"system.destructive",
		"container.state",
		"secrets.access",
		"package.publish",
		"network.outbound"
	]), md = I({
		schedule: dd.default("allow"),
		event: dd.default("allow"),
		listener: dd.default("allow"),
		webchat: dd.default("allow"),
		issues: dd.default("hold"),
		workspace: dd.default("allow"),
		workflow: z(["allow", "deny"]).default("allow")
	}), hd = z([
		"default",
		"plan",
		"bypassPermissions"
	]), gd = I({
		conversationId: ld,
		index: N().int().nonnegative(),
		files: z(["then", "now"])
	}), _d = I({
		prompt: j().describe("What to say to the agent. May be empty if you are only attaching files."),
		title: j().max(80).optional().describe("A title for a conversation this turn is opening. Ignored for a conversation that already has one."),
		attachments: F(j().min(1)).max(20).optional().describe("Files to hand the agent along with the prompt, as workspace paths. Upload them first."),
		agent: id.optional().describe("Which model provider serves this turn. Leave it out for Claude."),
		harness: od.optional().describe("Which agentic loop runs the turn. Leave it out to use each provider's own."),
		account: j().optional().describe("Which of that provider's connected accounts pays for the turn. Leave it out for the first one."),
		actsAs: J.optional().describe("Which persona the turn speaks as out in the world. Not the same as which account pays for it."),
		sessionId: j().optional().describe("Resume this provider session instead of starting a fresh one."),
		conversationId: ld.optional().describe("The conversation this turn belongs to. You choose it, it survives model switches, and it is how you address the conversation later. Naming one that does not exist opens it."),
		isolated: P().optional().describe("Work in this conversation's own private copy of the repos rather than the shared tree, so several agents can work at once. Needs a conversation id."),
		startIn: j().max(200).optional().describe("Which folder the conversation opens in, relative to the workspace root; the project it belongs to. Decided on the first turn. A persona that names its own start folder wins."),
		placement: $u.optional().describe("Where this conversation runs: this sandbox (leave it out), or a paired runner by id. Decided on the first turn; later turns follow the conversation."),
		worktreeBase: F(sd).min(1).max(50).optional().describe("Pin a new private copy to these exact commits instead of today's workspace. Used when several agents must start from identical files."),
		autoLand: P().optional().describe("Whether this turn's work merges into the workspace when it finishes. Overrides the conversation's own setting for this turn only."),
		runRole: Nu.optional().describe("What started this turn, when it was not a person typing: which of the sandbox's per-job model lists answers for it. Only used when the turn names no model of its own."),
		origin: ud.optional().describe("Set by the sandbox alone: this turn opened a conversation on behalf of a message from outside rather than a person."),
		forkOf: I({
			conversationId: ld.describe("The conversation this one was cut from."),
			keep: N().int().nonnegative().describe("How many of that conversation's messages to copy in before this turn runs."),
			files: z(["then", "now"]).describe("Which files the fork opens on: \"now\" is the workspace as it stands, \"then\" is the files as they were at the cut, which needs a private copy.")
		}).optional().describe("Where this conversation was cut from, on its first turn only. Only the client knows this, so only the client can say it."),
		model: j().optional().describe("Which model to use. Leave it out for the provider's default."),
		unattended: P().optional().describe("Nobody chose a model for this turn because a screen started it rather than a person. The sandbox then fills in the model its owner picked for unwatched work."),
		outsideWake: j().min(1).optional().describe("Content from outside caused this turn, and what to call the source. It is what makes the sandbox treat the turn as carrying somebody else's words."),
		permissionMode: hd.optional().describe("How tool calls are gated: ask before each tool, propose a plan first, or run everything. The agent can move itself between these mid-turn."),
		allowedTools: F(j().min(1)).optional().describe("Narrow the turn to these tools. Leave it out for everything the runtime has. For a turn driven by an outside message this list is the real boundary, because prompt wording is only advice."),
		effort: j().optional().describe("How hard the model should think, where the provider offers a choice."),
		thinking: P().optional().describe("Whether to show the model's reasoning as it works."),
		fast: P().optional().describe("Ask for the same work at a higher rate for a higher price. A request rather than a promise: the answer says what actually happened."),
		tierHold: P().optional().describe("Run exactly the model that was picked, even when the turn looks simple enough for a cheaper one. The judgement is still recorded; nothing is substituted."),
		editorContext: cd.optional().describe("What the user has open in their editor, folded into the prompt so that pointing words like \"this\" resolve.")
	}).refine((e) => e.prompt.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "prompt or attachments required" }).refine((e) => e.isolated !== !0 || e.conversationId !== void 0, { message: "isolated requires conversationId" }).refine((e) => e.worktreeBase === void 0 || e.isolated === !0 && e.conversationId !== void 0, { message: "worktreeBase requires an isolated conversationId" }).refine((e) => e.origin === void 0 || e.conversationId !== void 0, { message: "origin requires conversationId" }).refine((e) => e.forkOf === void 0 || e.conversationId !== void 0, { message: "forkOf requires conversationId" }).refine((e) => e.forkOf?.files !== "then" || e.isolated === !0, { message: "forkOf.files \"then\" requires isolated" }), vd = I({
		agent: j().min(1).describe("Which provider."),
		model: j().min(1).describe("Which of its models. Both or neither, because a model name only means anything to the provider that serves it."),
		account: j().optional().describe("Which connected account of that provider pays, by its daemon-minted id. Leave it out for whichever has headroom."),
		harness: od.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own."),
		effort: j().optional().describe("How hard that model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: P().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: P().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise.")
	}).optional(), yd = I({
		provider: id.describe("Which provider serves this work."),
		model: j().min(1).describe("Which of its models. Both halves, because a model name only means anything to the provider that serves it."),
		effort: j().optional().describe("How hard this model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: P().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: P().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise."),
		harness: od.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own.")
	}), bd = I({ run: j().describe("The id of the run that just started. Hand it back when you attach, so the stream resumes rather than replaying.") }), xd = I({
		conversationId: ld.describe("Which conversation to watch."),
		run: j().optional().describe("The run you were watching. If a newer turn has started since, the head names that one instead, and its rows are that turn's.")
	});
})), Sd, Cd, wd, Td, Ed, Dd, Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id = v((() => {
	W(), Gu(), Y(), Sd = oc([
		B("all"),
		B("none"),
		I({ models: F(j().min(1)).min(1) })
	]), Cd = I({
		kind: j(),
		label: j().optional(),
		utilization: N(),
		resetsAt: N().optional(),
		gates: Sd
	}), wd = I({
		windows: F(Cd),
		measuredAt: N()
	}), Td = I({
		available: P().describe("Whether the provider will reopen this account's session window right now. The only thing a button may be drawn from."),
		reason: j().optional().describe("Why not, in the provider's own word, when it gave one. Absent when it is available, or when the provider said nothing."),
		nextAvailableAt: N().optional().describe("When the next reset may be claimed, in epoch seconds, where the provider publishes it. Absent means unknown, never 'now'."),
		weeklyResetsAt: N().optional().describe("When the weekly allowance itself reopens, in epoch seconds, where the provider publishes it.")
	}), Ed = I({
		result: z([
			"reset",
			"already_used",
			"not_limited",
			"ineligible",
			"unavailable",
			"error"
		]).describe("What the provider did. Only `reset` reopened the window; every other value means nothing changed."),
		nextAvailableAt: N().optional().describe("When another reset may be claimed, in epoch seconds, where the provider published it."),
		detail: j().optional().describe("What went wrong, in words, for the two outcomes that are this sandbox's fault rather than the plan's.")
	}), Dd = I({
		at: N().describe("When it refused, in milliseconds."),
		kind: z([
			"limit",
			"auth",
			"entitlement"
		]).describe("Three different noes, kept apart because what fixes each is different. A spent allowance is answered by waiting; a refused credential by signing in again; and an entitlement refusal, where somebody has switched this off for your seat, by neither of those. That last one authenticates fine and reports healthy limits the whole time it refuses everything."),
		message: j().describe("The provider's own words, verbatim. The only part that says which limit or which credential."),
		account: j().optional().describe("Which account was serving, where that is known."),
		model: j().optional().describe("Which model the refused turn was on, where that is known.")
	}), Od = I({ refusals: R(j(), Dd).describe("The most recent refusal per provider. Read alongside an account's usage: that says how full it was when last checked, this says whether it has since started saying no.") }), kd = I({
		name: j(),
		label: j(),
		usage: wd.optional(),
		cooling: I({
			until: N().optional(),
			reason: j().optional()
		}).optional()
	}), Ad = I(Object.fromEntries(Wu.map((e) => [e, F(kd)]))), jd = L("kind", [
		I({
			kind: B("plan").describe("Answering a plan the agent proposed."),
			requestId: j().min(1).describe("Which card you are answering, from the frame that raised it."),
			approve: P().describe("Whether to go ahead. Approving means the plan then runs without a prompt per tool, because being asked whether a plan you just approved may run its first command is not a question worth having."),
			feedback: j().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		I({
			kind: B("question").describe("Answering a question the agent asked."),
			requestId: j().min(1).describe("Which card you are answering."),
			answers: R(j(), F(j())).optional().describe("What you chose, keyed by the question, with the chosen labels or your own words."),
			cancelled: P().optional().describe("Dismissing it instead, which tells the agent to carry on using sensible defaults rather than leaving it waiting.")
		}),
		I({
			kind: B("permission").describe("Answering a request to use a tool."),
			requestId: j().min(1).describe("Which card you are answering."),
			decision: z([
				"once",
				"always",
				"deny"
			]).describe("Once allows this call alone; always allows that whole tool for the rest of the conversation; no blocks it."),
			feedback: j().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		I({
			kind: B("browser_help").describe("Answering a request for help in the agent's browser: a captcha, a password it does not hold, a check on your phone."),
			requestId: j().min(1).describe("Which card you are answering."),
			helped: P().describe("Whether you cleared it. Yes means the turn carries on from the page as you left it; no tells the agent so, and it moves on rather than waiting for ever."),
			note: j().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		I({
			kind: B("terminal_help").describe("Answering a request for help at a terminal: a code to type, a confirmation only a person can give."),
			requestId: j().min(1).describe("Which card you are answering."),
			helped: P().describe("Whether you did it. Yes also hands the agent what the terminal now says, because a person answering a prompt is exactly the moment the agent cannot see."),
			note: j().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		I({
			kind: B("capability_offer").describe("Answering a request to connect something the agent needs."),
			requestId: j().min(1).describe("Which card you are answering."),
			connect: P().describe("Yes keeps the agent waiting while you set it up, and it carries on the moment the connection comes alive. No tells it to continue without. The reply itself connects nothing: setting it up is still your own doing.")
		}),
		I({
			kind: B("payment_offer").describe("Answering a request to pay for something."),
			requestId: j().min(1).describe("Which card you are answering."),
			approve: P().describe("Yes releases exactly one payment. Anything else spends nothing. This click is the only way the money can move.")
		}),
		I({
			kind: B("credential_offer").describe("Releasing a credential the agent may only use once a named person says so."),
			requestId: j().min(1).describe("Which card you are answering."),
			approve: P().describe("Yes releases it, as far as the card says (this one use, or the rest of the conversation). Only the people the card names can answer at all, yes or no.")
		})
	]), Md = I({
		conversationId: j().min(1).describe("Which running conversation to interrupt."),
		text: j().max(2e4).describe("What to say to it. It arrives mid-turn without stopping the turn."),
		attachments: F(j().min(1)).max(20).optional().describe("Files to send with it, as workspace paths. A screenshot dropped in mid-turn with no words is a legitimate thing to send."),
		editorContext: cd.optional().describe("What you have open, folded in so that pointing words resolve.")
	}).refine((e) => e.text.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "text or attachments required" }), Nd = I({ conversationId: j().min(1).describe("Which conversation's running turn to cancel.") }), Pd = I({
		agent: id.describe("Which provider serves the re-run."),
		harness: od.describe("Which agentic loop runs it."),
		account: j().optional().describe("Which of that provider's accounts pays for it. Leave it out for the first one."),
		model: j().optional().describe("Which model. Leave it out to keep the one the refused turn named."),
		carry: P().optional().describe("When the account changes, keep the provider session (the model keeps everything, and re-reads all of it once on the other account) rather than opening a fresh one seeded from the record. Ignored when the provider changes, or when nothing changes.")
	}), Fd = I({
		conversationId: j().min(1).describe("Which conversation's held turn to run again."),
		routing: Pd.optional().describe("Who serves the re-run, when the conversation has been re-pointed since it was refused. Leave it out to run it on whatever the turn carried.")
	});
})), Ld, Rd = v((() => {
	W(), Gu(), Ld = z(Wu);
})), zd, Bd, Vd, Hd, Ud, Wd, Gd, Kd, qd, Jd, Yd, Xd, Zd, Qd, $d, ef, tf, nf = v((() => {
	W(), Id(), Rd(), zd = I({
		id: j().describe("The account's id, which is what a turn names to spend on it and what disconnecting takes."),
		label: j().describe("What it is called here, which somebody can change."),
		email: j().optional().describe("Who it signs in as, in the provider's own words. Kept beside the label rather than folded into it, so a renamed account can still say whose it is. Absent when the provider says nothing, which is exactly when renaming is the only answer."),
		organization: j().optional().describe("Which organisation it belongs to, where the provider says."),
		scope: j().optional().describe("What the credential is permitted to do, in the provider's terms."),
		connectedAt: N().describe("When it was connected, in milliseconds."),
		needsReauth: P().optional().describe("Its stored credential can no longer be renewed and somebody has to sign in again. Absent means healthy, or not checked yet."),
		detail: j().optional().describe("Why, in words a person can act on."),
		usage: wd.optional().describe("How full its plan limits were when last measured, so a picker can show what is left before committing work to it. Absent until a reading exists, which reads as unknown rather than as nothing left.")
	}), Bd = I({ accounts: F(zd).describe("The connected accounts. Tokens never travel in this shape: being in this list is what connected means.") }), Vd = I({ force: xl().default(!1).describe("Measure the plan limits again before answering, rather than serving a recent reading. Slower, and the right thing when somebody has just changed a plan and is asking whether what they can see is still true.") }), Hd = I({ id: j().min(1).describe("Which account.") }), Ud = I({
		id: j().min(1).describe("Which account."),
		label: j().max(80).describe("The new name. Blank restores the one derived from the sign-in, rather than leaving a nameless row.")
	}), Wd = z([
		"device",
		"redirect",
		"paste"
	]), Gd = I({
		url: j().describe("The page to open and sign in on."),
		code: j().describe("The one-time code the page will ask for, where the vendor issues one. Blank when the page is already addressed to this attempt."),
		state: j().describe("For a redirect sign-in, the marker in the address the browser lands on, so a pasted URL can be recognised as this attempt's. Blank otherwise."),
		flow: Wd.describe("How this attempt ends. A device sign-in finishes by itself and you watch the account list; a redirect needs the address it landed on handed back; a paste needs the code the page showed."),
		variant: j().describe("Which of the provider's estates this attempt signs in to. Blank for a provider with one."),
		handshake: j().describe("This attempt's id, for finishing or abandoning it. Not a credential and not redeemable: the proof that completes the sign-in never leaves the sandbox."),
		expiresAt: N().describe("When this attempt stops being answerable, in milliseconds, so a card can stop waiting instead of spinning.")
	}), Kd = I({ variant: j().min(1).optional().describe("Which estate to sign in to. Absent takes the provider's default.") }), qd = I({
		handshake: j().min(1).describe("Which attempt this belongs to."),
		code: j().optional().describe("The code the sign-in page showed, for a paste sign-in."),
		redirectUrl: j().optional().describe("The address the browser was sent to, whole, for a redirect sign-in. The grant is inside it."),
		label: j().optional().describe("What to call the account. Blank derives one from the sign-in.")
	}), Jd = I({ account: zd.optional().describe("The account it connected, where the sign-in ends here. Absent means keep watching the account list.") }), Yd = I({ handshake: j().min(1).describe("Which attempt to stop waiting on.") }), Xd = I({
		url: j().describe("The page to open."),
		code: j().describe("The one-time code, where the provider uses one."),
		state: j().min(1).describe("The handshake's id, which status reads and the finishing call sends back."),
		flow: z(["device", "redirect"]).describe("Which shape this is. A device sign-in finishes by itself and you poll the attempt; a redirect needs the address it landed on handed back. Said outright rather than guessed at from whether a code happens to exist.")
	}), Zd = L("status", [
		I({ status: B("wait") }),
		I({ status: B("ok") }),
		I({
			status: B("error"),
			error: j().min(1)
		})
	]), Qd = I({
		provider: Ld.describe("Which provider."),
		redirectUrl: j().min(1).describe("The address the browser was sent to, whole. The grant is inside it."),
		state: j().min(1).describe("The handshake this belongs to. A mismatch is refused.")
	}), $d = z(["reasoning", "fast"]), ef = I({
		id: j().describe("What to name when asking for this model."),
		label: j().describe("What to call it on screen."),
		efforts: F(j()).optional().describe("The thinking levels it accepts, where the provider says. Empty means use your own defaults."),
		description: j().optional().describe("What it is good for, in the provider's own words. Absent where the provider publishes only ids, which is the honest answer rather than something to paper over with a hand-written table."),
		badges: F($d).optional().describe("What it is known for, where the provider says so."),
		contextWindow: N().optional().describe("How many tokens this model will accept in one request, where the server publishes it.")
	}), tf = I({
		models: F(ef).describe("What this provider serves, in its own preference order, which is not rearranged here. Never empty."),
		default: j().describe("Which one a fresh conversation starts on. Always present.")
	});
})), X, rf, af, of, sf, Z, Q = v((() => {
	W(), X = I({ ok: B(!0).describe("Always true. A route that answers this either did the thing or refused with a status; there is no third outcome to report.") }), rf = z([
		"viewer",
		"collaborator",
		"maintainer",
		"owner"
	]), z([
		"viewer",
		"collaborator",
		"maintainer"
	]), af = {
		viewer: 0,
		collaborator: 1,
		maintainer: 2,
		owner: 3
	}, of = (e, t) => af[e] >= af[t], sf = I({ token: j().min(1).describe("The freshly minted credential. The previous one stopped working the moment this answered.") }), Z = I({ repo: j().describe("Which repository. \"root\" is the workspace itself; anything else is a repository's folder relative to the workspace root, URL-encoded.") });
})), cf, lf = v((() => {
	q(), Y(), nf(), Q(), cf = {
		start: K.route({
			method: "POST",
			path: "/accounts/{provider}/login/start",
			summary: "Begin connecting an account",
			description: "Hands back the page to sign in on, and the code it will ask for where there is one. The sandbox holds the proof and finishes what it can itself: a device sign-in lands in the account list on its own, a paste or a redirect needs one thing brought back to the finishing call."
		}).input(ad.extend(Kd.shape)).output(Gd),
		complete: K.route({
			method: "POST",
			path: "/accounts/{provider}/login/complete",
			summary: "Finish a sign-in with what the page handed back",
			description: "Takes the code the page showed, or the address a redirect landed on, and finishes the attempt. Answers with the account where the exchange ends here; otherwise the sandbox still has a mint to do and the row appears in the account list."
		}).input(ad.extend(qd.shape)).output(Jd),
		cancel: K.route({
			method: "POST",
			path: "/accounts/{provider}/login/cancel",
			summary: "Abandon a sign-in",
			description: "Stops waiting on a sign-in nobody completed. An abandoned attempt also expires on its own."
		}).input(ad.extend(Yd.shape)).output(X),
		accounts: K.route({
			method: "GET",
			path: "/accounts/{provider}",
			summary: "Connected accounts of a provider",
			description: "Each connected account with how full its plan limits were when last measured, where the provider publishes any. Ask for a fresh measurement and it takes one before answering, which is slower. The credentials themselves never travel: being in this list is what connected means."
		}).input(ad.extend(Vd.shape)).output(Bd),
		rename: K.route({
			method: "POST",
			path: "/accounts/{provider}/rename",
			summary: "Rename an account",
			description: "Changes the label one account shows under, so several are tellable apart. Blank restores the one derived from the sign-in."
		}).input(ad.extend(Ud.shape)).output(zd),
		disconnect: K.route({
			method: "POST",
			path: "/accounts/{provider}/disconnect",
			summary: "Disconnect an account",
			description: "Clears one stored credential, and stops any sign-in still in flight for this provider. The others stay connected."
		}).input(ad.extend(Hd.shape)).output(X)
	};
})), uf, df, ff, pf, mf, hf = v((() => {
	W(), Y(), uf = I({
		id: j().describe("The entry's own id."),
		at: N().describe("When it happened, in milliseconds. Also what you page by."),
		provider: j().optional().describe("Which outside service, when one was involved. Absent for the sandbox's own events."),
		account: j().optional().describe("Which account handled it. Absent for the sandbox's own events and for work run on a provider's default."),
		direction: z([
			"in",
			"out",
			"system"
		]).describe("Whether something arrived, something went out, or the sandbox did it to itself."),
		type: j().describe("Exactly what happened: a message received or sent, a reaction, a turn starting or ending, a rule doing something. A rule that ran and passed says nothing here, because a feed of green ticks is one the eye learns to skip."),
		channelId: j().optional().describe("Which channel or thread it happened in."),
		author: j().optional().describe("Who sent it, for something that arrived."),
		actor: j().optional().describe("Who asked for the turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent for a wake nothing asked for."),
		content: j().optional().describe("The message, in full, whichever direction it went."),
		method: j().optional().describe("The verb of an outgoing call."),
		endpoint: j().optional().describe("The address of an outgoing call. Credentials travel in headers, so they are never here."),
		sessionId: j().optional().describe("The provider session behind it."),
		turnId: j().optional().describe("Ties one turn's entries together. A turn writes several, and read as separate rows they say one thing several times, so a feed groups on this."),
		conversationId: j().optional().describe("Which conversation. This, rather than the provider session, is what the same agent means across a feed, because a session is retired whenever the model changes."),
		title: j().optional().describe("What that conversation was called at the time. Copied in rather than looked up, because an audit entry must still read as words years later, after the conversation has been renamed or pruned."),
		origin: ud.optional().describe("What woke the conversation from outside, when something did. It is how a turn gets filed under the chat service that caused it rather than under the model that served it."),
		automationIds: F(j()).optional().describe("Which automations were involved."),
		outcome: z(["ok", "error"]).optional().describe("How it ended."),
		error: j().optional().describe("What went wrong, when something did."),
		extra: R(j(), nc()).optional().describe("Whatever else the source had to say: attachments, participants, a recording's path. Shape varies by source.")
	}), df = I({
		provider: j().optional().describe("Narrow it to one outside service."),
		limit: U().min(1).max(500).default(100).describe("How many entries to return."),
		before: U().optional().describe("Only entries older than this timestamp, so paging walks backwards through the feed.")
	}), ff = I({ events: F(uf).describe("The audit entries, newest first.") }), pf = I({
		capabilityId: j().describe("Which connection."),
		provider: j().describe("Which service it is."),
		gateway: z([
			"ready",
			"connecting",
			"pairing",
			"disconnected",
			"idle"
		]).describe("Idle means it is up but has nothing to listen for, which is different from a connection that should be up and is not. Pairing means somebody started a sign-in and never finished it, which no amount of waiting will fix."),
		lastError: j().optional().describe("The most recent thing that went wrong on it.")
	}), mf = I({
		connections: F(pf).describe("Each source feeding the record, and whether it is working. Probed now rather than remembered."),
		voice: I({
			channelId: j().describe("Which channel."),
			channelName: j().describe("What it is called."),
			startedAt: N().describe("When it joined, in milliseconds."),
			participants: F(j()).describe("Who else is in it.")
		}).optional().describe("A voice call the sandbox is currently in, when it is in one.")
	});
})), gf, _f = v((() => {
	q(), hf(), gf = {
		list: K.route({
			method: "GET",
			path: "/activity",
			summary: "What the agent has done out in the world",
			description: "The audit trail of actions taken on outside services. Read-only on purpose: entries are written by the sandbox alone, which is what makes it a record worth trusting."
		}).input(df).output(ff),
		status: K.route({
			method: "GET",
			path: "/activity/status",
			summary: "Whether the audit trail is being kept",
			description: "Which sources are feeding the record and whether each is working."
		}).output(mf)
	};
})), vf, yf, bf, xf, Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf = v((() => {
	W(), vf = /^[A-Za-z_][A-Za-z0-9_]*$/, yf = j().regex(vf).max(128), bf = I({
		key: yf.describe("The name to store it under, which is the name a process will find it by."),
		value: j().min(1).describe("The value. It goes straight to your sandbox and never through the platform.")
	}), xf = I({ keys: F(j()).describe("The names that exist here. Only the names: the values never leave the sandbox.") }), Sf = I({ key: yf.describe("Which secret, by name.") }), Cf = I({ value: j().describe("The value itself. The only place in this API one is ever returned.") }), wf = z(["use", "conversation"]).describe("How far one release goes: `use` asks again every single time (one click releases exactly one use), `conversation` covers the rest of this conversation and is forgotten when the daemon restarts."), Tf = z(["secret", "capability"]).describe("Whether this gate covers one stored secret, by the name a reference carries, or one whole connected capability, by its id."), Ef = z([
		"shell",
		"code",
		"browser",
		"session",
		"otp"
	]).describe("What the credential was about to be used for: a shell command, a script, typing into a page, mounting a connected account, or one one-time code."), Df = I({
		subject: j().min(1).describe("What is gated: a secret's name, or a connected capability's id."),
		kind: Tf,
		approvers: F(j().min(3)).min(1).describe("Exactly who may release it, by email, from the people on the Access roster. Not a seniority floor: nobody outside this list can release it, the owner included, unless the owner is on it."),
		scope: wf
	}), Of = I({ gates: F(Df).describe("Every gate in force. Names, subjects and approver addresses only: this answer never carries a credential.") }), kf = I({ subject: j().min(1).describe("Which gate, by the secret name or capability id it covers.") }), Af = I({
		subject: j().min(1).describe("What to ask for: the secret's name, or the connected capability's id."),
		why: j().max(280).optional().describe("One line on what it is for. The only words on the card that are the agent's."),
		conversationId: j().optional().describe("Which conversation to raise the card in. The CLI fills this from the running turn.")
	}), jf = I({
		granted: B(!0).describe("Always true: a refusal is an error with a sentence, never a `false` here."),
		approvedBy: j().describe("Who released it."),
		message: j().describe("What the grant means in practice, and what to do next.")
	}), Mf = I({
		key: j().describe("What identifies it. Unique across the whole inventory, so several accounts of one provider each get their own entry."),
		kind: z([
			"env",
			"generated",
			"capability",
			"provider"
		]).describe("Where it came from: you set it, the sandbox generated it, a connection needs it, or it is a model account's credential."),
		label: j().optional().describe("A friendlier name, for entries that have one."),
		status: z([
			"missing",
			"set",
			"connected"
		]).describe("Whether it exists and, for a connection, whether it is working."),
		requiredBy: F(I({
			resourceId: j().describe("Which resource."),
			type: j().describe("What kind of resource it is.")
		})).describe("What is waiting on it. Empty for a connection's or an account's own credential."),
		storedAt: j().describe("Where it actually lives, in words."),
		revealable: P().describe("Whether its value can be shown at all. Everything except a model account's credential can be."),
		ci: I({
			synced: P().describe("Whether the pipeline has it."),
			pushedAt: j().optional().describe("When it was last sent there.")
		}).optional().describe("Whether a copy has been given to the build pipeline."),
		lastUse: I({
			at: N().describe("When, in milliseconds."),
			lane: z([
				"shell",
				"code",
				"browser"
			]).describe("How it was used: a command, a script, or typed into a page."),
			detail: j().optional().describe("Where it went: the start of the command or script, or the site. Names and destinations only, never values."),
			approvedBy: j().optional().describe("Who released it for that use, when it is gated. Absent when nothing had to be approved.")
		}).optional().describe("The last time an agent actually spent this secret. Absent while it never has been, which most never are."),
		gate: I({
			approvers: F(j()).describe("Who may release it, by email. Nobody else can, whatever their role."),
			scope: wf
		}).optional().describe("Who has to release this before the agent can use it, and for how long one release lasts. Absent when it is not gated.")
	}), Nf = I({ entries: F(Mf).describe("One entry per secret this sandbox knows about, from every place they live. No values, ever.") });
})), Ff, If, Lf, Rf, zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp = v((() => {
	W(), Y(), Pf(), Ff = I({
		label: j().describe("The choice, in a few words."),
		description: j().describe("What picking it means."),
		preview: j().optional().describe("Something to look at while deciding: a mock-up, a snippet, a layout.")
	}), If = I({
		question: j().describe("What the agent is asking."),
		header: j().describe("A short label for the question."),
		multiSelect: P().describe("Whether more than one answer can be picked."),
		options: F(Ff).describe("The choices offered. A free-text answer is always possible as well.")
	}), Lf = I({
		text: j().describe("What would run."),
		language: z(["bash", "javascript"]).describe("Which of the two backends it is written for, named as the grammar that colours it."),
		truncated: P().describe("Whether this is an excerpt of a longer program, so the card can say so instead of ending mid-word. An excerpt always carries the flagged fragment: the beginning, then a window around the fragment, with any skipped middle written into the text as a bracketed count."),
		spans: F(I({
			start: N().int().nonnegative(),
			end: N().int().nonnegative()
		})).describe("Which fragments of the text the pattern match fired on: every matched class's, or, under the hard rule, only the class the title names. Offsets into text, in order, never overlapping.")
	}), Rf = I({
		toolName: j().describe("Which tool it wants to use."),
		title: j().optional().describe("The whole question, as a sentence, exactly as the runtime words it."),
		displayName: j().optional().describe("A short phrase for the button, such as read file."),
		description: j().optional().describe("More about what it is asking for."),
		reason: j().optional().describe("Why it is asking at all: a rule, the current mode, something that looked risky."),
		path: j().optional().describe("Which file it concerns, when it concerns one."),
		alwaysLabel: j().optional().describe("The wording for an always-allow answer. Present only when there is something an always could actually remember; without it the only answers are once and no."),
		program: Lf.optional().describe("The program this card is holding, when the card is about one. Present on a command gate's card and absent on every other permission ask."),
		explain: j().optional().describe("One plain sentence saying what the program does and why it is being asked about, where the title says something else. Written by the judge that read your safety policy, never by the agent being gated.")
	}), zf = I({
		card: j().describe("Which connection is being asked for."),
		name: j().describe("What it is called, as the catalogue titles it rather than as the agent named it."),
		why: j().optional().describe("The agent's case for connecting it, and the only words on this card that are the agent's.")
	}), Bf = I({
		url: j().describe("What is being paid for."),
		description: j().optional().describe("What the endpoint says it is."),
		payTo: j().describe("Where the money goes, taken verbatim from the endpoint's own demand."),
		network: j().describe("On which network."),
		asset: j().describe("In which token."),
		assetName: j().describe("That token's name. It is pegged to the dollar, which is what lets every amount here read as dollars."),
		amountUsd: j().describe("The exact price. Not a ceiling: this scheme has no ranges, so this is the whole spend."),
		spentTodayUsd: j().describe("What has already gone out today."),
		dailyCapUsd: j().describe("What may go out in a day."),
		why: j().optional().describe("The agent's case for paying, and the only words on this card that are the agent's.")
	}), Vf = I({
		subject: j().describe("Which credential is being asked for."),
		kind: Tf,
		lane: Ef,
		detail: j().optional().describe("Where it would go: the start of the command, the site, or what is being mounted. Never a value: the command still reads as a reference at this point."),
		why: j().optional().describe("The agent's case for using it, and the only words on this card that are the agent's."),
		approvers: F(j()).describe("Who may release it. A click from anyone else is refused and leaves the card standing."),
		scope: wf
	}), Hf = I({
		name: j().describe("What to type, without the leading slash."),
		description: j().describe("What it does."),
		hint: j().optional().describe("What its argument should look like, shown after the name.")
	}), Uf = I({ agent: id.optional().describe("Whose commands to read. Leave it out for Claude.") }), Wf = I({ commands: F(Hf).describe("The shortcut commands, as the provider last published them.") }), Gf = I({
		content: j().describe("The item, as the agent wrote it."),
		status: z([
			"pending",
			"in_progress",
			"completed"
		]).describe("Where it is."),
		activeForm: j().optional().describe("How to phrase it while it is happening, so a screen can say what the agent is doing rather than what it plans to do.")
	}), Kf = I({
		tokens: N().describe("How much the latest request sent, all told."),
		contextWindow: N().describe("How much the model can hold. The gap between these two is how close the conversation is to being compacted."),
		cachedAt: N().optional().describe("When that request last touched the provider's prompt cache, in milliseconds. The cache's clock runs from here, since a read refreshes it as a write does."),
		cacheTtlMs: N().optional().describe("How long that cache entry lives from `cachedAt`, in milliseconds.")
	}), qf = z([
		"read",
		"edit",
		"delete",
		"move",
		"search",
		"execute",
		"think",
		"fetch",
		"other"
	]), Jf = z([
		"pending",
		"in_progress",
		"completed",
		"failed"
	]), Yf = I({
		path: j().describe("The file, as a workspace path, whatever directory the tool was run from."),
		line: N().optional().describe("Which line, counting from one.")
	}), Xf = L("type", [
		I({
			type: B("text").describe("Plain output."),
			text: j().describe("What the tool said.")
		}),
		I({
			type: B("diff").describe("A change to a file."),
			path: j().describe("Which file, as a workspace path."),
			oldText: j().optional().describe("What was there. Absent for a new file, or where the previous contents are not known."),
			newText: j().describe("What is there now."),
			truncated: P().optional().describe("One of the two sides was too large to send whole.")
		}),
		I({
			type: B("image").describe("A picture the tool produced."),
			path: j().describe("Where it is, as a workspace path. A path rather than the bytes, because the workspace already serves it, sending it inline would bloat every stored record, and this way the picture stays openable afterwards.")
		})
	]), Zf = I({
		path: j().describe("Where it lives, as a workspace path."),
		title: j().describe("What it is called: its opening heading, or its file name."),
		markdown: j().describe("The document itself."),
		truncated: P().optional().describe("It was clipped at the wire cap; the file on disk has more."),
		plan: P().optional().describe("It is one of the CLI's plan files, written to be approved rather than merely read.")
	}), Qf = j().describe("What to send back when you answer."), $f = {
		requestId: Qf,
		text: j().describe("The plan itself."),
		document: Zf.optional().describe("The write-up this plan refers to, when the plan itself is a pointer to one.")
	}, ep = {
		requestId: Qf,
		questions: F(If).describe("What it wants to know."),
		document: Zf.optional().describe("The document this turn wrote and is asking about, so the choice can be read beside it.")
	}, tp = { requestId: Qf }, np = {
		requestId: j(),
		session: j(),
		account: j(),
		message: j()
	}, rp = {
		requestId: j(),
		session: j(),
		message: j()
	}, ip = {
		requestId: j(),
		offer: zf
	}, ap = {
		requestId: j(),
		offer: Bf
	}, op = {
		requestId: j(),
		offer: Vf
	}, sp = I({
		outcome: z(["connected", "unfinished"]),
		id: j().optional()
	}), cp = I({
		outcome: z(["paid", "failed"]),
		amountUsd: j(),
		transaction: j().optional(),
		network: j().optional()
	}), lp = I({
		outcome: z(["released", "refused"]),
		approvedBy: j().optional()
	}), up = I({
		kind: B("plan").describe("The agent has written a plan and is waiting for a yes."),
		...$f
	}), dp = I({
		kind: B("question").describe("The agent has asked you something and is waiting."),
		...ep
	}), fp = Rf.extend({
		kind: B("permission").describe("The agent wants to use a tool it needs permission for."),
		...tp
	}), L("kind", [
		up,
		dp,
		fp
	]);
})), mp = v((() => {})), hp = v((() => {})), gp, _p, vp = v((() => {
	mp(), hp(), gp = ".intentic", _p = "481795963975-cq9msl6higcd91joidrfp8mjlkuq5fk3.apps.googleusercontent.com", `${_p}`;
})), yp, bp, xp, Sp, Cp = v((() => {
	W(), yp = /^[a-zA-Z_][a-zA-Z0-9_]{0,39}$/, bp = I({
		name: j().regex(yp),
		type: z([
			"string",
			"number",
			"boolean",
			"string[]"
		]),
		description: j().min(1),
		required: P()
	}), xp = (e) => {
		let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		for (let r of e) t.has(r.name) && n.add(r.name), t.add(r.name);
		return [...n];
	}, Sp = F(bp).min(1).max(16).superRefine((e, t) => {
		for (let n of xp(e)) t.addIssue({
			code: "custom",
			message: `Output field names must be unique; "${n}" is repeated.`
		});
	});
})), wp, Tp, Ep, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp = v((() => {
	W(), vp(), Cp(), Y(), rd(), wp = z(["fresh", "continue"]), Tp = L("kind", [
		I({ kind: B("none").describe("It produces nothing but its work. The classic make the suite pass: what it leaves behind is a passing suite, and asking it to also file a report is asking it to spend a round on paperwork.") }),
		I({ kind: B("claim").describe("Each round says whether it is done and why. Structured prose: done is a value read rather than a sentence interpreted. Self-assessment, so advisory by construction; it exists because plenty of goals have no command that could check them.") }),
		I({
			kind: B("json").describe("Each round writes a real answer in a shape you declared. This is the one that makes a step's output usable as the next step's input: a paragraph mentioning three files cannot be fed to anything, a list of three files can."),
			fields: Sp.describe("The shape that answer has to match.")
		})
	]), Ep = L("kind", [I({
		kind: B("command").describe("Run something and see if it passes. Deterministic, free, and the only signal here whose answer does not come from a model. A passing test suite beats any amount of self-report."),
		command: j().min(1).describe("The command to run in the conversation's own tree. Exiting cleanly means satisfied.")
	}), I({
		kind: B("judge").describe("Put the question to a separate model with no tools, which reads the round's own report and rules on it, having done none of the work and nothing invested in its being finished."),
		rubric: j().min(1).describe("What that judge is asked."),
		model: j().optional().describe("Which model judges. Leave it out for the cheap one the other small jobs use.")
	})]), Dp = I({
		done: P().describe("Whether the goal is met. Reading this is the whole point of the file."),
		reason: j().describe("Why, in one line. The most-read sentence in the feature: the next round reads it first and the history shows it."),
		evidence: j().optional().describe("What was checked to know that. Optional, so a round with nothing to point at says so by leaving it out rather than by inventing a sentence."),
		data: R(j(), nc()).optional().describe("The declared answer, for a loop that asked for one, checked against the shape it declared.")
	}), Op = 50, kp = I({
		conversationId: ld.describe("The conversation to loop. It need not exist yet: naming a fresh one opens it, which is what lets run this until it passes be the first thing you ever say."),
		goal: j().min(1).describe("What done means, in your words. It goes into every round's instructions and into the judge's question, so the model is told the bar rather than left to infer it."),
		prompt: j().min(1).describe("What each round is asked to do. The suite passes is the goal; run the tests, take the top failure, fix it is the instruction."),
		context: wp.describe("How each round meets the last. Starting fresh makes the files the memory rather than the conversation, so the twentieth round reads the tree as clearly as the first, and costs a re-read each time. Carrying on is cheaper and keeps the reasoning, which suits a short polish-this loop and degrades on long ones: a session that has spent eleven rounds arguing for its own approach is the worst available judge of whether that approach is finished."),
		output: Tp,
		checks: F(Ep).describe("What else has to be true, all of them together. A list because the suite passes and the report is written is a real bar, and running it as two loops would do the work twice."),
		maxIterations: N().int().min(1).max(Op).describe("How many rounds before it gives up. A loop that has not got there in fifty is not one round short of it."),
		maxSpendUsd: N().positive().optional().describe("A ceiling on what the whole loop may spend, in dollars. Optional for a short loop somebody is watching, and strongly wanted otherwise: this is the first thing here that can keep spending with nobody pressing anything between rounds."),
		stallLimit: N().int().min(1).describe("Stop after this many rounds in a row that changed nothing on disk. The guard that matters most: a loop's failure is not runaway success, it is an agent re-reading the same three files, restating the same plan and declaring more work remains, eleven times. Every one of those rounds succeeds, so only the tree not moving catches it."),
		isolated: P().describe("Whether it works in the conversation's own private copy or in the shared tree. It also decides where a check runs: testing the shared tree would be testing code this loop has not merged yet."),
		agent: id.optional().describe("Which provider the rounds run on. Absent falls back to the conversation's own last choice."),
		harness: od.optional().describe("Which agentic loop they run on."),
		account: j().optional().describe("Which account pays."),
		model: j().optional().describe("Which model."),
		actsAs: J.optional().describe("Which persona the rounds act as. It matters here: every round is unwatched, and an unwatched turn naming no persona reaches no signed-in account at all, so pinning one is how a loop gets hands."),
		worktreeBase: F(sd).min(1).max(50).optional().describe("Pin the private copy to these exact commits, so a restart cannot quietly change what the loop is working on."),
		autoLand: P().optional().describe("Whether the work merges as it goes.")
	}), `${gp}`, Ap = I({
		n: N().int().min(1).describe("Which round this was."),
		at: N().describe("When it ran, in milliseconds."),
		outcome: z([
			"continue",
			"done",
			"error"
		]).describe("How the round ended, which is not the same question as how the loop did. A round that errored does not end the loop by itself: a failing turn is often exactly what the next round is meant to fix."),
		detail: j().optional().describe("What the check said, in its own words. What a run history is actually read for: why it kept going, and why it stopped."),
		costUsd: N().optional().describe("What the round cost, in dollars."),
		changed: P().describe("Whether anything on disk moved. Three unchanged rounds in a row is the shape of a loop that is not working."),
		sessionId: j().optional().describe("The session it ran on, and the way from a history row to a readable record.")
	}), jp = z([
		"running",
		"done",
		"exhausted",
		"stalled",
		"overspent",
		"stopped",
		"error"
	]), Mp = kp.extend({
		state: jp.describe("How it ended, and each of these is a different thing to be told. Out of rounds says give it more room; stalled says it is not making progress and more room will not help. Overspent, stopped by a person, and the loop itself failing are all their own answers."),
		startedAt: N().describe("When it began, in milliseconds."),
		endedAt: N().optional().describe("When it ended, in milliseconds."),
		resumed: N().int().min(0).describe("How many times the sandbox restarted under it and picked it back up. Counted rather than flagged, so a loop whose round reliably kills the sandbox is not resurrected on every boot for ever."),
		detail: j().optional().describe("Why it ended, for the endings whose reason is not in their name."),
		iterations: F(Ap).describe("Every round, in order. Why it stopped at the fourth is the question a loop gets read for, and this is the answer.")
	}), Np = I({ loops: F(Mp).describe("Every loop this workspace has run, newest first, kept after they end.") }), Pp = I({ conversationId: ld.describe("Which conversation's loop.") }), Fp = I({
		id: J.describe("The design's id."),
		name: j().min(1).max(60).describe("What to call it. Short, because it has to be readable on a small badge."),
		description: j().max(280).optional().describe("What it is for, in one line. Optional, because a well-named loop has already said it."),
		prompt: j().optional().describe("What each round is asked to do, when that is worth saying separately from the goal. Absent means each round works towards the goal however it sees fit."),
		context: wp.describe("How each round meets the last: starting clean, or carrying on."),
		output: Tp.describe("What it has to produce."),
		checks: F(Ep).describe("What else has to be true."),
		maxIterations: N().int().min(1).max(Op).describe("How many rounds before it gives up."),
		maxSpendUsd: N().positive().optional().describe("A ceiling on what it may spend, in dollars."),
		stallLimit: N().int().min(1).describe("Stop after this many rounds in a row that changed nothing.")
	}), Ip = I({ designs: F(Fp).describe("Saved loops: the machinery with the goal left out, so one design can be pointed at a different job every time.") }), Lp = I({
		design: Fp.describe("The design to write."),
		create: P().describe("Whether you mean to make a new one or replace an existing one, so an id that happens to collide cannot silently overwrite the one you had.")
	}), Rp = I({ id: J.describe("Which saved loop.") });
})), Bp, Vp, Hp, Up, Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm = v((() => {
	W(), Y(), zp(), Bp = z([
		"idle",
		"running",
		"awaiting",
		"stopping",
		"dismissing",
		"stopped",
		"resuming",
		"landing",
		"ready",
		"landed",
		"conflict",
		"error",
		"interrupted"
	]), Vp = I({
		tool: j().optional().describe("The last tool it reached for."),
		target: j().optional().describe("What it reached for that tool with: a file, a command, a URL."),
		todo: j().optional().describe("The item on its own list that it is working through.")
	}), Hp = I({
		done: N().describe("Items it has completed."),
		total: N().describe("Items on the list. Never zero: a conversation that kept no list carries no clause at all.")
	}), Up = I({
		plan: P().describe("It has proposed a plan and is waiting for a yes."),
		question: P().describe("It has asked you something."),
		permission: P().describe("It wants to use a tool it needs permission for."),
		capability: P().describe("It needs something connected that is not connected yet."),
		credential: P().describe("It is waiting for a named person to release a credential. The one pause that may not be yours to clear, whatever your role."),
		conflict: P().describe("Its work cannot be merged without somebody resolving a clash.")
	}), Wp = I({
		at: N().describe("When the turn that left this ended, in milliseconds."),
		steps: I({
			open: N().describe("Items on it that were never completed."),
			total: N().describe("Items on the whole list."),
			next: j().optional().describe("The one it would have done next: what it was working through, or the first still waiting.")
		}).optional().describe("The agent's own checklist where that turn left it. Absent for a conversation that kept no list."),
		check: j().optional().describe("The end-of-turn check that was still failing when the turn ended, by name.")
	}), Gp = I({
		subject: j().describe("One line saying what the merged work did, read off the code rather than off the opening request. A conversation that asks for an audit and then spends four turns fixing what it found needs a subject about the fixes."),
		note: j().optional().describe("The same change said to somebody who uses the product, for a repository that keeps a changelog. Usually absent, because most changes are not ones a user would notice."),
		breaking: j().optional().describe("What this change takes away, for anything already relying on it. Nearly always absent: it is for removals, not for additions.")
	}), Kp = I({
		provider: j().min(1).describe("Which provider was asked."),
		model: j().min(1).describe("Which of its models."),
		status: z([
			"asking",
			"answered",
			"refused",
			"skipped"
		]).describe("How this one went. Skipped means it was not asked at all, because it refused a few minutes ago and the walk stepped over it."),
		at: N().optional().describe("When it started being asked, in milliseconds. Absent for one that was skipped, which cost no time."),
		ms: N().optional().describe("How long it took. Absent while it is still being asked."),
		reason: j().optional().describe("Why it refused, in its own words.")
	}), qp = I({
		startedAt: N().describe("When the drafting began, in milliseconds."),
		steps: F(Kp).describe("Each model that was asked, in the order they were spent, so the list is the timeline. Empty with no outcome means the diff is still being read."),
		outcome: z(["written", "failed"]).optional().describe("How it ended. Absent means it is still going."),
		reason: j().optional().describe("The one-line account of a failure, for a screen with one line to spend. The steps carry each model's own words."),
		finishedAt: N().optional().describe("When it ended, in milliseconds.")
	}), Jp = z([
		"workspace",
		"diverged",
		"binary"
	]), Yp = I({
		id: j().describe("The conversation id, which is how every other call addresses it."),
		sessionId: j().optional().describe("The provider session behind the last turn. It is retired whenever the model or account changes."),
		title: j().optional().describe("What to call it: the first prompt cut to one line, unless somebody renamed it."),
		status: Bp.describe("What it is doing. Stopping and stopped are the two halves of somebody pressing stop, because a cancel is not instant; dismissing is the same window for a question waved away, which ends the turn too but owes the user nothing; resuming means the sandbox is already putting right whatever killed the turn; landing means its work is being carried into the workspace right now, and nothing may act on its branch until that settles."),
		failure: j().optional().describe("Why the last turn failed, in the words it died on. Absent unless it did, and cleared the moment it runs again. Carried here because the word error on its own is not an answer, least of all for a run nobody was watching."),
		failureCode: j().optional().describe("Which kind of failure it was, as the turn's own error frame coded it. Absent for a failure nothing could classify, which reads as the plain red line it is."),
		limitResetsAt: N().optional().describe("When the spent allowance reopens, in epoch seconds. Absent when the provider publishes no instant."),
		limitHeld: P().optional().describe("Whether the refused turn is held whole, so sending again re-runs it instead of appending to it."),
		limitScheduled: P().optional().describe("Whether the held turn is already booked to go again at the reset, so nobody has to press anything."),
		limitMoving: j().optional().describe("The account the held turn is being moved to by the owner's policy, while that move is booked."),
		provider: id.describe("Which model provider it runs on."),
		harness: od.describe("Which agentic loop it runs on."),
		runner: j().optional().describe("The runner this conversation runs on. Absent means this sandbox."),
		startIn: j().optional().describe("Which folder it opened in, relative to the workspace root. Absent means the root."),
		actsAs: j().optional().describe("Which persona its first turn acted as. Absent for an ordinary chat."),
		model: j().optional().describe("What its last turn ran with. Kept per conversation so opening it restores the choices made in it, rather than whatever some other tab last picked."),
		effort: j().optional().describe("How hard that turn was told to think."),
		thinking: P().optional().describe("Whether that turn showed its reasoning."),
		fast: P().optional().describe("Whether that turn asked for higher speed. What was asked for, not what was served."),
		tier: z(["fast", "standard"]).optional().describe("How hard its last turn looked to the complexity judge. What the next turn's preview needs, not what actually ran."),
		tierHold: P().optional().describe("Whether this conversation is pinned to the picked model, so a turn that looks simple is never moved to a cheaper one."),
		account: j().optional().describe("Which connected account paid for it."),
		branch: j().optional().describe("The branch its private copy works on. Absent for a conversation that works directly in the shared tree."),
		autoLand: P().optional().describe("This conversation's own answer to whether its work merges automatically. Absent means it follows the sandbox-wide setting, which is the common case."),
		resumeAfterOutage: P().optional(),
		resumeAfterLimit: P().optional(),
		moveAfterLimit: P().optional(),
		landRequested: I({
			email: j().describe("Who asked."),
			name: j().optional().describe("Their display name."),
			at: N().describe("When they asked, in milliseconds.")
		}).optional().describe("A collaborator has asked a maintainer to merge this work. Cleared by whichever merge or discard answers it. Absent means nobody is waiting."),
		origin: ud.optional().describe("Where the conversation came from when nobody typed it: a chat mention, a visitor's message, a webhook. Absent means a person started it."),
		startedBy: j().optional().describe("Who asked for the first turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent when nothing was verified (a wake, a loopback caller)."),
		forkedFrom: gd.optional().describe("The conversation this one was cut from. Recorded once and never cleared: it is the relationship, not a pending state."),
		base: j().optional().describe("The commit its private copy started from, shortened."),
		costUsd: N().optional().describe("What it has cost so far, in dollars. A subagent's spend is its own and is not folded in here."),
		inputTokens: N().optional().describe("Tokens sent."),
		outputTokens: N().optional().describe("Tokens received."),
		contextTokens: N().optional().describe("How much of the window the conversation currently fills."),
		contextWindow: N().optional().describe("How large that window is."),
		promptCache: I({
			at: N().describe("When its last request touched the provider's prompt cache, in milliseconds."),
			ttlMs: N().describe("How long that entry lives from `at`, in milliseconds.")
		}).optional().describe("When this conversation's prompt cache was last kept alive and how long it lasts, which together say when picking the conversation up stops being cheap. Absent when the provider publishes nothing to ground it on."),
		activity: Vp.optional().describe("What it is doing at this moment."),
		checklist: Hp.optional().describe("How far it is through its own checklist. Absent for a conversation that kept no list, which is most short ones."),
		landedMessageDraft: qp.optional().describe("The whole story of this merge's commit message being written: which models were asked, how long each took, what refused and in what words. Forgotten on restart, which is right, because a restart also killed the drafting it describes."),
		landedMessage: Gp.optional().describe("What this conversation's merged work is called, once the drafting above has finished. It arrives on the same push that ends the draft, so the promise and the answer travel together."),
		startedAt: N().optional().describe("When the running turn started, in milliseconds. Absent when none is running."),
		updatedAt: N().describe("When it last did something, in milliseconds. Reading it does not count."),
		seenAt: N().optional().describe("When somebody last opened it, in milliseconds. Newer activity than this is what makes it unread. Kept by the sandbox rather than by a browser, so clearing site data or picking up a phone does not resurrect every badge."),
		attention: Up.describe("Which kinds of waiting-for-you it is doing."),
		conflictCauses: F(Jp).optional().describe("Why its work will not merge, and so who can clear it: your own uncommitted edits, which only you can commit or stash, against a moved main line or an unmergeable binary, which the conversation can redo on its own copy. Absent unless it is refusing to merge."),
		unfinished: Wp.optional().describe("What its last turn left open: steps it never completed, a check still failing. Absent for a turn that finished what it started."),
		turns: N().optional().describe("Turns it has finished."),
		toolUses: N().optional().describe("Tools it has used, over its whole life."),
		subagents: I({
			running: N().describe("Subagents working right now."),
			total: N().describe("Subagents it has started over its whole life.")
		}).optional().describe("Subagents and child agents this one delegated to. Absent means it never has, which is most conversations. Their spend is their own and is not folded into this conversation's cost."),
		diff: I({
			files: N().describe("Files touched."),
			insertions: N().describe("Lines added."),
			deletions: N().describe("Lines removed.")
		}).optional().describe("Everything it has written, measured from where it started. Independent of how much has been merged."),
		landedPresence: I({
			landed: N().describe("Paths this conversation merged in."),
			present: N().describe("How many of them are still there, either pending or committed.")
		}).optional().describe("Present only when some of what it merged has since been thrown away. Absent is the steady state: its presence is the signal, so an ordinary card spends no line on it."),
		loop: I({
			state: jp.describe("How the loop is going."),
			iteration: N().int().min(0).describe("Which round it is on."),
			maxIterations: N().int().min(1).describe("How many rounds it will attempt before giving up."),
			goal: j().describe("What it is looping towards.")
		}).optional().describe("The loop driving this conversation, if one is. Absent for an ordinary conversation, which is nearly all of them."),
		workflow: I({
			runId: j().describe("The run this belongs to, which is how a board groups its steps together."),
			name: j().describe("The workflow's name."),
			step: j().describe("Which step this conversation is on now. It moves when steps are chained."),
			index: N().int().min(1).describe("This step's place in the workflow, counting from one."),
			total: N().int().min(1).describe("How many steps the workflow has.")
		}).optional().describe("The workflow run this conversation is a step of. Without it, a four-step run reads as four unrelated conversations that happen to have started together."),
		watches: F(I({
			id: j().describe("The daemon's handle for this watch, the same one the agent was given when it armed it."),
			note: j().describe("The agent's own line on what it is waiting for."),
			intervalSeconds: N().int().min(1).describe("How often the check runs."),
			deadlineAt: N().describe("When it gives up and wakes the conversation anyway, in milliseconds. Every watch has one.")
		})).optional().describe("Outside conditions this conversation is parked on, each of which will wake it. Absent means none, which is nearly every conversation: an armed watch is why a finished-looking agent starts working by itself, and why a hosted machine will not go idle."),
		archivedAt: N().optional().describe("When it was put away, in milliseconds. Nothing was lost: its branch, its record and every counter stayed, and bringing it back gives it a fresh working copy. Absent means it is live on the board.")
	}), Xp = I({ id: j().min(1).describe("Which conversation.") }), Zp = Xp.extend({
		before: U().int().optional().describe("Return the messages before this position in the record: the `from` of the page below. Absent asks for the most recent turns."),
		turns: U().int().min(1).max(200).optional().describe("How many of the user's turns to return, newest first. Absent takes the daemon's default.")
	}), Qp = I({ ids: F(j().min(1)).max(500).optional().describe("Which conversations to put away. Leave it out for every finished one that can be archived right now.") }), $p = I({ ids: F(j().min(1)).min(1).max(500).describe("Which conversations.") }), em = I({
		moved: F(Yp).describe("What actually moved, whole, rather than the fleet afterwards. Two archives finishing at once would each carry a snapshot from a different instant, and swapping one in wholesale would let the slower answer resurrect what the faster one just filed away."),
		rev: N().describe("The version of the fleet that includes this move, so a caller can hold its own optimistic change until it sees a list at least that new.")
	}), tm = em.extend({ failed: F(I({
		id: j().describe("Which conversation stayed on the board."),
		reason: j().describe("Why its working copy could not be released, in the words the failure came with.")
	})).describe("The conversations this press could not put away, each with the reason, so the board can say it instead of reporting silence.") }), nm = I({ removed: F(j()).describe("Which conversations were deleted, as ids. Ids rather than whole cards, because these no longer exist anywhere: there is nothing left to show and nothing to put back.") }), rm = I({
		query: j().trim().min(2).describe("What to look for. Searched against what was said, both sides of the conversation, and nothing else: not the thinking, not the tool output, which between them name nearly every identifier in the workspace and would return most of the board."),
		caseSensitive: xl().optional().describe("Whether capitals matter.")
	}), im = z(["user", "agent"]), am = I({
		text: j().describe("The matching line, with a little either side of it."),
		speaker: im.describe("Who said it. Carried with the words rather than beside them, because a line of the agent's prose under a card reads as something you typed until the row says otherwise.")
	}), om = I({
		id: j().describe("Which conversation matched."),
		snippet: am.optional().describe("Why, in its own words. Absent when the title was the match, which the card already shows: repeating it underneath is noise where evidence was wanted.")
	}), sm = I({
		matches: F(om).describe("What matched, from the live fleet and the archive together."),
		scanned: N().describe("How many conversations were actually read, so a screen can say when a search saw less than everything rather than implying it saw all of it."),
		indexing: P().describe("Whether what was said is still being read in the background. True means this answer can still grow, so a screen must say it is incomplete rather than presenting it as the whole list.")
	}), cm = I({
		id: j().min(1).describe("Which conversation."),
		title: j().trim().min(1).max(80).describe("What to call it from now on.")
	}), lm = I({
		id: j().min(1).describe("Which conversation."),
		text: j().trim().min(1).max(8e3).describe("The words to put in the agent's mouth. Bounded just above what the next turn can carry whole, because a line too long to be handed over intact would reach the agent truncated and quietly break the very thing this is for.")
	}), um = I({
		id: j().min(1).describe("Which conversation."),
		autoLand: P().nullable().describe("Whether its work merges automatically when a turn finishes. Null clears the override and goes back to following the sandbox-wide setting, so a conversation does not sit holding a frozen copy of a default it has quietly stopped following.")
	}), dm = I({
		id: j().min(1).describe("Which conversation."),
		resumeAfterOutage: P().nullable().describe("Whether it retries by itself when the model provider was what failed. Null clears the override back to the sandbox-wide setting.")
	}), fm = I({
		id: j().min(1).describe("Which conversation."),
		resumeAfterLimit: P().nullable().describe("Whether the turn a spent allowance refused is sent again by itself once the window reopens. Null clears the override back to the sandbox-wide setting.")
	}), pm = I({
		id: j().min(1).describe("Which conversation."),
		moveAfterLimit: P().nullable().describe("Whether the turn a spent allowance refused is moved to another connected account of the same provider that has room, as soon as the refusal lands. Null clears the override back to the sandbox-wide setting.")
	}), mm = I({
		id: j().min(1).describe("Which conversation."),
		repo: j().min(1).describe("Which repository."),
		path: j().min(1).describe("Which file, relative to that repository.")
	}), hm = I({
		path: j().describe("Which file."),
		reason: Jp.describe("Why it would not merge, and the three have nothing in common but the symptom. Your own uncommitted edits on that path, where yours is the copy at risk. The shared tree having moved under the conversation since it started, where nothing of yours is at risk. Or a file git cannot merge at all, where no automatic answer exists.")
	}), gm = I({
		repo: j().describe("Which repository."),
		paths: F(hm).describe("The files that genuinely would not apply. Not the whole change: reporting everything whenever the cause could not be pinned down turned four real conflicts into a wall of fourteen."),
		clean: N().describe("How many files in this repository passed but remain held with the refused composition. Zero alongside an empty list means the repository could not be reached at all."),
		mainBranch: j().optional().describe("The branch your own checkout is on, which is what the conversation has to rebase onto. Carried because only the sandbox can see it. Absent where there is no name to give.")
	}), _m = I({
		landed: P().describe("Whether the entire composed change was applied."),
		conflicts: F(gm).optional().describe("What stopped the whole composed change, grouped per repository."),
		resolving: F(I({
			repo: j().describe("Which repository."),
			paths: F(j()).describe("Which files now hold conflict markers to sort out by hand.")
		})).optional().describe("Files left half-merged when you asked to carry the whole composition with its conflicts marked for resolution."),
		held: P().optional().describe("Nothing was applied and nothing failed: there is work waiting on the branch for a deliberate merge. Not merged on its own cannot say that, because on its own it means refused.")
	}), vm = z([
		"check",
		"merge",
		"measure"
	]), ym = z(["cumulative", "outstanding"]), bm = I({
		id: j().min(1).describe("Which conversation's work to merge."),
		mode: vm.optional().describe("How to apply it. The default applies every repository or none, so a refusal leaves the workspace exactly as it was. The other carries the whole composition and leaves conflicted paths with markers to resolve by hand."),
		span: ym.optional().describe("How much of the work to take. Leave it out for everything not yet merged."),
		force: P().optional().describe("Go ahead despite a check that would otherwise refuse.")
	});
})), Sm, Cm = v((() => {
	W(), Sm = I({
		status: z([
			"allowed",
			"allowed_warning",
			"rejected"
		]),
		resetsAt: N().optional(),
		rateLimitType: j().optional(),
		utilization: N().optional()
	});
})), wm, Tm = v((() => {
	W(), wm = z([
		"off",
		"cooldown",
		"on"
	]);
})), Em, Dm, Om, km, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm = v((() => {
	W(), Em = I({
		name: j().describe("Its id, and what the close route takes."),
		label: j().optional().describe("What to call it on screen."),
		kind: z([
			"shell",
			"panel",
			"agent",
			"job",
			"process"
		]).describe("What sort of thing it is: a terminal somebody opened, a repository's dev server, where an agent's commands run, a job the sandbox started, or a background process that is watched rather than typed into."),
		running: P().describe("Whether it is alive. A finished one-shot job leaves a dead shell behind, which reads as false and is how it gets swept up."),
		activityAt: N().describe("When it last produced output, in milliseconds. Zero means it did not say, which is unknown rather than 1970."),
		exitCode: N().optional().describe("How the last thing in it ended. Absent while that pane is still alive."),
		command: j().optional().describe("What is running in it right now. Absent when it is sitting at a prompt. Not a second spelling of whether it is alive: this says whether anything is happening, which is what a close button should ask about before it ends something."),
		extensionId: j().optional().describe("Which extension declared this process, when one did."),
		processName: j().optional().describe("Which of that extension's processes it is, which together with the id above addresses its start and stop routes."),
		help: I({
			requestId: j().describe("What to send back when you answer, through the agent reply route."),
			message: j().describe("What the agent needs, in its own words."),
			requestedAt: N().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has stopped at something only a person can clear, and is waiting at this terminal. Present only while it is waiting.")
	}), Dm = I({ sessions: F(Em).describe("Every live surface the sandbox is holding, in one list, because the question they all answer is the same one.") }), Om = I({ name: j().describe("Which terminal.") }), km = I({
		name: j().describe("Which terminal."),
		lines: U().min(1).max(1e5).default(2e4).describe("How far back to ask for. Clamped to the history that actually exists.")
	}), Am = I({
		name: j().describe("Which terminal this is from."),
		text: j().describe("The history, oldest line first, with wrapped lines rejoined so a copied address or path comes back whole."),
		lines: N().describe("How many lines you got."),
		truncated: P().describe("It stopped because you asked for that many, not because the history ran out.")
	}), jm = I({
		id: j().describe("Stable for the life of the page, which is what lets a tab survive a refresh of this list. Its address changes as the agent navigates and its position changes when a sibling closes."),
		title: j().optional().describe("The page's title. Absent mid-navigation, which is exactly when a tab still has to be drawn."),
		url: j().describe("Where it is."),
		active: P().describe("The one the agent last touched, or for a finished session, the one it ended on. Exactly one page has this.")
	}), Mm = I({
		name: j().describe("Its id, and what the close route takes."),
		label: j().describe("What to call it on screen: the open page's title, or its site, or which browser this is."),
		server: j().describe("Which browser drives it: the credential-free one, or a signed-in account's. The difference between a throwaway page and one logged in as you, which is worth saying out loud."),
		running: P().describe("Whether it is still open. A closed one is listed for a while with the pages it had, as the record of where the agent went."),
		activityAt: N().describe("When it last did anything, in milliseconds."),
		finishedAt: N().optional().describe("When it closed, in milliseconds. Absent while it is open."),
		help: I({
			requestId: j().describe("What to send back when you answer, through the agent reply route."),
			message: j().describe("What the agent needs, in its own words."),
			requestedAt: N().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has hit something only a person can clear: a captcha, a password it does not hold, a check on your phone. Present only while it is waiting."),
		pages: F(jm).describe("Every page it has open. A browser holds several at once, which is the reason it is listed apart from the terminals.")
	}), Nm = I({ sessions: F(Mm).describe("Every browser the agents have running, open or recently closed.") }), Pm = I({ name: j().describe("Which browser.") }), Fm = z(["subagent", "spawned"]), Im = z([
		"pending",
		"running",
		"blocked",
		"completed",
		"failed",
		"killed",
		"paused"
	]), Lm = I({
		state: z([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).describe("Whether anything proved its work: a check passed after its last edit, it changed code and nothing checked it, a check ran and failed, or it changed no code at all."),
		paths: F(j()).optional().describe("The code files it changed, most recent last. The first few; the record holds the rest."),
		check: j().optional().describe("The command that spoke: the one that cleared it, or the one that failed. Named rather than summarised, so a targeted test is not read as the whole suite.")
	}), Rm = I({
		id: j().describe("The id of the tool call that started it (an SDK child) or the child's own conversation id (a spawned one); either way both sides already hold it, so a card links to its subagent with the id it has and the subagent points back the same way."),
		kind: Fm.describe("What sort of subagent: one the runtime's own Task tool spawned in-process, or a full child agent the daemon started for the turn. It changes only how you watch it."),
		conversationId: j().describe("The conversation whose turn started it, and the way back to the chat it belongs to."),
		agentType: j().optional().describe("What kind of subagent it is."),
		description: j().optional().describe("What it was asked to do, in one line."),
		model: j().optional().describe("Which model it runs on."),
		provider: j().optional().describe("Which provider serves it, for a child agent spawned across providers."),
		spawnDepth: N().optional().describe("How deep in the chain it sits, where one means the turn itself started it. A subagent can start subagents, and a flat list that could not say so would read as though the turn started all of them."),
		background: P().optional().describe("The parent carried on working instead of waiting for it. This is the whole reason the list exists: such a subagent used to be invisible until its result landed, sometimes minutes later."),
		status: Im.describe("How it is going. Blocked means it needs an answer, which a parent and an operator act on differently from it simply working."),
		startedAt: N().describe("When it started, in milliseconds."),
		endedAt: N().optional().describe("When it finished, in milliseconds. Absent while it works."),
		activityAt: N().describe("When it last did anything, in milliseconds."),
		tokens: N().optional().describe("What it has spent. Its own, so a parent's cost and the sum of its subagents' are two different true numbers."),
		toolUses: N().optional().describe("How many tools it has used."),
		lastTool: j().optional().describe("The last one it reached for."),
		summary: j().optional().describe("Its report: what it concluded, without opening its record. The question a finished subagent gets read for."),
		error: j().optional().describe("Why it failed, when it did."),
		verification: Lm.optional().describe("Whether anything proved the work its report describes.")
	}), zm = I({ sessions: F(Rm).describe("Every subagent and child agent this sandbox's conversations have started.") }), Bm = I({ id: j() });
})), Hm, Um, Wm, Gm, Km, qm, Jm = v((() => {
	W(), Hm = z(["messages", "everything"]), Um = I({
		id: j().describe("The share's own id, minted fresh each time, so sharing one conversation twice gives two links. Deliberately not the conversation's id, which is memorable by design and would make a page's address guessable."),
		conversationId: j().describe("Which conversation it was taken from."),
		title: j().describe("The title on the page, which is the sharer's choice rather than the conversation's own."),
		detail: Hm.describe("How much travels: the two speakers' words alone, or the whole record including the agent's work and thinking, which necessarily publishes the code and command output in it."),
		sharedAt: N().describe("When the snapshot was taken, in milliseconds. A share is frozen, so this dates what a recipient can see rather than when the conversation happened."),
		messages: N().describe("How many messages are behind the link."),
		url: j().optional().describe("The page's address. Absent on a sandbox with nowhere to publish to.")
	}), Wm = I({ shares: F(Um).describe("Every conversation currently published as a page.") }), Gm = I({
		conversationId: j().min(1).describe("Which conversation to publish."),
		title: j().min(1).max(80).describe("The title for the page. The conversation's own name is only what a dialog would open with."),
		detail: Hm.describe("How much to publish. Two levels rather than a set of switches, because every extra toggle is another thing to get wrong about a link that cannot be recalled.")
	}), Km = I({ id: j().min(1).describe("Which share to re-take. Its link stays the same, which matters because it has already been sent.") }), qm = I({ id: j().min(1).describe("Which share to take down.") });
})), Ym, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh = v((() => {
	W(), Y(), Jm(), Vm(), pp(), Ym = z([
		"pending",
		"approved",
		"rejected",
		"cancelled"
	]), Xm = z([
		"pending",
		"answered",
		"cancelled"
	]), Zm = z([
		"pending",
		"allowed",
		"always",
		"denied",
		"cancelled"
	]), Qm = z([
		"pending",
		"helped",
		"declined",
		"cancelled"
	]), $m = z([
		"pending",
		"approved",
		"skipped",
		"cancelled"
	]), eh = z([
		"pending",
		"connecting",
		"skipped",
		"cancelled"
	]), th = I({
		...$f,
		status: Ym.describe("Where the decision stands.")
	}), nh = I({
		...ep,
		status: Xm.describe("Where the answer stands."),
		answers: R(j(), F(j())).optional().describe("What was chosen, keyed by the question, with the chosen labels or the user's own words.")
	}), rh = Rf.extend({
		...tp,
		status: Zm.describe("Where the decision stands.")
	}), ih = I({
		...np,
		status: Qm.describe("How the hand-over ended.")
	}), ah = I({
		...rp,
		status: Qm.describe("How the hand-over ended.")
	}), oh = I({
		...ip,
		status: eh.describe("Where the decision stands."),
		outcome: sp.optional().describe("How an accepted ask's setup ended (the capability_outcome frame).")
	}), sh = I({
		...ap,
		status: $m.describe("Where the decision stands."),
		receipt: cp.optional().describe("How the approved payment ended (the payment_receipt frame).")
	}), ch = I({
		...op,
		status: $m.describe("Where the decision stands."),
		receipt: lp.optional().describe("Who released it, or that somebody refused (the credential_receipt frame).")
	}), lh = bc(() => I({
		id: j().describe("The call's id."),
		name: j().describe("Which tool."),
		category: qf.describe("What kind of thing it does: read, edit, delete, move, search, run, think, fetch. Named the same way whatever the backend called the tool."),
		status: Jf.describe("How it went."),
		target: j().optional().describe("What it acted on, in one line: a file, a command, an address."),
		locations: F(Yf).optional().describe("The files it touched."),
		content: F(Xf).optional().describe("What it produced: text, a change to a file, or a picture."),
		children: F(lh).optional().describe("Calls a delegated subagent made, nested under the call that started it, so a reopened conversation redraws the delegation rather than collapsing it into one result."),
		thinking: j().optional().describe("What the agent was reasoning about around this call."),
		subagent: uh.optional().describe("The helper this call started, as the daemon's registry sees it: what it is, how it is going, what it has spent. What a card can say about a backgrounded child whose result is minutes away.")
	})), uh = I({
		kind: Fm,
		agentType: j().optional(),
		description: j().optional(),
		model: j().optional(),
		provider: j().optional(),
		background: P().optional(),
		status: Im,
		tokens: N().optional(),
		toolUses: N().optional(),
		lastTool: j().optional(),
		summary: j().optional(),
		error: j().optional(),
		verification: Lm.optional()
	}), dh = I({
		title: j().describe("The one line a reader sees, on a row that opens to the text below."),
		text: j().describe("The note itself, which is also exactly what the model was told.")
	}), fh = I({
		costUsd: N().optional(),
		inputTokens: N().optional(),
		outputTokens: N().optional(),
		durationMs: N().optional(),
		numTurns: N().optional()
	}), ph = I({
		role: z([
			"user",
			"assistant",
			"notice"
		]).describe("Who said it. A notice is neither side: it is something that happened to the turn, recorded so a reopened conversation can say it. Without those, a turn a provider refused ends on the user's message and reads as broken."),
		text: j().describe("The words."),
		sentAt: N().optional().describe("When it was sent, in milliseconds. On the user's rows only, because that is the only moment actually known: a turn's own frames arrive with no clock, so stamping the agent's rows could only ever mean the whole turn's start or end."),
		attachments: F(j()).optional().describe("Files attached to this message, as workspace paths."),
		checkpointId: j().optional().describe("The saved point this message can be rewound to. Looked up on each read rather than stored, so what is offered is exactly what is still there to go back to."),
		rewindIndex: N().int().nonnegative().optional().describe("This message's position in the conversation's record, which is how a rewind names it. Present only beside a checkpoint."),
		thinking: j().optional().describe("What the agent was reasoning about."),
		tools: F(lh).optional().describe("The tool calls this part of the turn made."),
		todos: F(Gf).optional().describe("The agent's task checklist, as of this bubble."),
		usage: fh.optional().describe("What the turn cost, on the bubble its answer ended in."),
		notes: F(dh).optional().describe("What the sandbox added to this message before the model saw it. Carried on the message rather than as rows of their own, because they genuinely were part of what was sent."),
		placed: P().optional().describe("A person wrote this in the agent's voice, with no turn behind it. Marked for the human re-reading the conversation months later, so their own words do not pass as the agent's. The agent itself never sees the mark."),
		noticeAction: z([
			"landHold",
			"outageOptOut",
			"depsInstall",
			"tierHold"
		]).optional().describe("A one-press follow-up this notice offers, by name. The chat decides what it does and whether it still applies."),
		noticeWait: z(["credentialRenewal", "personaRoute"]).optional().describe("The wait this notice describes, by name, so a reader can say whether it is still on."),
		plan: th.optional().describe("The plan this row asked approval for, and the answer."),
		question: nh.optional().describe("The questions this row asked, and the picks that answered them."),
		permission: rh.optional().describe("The tool this row asked permission for, and the decision."),
		browserHelp: ih.optional().describe("The browser hand-over this row asked for, and how it ended."),
		terminalHelp: ah.optional().describe("The terminal hand-over this row asked for, and how it ended."),
		capabilityOffer: oh.optional().describe("The capability setup this row asked for, the decision, and the outcome."),
		paymentOffer: sh.optional().describe("The payment this row asked for, the decision, and the receipt."),
		credentialOffer: ch.optional().describe("The gated credential this row asked to use, who may release it, and who did.")
	}), mh = L("op", [
		I({
			op: B("append").describe("A new row at the end."),
			row: ph
		}),
		I({
			op: B("replace").describe("This row, whole, in place of the one at that index."),
			index: N().int().nonnegative(),
			row: ph
		}),
		I({
			op: B("drop").describe("The row at that index is gone: it was opened and never written into."),
			index: N().int().nonnegative()
		}),
		I({
			op: B("text").describe("More of the agent's prose, onto that row's text."),
			index: N().int().nonnegative(),
			text: j()
		}),
		I({
			op: B("thinking").describe("More of the agent's reasoning, onto that row's thinking."),
			index: N().int().nonnegative(),
			text: j()
		}),
		I({
			op: B("tool").describe("A tool card, whole: new, or the latest state of one already there, matched by id wherever it nests."),
			index: N().int().nonnegative(),
			tool: lh,
			parent: j().optional().describe("The card this one nests under, when it is a delegated subagent's own call.")
		})
	]), hh = I({ messages: F(ph).describe("The conversation, in order. Each block of the agent's prose is its own message with the tools that block introduced, which is what reproduces the way it actually unfolded.") }), gh = I({
		reason: z([
			"stopped",
			"limit",
			"outage"
		]).describe("Which ending left the work here: a Stop or a daemon killed under the turn, a spent usage allowance, or a provider that refused it."),
		resetsAt: N().optional().describe("When the spent allowance reopens, in epoch seconds. Absent for every ending that names no instant, and for a provider that publishes none."),
		held: I({
			ran: P().describe("Whether the held turn got anywhere before it was refused, which is a different sentence from one refused at the door."),
			contextTokens: N().optional().describe("How much context a press that keeps the session re-reads once, on this account at the reset or carried to another. Absent when no usage frame measured it."),
			handoffTokens: N().optional().describe("What a press that opens a fresh session pays instead: the capped record plus the sandbox's measured brief, counted at the failure."),
			moving: j().optional().describe("The account the owner's policy is already moving this turn to, when it is; the surface then reports the move rather than offering a press.")
		}).optional().describe("Present when the daemon still holds the refused turn whole, so a press re-runs it rather than appending a message after it."),
		scheduled: P().optional().describe("Whether something other than the user is already booked to send this turn again, so the surface reports the wait instead of offering a press.")
	}), _h = hh.extend({
		sessionId: j().optional().describe("The provider session behind the last turn, when there is one."),
		provider: id.optional().describe("Which provider minted that session."),
		harness: od.optional().describe("Which runtime minted it: a session resumes only on the loop that opened it."),
		account: j().optional().describe("Which stored account it belongs to, as the daemon resolved it. Absent when no stored account paid for the turn."),
		ending: gh.optional().describe("How the last turn ended, when it left work behind that one press finishes. Absent for a conversation whose last turn ended on its own, and for the failures that name something to repair first."),
		from: N().int().nonnegative().describe("Where the first message sits in the whole record, and the `before` that asks for the page above this one."),
		more: P().describe("Whether older messages precede this page.")
	}), I({
		title: j(),
		sharedAt: N(),
		detail: Hm,
		messages: F(ph)
	});
})), yh, bh, xh, Sh, Ch, wh = v((() => {
	W(), Y(), xm(), Cm(), Tm(), Id(), Vm(), pp(), vh(), yh = L("kind", [
		I({
			kind: B("session"),
			sessionId: j(),
			account: j().optional().describe("Which stored account this session belongs to, as the daemon resolved it for the turn.")
		}),
		I({
			kind: B("worktree"),
			branch: j(),
			base: j(),
			unenforced: P().optional(),
			sync: I({
				commits: N(),
				blocked: F(j())
			}).optional(),
			remote: j().optional()
		}),
		I({
			kind: B("landed"),
			landed: P(),
			conflicts: F(gm).optional(),
			held: P().optional(),
			deps: I({
				missing: N(),
				started: F(j()),
				deferred: P()
			}).optional()
		}),
		I({
			kind: B("preamble"),
			notes: F(dh)
		}),
		I({
			kind: B("init"),
			model: j()
		}),
		I({
			kind: B("checkpoint"),
			id: j(),
			index: N().int().nonnegative().optional()
		}),
		I({
			kind: B("steer"),
			text: j(),
			sentAt: N(),
			attachments: F(j()).optional()
		}),
		I({
			kind: B("delta"),
			text: j(),
			parentToolUseId: j().optional()
		}),
		I({
			kind: B("text_end"),
			parentToolUseId: j().optional()
		}),
		I({
			kind: B("thinking"),
			text: j(),
			parentToolUseId: j().optional()
		}),
		I({
			kind: B("tool_call"),
			id: j(),
			name: j(),
			category: qf,
			status: Jf,
			target: j().optional(),
			locations: F(Yf).optional(),
			content: F(Xf).optional(),
			parentToolUseId: j().optional()
		}),
		I({
			kind: B("tool_call_update"),
			id: j(),
			status: Jf.optional(),
			content: F(Xf).optional(),
			locations: F(Yf).optional()
		}),
		I({
			kind: B("terminal"),
			session: j()
		}),
		I({
			kind: B("browser"),
			session: j()
		}),
		I({
			kind: B("subagent"),
			id: j(),
			subagentKind: Fm,
			agentType: j().optional(),
			description: j().optional(),
			model: j().optional(),
			provider: j().optional(),
			background: P().optional()
		}),
		I({
			kind: B("subagent_update"),
			id: j(),
			status: Im.optional(),
			tokens: N().optional(),
			toolUses: N().optional(),
			lastTool: j().optional(),
			summary: j().optional(),
			error: j().optional(),
			verification: Lm.optional()
		}),
		I({
			kind: B("todos"),
			items: F(Gf)
		}),
		I({
			kind: B("commands"),
			items: F(Hf)
		}),
		I({
			kind: B("usage"),
			account: j().optional(),
			costUsd: N().optional(),
			inputTokens: N().optional(),
			outputTokens: N().optional(),
			cacheReadTokens: N().optional(),
			cacheCreationTokens: N().optional(),
			durationMs: N().optional(),
			numTurns: N().optional()
		}),
		Sm.extend({
			kind: B("rate_limit_info"),
			account: j().optional()
		}),
		I({
			kind: B("fast_mode"),
			state: wm,
			reason: j().optional()
		}),
		I({
			kind: B("tier"),
			tier: z(["fast", "standard"]),
			score: N(),
			rules: F(j()),
			model: j().optional(),
			routed: P(),
			held: P().optional()
		}),
		I({
			kind: B("provider_retry"),
			attempt: N(),
			maxAttempts: N().optional(),
			nextAttemptAt: N().optional(),
			status: N().optional()
		}),
		I({
			kind: B("account_usage"),
			account: j().optional(),
			windows: F(Cd)
		}),
		Kf.extend({ kind: B("context_usage") }),
		I({
			kind: B("compact"),
			trigger: j(),
			preTokens: N().optional(),
			postTokens: N().optional()
		}),
		up,
		dp,
		fp,
		I({
			kind: B("browser_help"),
			...np
		}),
		I({
			kind: B("terminal_help"),
			...rp
		}),
		I({
			kind: B("capability_offer"),
			...ip
		}),
		sp.extend({
			kind: B("capability_outcome"),
			requestId: j()
		}),
		I({
			kind: B("payment_offer"),
			...ap
		}),
		cp.extend({
			kind: B("payment_receipt"),
			requestId: j()
		}),
		I({
			kind: B("credential_offer"),
			...op
		}),
		lp.extend({
			kind: B("credential_receipt"),
			requestId: j()
		}),
		I({
			kind: B("resolved"),
			requestId: j(),
			reply: jd.optional()
		}),
		I({
			kind: B("mode"),
			mode: hd
		}),
		I({
			kind: B("error"),
			message: j(),
			code: z([
				"session-not-found",
				"rate_limit",
				"codex-advisory",
				"codex-reauth",
				"claude-reauth",
				"claude-token-refused",
				"claude-not-entitled",
				"provider-outage",
				"trial-unavailable",
				"trial-model-unavailable",
				"trial-exhausted",
				"unknown-command",
				"grok-model-invalid",
				"codex-model-invalid",
				"model-unavailable",
				"context-window-too-small",
				"subscription-required",
				"agent-busy",
				"sandbox-memory-low",
				"turn-cap",
				"harness-incomplete",
				"engine-version-floor"
			]).optional(),
			engine: I({
				id: j().describe("Which engine (e.g. claude)."),
				running: j().optional().describe("The version that was refused, when the provider named it."),
				floor: j().describe("The lowest version the provider will accept.")
			}).optional(),
			resetsAt: N().optional(),
			autoResume: z(["scheduled", "available"]).optional(),
			held: I({
				ran: P(),
				contextTokens: N().optional(),
				handoffTokens: N().optional(),
				moving: j().optional()
			}).optional(),
			outage: I({
				retryAt: N(),
				attempt: N(),
				maxAttempts: N()
			}).optional()
		}),
		I({ kind: B("done") })
	]), bh = [
		"session",
		"worktree",
		"init",
		"terminal",
		"browser",
		"commands",
		"usage",
		"rate_limit_info",
		"fast_mode",
		"tier",
		"provider_retry",
		"account_usage",
		"context_usage",
		"mode",
		"error"
	], xh = yh.options.filter((e) => bh.includes(e.shape.kind.value)), Sh = L("kind", xh), Ch = L("kind", [
		I({
			kind: B("attached").describe("The first frame, identifying the run you have joined and handing you its transcript so far."),
			run: j().describe("The run's id."),
			startedAt: N().describe("When it started, in milliseconds, so a window joining late can show how long it has been going."),
			seq: N().describe("How many frames the run has produced so far. A fact at or below this number is being replayed; a patch is never."),
			rows: F(ph).describe("The turn's rows as they stand: what was asked, and everything the agent has said and done since. Draw these, then apply the patches that follow.")
		}),
		I({
			kind: B("patch").describe("One change to the run's rows."),
			seq: N().describe("Its position in the run, counting from one."),
			patch: mh
		}),
		I({
			kind: B("fact").describe("One thing about the turn that is not a row: its session, its branch, its cost, a failure."),
			seq: N().describe("Its position in the run, counting from one. At or below the head's number, it is being replayed."),
			fact: Sh
		}),
		I({ kind: B("end").describe("The run is over and every frame has been delivered. A stream that closes without this was dropped mid-run, so re-attach rather than assuming the turn finished.") })
	]);
})), Th, Eh, Dh, Oh, kh, Ah, jh, Mh, Nh, Ph, Fh, Ih = v((() => {
	W(), Th = z([
		"turn",
		"interval",
		"pre-restore",
		"restore",
		"user"
	]), Eh = I({
		id: j().describe("The saved point's id, which is what restoring and diffing take."),
		at: N().describe("When it was taken, in milliseconds."),
		trigger: Th.describe("What caused it. The automatic between-turn captures are a safety net and are not listed; they dissolve into the next visible point's differences."),
		label: j().optional().describe("What to call it. For one taken before a turn, that turn's prompt.")
	}), Dh = I({ snapshots: F(Eh).describe("Every point you can go back to, newest first.") }), Oh = I({
		conversationId: j().min(1).describe("Which conversation to rewind."),
		index: N().int().nonnegative().describe("Which message to go back to, counting from the start. It is also how many messages survive: rewinding to the first keeps none of them and puts the files back to before it ran.")
	}), kh = I({
		snapshot: j().optional().describe("The saved point the files were put back to. Absent for a conversation working in its own copy, whose rewind moved a branch rather than the shared timeline."),
		dropped: N().int().nonnegative().describe("How many messages were removed.")
	}), Ah = I({ id: j().min(1).describe("Which saved point.") }), jh = I({
		scope: j().describe("Which part of the workspace the path belongs to: the workspace root, or one of the repositories inside it."),
		path: j().describe("The path, relative to that scope."),
		status: z([
			"added",
			"modified",
			"deleted",
			"type-changed"
		]).describe("What happened to it.")
	}), Mh = I({ changes: F(jh).describe("Everything that differs between this saved point and the one before it.") }), Nh = I({
		id: j().min(1).describe("Which saved point."),
		scope: j().min(1).describe("Which part of the workspace the path belongs to."),
		path: j().min(1).describe("The file, relative to that scope.")
	}), Ph = I({
		beforeBytes: N().int().nonnegative().optional().describe("How big the before side is, in bytes. Absent when the file did not exist yet."),
		afterBytes: N().int().nonnegative().optional().describe("How big the after side is, in bytes. Absent when the file was deleted."),
		patch: j().optional().describe("The changed regions as unified-diff hunks (`@@` sections only). Absent when the change was too large to render even as a patch."),
		more: P().optional().describe("There were more changed regions than fit; the patch stops at a region boundary.")
	}), Fh = I({
		before: j().optional().describe("The whole file as it was. Absent when it did not exist yet, or when `partial` is set."),
		after: j().optional().describe("The whole file as it is now. Absent when it was deleted, or when `partial` is set."),
		binary: P().optional().describe("The file is not text, so neither side is sent."),
		partial: Ph.optional().describe("Set when the file was too large to send whole: what is sent instead of the two sides.")
	});
})), Lh, Rh = v((() => {
	q(), pp(), wh(), Y(), Ih(), Id(), Q(), Lh = {
		run: K.route({
			method: "POST",
			path: "/agent",
			summary: "Say something to an agent",
			description: "Starts a turn and answers immediately with its id; the work runs inside the sandbox whether or not anybody stays connected. Watch it by attaching. Naming a conversation that does not exist yet opens it."
		}).input(_d).output(bd),
		attach: K.route({
			method: "POST",
			path: "/agent/attach",
			summary: "Watch a turn happen",
			description: "Streams everything the agent does: its words, the tools it reaches for, and the answers it gets. Give it the point you have already seen and it replays from there before going live, so a reload loses nothing. The window that started the turn holds no special claim, and any number of watchers on any number of devices see the same thing."
		}).input(xd).output(G(Ch)),
		reply: K.route({
			method: "POST",
			path: "/agent/reply",
			summary: "Answer a question the agent asked",
			description: "Un-parks a turn that is waiting on you: approving a plan, choosing between options, or permitting a tool. The turn picks up where it stopped."
		}).input(jd).output(X),
		steer: K.route({
			method: "POST",
			path: "/agent/steer",
			summary: "Interrupt a running turn",
			description: "Slips a message into a turn already under way, without stopping it. This is how you redirect an agent mid-thought rather than waiting for it to finish being wrong."
		}).input(Md).output(X),
		stop: K.route({
			method: "POST",
			path: "/agent/stop",
			summary: "Stop a turn now",
			description: "Cancels the running turn inside the sandbox. Whatever it had already written to disk stays written."
		}).input(Nd).output(X),
		resume: K.route({
			method: "POST",
			path: "/agent/resume",
			summary: "Run a refused turn again",
			description: "Sends the same turn again when the model provider's allowance refused it, with everything it originally carried except who serves it: the caller may name a different provider, harness or account, which is the usual answer to a spent allowance. It repeats the request rather than adding a new message to the conversation, so pressing it twice costs nothing and the agent is never told to continue work it has not started."
		}).input(Fd).output(bd),
		rewind: K.route({
			method: "POST",
			path: "/agent/rewind",
			summary: "Go back to an earlier message",
			description: "Puts the files back as they stood at that point, drops every message after it, and forgets what the model remembered, so the next thing you say starts from there cleanly. Refused while a turn is running, because a restore cannot overwrite files an agent is editing, and refused for a message with no saved state to return to."
		}).input(Oh).output(kh),
		commands: K.route({
			method: "GET",
			path: "/agent/commands",
			summary: "Shortcut commands the agent knows",
			description: "The commands a provider published the last time one of its turns ran, so a composer can offer them before this conversation has run anything. A running turn's own list wins over this one."
		}).input(Uf).output(Wf),
		refusals: K.route({
			method: "GET",
			path: "/agent/refusals",
			summary: "The last time each provider said no",
			description: "What each model provider most recently refused and why. Read this alongside an account's usage: the usage says how full it was when last checked, this says whether it has since started turning work away."
		}).output(Od)
	};
})), zh, Bh, Vh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng = v((() => {
	W(), rd(), zh = z([
		"crash",
		"report",
		"detection"
	]), Bh = I({
		at: N().describe("When, in milliseconds."),
		kind: j().max(40).describe("What sort of thing it was: a console line, a request, a click, a route change."),
		message: j().max(300).describe("What it said, already truncated by the SDK.")
	}), Vh = I({
		email: j().max(320).optional().describe("An address they typed, to reach them about it. Unverified."),
		name: j().max(200).optional().describe("A name they typed. Unverified, and never identity.")
	}), Hh = 20, Uh = R(j().max(60), j().max(300)).refine((e) => Object.keys(e).length <= Hh, { message: `at most ${Hh} context entries` }), Wh = I({
		kind: zh.describe("A crash the SDK caught, something a person wrote in, or a problem the SDK noticed on its own."),
		message: j().min(1).max(1e3).describe("The error's own message, or the headline of what a person reported."),
		stack: j().max(2e4).optional().describe("The stack, verbatim from the browser."),
		url: j().max(2e3).optional().describe("Where it happened: the page's address, or a screen name in an app."),
		release: j().max(200).optional().describe("Which build it came from: a commit sha or a tag. With it the agent reads your real source rather than minified frames."),
		userAgent: j().max(400).optional().describe("What the browser said it was."),
		description: j().max(5e3).optional().describe("What the person typed, when a person is the one reporting."),
		reporter: Vh.optional().describe("Who says they are reporting it. Unverified by construction."),
		breadcrumbs: F(Bh).max(40).optional().describe("What happened just before, oldest first."),
		context: Uh.optional().describe("Whatever else the app attached: a route, a version, a locale."),
		fingerprint: j().max(200).optional().describe("Group by this instead of by the stack, when your app knows better than the stack does.")
	}), I({
		report: Wh,
		clientId: j().min(1).max(200).describe("The SDK's own id for this browser. Not a secret: it is what the rate limit counts against."),
		powNonce: j().max(400).optional(),
		key: j().max(200).optional()
	}), Gh = z([
		"open",
		"investigating",
		"resolved",
		"ignored"
	]), Kh = I({
		conversationId: j().describe("The conversation this run became."),
		at: N().describe("When it started, in milliseconds."),
		atCount: N().describe("How many times it had happened when this run started.")
	}), qh = I({
		kind: zh,
		title: j().min(1).max(300).describe("The one line this is listed under."),
		culprit: j().max(300).optional().describe("The frame it came from, when the stack named one."),
		automationId: J.describe("Which intake received it."),
		origin: j().max(400).optional().describe("Which site it came from."),
		firstSeen: N().describe("When it first happened, in milliseconds."),
		lastSeen: N().describe("When it last happened, in milliseconds."),
		count: N().describe("How many times this exact thing has arrived."),
		status: Gh.default("open").describe("Where it stands with you."),
		statusAt: N().optional().describe("When the status last changed, in milliseconds."),
		release: j().max(200).optional().describe("The build the latest one came from."),
		sample: Wh.describe("The most recent one, in full."),
		firedAt: N().optional().describe("What the count stood at the last time this woke an agent."),
		runs: F(Kh).max(20).optional().describe("The turns started for it.")
	}), Jh = qh.extend({ id: J.describe("The issue's id, which is its fingerprint.") }), Yh = I({
		issues: F(Jh).describe("The inbox, most recently seen first."),
		invalid: F(j()).describe("Files in the issues directory that could not be read at all.")
	}), Xh = I({ id: J.describe("Which issue.") }), Zh = I({
		id: J.describe("Which issue."),
		status: z([
			"open",
			"resolved",
			"ignored"
		]).describe("Where it now stands with you.")
	}), Qh = I({
		keyFromBrowsers: P().optional().describe("Let a browser report with the key alone, rather than only from a site you listed. Off unless you need it."),
		dailyReportMax: N().int().positive().optional().describe("How many reports a day this intake accepts at all."),
		escalateAfter: N().int().positive().optional().describe("How many more times a known crash must happen before it wakes an agent again."),
		antiBot: z(["pow"]).optional().describe("Make a person's browser solve a small puzzle before it accepts a written report."),
		title: j().max(80).optional().describe("The dialog's heading."),
		prompt: j().max(300).optional().describe("The line above the box they type in."),
		thanks: j().max(300).optional().describe("What it says once they have sent it."),
		askEmail: P().optional().describe("Ask for an address to reply to. Optional for them either way."),
		accent: j().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		captureCrashes: P().optional().describe("Catch uncaught errors automatically, as well as what people write in.")
	}), I({
		automationId: j(),
		title: j(),
		prompt: j(),
		thanks: j(),
		askEmail: P(),
		accent: j(),
		captureCrashes: P(),
		antiBot: z(["pow", "off"])
	}), I({
		ok: B(!0),
		id: j()
	}), $h = I({
		origin: j(),
		allowed: P(),
		lastSeenAt: N(),
		loads: N()
	}), eg = I({ origins: F($h) }), tg = I({ automationId: J.describe("Which intake.") });
})), rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg = v((() => {
	W(), Y(), xm(), rd(), ng(), rg = z([
		"turn.settled",
		"agent.landed",
		"deps.broken",
		"deps.fixed"
	]), I({
		event: rg,
		agentId: j(),
		title: j().optional(),
		branch: j(),
		outcome: z([
			"landed",
			"conflict",
			"ready",
			"idle",
			"error"
		]),
		repos: F(I({
			repo: j(),
			from: j(),
			dir: j()
		})),
		deps: I({
			project: j(),
			command: j(),
			exitCode: N(),
			attempt: N(),
			logTail: j()
		}).optional()
	}), ig = L("kind", [
		I({
			kind: B("schedule").describe("On a clock."),
			cron: j().min(1).describe("When, in cron notation."),
			afterSessions: N().int().positive().optional().describe("Fire only once at least this many new sessions have been run since the last wake. A due run short of that is skipped, and says how far off it is.")
		}),
		I({
			kind: B("event").describe("When something calls its webhook."),
			dailyMax: N().int().positive().optional().describe("How many webhook calls a day may wake the agent, across every caller. Absent is a modest default rather than unlimited.")
		}),
		I({
			kind: B("listener").describe("When a message arrives from somewhere outside."),
			provider: j().min(1).describe("Which service to listen to."),
			channelId: j().min(1).optional().describe("Narrow it to one channel or thread."),
			eventType: j().min(1).optional().describe("Narrow it to one kind of event."),
			mentioned: P().optional().describe("Only when the agent is actually addressed, rather than on everything said in earshot."),
			branch: j().min(1).optional().describe("Narrow it to one branch, for the sources that have branches. Absent means every branch of the repositories it matches."),
			allowedOrigins: F(j()).optional().describe("Which websites may reach the public endpoint, the chat widget's or the bug reporter's. Absent or empty admits nobody.")
		}),
		I({
			kind: B("workspace").describe("When something happens to the files or the repositories."),
			event: rg.describe("Which happening."),
			repo: j().min(1).optional().describe("Narrow it to one repository. Absent means any of them.")
		})
	]), ag = I({
		access: z(["public", "google"]).optional().describe("Who may write to it. Absent means anyone, which is the anonymous support box it looks like."),
		requireName: P().optional().describe("Ask a visitor for a name first. Cosmetic: the name is typed, so it reaches the model as something a stranger said, never as identity."),
		antiBot: z(["turnstile", "pow"]).optional().describe("How to keep bots out: a third-party check that needs the site's own keys, or a puzzle the sandbox sets and the widget solves, so a site with no such account still has something. Absent leaves the site allowlist and the rate limit as the whole boundary."),
		turnstileSiteKey: j().optional().describe("The public half of those keys, which ships to the visitor's browser."),
		turnstileSecret: j().optional().describe("The private half, which the sandbox keeps and the widget never sees."),
		googleClientId: j().optional().describe("The site's own sign-in client id. It cannot be ours: a sign-in is only issued to an approved origin, and no single client can list every customer's domain."),
		title: j().max(80).optional(),
		greeting: j().max(500).optional(),
		accent: j().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		position: z([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]).optional(),
		dailyMessageMax: N().int().positive().optional(),
		conversationMessageMax: N().int().positive().optional(),
		sessionTtlMinutes: N().int().positive().optional()
	}), I({
		automationId: j(),
		title: j(),
		greeting: j(),
		accent: j(),
		position: z([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]),
		access: z(["public", "google"]),
		requireName: P(),
		antiBot: z([
			"turnstile",
			"pow",
			"off"
		]),
		turnstileSiteKey: j().optional(),
		googleClientId: j().optional()
	}), I({
		salt: j(),
		difficulty: N().int().positive()
	}), I({
		conversationId: j().min(1).max(200),
		content: j().min(1),
		displayName: j().max(200).optional(),
		idToken: j().optional(),
		turnstileToken: j().optional(),
		powNonce: j().optional(),
		history: F(I({
			author: j().optional(),
			content: j()
		})).max(50).optional()
	}), I({
		replies: F(I({
			seq: N(),
			at: N(),
			text: j()
		})),
		cursor: N()
	}), og = I({
		label: j().max(60).optional().describe("What to call these people on screen."),
		ids: F(j().min(1).max(200)).max(200).optional().describe("Sender ids, as the service names them, never display names."),
		groups: F(j().min(1).max(200)).max(50).optional().describe("Group ids the service reports on a sender, a Discord role. Only for a source whose messages carry them."),
		actsAs: J.optional().describe("Which persona their wakes speak as. Absent is no persona: the full toolbox, reaching no account."),
		requireApproval: P().optional().describe("Hold their wakes for a person, even when the automation itself does not.")
	}).refine((e) => (e.ids?.length ?? 0) + (e.groups?.length ?? 0) > 0, { message: "a sender rule must name at least one id or group" }), sg = I({
		rules: F(og).max(50).describe("Walked in order; the first rule naming the sender decides."),
		others: z([
			"allow",
			"hold",
			"ignore"
		]).describe("What a sender no rule names gets: the automation as configured, a hold for a person, or nothing at all.")
	}), cg = I({
		id: J.describe("The automation's id."),
		trigger: ig.describe("What sets it off: a schedule, an event in the workspace, a message arriving from outside, or a webhook."),
		guard: j().min(1).optional().describe("A command run before the wake that decides whether there is anything to do. Skipped by the guard is often the most useful thing an automation can report."),
		prompt: j().min(1).describe("What the woken agent is told."),
		webchat: ag.optional().describe("Settings for the public chat widget, for an automation that answers visitors."),
		issues: Qh.optional().describe("Settings for the bug reporter, for an automation that takes crash reports from your own sites and apps."),
		allowedTools: F(j().min(1)).optional().describe("Narrow the woken turn to these tools. For one driven by an outside message this list is the real boundary, because prompt wording is only advice and an empty toolbox is not."),
		models: F(yd).min(1).max(10).describe("Which models this automation may run on, best first. Required, and nothing is chosen for you: work that fires while nobody is watching spends a real allowance, so it names the models it spends rather than inheriting one. Tried in order, so a spent account does not silently stop the job."),
		account: j().optional().describe("Which account pays for it."),
		actsAs: J.optional().describe("Which persona it speaks as. An unwatched turn naming none reaches no signed-in account at all."),
		senders: sg.optional().describe("Who may talk to it, and as whom: rules by sender id or group, each naming the persona those people get, plus what everyone else gets. Absent admits everyone the trigger's filters do."),
		requireApproval: P().optional().describe("Hold every fire for a person instead of running it. Only a person can release one of those."),
		holdForSeconds: N().optional().describe("Hold each fire this long before running it anyway, which is a delay rather than a decision."),
		chore: P().optional().describe("This automation is a maintenance job, which is what files it under chores rather than among ordinary automations."),
		enabled: P().describe("Whether it fires at all.")
	}), lg = I({
		id: J.describe("This waiting item's own id, which approving and rejecting take."),
		automationId: j().describe("Which automation it came from."),
		payload: j().optional().describe("What set it off, kept whole so an approved wake carries the same thing it would have had. Absent for one on a schedule, which carries nothing."),
		origin: ud.optional().describe("Where the message came from, kept alongside the payload so an approved wake appears on the board exactly as an automatic one would have."),
		title: j().optional().describe("What the conversation would be called."),
		conversationId: j().optional().describe("The thread this belongs to, when it has one, so approving continues that conversation rather than opening a new one. Without it, one visitor's chat becomes a card per approved message and an agent that meets them again every turn."),
		sessionId: j().optional().describe("The provider session that thread last ran on."),
		thread: j().optional().describe("Which inbound thread this belongs to, so the approved run continues that thread's memory rather than a fresh one."),
		actsAs: J.optional().describe("Which persona the approved run speaks as, decided when it was held."),
		createdAt: N().describe("When it started waiting, in milliseconds."),
		autoRunAt: N().optional().describe("When it goes ahead on its own, in milliseconds, for a hold that is only a delay. Absent for one that genuinely waits on a person.")
	}), ug = I({
		agents: F(Yp).describe("The conversations."),
		rev: N().describe("Which version of the fleet this is. The fleet is published as whole snapshots, so without a version a list read before a change but delivered after it would silently undo that change. Drop any list older than the newest you have already applied."),
		held: F(lg).default([]).describe("Automations waiting at the door for a yes, put alongside the running conversations so needs-you sits beside working rather than on a page nobody opens.")
	}), dg = I({ approvals: F(lg).describe("Everything waiting for a yes.") }), fg = I({ id: j().describe("Which waiting item.") }), pg = I({
		at: N(),
		outcome: z([
			"completed",
			"skipped",
			"error",
			"interrupted"
		]),
		detail: j().optional(),
		conversationId: j().optional()
	}), mg = cg.extend({
		runs: F(pg),
		nextRun: N().optional(),
		webhookToken: j().optional().describe("What a caller presents at /automations/{id}/fire, for an event automation. Shown to a maintainer or the owner only."),
		ingestKey: j().optional().describe("What a client with no website origin presents to a bug intake. Shown to a maintainer or the owner only.")
	}), hg = I({ automations: F(mg) }), gg = I({
		id: j().describe("The sender id the service vouches for, what a rule stores."),
		name: j().describe("What they were called on their last message, for display only."),
		groups: F(j()).optional().describe("The group ids the service reported on their last message, a Discord role list."),
		firstSeenAt: N().describe("When they first reached an automation here, in milliseconds."),
		lastSeenAt: N().describe("When they last did, in milliseconds."),
		messages: N().describe("How many of their messages reached an automation's filters, admitted or not.")
	}), _g = I({ senders: F(gg).describe("Newest first.") }), vg = I({ provider: j().min(1).describe("Which listener source.") }), yg = I({ id: j() }), bg = I({
		id: j(),
		enabled: P()
	}), xg = I({
		label: j().min(1),
		placeholder: j().min(1),
		hint: j().min(1).optional()
	}), Sg = I({
		provider: j().min(1),
		label: j().min(1),
		logo: j().min(1).optional(),
		icon: j().min(1).optional(),
		events: F(I({
			value: j().min(1),
			label: j().min(1)
		})),
		channel: xg,
		branchField: xg.optional(),
		sender: xg.optional(),
		senderGroup: xg.optional(),
		mentionLabel: j().min(1).optional(),
		starterPrompt: j().min(1).optional(),
		requires: F(j().min(1)).default([]),
		enabled: P()
	}), Cg = z(["create", "configure"]), wg = I({
		id: j().min(1),
		title: j().min(1),
		logo: j().min(1).optional(),
		icon: j().min(1).optional(),
		requires: F(j().min(1)).default([]),
		trigger: ig,
		guard: j().min(1).optional(),
		holdForSeconds: N().int().positive().optional(),
		prompt: j().min(1),
		note: j().min(1).optional(),
		setup: j().min(1).optional(),
		description: j().min(1).optional(),
		offer: Cg.optional(),
		chore: P().optional()
	}), Tg = I({
		sources: F(Sg),
		templates: F(wg)
	});
})), Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg = v((() => {
	W(), Y(), Dg = z(["github", "gitlab"]), Og = z([
		"queued",
		"running",
		"success",
		"failed",
		"canceled",
		"skipped"
	]), kg = I({
		repo: j().describe("Which workspace repository it belongs to."),
		host: Dg.describe("Which forge is running it."),
		project: j().describe("The project there, as that forge names it."),
		runId: N().describe("The forge's own id for the run, which is what re-running and cancelling take."),
		title: j().optional().describe("The run's headline, usually the commit subject or the pull request's title. Absent means falling back to the branch and commit."),
		authorName: j().optional().describe("Who the forge credits for setting it off."),
		authorAvatarUrl: j().optional().describe("Their picture, hosted by the forge. Absent means drawing their initials instead."),
		trigger: j().optional().describe("What set it off, in the forge's own word rather than flattened into a shared vocabulary, because the forge's word is the precise one."),
		branch: j().describe("Which branch."),
		sha: j().describe("Which commit."),
		status: Og.describe("How it is going. Queued means the forge has accepted it and nothing is executing it yet, which is a different thing to wait on than a run actually in progress."),
		url: j().describe("Its page on the forge."),
		createdAt: N().describe("When it started, in milliseconds."),
		durationSeconds: N().optional().describe("How long it took."),
		failedJobs: F(j()).optional().describe("What broke, by name. Fetched only for failed runs, so that a notification or a screen can say what went wrong rather than just that something did.")
	}), Ag = I({
		name: j().describe("The job's name."),
		status: Og.describe("How it went."),
		stage: j().optional().describe("Which stage it belongs to, where the pipeline groups its jobs that way."),
		needs: F(j()).optional().describe("Which jobs in this run it declared it waits on: the real shape of the pipeline. Absent means nothing could be read, which is different from an empty list, which is the claim that it waits on nothing."),
		startedAt: N().optional().describe("When it began, in milliseconds. Absent while it is queued."),
		finishedAt: N().optional().describe("When it ended, in milliseconds."),
		durationSeconds: N().optional().describe("How long it took."),
		webUrl: j().optional().describe("Its page on the forge, which is the shortest path from this step failed to the log that says why.")
	}), jg = I({ jobs: F(Ag).describe("The steps inside one run. Fetched separately from the run list, so that list stays cheap.") }), Mg = I({
		repo: j().describe("Which workspace repository."),
		host: Dg.describe("Which forge it lives on."),
		project: j().describe("The project there."),
		url: j().describe("Its page on the forge."),
		hookWarning: j().optional().describe("Present when the sandbox could not register for instant notifications, with what happened. Without them the sandbox polls instead, so this costs a couple of minutes' delay rather than the feature."),
		hookRecipe: j().optional().describe("What to paste into the repository's webhook settings by hand, secret included. Shown to a maintainer or the owner only.")
	}), Ng = I({
		repos: F(Mg).describe("Which workspace repositories are wired to a forge, and how each one's notifications are set up."),
		runs: F(kg).describe("Runs across all of them, newest first.")
	}), Pg = I({
		repo: j().describe("Which workspace repository. The project behind it is resolved fresh each call, so a stale screen cannot act on one the workspace no longer maps to."),
		runId: N().describe("Which run, by the forge's own id.")
	}), Fg = Pg.extend({
		pick: vd.describe("Which model to open the conversation on, when somebody chose one. Leave it out for the sandbox's own choice, which is the ordinary path."),
		mode: z(["continue", "start-over"]).optional().describe("What to do about the attempt already made at this run, when there is one. `continue` carries on in that conversation; `start-over` stops it if running, files it away, and opens the next attempt on a clean worktree. Leave it out for the plain press: an attempt that ended is continued, a fresh failure gets attempt 1, and one still in play answers CONFLICT with why."),
		force: P().optional().describe("Open the conversation even when every failed job died in its runner's own setup, which is the fleet's fault and nothing an agent on the code can repair. Left out, such a run is refused with that sentence.")
	}), Ig = I({ conversationId: j().describe("The conversation that was opened, already holding the failure. Open it to watch, or attach to its turn.") }), Lg = z([
		"idle",
		"running",
		"passed",
		"failed",
		"error",
		"cancelled"
	]), Rg = I({
		status: Lg.describe("Where the run is. Failed and error are deliberately different: failed means the code is wrong, error means the command could not be run at all, and calling the second one a test failure would send an agent hunting a bug that is not there."),
		command: j().describe("What actually ran, echoed here rather than read back from the settings, so a result looked at after the setting changed still says what produced it."),
		startedAt: N().optional().describe("When it began, in milliseconds."),
		finishedAt: N().optional().describe("When it ended, in milliseconds."),
		exitCode: N().optional().describe("How the command exited."),
		timedOut: P().optional().describe("It was killed for taking too long rather than finishing."),
		session: j().optional().describe("The terminal it runs in, which is where to watch it. Absent where the sandbox has no terminals, in which case there is nothing to attach to."),
		output: j().describe("The end of what it printed, as plain text with the colour codes and redrawn progress lines resolved away. The end rather than the beginning, because a suite's verdict is at the end. Empty while it runs, and for one that was killed.")
	});
})), Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_ = v((() => {
	W(), Y(), xm(), zg(), rd(), Q(), Bg = z([
		"staged",
		"unstaged",
		"conflicted"
	]), Vg = I({
		side: Bg.optional().describe("Narrow to one of the three lists a repository's changes split into. Leave it out for all of them, which is the whole repository."),
		origin: j().min(1).optional().describe("Narrow to the files one conversation landed. Leave it out for everyone's, including your own edits.")
	}), Hg = 1e3, Ug = F(j().min(1)).max(Hg).describe("Exactly these repository-relative paths. For anything bigger than a hand-picked selection, describe a scope instead."), Wg = I({
		paths: Ug.optional(),
		scope: Vg.optional().describe("What to act on, described rather than listed, so it covers every matching file in the repository and not just the ones a list could hold.")
	}), Gg = { message: "name paths or a scope, not both" }, Kg = (e) => e.paths === void 0 || e.scope === void 0, qg = Z.extend({
		message: j().min(1).describe("The commit message."),
		stage: Wg.refine(Kg, Gg).optional().describe("What to stage before committing. Leave it out to record the index exactly as it stands; give it an empty object to stage everything first.")
	}), Jg = Z.extend(Wg.shape).describe("What to throw away. Neither paths nor a scope discards every uncommitted change in the repository.").refine(Kg, Gg), Yg = Z.extend(Wg.shape).describe("What to move across the index. Nothing on disk changes either way.").refine(Kg, Gg), Xg = Z.extend({ branch: j().min(1).optional().describe("Which branch to push. Leave it out for the checked-out one. A branch with no upstream yet gets one set on this push.") }), Zg = z([
		"hook",
		"remote",
		"transport"
	]), Qg = Rg.extend({
		repo: j().describe("The repository this run is about, the same id the routes take."),
		reason: j().optional().describe("Why not, in git's own words: the last verdict line, for a row that has room for one line. The whole tail is `output`."),
		refusedBy: Zg.optional().describe("Who refused a failed push: this repository's pre-push hook (the code is wrong, a fix is worth proposing), the remote (pull first), or the transport (credentials, network: retry). Absent while it runs and for a push that went.")
	}), $g = Z.extend({ path: j().min(1).describe("The file to read, relative to the repository root.") }), e_ = Z.extend({
		path: j().min(1).describe("Where to write, relative to the repository root. Missing folders are created."),
		content: j().describe("The file's whole new contents.")
	}), t_ = Z.extend({
		path: j().min(1).describe("The file, relative to the repository root."),
		side: Bg.describe("Which comparison you want. A file that is staged and then edited again has genuinely different answers for each, which is why this is required rather than assumed.")
	}), n_ = I({
		branch: j().describe("The checked-out branch."),
		dirty: P().describe("Whether anything is uncommitted."),
		files: F(j()).describe("Every path with something pending, staged or not.")
	}), r_ = I({ files: F(j()).describe("Every path git tracks, relative to the repository root. Ignored and untracked files are not here.") }), i_ = I({
		path: j().describe("The path, as asked for."),
		content: j().describe("The file's contents as they stand on disk.")
	}), I({ repo: j().min(1).describe("Which repository.") }).extend(Wg.shape).refine(Kg, Gg), a_ = I({
		path: j().describe("The path, relative to the repository root. For a rename this is the new one."),
		status: z([
			"added",
			"modified",
			"deleted",
			"renamed",
			"type-changed",
			"conflicted"
		]).describe("What happened to it. Conflicted is not a kind of edit: nothing can be committed anywhere in the repository while one exists."),
		from: j().optional().describe("Where a renamed file came from."),
		additions: N().optional().describe("Lines added. Absent for a binary file, and for an untracked one, which has nothing to compare against."),
		deletions: N().optional().describe("Lines removed. Absent for the same reasons additions is."),
		code: I({
			additions: N(),
			deletions: N()
		}).optional().describe("The same +/− with every comment stripped from both sides, which is what a review shows beside a diff that opens on code alone. Absent when the file cannot be read that way (binary, too large, or a language this build ships no grammar for): git's own counts above are then the reading.")
	}), o_ = I({
		remote: j().optional().describe("The remote this branch pushes to. Absent means none is configured. In a fork with two remotes, pushing to the wrong one succeeds and leaves the count stuck, which is why this says which."),
		branch: j().optional().describe("The checked-out branch. Absent when the repository is on a bare commit, or has no commits yet."),
		upstream: j().optional().describe("The branch on the remote this one follows. Absent means the next push will publish it."),
		ahead: N().describe("Commits you have that the remote does not."),
		behind: N().describe("Commits the remote has that you do not, as of the last fetch. Fetch before trusting it.")
	}), s_ = I({
		name: j().describe("The branch name."),
		current: P().describe("Whether this is the one checked out."),
		upstream: j().optional().describe("The branch on the remote it follows, if any."),
		ahead: N().describe("Commits this branch has that its remote counterpart does not."),
		behind: N().describe("Commits its remote counterpart has that it does not."),
		gone: P().optional().describe("The branch it followed no longer exists on the remote, usually because a merged pull request deleted it. The signal that this one is safe to delete."),
		at: N().describe("When its tip was committed, in milliseconds. Lists are newest first.")
	}), c_ = I({
		name: j().describe("The full name, such as origin/main."),
		remote: j().describe("Just the remote part, so a picker can group by it without re-parsing."),
		branch: j().describe("Just the branch part."),
		at: N().describe("When its tip was committed, in milliseconds, as this repository last saw it.")
	}), l_ = I({
		branches: F(s_).describe("Branches in this repository."),
		remotes: F(c_).describe("Branches on its remotes, as last seen. Sent together with the locals so a switcher never draws a half-filled list.")
	}), u_ = Z.extend({
		name: td.describe("The new branch's name."),
		start: j().min(1).optional().describe("Where to start it: a commit or another branch. Leave it out to start from where you are."),
		checkout: P().optional().describe("Switch to it as well as creating it.")
	}), d_ = Z.extend({
		name: td.describe("The branch to delete."),
		force: P().optional().describe("Delete it even though it holds work that was never merged. The deliberate retry after the first attempt refuses.")
	}), f_ = z([
		"merge",
		"rebase",
		"cherry-pick",
		"revert"
	]), p_ = I({
		repo: j().describe("The repository asked about."),
		operation: f_.optional().describe("Which operation the working tree is stuck inside. Absent means it is not stuck at all, which is almost always. While one is present git refuses nearly everything else, and abandoning it is the only way out.")
	}), m_ = I({
		repo: j(),
		branch: j().optional().describe("The checked-out branch. Absent in a repository that has no commits yet."),
		conflicted: F(a_).describe("Paths a merge or rebase could not finish. First, because nothing anywhere in this repository can be committed until they are resolved. Held apart from the two lists below, because staged or not is not a question one of these has an answer to."),
		operation: f_.optional().describe("What halted, when something did. This is the sentence that explains the conflicts above and names the way out of them."),
		staged: F(a_).describe("What a plain commit would record right now."),
		unstaged: F(a_).describe("Edits on disk that are not staged, plus untracked files. A path can be in both lists at once with different line counts, which is why they are separate."),
		truncated: I({
			staged: N().describe("Staged changes not listed above."),
			unstaged: N().describe("Unstaged changes not listed above.")
		}).optional().describe("How many changes were cut from each of the two lists above. A freshly cloned monorepo or a mass delete runs to six figures, which no screen can draw, so past a budget the lists arrive short and this says by how much on each side. Absent means they are complete."),
		remote: o_.optional().describe("Where this repository stands against its remote."),
		origins: R(j(), F(j())).optional().describe("Which conversation put each path here, newest first, keyed by path. Only work that went through a merge can appear: edits made in the shared tree, in a terminal, or by a person are simply absent rather than guessed at."),
		error: j().optional().describe("Why the repository could not be read at all, in git's own words. A repository left broken by a failed import arrives with empty lists and this set, rather than vanishing from the answer with nothing to act on.")
	}), h_ = I({
		title: j().optional().describe("The conversation's title. Absent for one that never got as far as having a title."),
		provider: id.describe("Which model provider it ran on."),
		landedMessage: Gp.optional().describe("What the merged work did, drafted by the conversation itself. Carried here as well as on its card, because merged lines outlive the card: archiving a finished conversation does not uncommit its work.")
	}), g_ = I({
		repos: F(m_).describe("One entry per repository that has something pending, is out of step with its remote, or could not be read. A clean repository is simply absent."),
		originAgents: R(j(), h_).optional().describe("Who each conversation named above is, keyed by id, so a caller need not look them up. Absent when nothing in the review can be attributed."),
		committing: F(j()).optional().describe("Repositories with a commit running right now. The sandbox's answer rather than any one tab's, so a reload, a second window and another device all know. Absent means nothing is committing.")
	}), __ = I({
		committed: P().describe("Whether a commit was actually recorded."),
		changes: m_.optional().describe("What this repository looks like now, read in the same breath as the commit so a caller can redraw from here instead of asking for a fresh scan. Absent means there is nothing left to show."),
		originAgents: R(j(), h_).optional().describe("Who the conversations named in those changes are. Merge it over what you already hold rather than replacing: other repositories still name their own.")
	}), v_ = I({
		dir: j().describe("Where the package lives, relative to its repository. Empty when the repository is itself one package."),
		name: j().describe("The name the package declares for itself.")
	}), y_ = I({
		repo: j().describe("Which repository."),
		modules: F(v_).describe("Its packages.")
	}), b_ = I({ repos: F(y_).describe("Every repository with the packages inside it.") }), x_ = a_.extend({ landed: P().describe("Whether your workspace already holds this content. Read from the tree at request time, not from what a land recorded: discard a landed file in the Changes panel and this goes back to false, which is what puts it back under Land now.") }), S_ = I({
		repo: j().describe("Which repository."),
		branch: j().optional().describe("The branch this conversation's work sits on."),
		changes: F(x_).describe("What it changed there."),
		modules: F(v_).describe("The packages of the tree these changes came from, so a review can group by package. Carried with the changes rather than looked up separately, because a package the conversation has just created exists only in its own copy and the shared tree has never heard of it.")
	}), C_ = I({
		repos: F(S_).describe("One entry per repository the conversation touched."),
		absorbed: N().describe("How many of this conversation's files your own history already carries, and which are therefore not listed as differences any more."),
		conflicts: F(gm).optional().describe("Why the last merge refused, when one did. Carried here as well as in the merge's own answer, because a conflict is found the moment a turn ends and dealt with hours later on this surface, which would otherwise open with nothing to explain what it promised to resolve.")
	}), w_ = I({
		sha: j().describe("The commit."),
		short: j().describe("Its abbreviated hash, which is what a reader recognises it by."),
		subject: j().describe("Its first line."),
		author: j().describe("Who committed it."),
		at: N().describe("When it was authored, in milliseconds."),
		changes: F(a_).describe("The conversation's files that this commit is the newest carrier of, as the conversation changed them. Every file appears under exactly one commit, so these counts add up to the work rather than over-counting a file that history touched twice.")
	}), T_ = I({
		repo: j().describe("Which repository."),
		commits: F(w_).describe("The commits carrying this conversation's work there, newest first."),
		modules: F(v_).describe("The packages of the tree these files came from, so a review can group them by package.")
	}), E_ = I({
		repos: F(T_).describe("One entry per repository holding committed work of this conversation."),
		unaccounted: N().describe("How many of the conversation's absorbed files none of these commits carries. Above zero means its content reached your main line by some other road, so the commits listed are not the whole story.")
	});
})), O_, k_ = v((() => {
	q(), vh(), xm(), Eg(), D_(), Ih(), Q(), O_ = {
		list: K.route({
			method: "GET",
			path: "/agents",
			summary: "Every live conversation",
			description: "The fleet as the board draws it: each conversation with its title, what it is doing, when it last moved and whether anybody has read it since. Archived conversations are not in here."
		}).output(ug),
		archived: K.route({
			method: "GET",
			path: "/agents/archived",
			summary: "Conversations put away",
			description: "The same shape as the live fleet, for the conversations somebody has decided are finished. Their work is kept, and any one of them can be brought back."
		}).output(ug),
		search: K.route({
			method: "GET",
			path: "/agents/search",
			summary: "Find a conversation",
			description: "Searches the live fleet and the archive together. Both halves on purpose: the board hides finished work by design, and a filter that says it found nothing while the answer sits one click away is simply wrong."
		}).input(rm).output(sm),
		get: K.route({
			method: "GET",
			path: "/agents/{id}",
			summary: "One conversation's card",
			description: "Everything the board shows for a single conversation: its title, state, working branch, unread marker and timestamps."
		}).input(Xp).output(Yp),
		transcript: K.route({
			method: "GET",
			path: "/agents/{id}/transcript",
			summary: "One page of a conversation",
			description: "The most recent turns of one conversation, in order, including the tool calls and their results: what the chat replays and the next turn is seeded from. A page, not the whole record — pass the answer's `from` back as `before` to walk further back, until `more` reads false."
		}).input(Zp).output(_h),
		place: K.route({
			method: "POST",
			path: "/agents/{id}/place",
			summary: "Put words in the agent's mouth",
			description: "Writes a line into the record as though the agent had said it, with no turn behind it and no reply. Human readers see it marked as placed. The next real turn starts fresh from the record, where the line reads as the agent's own. Refused while a turn is running."
		}).input(lm).output(X),
		rename: K.route({
			method: "POST",
			path: "/agents/{id}/rename",
			summary: "Retitle a conversation",
			description: "Sets the title a person chose, replacing the one that was generated. Allowed while the conversation is working, and it does not count as activity."
		}).input(cm).output(Yp),
		autoLand: K.route({
			method: "POST",
			path: "/agents/{id}/auto-land",
			summary: "Whether this conversation merges its work automatically",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to go back to following the default. Deliberately allowed mid-turn, because the setting is read when the turn finishes, so flipping it while the agent works means exactly hold this piece of work for review."
		}).input(um).output(Yp),
		resumeAfterOutage: K.route({
			method: "POST",
			path: "/agents/{id}/resume-after-outage",
			summary: "Whether this conversation retries after a provider outage",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. This is what the offer shown when a turn dies writes, because the press happens inside one conversation and honestly means finish this piece of work."
		}).input(dm).output(Yp),
		resumeAfterLimit: K.route({
			method: "POST",
			path: "/agents/{id}/resume-after-limit",
			summary: "Whether this conversation sends itself again when its allowance comes back",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. Off unless asked for, because the allowance is the user's own budget and a turn that spends it the moment it reopens is not a decision to make on their behalf."
		}).input(fm).output(Yp),
		moveAfterLimit: K.route({
			method: "POST",
			path: "/agents/{id}/move-after-limit",
			summary: "Whether this conversation moves to another account when its allowance is spent",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. A move spends a second account of the same provider on this conversation's behalf, so it is off unless asked for."
		}).input(pm).output(Yp),
		seen: K.route({
			method: "POST",
			path: "/agents/{id}/seen",
			summary: "Mark a conversation read",
			description: "Stamps the read marker behind the unread badge on one card. Allowed while the conversation is working, and reading never counts as activity."
		}).input(Xp).output(Yp),
		stopWatching: K.route({
			method: "POST",
			path: "/agents/{id}/stop-watching",
			summary: "Stop every condition watch a conversation is parked on",
			description: "Disarms all of this conversation's outside-condition watches, so none of them will wake it. All of them rather than one, because that is what the press means when it is made about a card. Nothing else about the conversation changes."
		}).input(Xp).output(Yp),
		seenAll: K.route({
			method: "POST",
			path: "/agents/seen",
			summary: "Mark every conversation read",
			description: "Clears the unread badge across the whole fleet at once, and hands the refreshed list back."
		}).output(ug),
		diff: K.route({
			method: "GET",
			path: "/agents/{id}/diff",
			summary: "Everything a conversation has changed",
			description: "One flat set of changed files per repo, measured against where each repo stood when the conversation started, with every file flagged as already merged or not. Not the staged-and-unstaged shape a working copy has, because nobody ever checks this branch out to stage into it."
		}).input(Xp).output(C_),
		history: K.route({
			method: "GET",
			path: "/agents/{id}/history",
			summary: "Where a conversation's committed work lives",
			description: "The commits in your own history that carry this conversation's work, with the files each one brought. Use it when the change list is empty or short because you already committed what it wrote: those files are not differences against the main line any more, so they are not in the review, and this is where they went."
		}).input(Xp).output(E_),
		fileDiff: K.route({
			method: "GET",
			path: "/agents/{id}/{repo}/file-diff",
			summary: "One file's before and after in a conversation's work",
			description: "Both sides of a single file: what it held when the conversation started and what it holds on its branch now."
		}).input(mm).output(Fh),
		land: K.route({
			method: "POST",
			path: "/agents/{id}/land",
			summary: "Merge a conversation's work into the workspace",
			description: "Brings the conversation's branches into the main tree, one repo at a time. A conflict is reported rather than raised and nothing is lost when it fails. Refused while a turn is running, and refused for a conversation that works directly in the shared tree, which has nothing to merge."
		}).input(bm).output(_m),
		requestLand: K.route({
			method: "POST",
			path: "/agents/{id}/request-land",
			summary: "Ask a maintainer to merge this work",
			description: "For a collaborator who is not allowed to merge: marks the conversation as waiting for review, with who asked. The request shows on every maintainer's board and clears when somebody merges or discards it."
		}).input(Xp).output(Yp),
		discard: K.route({
			method: "POST",
			path: "/agents/{id}/discard",
			summary: "Throw a conversation's work away",
			description: "Deletes the conversation's working copies, its branches and its entry. Nothing is kept. Refused while a turn is running, and refused for a conversation working in the shared tree."
		}).input(Xp).output(X),
		archive: K.route({
			method: "POST",
			path: "/agents/archive",
			summary: "Put conversations away",
			description: "The gentle counterpart to discarding. Commits whatever the conversation still has in progress onto its own branch, releases its working copy, and keeps the entry and the record. It leaves the live fleet and joins the archive. Refused for a conversation that is running."
		}).input(Qp).output(tm),
		unarchive: K.route({
			method: "POST",
			path: "/agents/unarchive",
			summary: "Bring conversations back",
			description: "Returns archived conversations to the live fleet. The next turn picks up a fresh working copy from the branch that was kept."
		}).input($p).output(em),
		purge: K.route({
			method: "POST",
			path: "/agents/purge",
			summary: "Empty the archive for good",
			description: "Discards every conversation already in the archive: working copies, branches and entries. The whole archive rather than a chosen few, because the archive is the pile somebody has already decided is over. A teardown that fails on one conversation leaves that one behind instead of taking the rest down with it."
		}).output(nm)
	};
})), A_, j_, M_, N_, P_, F_, I_, L_, R_, z_, B_ = v((() => {
	W(), rd(), z(["post", "action"]), A_ = z([
		"proposed",
		"approved",
		"running",
		"done",
		"failed"
	]), j_ = {
		actsAs: J.optional().describe("Whose name it acts under. Needed for anything that requires being logged in, because an unwatched turn naming nobody is allowed no account at all. Never guessed: one site can be connected five times over, and picking for you means picking wrong in public with no undo."),
		scheduledAt: N().optional().describe("When it should happen, in milliseconds. An agent may propose without one and you set it when approving; an approved item with no time goes after a short countdown you can still stop."),
		status: A_.default("proposed").describe("Where it is: proposed by the agent, approved by you, being carried out, done, or failed. Rejecting is deleting it; retrying is approving a failed one again."),
		createdAt: N().optional().describe("When it was written, in milliseconds."),
		startedAt: N().optional().describe("When it started being carried out, in milliseconds. Needed to tell a run that is under way from one whose turn died mid-flight, which the scheduled time cannot."),
		finishedAt: N().optional().describe("When it was done, in milliseconds."),
		result: j().optional().describe("What came back, when something did: the post's own address, a confirmation number. The one thing a finished item can offer that reading it cannot."),
		error: j().optional().describe("Why it failed, written as a sentence for a person to read rather than as a code.")
	}, M_ = I({
		kind: B("post").describe("A post to publish somewhere."),
		platform: j().min(1).describe("Where it should go. A plain name, so a new site needs no change here; an unknown one simply fails when it tries to post."),
		content: j().min(1).describe("The post itself."),
		title: j().optional().describe("A title, where the site wants one."),
		target: j().optional().describe("Where on the site: a community, a channel. Or the address of the thing this replies to, in which case it is a reply, and on some sites the difference between a thread's address and one comment's is the difference between talking to the room and answering the person."),
		media: F(j()).optional().describe("Anything to attach, as workspace paths."),
		...j_
	}), N_ = I({
		kind: B("action").describe("Something the agent will do once you say so."),
		summary: j().min(1).max(200).describe("What will happen, in one line: the row's headline and the confirm dialog's item."),
		details: j().optional().describe("The specifics, as Markdown: everything you would want to see before saying yes."),
		instructions: j().min(1).describe("What to do once approved, written for the fresh turn that will do it: names, ids and steps, since it has none of this conversation."),
		...j_
	}), L("kind", [M_, N_]), P_ = { id: J.describe("The approval's id.") }, F_ = M_.extend(P_), I_ = N_.extend(P_), L_ = L("kind", [F_, I_]), R_ = I({
		approvals: F(L_).describe("The queue."),
		invalid: F(j()).describe("Files that could not be read at all, or name a kind this daemon does not know. Listed rather than skipped, because an agent writes these files directly and a malformed one would otherwise never run and never say why.")
	}), z_ = I({ id: J.describe("Which approval.") });
})), V_, H_ = v((() => {
	q(), B_(), Q(), V_ = {
		list: K.route({
			method: "GET",
			path: "/approvals",
			summary: "Things waiting for your yes",
			description: "Everything an agent has prepared and would like to do: posts to publish, actions to carry out. Nothing here has happened yet."
		}).output(R_),
		upsert: K.route({
			method: "POST",
			path: "/approvals",
			summary: "Approve, edit or retry one",
			description: "All three are the same act with a different field changed, so they share one call. Send the item back as you want it."
		}).input(L_).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/approvals/{id}",
			summary: "Reject one",
			description: "Throws it away undone."
		}).input(z_).output(X)
	};
})), U_, W_ = v((() => {
	q(), Eg(), Q(), U_ = {
		list: K.route({
			method: "GET",
			path: "/automations",
			summary: "Things that wake an agent on their own",
			description: "Every automation with its recent runs and when it fires next."
		}).output(hg),
		catalog: K.route({
			method: "GET",
			path: "/automations/catalog",
			summary: "What can trigger an automation here",
			description: "Every trigger this sandbox understands and every template worth starting from, the daemon's own merged with each installed extension's. Writing an automation is checked against this same list, so a screen and the daemon can never disagree about what is allowed."
		}).output(Tg),
		upsert: K.route({
			method: "POST",
			path: "/automations",
			summary: "Create or edit an automation",
			description: "Writes an automation by id. Nothing needs provisioning: the scheduler picks it up on its next sweep."
		}).input(cg).output(X),
		setEnabled: K.route({
			method: "POST",
			path: "/automations/{id}/enabled",
			summary: "Turn an automation on or off",
			description: "Flips only the switch, so a row in a list can be toggled without rebuilding the whole record."
		}).input(bg).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/automations/{id}",
			summary: "Delete an automation",
			description: "Removes it, so nothing fires from it again."
		}).input(yg).output(X),
		rotateToken: K.route({
			method: "POST",
			path: "/automations/{id}/rotate-token",
			summary: "Rotate an automation's webhook token or intake key",
			description: "Mints a new credential for the door this automation opens and retires the old one at once. Every caller has to be handed the new URL; that is the point. Refused for an automation with no door."
		}).input(yg).output(sf),
		run: K.route({
			method: "POST",
			path: "/automations/{id}/run",
			summary: "Fire an automation by hand",
			description: "The answer to writing something that runs at three in the morning and having no way to try it. It takes exactly the path the real trigger takes, including the check that decides whether there was anything to do, since skipped by the guard is the most useful thing this can tell you. A switched-off automation fires too, because trying it before switching it on is the main reason to press this. Not available for the trigger that listens for incoming messages, where a hand-fire would produce an agent asked to handle events and handed none; send the bot a message instead. Answers straight away and runs detached."
		}).input(yg).output(X),
		senders: K.route({
			method: "GET",
			path: "/automations/senders/{provider}",
			summary: "Who has written to a listener source",
			description: "Everyone whose message reached one of this source's automations, newest first, admitted or not. What the sender rules picker offers by name while storing the id the service vouches for."
		}).input(vg).output(_g),
		pendingList: K.route({
			method: "GET",
			path: "/automations/pending",
			summary: "Automations waiting for a yes",
			description: "The queue an automation set to ask first lands in each time it would have fired."
		}).output(dg),
		approve: K.route({
			method: "POST",
			path: "/automations/pending/{id}/approve",
			summary: "Let a held automation run",
			description: "Releases one waiting automation and runs the wake it was holding. Answers straight away and runs detached."
		}).input(fg).output(X),
		reject: K.route({
			method: "POST",
			path: "/automations/pending/{id}/reject",
			summary: "Drop a held automation",
			description: "Throws one waiting fire away. The automation stays on, and the next trigger queues as usual."
		}).input(fg).output(X)
	};
})), G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v = v((() => {
	W(), Y(), G_ = I({ agent: ld.optional().describe("Read a conversation's own private copy of the workspace rather than the shared tree. Leave it out for the shared tree. A conversation that is not working privately resolves back to the shared tree rather than failing, so a link need not know which mode it runs in.") }), K_ = I({
		to: j().describe("What the link says, verbatim, rather than where it ends up. That is what the person who made it wrote, and what they would edit."),
		state: z(["broken", "outside"]).optional().describe("Absent for an ordinary link. Broken means there is nothing at the other end, and it is listed anyway because a dangling link is worth seeing. Outside means it leads out of the workspace, so it is shown and refused.")
	}), q_ = I({
		name: j().describe("Just this entry's own name."),
		path: j().describe("Its full path from the workspace root, which feeds straight back into the file routes."),
		type: z(["file", "dir"]).describe("What it is. For a link, what it points at, so a link to a folder opens like a folder."),
		size: N().optional().describe("Size in bytes, for a file."),
		ignored: P().optional().describe("Tooling ignores it: installed packages, git internals, anything the ignore rules exclude. Usually drawn greyed out."),
		link: K_.optional().describe("Present when this entry is a link."),
		get children() {
			return F(q_).optional().describe("What is inside a folder. Absent means it was not opened, either because it is ignored or because the walk ran out of budget above it, so ask for it separately. An empty list means it really is empty.");
		}
	}), J_ = I({
		root: j().describe("The path everything below is relative to."),
		tree: F(q_).describe("The workspace, one entry per file and folder."),
		hidden: N().describe("How many entries at the top level were cut for size. Zero means the listing is complete."),
		barren: F(j()).describe("Folders whose whole contents are empty folders, and nothing else. Complete for the workspace, however much of the tree above was listed, and ordered like the tree, so a parent comes before the branch below it.")
	}), Y_ = G_.extend({
		path: j().min(1).describe("The folder to open, as a workspace path."),
		depth: U().int().min(1).max(5).optional().describe("How many levels to include. Omitted means direct children only; at most five levels can be read in one request.")
	}), X_ = I({
		entries: F(q_).describe("What is inside it, as a flat list. With the default depth these are direct children; a deeper request also includes descendants, whose full paths say where they belong. Folders carry no nested contents of their own."),
		hidden: N().describe("How many entries were cut for size. Zero means the listing is complete.")
	}), Z_ = I({ path: j().min(1).describe("The file or folder, as a workspace path.") }), Q_ = G_.extend({ path: j().min(1).describe("The media file the ticket should cover.") }), $_ = I({
		ticket: j().describe("Hand this to the streaming route in the query string. It buys exactly the one file it was minted for."),
		expiresAt: N().describe("When it stops working, in milliseconds, so a player can tell a dead ticket from a dead file.")
	}), ev = G_.extend({
		path: j().min(1).describe("The file to read, as a workspace path."),
		offset: U().int().optional().describe("Which byte to start at. A negative number reads that many bytes from the end, which is how you follow a growing log without knowing its size first."),
		limit: U().int().min(1).optional().describe("How many bytes to read. Capped by the sandbox, so leaving it out or asking for too much gives you the cap rather than the whole file.")
	}), tv = I({
		present: B(!0).describe("There is something at that path."),
		path: j().describe("The path, as asked for."),
		content: j().describe("The bytes of the window you asked for, as text."),
		size: N().describe("How large the whole file is. Compare it with the window below to know whether there is more."),
		offset: N().describe("Which byte the window starts at."),
		bytes: N().describe("How many bytes the window holds."),
		shared: P().describe("Which tree answered. True when no conversation was named, and also when one was but its own copy has no such file, which is the case a reader has to be told about rather than left to assume.")
	}), nv = I({
		present: B(!1).describe("Nothing there. An answer, not a failure: reading a file that may not exist yet is the ordinary case for half the reads in this product."),
		path: j().describe("The path, as asked for.")
	}), rv = L("present", [tv, nv]), iv = I({ path: j().min(1).describe("The file you want the text of, as a workspace path. The real file, not its shadow: where the text is kept is this route's business.") }), av = I({
		enabled: P().describe("Whether the background pass is on (the `sidecars` setting). Off means a shadow exists only where someone asked for one."),
		queued: N().describe("Files waiting for a shadow, not counting the batch being rendered right now."),
		deriving: F(j()).describe("The files being rendered at this moment, as workspace paths. One batch at a time, because derivation shares the box with the agent it serves."),
		sweeping: P().describe("Whether a whole-tree pass is running, which is what a freshly enabled setting or an unlistably large batch triggers."),
		broken: P().describe("Whether the `fileq` binary is missing, in which case nothing renders in the background until this sandbox restarts."),
		shadows: N().optional().describe("How many shadows the last whole-tree pass counted. Absent until one has run in this daemon's lifetime."),
		sweptAt: j().optional().describe("When that pass finished, as an ISO timestamp.")
	}), ov = z([
		"off",
		"queued",
		"deriving",
		"idle",
		"broken",
		"undeliverable"
	]), sv = {
		state: ov.describe("Where this file stands with the background pass: switched off, waiting its turn, being read right now, settled, or unreachable because the renderer is missing. `undeliverable` is a format nothing here reads."),
		queue: av.describe("How the background pass as a whole is doing, so a wait can be reported as a queue rather than as nothing happening.")
	}, cv = I({
		...sv,
		present: B(!0).describe("There is derived text for that file."),
		path: j().describe("The file it was derived from, as asked for."),
		content: j().describe("The text itself, as markdown."),
		deriver: j().describe("Which reader wrote it, and at which version, such as `pdf+ocr v1`. A file re-derives when this changes."),
		derivedAt: j().optional().describe("When it was written, as an ISO timestamp. Absent only for a shadow whose front matter was edited by hand."),
		title: j().optional().describe("The title the format carried, where it carried one."),
		notes: F(j()).describe("Every cap and degradation the derivation hit: a sheet cut to 200 rows, a book cut at 2 MB, a scan recognised rather than read. Show these with the text, since text that was cut reading as complete is the one failure this whole feature cannot afford."),
		tokens: N().describe("Roughly what an agent spends reading it, by the same four-chars-a-token estimate every budget here uses."),
		truncated: P().describe("Whether this is only the start of the shadow, cut to keep the response sendable. The file on disk holds the rest."),
		stale: P().describe("Whether the file has changed since this text was derived, compared by content rather than by clock. True means you are reading a rendering of an older version of the file, and deriving it again catches it up.")
	}), lv = I({
		...sv,
		present: B(!1).describe("There is no derived text for that file. Read `state` before saying so to anyone: absent and queued are different answers."),
		path: j().describe("The file, as asked for."),
		derivable: P().describe("Whether this format can be turned into text at all. True means asking for it to be derived is worth offering; false means nothing here reads this format."),
		reason: j().optional().describe("Why there is none, when deriving was just attempted and produced nothing: the file is too large, corrupt, or of a format no reader claims.")
	}), uv = L("present", [cv, lv]), dv = G_.extend({ path: j().min(1).max(512).describe("The reference as somebody wrote it. Often only the tail of the real path, which is why this is matched against the tree rather than read as-is.") }), fv = I({ path: j().optional().describe("The real path it means. Absent when nothing in the workspace ends that way.") }), pv = I({ path: j().min(1).describe("The folder to create. Missing folders above it are created too.") }), mv = I({
		from: j().min(1).describe("What to move or copy, as a workspace path."),
		to: j().min(1).describe("Where it should end up. Changing only the last part is how you rename something.")
	}), hv = z([
		"repositories",
		"documents",
		"media",
		"archives",
		"other"
	]), gv = I({ classifications: F(I({
		path: j().describe("What was looked at."),
		bucket: hv.describe("Which bucket it was sorted into."),
		reason: j().describe("The signal that decided it, so the proposal can be argued with rather than trusted.")
	})).describe("One entry per repository folder and loose file at the top of the workspace. A read-only proposal: nothing moves until you apply it.") });
})), vv, yv, bv, xv, Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv = v((() => {
	W(), xm(), Id(), Q(), _v(), vv = ac({ kind: j() }), yv = I({
		kind: B("heartbeat"),
		rev: N()
	}), bv = I({
		key: j(),
		label: j(),
		state: z([
			"pending",
			"running",
			"done",
			"failed"
		]),
		ms: N().optional()
	}), xv = I({
		ready: P(),
		startedAt: N(),
		steps: F(bv)
	}), Sv = I({
		kind: B("boot"),
		...xv.shape
	}), Cv = I({
		kind: B("hello"),
		workspaceId: j(),
		routes: F(j()).optional(),
		shapes: R(j(), j()).optional(),
		build: j().optional(),
		boot: xv.optional()
	}), wv = I({
		kind: B("reposChanged"),
		repos: F(j())
	}), Tv = I({
		kind: B("workspaceChanged"),
		paths: F(j())
	}), Ev = I({
		kind: B("derivedChanged"),
		paths: F(j()),
		queue: av
	}), Dv = I({
		kind: B("refsChanged"),
		repos: F(j())
	}), Ov = I({
		kind: B("runtimeChanged"),
		domains: F(j())
	}), kv = I({
		clientId: j(),
		email: j(),
		name: j().optional(),
		picture: j().optional(),
		role: rf,
		idle: P(),
		view: j().optional(),
		sessionId: j().optional(),
		path: j().optional()
	}), Av = I({
		kind: B("presence"),
		users: F(kv)
	}), jv = I({
		kind: B("agents"),
		agents: F(Yp),
		rev: N()
	}), Mv = I({
		kind: B("accountUsage"),
		provider: j(),
		account: j(),
		usage: wd.optional()
	}), Nv = I({
		kind: B("providerRefusal"),
		provider: j(),
		refusal: Dd.optional()
	}), Pv = L("kind", [
		Cv,
		yv,
		Sv,
		Tv,
		Ev,
		wv,
		Dv,
		Ov,
		Av,
		jv,
		Mv,
		Nv
	]);
})), Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv = v((() => {
	W(), rd(), Iv = z([
		"tor",
		"vpngate",
		"wireguard"
	]), Lv = j().regex(/^[A-Za-z]{2}$/, "A country is its two-letter code, like DE, US or JP.").transform((e) => e.toUpperCase()), Rv = I({
		provider: B("tor"),
		country: Lv.optional(),
		autoStart: nd
	}), zv = I({
		provider: B("vpngate"),
		country: Lv.optional(),
		autoStart: nd
	}), Bv = I({
		provider: B("wireguard"),
		config: j().min(1),
		country: Lv.optional(),
		autoStart: nd
	}), Vv = L("provider", [
		Rv,
		zv,
		Bv
	]), Hv = z([
		"up",
		"starting",
		"down",
		"unavailable",
		"failed"
	]), Uv = I({
		ip: j().describe("The address the world sees, looked up through the exit's own proxy rather than assumed."),
		country: j().optional().describe("Which country that address is in. Absent when the lookup gave an address and no country, in which case a switch is judged on the address having changed instead."),
		countryName: j().optional().describe("That country's name, spelled out.")
	}), Wv = I({
		country: j().describe("The country's code."),
		countryName: j().describe("Its name, spelled out."),
		servers: N().describe("How many servers this provider has there."),
		share: N().optional().describe("How much of the provider's actual capacity is there, from zero to one. This is what a list should be sorted by: a third of the countries on offer are one overloaded machine behind a flag, and a count of servers would rank them first.")
	}), Gv = I({
		countries: F(Wv).describe("Where this exit can put you, best-supplied first."),
		live: P().describe("Whether the provider answered, or this came from a built-in list. Said out loud rather than presenting an old list as current.")
	}), Kv = I({
		id: j().describe("Which exit."),
		provider: Iv.describe("What it runs on."),
		state: Hv.describe("Whether it is carrying traffic, coming up, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		proxy: j().describe("Where to point traffic that should go through it. Fixed per exit and unchanged by a country switch, which is what lets a long job move country halfway through without reconfiguring anything."),
		country: j().optional().describe("Where it was asked to come out. Absent means the provider chose."),
		observedCountry: j().optional().describe("Where it actually comes out, as last checked. Kept separate from what was asked for, because those two disagreeing is the most useful fault signal this whole feature has."),
		ip: j().optional().describe("The address behind that observation."),
		checkedAt: N().optional().describe("When that was checked, in milliseconds, so an old reading can be shown as old."),
		interface: j().optional().describe("The network interface, for the kinds that have one."),
		since: N().optional().describe("When it came up, in milliseconds."),
		autoStart: P().describe("Whether it starts itself when the sandbox does."),
		detail: j().optional().describe("Why it failed, or a note about a healthy one.")
	}), qv = I({ links: F(Kv).describe("Every configured exit, with where it was asked to come out and where it actually does.") }), Jv = I({ id: j().describe("Which exit.") }), Yv = I({
		id: j().describe("Which exit."),
		country: Lv.optional().describe("Where to come out. Leaving it out means letting the provider choose, so clearing a country is something you can actually say rather than only setting one.")
	});
})), Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly = v((() => {
	W(), Zv = z([
		"host",
		"cloudflare",
		"github",
		"gitlab",
		"stripe"
	]), Qv = z([
		"signoz",
		"outline",
		"paperless",
		"openproject",
		"invoiceninja",
		"infisical"
	]), $v = R(j(), oc([j(), N()])), ey = /^[a-zA-Z_][a-zA-Z0-9_]*$/, ty = j().min(1).max(60).regex(ey), ny = I({
		kind: B("backend").describe("Something you already have: a machine, an account with a hosting provider."),
		provider: Zv.describe("Which provider it is with."),
		name: j().describe("What to call it, which is also how everything else refers to it."),
		values: $v.describe("Its settings. Anything secret is stored separately and referred to here, never written in.")
	}), ry = I({
		kind: B("service").describe("Something you want provisioned."),
		service: Qv.describe("Which service."),
		name: j().describe("What to call it."),
		values: $v.describe("Its settings."),
		on: j().describe("Which of your machines to put it on."),
		expose: j().describe("How it should be reachable.")
	}), iy = I({
		kind: B("app").describe("An app of your own, built from source and deployed."),
		name: j().describe("What to call it."),
		values: $v.describe("Its settings, including the address it should answer on."),
		on: j().describe("Which of your machines to put it on."),
		expose: j().describe("How it should be reachable.")
	}), ay = L("kind", [
		ny,
		ry,
		iy
	]), oy = L("kind", [
		ny.extend({ name: ty }),
		ry.extend({ name: ty }),
		iy.extend({ name: ty })
	]), sy = I({ name: j().describe("Which entry, by name.") }), cy = I({ entries: F(ay).describe("Everything declared: what you have, and what you want provisioned.") }), I({
		name: ty,
		user: j().min(1),
		address: j().min(1),
		port: U().default(22),
		via: z(["direct", "cloudflared"]).default("cloudflared"),
		sshKey: j().min(1),
		cfToken: j().optional(),
		cfZone: j().optional()
	});
})), uy, dy, fy, py, my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey = v((() => {
	W(), uy = z([
		"wireguard",
		"fortinet",
		"ipsec"
	]), dy = z(["on", "off"]).default("on"), fy = (e) => /^Enc[X]?\s+[0-9A-Fa-f]{8,}$/.test(e.trim()), py = (e, t) => e.refine((e) => !fy(e), { message: `That looks like a value copied straight out of a FortiClient config, FortiClient encrypts it with a key tied to the machine that exported it, so it can't be used here. Enter the actual ${t} (ask whoever administers the gateway).` }), my = I({
		provider: B("wireguard"),
		config: j().min(1),
		autoConnect: dy
	}), hy = I({
		provider: B("fortinet"),
		server: j().min(1),
		port: U().int().min(1).max(65535).default(443),
		username: j().min(1),
		password: py(j().min(1), "password"),
		trustedCert: j().min(1).optional(),
		realm: j().min(1).optional(),
		autoConnect: dy
	}), gy = I({
		provider: B("ipsec"),
		server: j().min(1),
		presharedKey: py(j().min(1), "pre-shared key"),
		localId: j().min(1).optional(),
		remoteId: j().min(1).optional(),
		username: j().min(1).optional(),
		password: py(j().min(1), "XAuth password").optional(),
		ikeVersion: z(["1", "2"]).default("1"),
		pfs: z(["on", "off"]).default("on"),
		dhGroup: z([
			"2",
			"5",
			"14",
			"15",
			"16",
			"19",
			"20"
		]).default("14"),
		aggressive: z(["on", "off"]).default("on"),
		routedNetworks: j().default("0.0.0.0/0").refine((e) => e.split(",").map((e) => e.trim()).every((e) => $s().safeParse(e).success || ec().safeParse(e).success), { message: "Routed networks is a comma-separated list of CIDRs, like 10.0.0.0/8,192.168.0.0/16. A single host needs its prefix too (192.168.0.168/32). Leave it at 0.0.0.0/0 to send everything through the gateway." }),
		autoConnect: dy
	}), _y = L("provider", [
		my,
		hy,
		gy
	]), vy = z([
		"connected",
		"connecting",
		"disconnected",
		"unavailable",
		"failed"
	]), yy = I({
		id: j().describe("Which tunnel."),
		provider: uy.describe("What kind of tunnel it is."),
		state: vy.describe("Whether it is up, dialling, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		gateway: j().optional().describe("What it dials. For display only, and never a credential."),
		interface: j().optional().describe("The network interface carrying it, once one exists."),
		address: j().optional().describe("The address the far end gave this sandbox, which is the single most useful answer to whether you are on the VPN."),
		routes: F(j()).default([]).describe("What goes through it. Everything, when the range covers the whole internet. Empty until it is up."),
		dns: F(j()).default([]).describe("Name servers it pushed, when it pushed any."),
		since: N().optional().describe("When it came up, in milliseconds. Absent unless it is."),
		autoConnect: P().describe("Whether it dials itself when the sandbox starts."),
		detail: j().optional().describe("Why it failed, or a note about a healthy one. Never a credential.")
	}), by = I({ links: F(yy).describe("Every configured tunnel with its live state, read back from the operating system each time rather than remembered.") }), xy = I({
		id: j().describe("Which tunnel to dial."),
		otp: j().min(1).optional().describe("A one-time code, where the gateway wants one. Supplied per dial and never stored; without it such a gateway refuses and says so.")
	}), Sy = I({ id: j().describe("Which tunnel.") }), Cy = I({ xml: j().min(1).describe("The exported configuration file, whole. Nothing is stored: it is read and thrown away.") }), wy = I({
		id: j().describe("The id it would be added under."),
		label: j().describe("Its name as the file has it, so somebody recognises the connection they are picking."),
		provider: uy.describe("What kind of tunnel it is."),
		server: j().describe("Where it dials."),
		port: N().describe("On which port."),
		username: j().optional().describe("The username, but only when the file stored it in the clear. An encrypted one is dropped rather than guessed at."),
		description: j().optional().describe("Whatever the file said about it."),
		localId: j().optional().describe("An identity some tunnel types need, when the file stored it readably."),
		aggressive: P().optional().describe("Which negotiation mode it used."),
		pfs: P().optional().describe("Whether it asked for forward secrecy."),
		dhGroup: j().optional().describe("Which key-exchange group it used. Together with the setting above, this is what decides whether the connection can complete at all."),
		needs: F(j()).describe("What you still have to type in before it can dial. Always at least the password, because the export wraps credentials in encryption that cannot be undone here.")
	}), Ty = I({ connections: F(wy).describe("The connections found in the file, ready to be added one at a time.") });
})), Dy, Oy, ky, Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb = v((() => {
	W(), Xv(), rd(), ly(), Ey(), Dy = z([
		"devops",
		"monorepo",
		"mcp",
		"service",
		"integration",
		"cli",
		"plugin",
		"extension",
		"ssh",
		"vpn",
		"exit",
		"docker",
		"browser",
		"identity",
		"host",
		"webext",
		"agent",
		"endpoint",
		"localmodel",
		"wallet"
	]), Oy = z([
		"active",
		"pending",
		"error",
		"inactive"
	]), ky = I({
		url: M().describe("Where the tool server answers."),
		token: j().optional().describe("The credential it needs, if any. Stored, never echoed back.")
	}), Ay = I({
		service: Qv.describe("Which service to provision."),
		domain: j().min(1).describe("The address it should answer on."),
		on: j().min(1).describe("Which machine to put it on."),
		expose: j().min(1).describe("How it should be reachable.")
	}), jy = I({ provider: B("stripe").describe("Which outside service's credential to make available to deployed apps.") }), My = I({ provider: j().min(1).describe("Which tool to give the agent. The rest of the fields are whatever that tool's own card declares it needs, and are checked against it when you connect.") }).catchall(j()), Ny = I({
		url: M().describe("The repository to take the plugin from."),
		ref: j().min(1).optional().describe("A branch, tag or commit to pin to. Leave it out to follow the default branch."),
		path: j().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the plugin lives, for one that sits in a larger checkout."),
		token: j().min(1).optional().describe("A credential for a private repository. Stored, never echoed back.")
	}), Py = I({
		url: M().describe("The repository to take the extension from."),
		ref: j().regex(/^[0-9a-f]{40}$/, "ref must be a full 40-character commit sha").describe("The exact commit to install, in full. Required rather than optional because extension code runs with your browser's trust: the owner approves precisely the code that runs, and an update is a deliberate re-install at a new commit."),
		path: j().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the extension lives, for one that sits in a larger checkout."),
		token: j().min(1).optional().describe("A credential for a private repository. Stored, never echoed back."),
		registry: M().optional().describe("Which registry this install came from, which is what update checks and security advisories are read against. Absent falls back to the official one.")
	}), Fy = L("auth", [I({
		auth: B("key").describe("Sign in with a key."),
		host: j().min(1).describe("The machine's address."),
		port: U().default(22).describe("Which port it listens on."),
		user: j().min(1).describe("Which user to connect as."),
		privateKey: j().min(1).describe("The private key, whole. Stored with tight permissions and never echoed back.")
	}), I({
		auth: B("password").describe("Sign in with a password."),
		host: j().min(1).describe("The machine's address."),
		port: U().default(22).describe("Which port it listens on."),
		user: j().min(1).describe("Which user to connect as."),
		password: j().min(1).describe("The password. Stored, never echoed back.")
	})]), Iy = I({
		gpu: z(["on", "off"]).default("off"),
		registryMirror: M().optional(),
		insecureRegistries: j().optional(),
		addressPool: j().optional()
	}), Ly = I({
		platform: j().min(1),
		username: j().optional(),
		password: j().optional(),
		identity: j().optional(),
		purpose: j().optional(),
		openedAt: j().optional(),
		exit: j().optional()
	}).catchall(j()), Ry = I({
		email: j().min(3),
		password: j().optional(),
		mailbox: j().optional(),
		loginUrl: M().optional(),
		openAccounts: z(["on", "off"]).default("off"),
		exit: j().optional()
	}), zy = z(["on", "off"]), By = I({
		shell: zy.default("on"),
		write: zy.default("off"),
		screen: zy.default("on"),
		control: zy.default("off"),
		sandboxes: zy.default("off"),
		destructive: zy.default("off"),
		roots: j().optional()
	}), Vy = By.extend({ platform: j().min(1) }), Hy = z(["on", "off"]), Uy = I({
		read: Hy.default("on"),
		act: Hy.default("on"),
		screenshot: Hy.default("off"),
		cookies: Hy.default("off"),
		confirm: z([
			"sensitive",
			"always",
			"never"
		]).default("sensitive")
	}), Wy = Uy.extend({ platform: j().min(1) }), Gy = I({
		command: j().min(1),
		name: j().min(1).optional(),
		env: j().optional(),
		loginCommand: j().min(1).optional()
	}), Ky = z(["openai", "anthropic"]), qy = I({
		baseUrl: M(),
		protocol: Ky.default("openai"),
		apiKey: j().optional(),
		headers: j().optional()
	}), Jy = [
		"16384",
		"32768",
		"65536",
		"131072"
	], Yy = "65536", Xy = 2048, Zy = 1048576, Qy = I({
		model: j().min(1),
		gpu: z(["on", "off"]).default("off"),
		url: M().optional(),
		context: oc([z(Jy), B("custom")]).default(Yy),
		contextTokens: U().int().min(Xy).max(Zy).optional()
	}), $y = j().regex(/^\d+(\.\d{1,6})?$/, "a USD amount like 0.50 (up to six decimals: USDC's own precision)"), eb = z(["eip155:8453", "eip155:84532"]), tb = I({
		network: eb.default("eip155:8453"),
		address: j().optional(),
		perPaymentMaxUsd: $y.default("1.00"),
		autoApproveUnderUsd: $y.default("0"),
		dailyCapUsd: $y.default("5.00"),
		allow: j().optional(),
		deny: j().optional()
	}), nb = L("kind", [
		I({
			id: J,
			kind: B("devops"),
			config: I({})
		}),
		I({
			id: J,
			kind: B("monorepo"),
			config: I({})
		}),
		I({
			id: J,
			kind: B("mcp"),
			config: ky
		}),
		I({
			id: J,
			kind: B("service"),
			config: Ay
		}),
		I({
			id: J,
			kind: B("integration"),
			config: jy
		}),
		I({
			id: J,
			kind: B("cli"),
			config: My
		}),
		I({
			id: J,
			kind: B("plugin"),
			config: Ny
		}),
		I({
			id: J,
			kind: B("extension"),
			config: Py
		}),
		I({
			id: J,
			kind: B("ssh"),
			config: Fy
		}),
		I({
			id: J,
			kind: B("vpn"),
			config: _y
		}),
		I({
			id: J,
			kind: B("exit"),
			config: Vv
		}),
		I({
			id: J,
			kind: B("docker"),
			config: Iy
		}),
		I({
			id: J,
			kind: B("browser"),
			config: Ly
		}),
		I({
			id: J,
			kind: B("identity"),
			config: Ry
		}),
		I({
			id: J,
			kind: B("host"),
			config: Vy
		}),
		I({
			id: J,
			kind: B("webext"),
			config: Wy
		}),
		I({
			id: J,
			kind: B("agent"),
			config: Gy
		}),
		I({
			id: J,
			kind: B("endpoint"),
			config: qy
		}),
		I({
			id: J,
			kind: B("localmodel"),
			config: Qy
		}),
		I({
			id: J,
			kind: B("wallet"),
			config: tb
		})
	]), rb = I({
		state: Oy.describe("Whether it is live, still coming up, broken, or switched off."),
		detail: j().optional().describe("What is wrong, in words a person can act on."),
		code: j().optional().describe("A short marker for that reason, for anything deciding what to do about it.")
	}), ib = I({
		id: j().describe("The connection's id."),
		kind: Dy.describe("What sort of thing it is."),
		status: rb.describe("Whether it is working."),
		config: R(j(), oc([
			j(),
			N(),
			P()
		])).describe("Its settings, minus anything secret."),
		secrets: F(j()).default([]).describe("Which credentials it holds, by name. The values are on one route only, and it is not this one.")
	}), ab = I({
		card: j().describe("Which connection is being suggested."),
		evidence: j().describe("What was seen that prompted it: a file, a remote, printed verbatim so the claim can be checked rather than believed."),
		reason: j().describe("The same claim in words, without repeating the evidence into it."),
		prefill: R(j(), j()).describe("Settings the scan could read, to fill the form so you supply only the credential. Never a secret, even when one is sitting in a checked-in file: the suggestion points at such a file, it does not absorb what is in it.")
	}), ob = I({
		capabilities: F(ib).describe("What this sandbox is connected to."),
		recommendations: F(ab).default([]).describe("Things worth connecting, worked out from what is actually in the workspace rather than from anything you configured. Re-derived on every read, so one whose evidence has moved simply stops being suggested.")
	}), sb = I({ id: j().describe("Which connection.") }), cb = I({
		id: j().describe("The connection's id."),
		kind: j().describe("What sort of thing it is."),
		config: R(j(), j()).describe("Its settings exactly as stored, credentials included. The field names are its own kind's, which the caller already knows.")
	}), lb = I({ card: j().describe("Which suggestion to stop making.") }), ub = I({
		id: j().describe("Which connection."),
		value: j().min(1).describe("The new credential. Its other settings are left alone.")
	}), db = I({
		id: j(),
		to: j().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
	}), fb = I({ session: j().describe("The terminal the sign-in is happening in. Attach to it to type.") }), pb = I({
		code: j().describe("The code."),
		secondsRemaining: N().describe("How long it lasts. Its expiring is what makes handing one to an agent safe, since the seed behind it is never revealed.")
	}), mb = I({
		checked: P().describe("Whether this connection can be tested from here at all. False is not a failure: it is 'no test exists'."),
		ok: P().describe("Whether the service answered as itself."),
		message: j().describe("What happened, in the words a person standing in front of the form needs: the service's own answer, or its refusal.")
	});
})), gb, _b, vb, yb = v((() => {
	W(), gb = I({
		url: j(),
		ref: j().optional(),
		path: j().optional()
	}), _b = (e, t, n) => {
		if (typeof e == "string") {
			let r = e.replace(/^\.\//, ""), i = n?.replace(/^\.\//, "").replace(/\/$/, "");
			return {
				url: t,
				path: i !== void 0 && i !== "" ? `${i}/${r}` : r
			};
		}
		if (typeof e != "object" || !e) return;
		let r = e, i = r.sha ?? r.ref;
		if (r.source === "github" && typeof r.repo == "string") return {
			url: `https://github.com/${r.repo}.git`,
			...i === void 0 ? {} : { ref: i }
		};
		if (r.source === "url" && typeof r.url == "string") return {
			url: r.url,
			...i === void 0 ? {} : { ref: i }
		};
		if (r.source === "git-subdir" && typeof r.url == "string" && typeof r.path == "string") return {
			url: r.url,
			path: r.path,
			...i === void 0 ? {} : { ref: i }
		};
	}, vb = /^[0-9a-f]{40}$/;
})), bb, xb, Sb, Cb, wb, Tb, Eb = v((() => {
	W(), yb(), bb = I({
		sha: j().regex(vb, "must be a full lowercase commit sha"),
		url: j().min(1),
		path: j().min(1).optional(),
		policy: j().min(1),
		reviewer: j().min(1),
		reviewedAt: wl(),
		runId: j().min(1),
		deterministic: I({
			policy: j().min(1),
			scanner: j().min(1),
			version: j().min(1),
			runId: j().min(1)
		})
	}), xb = z([
		"verified",
		"listed",
		"blocked"
	]), Sb = I({
		name: j(),
		description: j().optional(),
		version: j().optional(),
		kind: z(["plugin", "extension"]).optional(),
		trust: xb.optional(),
		trustReason: j().optional(),
		securityReview: bb.optional(),
		securityFix: P().optional(),
		category: j().optional(),
		art: j().max(4096).optional(),
		logo: j().optional(),
		icon: j().optional(),
		homepage: M().optional(),
		source: nc()
	}).superRefine((e, t) => {
		let n = e.trust ?? "listed";
		if (n === "blocked" && (e.trustReason === void 0 || e.trustReason.trim() === "") && t.addIssue({
			code: "custom",
			path: ["trustReason"],
			message: "a blocked entry must say why"
		}), n === "verified" && e.securityReview === void 0 && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "a verified entry must carry its security review"
		}), e.securityReview === void 0) return;
		let r = _b(e.source, "", void 0);
		(r?.ref !== e.securityReview.sha || r?.url !== e.securityReview.url || r.path !== e.securityReview.path) && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "must equal the exact repository, commit and subdirectory named by source"
		});
	}), I({
		name: j(),
		metadata: I({ pluginRoot: j().optional() }).optional(),
		plugins: F(Sb)
	}).superRefine((e, t) => {
		let n = /* @__PURE__ */ new Set();
		for (let r = 0; r < e.plugins.length; r += 1) {
			let i = e.plugins[r]?.name;
			i !== void 0 && n.has(i) && t.addIssue({
				code: "custom",
				path: [
					"plugins",
					r,
					"name"
				],
				message: "entry names must be unique"
			}), i !== void 0 && n.add(i);
		}
	}), Cb = I({
		sha: j(),
		manifest: j(),
		bundle: j(),
		engines: j().optional()
	}), wb = I({
		name: j(),
		stars: N().int().nonnegative().optional(),
		pushedAt: j().optional(),
		checks: Cb.optional()
	}), I({
		scannedAt: j(),
		entries: F(wb)
	}), Tb = I({
		name: j(),
		description: j().optional(),
		version: j().optional(),
		kind: z(["plugin", "extension"]),
		trust: xb,
		trustReason: j().optional(),
		securityReview: bb.optional(),
		admitted: P(),
		securityFix: P().optional(),
		category: j().optional(),
		art: j().optional(),
		logo: j().optional(),
		icon: j().optional(),
		homepage: j().optional(),
		install: gb.optional(),
		stars: N().int().nonnegative().optional(),
		pushedAt: j().optional(),
		checks: Cb.optional()
	});
})), Db = v((() => {
	Eb(), yb();
})), Ob, kb, Ab = v((() => {
	W(), Db(), Ob = I({
		url: M().describe("The registry to read."),
		token: j().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log.")
	}), kb = I({
		name: j().describe("What the registry calls itself."),
		plugins: F(Tb).describe("What it lists, each with the curated decision, the resolved pointer and what a scan found upstream.")
	});
})), jb, Mb, Nb, Pb = v((() => {
	W(), jb = I({
		url: M().describe("The repository to ask. http(s) only: an ssh remote would stop on a host-key prompt nobody can answer."),
		token: j().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log. A form editing a live connection has never been shown its token: it sends the VAULTED marker here and names the connection in `keeping`, so a private repository still answers without anyone retyping a key."),
		keeping: j().min(1).optional().describe("Which connection a VAULTED token belongs to. Ignored when a real token is sent.")
	}), Mb = I({
		name: j().describe("The branch or tag as a person names it: `main`, `v1.4.0`."),
		kind: z(["branch", "tag"]),
		sha: j().regex(/^[0-9a-f]{40}$/).describe("The commit it points at. An annotated tag is peeled here, so this is always a commit, never a tag object.")
	}), Nb = I({
		defaultBranch: j().optional().describe("The branch the remote advertises as HEAD, the one to offer first. Absent when the remote advertises no symref."),
		refs: F(Mb).describe("Every branch the remote advertises, then every tag. Which to offer first is the reader's question, not this one's.")
	});
})), Fb, Ib = v((() => {
	q(), Fv(), hb(), Ab(), Pb(), Q(), Fb = {
		list: K.route({
			method: "GET",
			path: "/capabilities",
			summary: "Everything this sandbox is connected to",
			description: "Each connection with its live state, the settings that are safe to show, and the names of the credentials it holds. The values of those credentials are never in the answer, on any route but one."
		}).output(ob),
		add: K.route({
			method: "POST",
			path: "/capabilities",
			summary: "Connect something, or change a connection",
			description: "Writes a connection and streams the work of applying it, because some kinds provision real infrastructure and take a while. Sending an id that already exists edits that connection: this is the edit as well as the create. Since a caller is never shown stored credentials, it marks the ones it is leaving alone and the daemon fills them in, which is the only way to change one setting without retyping a key."
		}).input(nb).output(G(vv)),
		probe: K.route({
			method: "POST",
			path: "/capabilities/probe",
			summary: "Test a connection's settings without saving them",
			description: "Dials the service the way this connection would and hands back what it said, before anything is written. The answer is the service's own confirmation or its exact refusal, so a wrong token or an unreachable host is found on the form rather than on a card afterwards."
		}).input(nb).output(mb),
		remove: K.route({
			method: "DELETE",
			path: "/capabilities/{id}",
			summary: "Disconnect something",
			description: "Tears a connection down. The kinds that own real infrastructure refuse, because deleting those would be losing data rather than losing a connection."
		}).input(sb).output(X),
		rename: K.route({
			method: "POST",
			path: "/capabilities/{id}/rename",
			summary: "Rename a connection",
			description: "Carries everything the old name keyed across with it: a browser profile and its logins, an enrolled machine, an extension's copy of its source. Removing and re-adding would lose exactly the state that made the connection worth keeping. Kinds whose name is part of what they are refuse."
		}).input(db).output(X),
		setSecret: K.route({
			method: "POST",
			path: "/capabilities/{id}/secret",
			summary: "Replace a stored credential",
			description: "Swaps one connection's key or token for a new one and re-applies it, without touching any of its other settings."
		}).input(ub).output(X),
		status: K.route({
			method: "GET",
			path: "/capabilities/{id}/status",
			summary: "Re-check one connection",
			description: "Probes a single connection right now, for a screen that wants to refresh one row rather than the whole list."
		}).input(sb).output(rb),
		connection: K.route({
			method: "GET",
			path: "/capabilities/{id}/connection",
			summary: "A connection's settings, credentials included",
			description: "The one call that hands back stored secrets, so an extension's own backend can dial the service behind a connection. Never answered for a signed-in person: only a machine credential reaches it, and an extension's only if its manifest asked for this route out loud at install time."
		}).input(sb).output(cb),
		marketplace: K.route({
			method: "POST",
			path: "/capabilities/marketplace",
			summary: "Read a plugin marketplace",
			description: "Resolves a plugin marketplace source into the list of connections you could install from it."
		}).input(Ob).output(kb),
		refs: K.route({
			method: "POST",
			path: "/capabilities/refs",
			summary: "The versions a repository offers",
			description: "Asks a git remote what it advertises and hands back every branch and tag with the commit it points at, plus which branch is its default. Nothing is cloned and nothing is written, so this is cheap enough to answer a form as someone types a repository into it."
		}).input(jb).output(Nb),
		dismiss: K.route({
			method: "DELETE",
			path: "/capabilities/recommendations/{card}",
			summary: "Stop suggesting this connection",
			description: "Not needed, for now. Nothing is torn down. The suggestion comes back if what prompted it in the workspace changes, because what is remembered is the evidence, not the refusal."
		}).input(lb).output(X),
		login: K.route({
			method: "POST",
			path: "/capabilities/{id}/login",
			summary: "Sign in to a connection by hand",
			description: "Opens the connection's own sign-in in a terminal a person can type into, for the flows that need a code pasted or a device confirmed. The answer names the terminal to attach to."
		}).input(sb).output(fb),
		otp: K.route({
			method: "GET",
			path: "/capabilities/{id}/otp",
			summary: "Mint a one-time code",
			description: "Generates a single two-factor code from a stored seed. The one credential-adjacent read an agent is allowed, and it is safe because a code expires in seconds and never reveals the seed, so an agent can answer a prompt without ever holding the factor."
		}).input(sb).output(pb)
	};
})), Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb = v((() => {
	W(), Lb = I({
		query: j().min(2).max(512).describe("What to look for. Plain words, a pattern, a symbol name, or a question."),
		mode: z([
			"q",
			"find",
			"files",
			"def",
			"refs",
			"sym",
			"ast"
		]).optional().describe("Narrow the search to one kind: plain text, filenames, definitions, references, symbols, or code structure. Leave it out to blend them, which also answers a question asked in words."),
		includeIgnored: xl().optional().describe("Search inside installed packages and other ignored folders too."),
		literal: xl().optional().describe("Treat the query as fixed text rather than a pattern."),
		word: xl().optional().describe("Match whole words only."),
		caseSensitive: xl().optional().describe("Whether capitals matter. Off means they do not, rather than being guessed at from the query."),
		include: j().max(512).optional().describe("Which files to ask, in the same grammar an editor's files-to-include box takes: comma-separated patterns, matched at any depth unless anchored, a leading exclamation mark excluding instead."),
		limit: U().int().positive().optional().describe("How many results to return."),
		after: j().optional().describe("Resume from the cursor a previous answer handed back.")
	}), Rb = I({
		kind: z([
			"def",
			"text",
			"sem",
			"bm25",
			"rerank",
			"path",
			"import",
			"call",
			"type",
			"write",
			"fuzzy",
			"heuristic"
		]).describe("Why this line matched: the literal text, its meaning, the path, a definition, a call, and so on. Several kinds can agree on one line."),
		score: N().optional().describe("How strongly that reason applied.")
	}), zb = I({
		start: N().describe("First character of the match within the line."),
		end: N().describe("One past the last.")
	}), Bb = I({
		line: N().describe("Which line, counting from one."),
		text: j().describe("The line itself."),
		spans: F(zb).describe("Where in the line the matches are, so you can highlight without searching again. Empty when the whole line is the match rather than part of it."),
		tags: F(Rb).describe("Why it matched."),
		context: j().optional().describe("What it sits inside: the function, the class, the heading. Often enough that you need not open the file.")
	}), Vb = I({
		path: j().describe("The file."),
		score: N().describe("How well it matched. Groups arrive best first, never in path order."),
		hits: F(Bb).describe("The matching lines in it."),
		capped: P().optional().describe("This file had more matches than are kept per file, so the count is a floor. Say fifty-plus rather than fifty.")
	}), Hb = I({
		state: z([
			"fresh",
			"building",
			"stale"
		]).describe("Whether the index matches what is on disk, is still filling, or has fallen behind."),
		ageMs: N().optional().describe("How long since it last matched the disk, in milliseconds."),
		progress: N().optional().describe("How far through building it is, from zero to one."),
		behind: N().optional().describe("How many files it has not caught up with. Worth showing, because the word stale on its own reads as a warning about the answer, which it almost never is.")
	}), Ub = I({
		mode: j().describe("Which kind of search actually ran, which matters when you let it choose."),
		total: N().describe("Matching lines across the whole workspace, not just this page."),
		files: N().describe("Files the query matched in total."),
		shown: N().describe("How many of those lines are on this page."),
		groups: F(Vb).describe("The results, grouped by file, best first."),
		freshness: Hb.describe("Whether the index behind the answer is up to date."),
		truncated: P().describe("This page is not all of it. Use the cursor."),
		partial: P().optional().describe("At least one file had more matches than are kept per file, so the total is a floor. Different from the page being truncated: a complete page can still count partially."),
		cursor: j().optional().describe("Pass this back as `after` to get the next page."),
		hint: j().optional().describe("A suggestion for getting a better answer out of this query."),
		note: j().optional().describe("What the engine did that you did not ask for: a pattern rerun as plain text because it was not valid, escapes rewritten, a language filter that matched nothing."),
		related: F(j()).optional().describe("Places next door to the best results: where each is defined, and whatever calls it most."),
		candidates: F(j()).optional().describe("Ranked places that scored but did not make the page, best first. The answer often sits at rank five to thirteen, so this saves paging through to find out."),
		features: F(j()).optional().describe("Which stages of the search were switched off for this run. Absent means all of them ran.")
	});
})), Gb, Kb, qb, Jb, Yb = v((() => {
	W(), Wb(), Gb = I({
		repo: j().min(1).describe("Which repository, using the same ids the git routes take."),
		since: j().max(16).optional().describe("How far back to count changes, written as a span such as 2d, 12h, 1w or 3m. Leave it out for all of history."),
		limit: U().int().positive().max(200).optional().describe("How many files and modules to rank. A leaderboard rather than an inventory: past a screenful the ranking stops being the point.")
	}), Kb = I({
		path: j(),
		commits: N(),
		adds: N(),
		dels: N(),
		complexity: N(),
		score: N(),
		latestMs: N()
	}), qb = I({
		path: j(),
		exports: N()
	}), Jb = I({
		repo: j().describe("Which repository this describes."),
		totals: I({
			files: N().describe("Files counted."),
			symbols: N().describe("Named things they export."),
			complexity: N().describe("Branch points across all of them added up."),
			hotspots: N().describe("How many files qualify as hotspots at all. The list below is capped; this is not.")
		}).describe("Counts anybody could recount in the files themselves. Deliberately no single maintainability grade: those cannot be checked and are not comparable between projects."),
		hotspots: F(Kb).describe("Files that change often and are complicated at the same time, worst first."),
		modules: F(qb).describe("The parts of the codebase the rest of it leans on most."),
		freshness: Hb.describe("Whether the index these numbers were read from is up to date.")
	});
})), Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx = v((() => {
	W(), Yb(), Xb = [
		"outdated",
		"audit",
		"knip",
		"jscpd",
		"ui",
		"bundle",
		"mutation"
	], Zb = z(Xb), Qb = I({
		name: j().describe("The dependency."),
		current: j().describe("What you are on."),
		latest: j().describe("What is published."),
		kind: z([
			"major",
			"minor",
			"patch"
		]).describe("How far apart those are. This is not one number because forty patch releases behind is a morning's work and one major version is a project."),
		section: j().describe("Which part of the manifest declares it. A major version behind on a build-time tool is a different risk from one that ships.")
	}), $b = I({
		name: j().describe("The dependency it concerns."),
		severity: z([
			"critical",
			"high",
			"moderate",
			"low",
			"info"
		]).describe("How bad it is said to be."),
		title: j().describe("What it is, in one line. No scoring vector and no reference list: those are for reading on the advisory's own page, and carrying them would put a kilobyte of prose per finding on every poll."),
		patched: j().optional().describe("Which versions fix it. Absent means no fix has been published, which is exactly when nothing should offer to upgrade and something should say so instead."),
		dev: P().describe("Whether it only reaches build-time tooling, which is a different problem from one that reaches what you ship.")
	}), ex = I({
		files: N().int().nonnegative().describe("Files nothing reaches."),
		exports: N().int().nonnegative().describe("Exported things nothing uses."),
		types: N().int().nonnegative().describe("Types nothing uses."),
		dependencies: N().int().nonnegative().describe("Declared dependencies nothing imports."),
		devDependencies: N().int().nonnegative().describe("The same, for build-time ones."),
		sample: F(j()).describe("A handful of the files, so a reader need not take the count on faith. Counts and a sample rather than the whole list, because an agent re-measures against the live tree anyway.")
	}), tx = I({
		percentage: N().describe("How much of the scanned code is duplicated. A share rather than a count, because a count grows with the repository and would mean something different every quarter."),
		clones: N().int().nonnegative().describe("How many duplicated stretches were found."),
		top: F(I({
			lines: N().int().nonnegative().describe("How long the duplicated stretch is."),
			first: j().describe("One of the two places."),
			second: j().describe("The other.")
		})).describe("The largest of them.")
	}), nx = I({
		components: F(j()).describe("The interface's own source files, with tests, stories and generated output left out."),
		bypasses: F(I({
			path: j().describe("The file."),
			count: N().int().positive().describe("How many times, in that file.")
		})).describe("Where the design system was routed around and a value hard-coded instead. Counted per file, because a reader deciding what to open is served by a file and a number, not by eleven snippets."),
		idioms: F(I({
			id: j().describe("Which outdated idiom. Looked up rather than listed here, so a sandbox one version behind can still report one this list has never heard of."),
			files: F(j()).describe("The files still on it.")
		})).describe("Files still written the way their framework has since replaced.")
	}), rx = I({
		dir: j().describe("Which folder was measured. Read from build output already on disk rather than by building, so this is sometimes a commit behind and never leaves anything in your working tree."),
		totalBytes: N().int().nonnegative().describe("The whole thing, raw."),
		totalGzip: N().int().nonnegative().describe("The whole thing, compressed. The ratio between the two is the difference between big and big-and-incompressible, which are different problems."),
		assets: F(I({
			path: j().describe("The file."),
			bytes: N().int().nonnegative().describe("Its raw size."),
			gzip: N().int().nonnegative().describe("Its compressed size.")
		})).describe("What is in it, piece by piece.")
	}), ix = I({
		score: N().describe("The share of injected faults the suite caught. Not a coverage figure: coverage says a line ran, this says an assertion depended on it."),
		killed: N().int().nonnegative().describe("Faults the suite caught."),
		survived: N().int().nonnegative().describe("Faults it did not: code that can be broken with every test still green."),
		inconclusive: N().int().nonnegative().describe("Faults it never got a verdict on, because they would not compile or were configured out. Left out of the score entirely, since neither answer is known."),
		survivors: F(I({
			file: j().describe("Where it is."),
			line: N().int().nonnegative().describe("Which line."),
			mutator: j().describe("What was changed, in the mutation tool's own vocabulary."),
			replacement: j().describe("What it became, so a reader can judge whether it matters without opening the file.")
		})).describe("The surviving faults themselves. A percentage is a mood; a named line with the change that went unnoticed is a morning's work.")
	}), ax = z([
		"ok",
		"unavailable",
		"failed"
	]), ox = L("id", [
		I({
			id: B("outdated"),
			packages: F(Qb)
		}),
		I({
			id: B("audit"),
			advisories: F($b)
		}),
		I({
			id: B("knip"),
			deadCode: ex
		}),
		I({
			id: B("jscpd"),
			duplication: tx
		}),
		I({
			id: B("ui"),
			scan: nx
		}),
		I({
			id: B("bundle"),
			bundle: rx
		}),
		I({
			id: B("mutation"),
			mutation: ix
		})
	]), sx = I({
		id: Zb.describe("Which measurement this is."),
		state: ax.describe("Whether the tool ran and reported, is not part of this repository at all, or broke. The middle one is not evidence of health: the check simply cannot be made here."),
		ranAt: N().describe("When it last finished, in milliseconds, which is what its age is measured from."),
		tookMs: N().int().nonnegative().describe("How long it took. Worth knowing before asking for it again: some of these run for minutes."),
		facts: ox.optional().describe("What it found, including finding nothing, which is a real answer and the one that keeps a chore quiet."),
		reason: j().optional().describe("Why it broke, quoted from the tool rather than summarised, or, when it never ran, what is missing. Never a sentence built from the check's own name, which would have an unmeasured check claiming there is nothing to measure.")
	}), cx = I({
		dir: j().describe("Where the package lives."),
		name: j().describe("What it declares itself as."),
		engines: R(j(), j()).optional().describe("Which runtime versions it says it needs, verbatim."),
		dependencies: F(j()).describe("What it depends on."),
		devDependencies: F(j()).describe("What it needs only to build."),
		documented: P().describe("Whether it has a README, which in this workspace is what a package's own documentation is.")
	}), lx = I({
		docs: F(j()).describe("The repository's own architecture documents, when it has any. Their existence is the question: a repository with none has never been through the documentation flow at all."),
		dockerfiles: F(j()).describe("Container definitions in it."),
		ci: F(j()).describe("Pipeline definitions in it."),
		lockfile: P().describe("Whether dependencies are pinned to exact versions, which is what makes a security audit mean anything."),
		packageManifest: P().describe("Whether it is a JavaScript project at all. A Rust or Go repository has no majors to be behind on, and offering it those checks would be this surface guessing at what it is looking at."),
		deps: F(j()).describe("Every dependency name declared anywhere in the repository. Names rather than a verdict about which framework this is, because that judgement belongs to whatever reads this, not to a sandbox baked months ago.")
	}), ux = I({
		packages: F(cx).describe("Each package in the repository, as its own manifest declares it."),
		shape: lx.describe("What the repository is made of, which decides whether a given chore is even a sensible question to ask of it."),
		hotspots: F(Kb).describe("Files that change often and are complicated at once, capped tight: a chore only asks whether something has entered the top of the ranking."),
		keyModules: F(qb).describe("The parts the rest of the code leans on most, capped the same way."),
		totals: I({
			files: N().describe("Files counted."),
			symbols: N().describe("Named things they export."),
			complexity: N().describe("Branch points added up."),
			hotspots: N().describe("How many files qualify as hotspots at all.")
		}).describe("The repository in numbers."),
		indexed: P().describe("Whether the index these rankings came from is finished. Nothing should act on a half-built one.")
	}), dx = z([
		"acted",
		"reported",
		"clean"
	]), fx = I({
		repo: j().describe("Which repository."),
		chore: j().describe("Which chore."),
		ranAt: N().describe("When it ran, in milliseconds."),
		runId: j().describe("The conversation that ran it, so its whole record can be opened."),
		outcome: dx.describe("What it concluded: it did something, it wrote something down, or it looked and found the finding to be false. That last one matters most, or the same turn starts again for ever."),
		digest: j().describe("A fingerprint of the evidence standing at the time. A chore whose evidence has since changed is due again on its own merits; one whose evidence has not stays quiet."),
		snoozedUntil: N().optional().describe("Not until then, in milliseconds. The chore stays visible and stays out of the badge. Different from switching it off, which is a setting.")
	}), px = I({
		repo: j().describe("Which repository."),
		id: Zb.describe("Which measurement."),
		askedAt: N().describe("When it was asked for, in milliseconds, so one still waiting can say how long it has waited."),
		startedAt: N().optional().describe("When it actually began. Absent while it is queued behind another, which is a real and common state: there is one lane for the whole sandbox.")
	}), mx = I({
		repos: F(I({
			repo: j().describe("Which repository."),
			probes: F(sx).describe("The expensive measurements, served from a cache with an age on each rather than run on demand."),
			signals: ux.describe("The cheap facts, worked out fresh every time.")
		})).describe("Every repository's standing evidence. One answer for all of them, because a badge polls this on a timer and one request per repository is the kind of poll that shows up in a battery graph."),
		ledger: F(fx).describe("What has already been done about all of it."),
		running: F(px).describe("What is being measured right now and what is waiting behind it. Part of this read rather than a route of its own, because a screen that had to ask twice would show the two halves disagreeing."),
		node: j().describe("The runtime version this sandbox is actually running, read off the process rather than off a manifest, because what is installed is the fact that matters and a declared range is a wish.")
	}), hx = I({
		repo: j().min(1).describe("Which repository."),
		id: Zb.describe("Which measurement to retake, ahead of its usual schedule.")
	}), gx = fx, _x = I({
		id: j().describe("Which check."),
		label: j().describe("What it is called."),
		status: z([
			"pass",
			"warn",
			"fail"
		]).describe("How it went. A warning is a real third answer rather than a soft failure."),
		detail: j().describe("What it found.")
	}), vx = I({ checks: F(_x).describe("Everything that can be checked from the extension's own files, for an author about to publish.") });
})), bx, xx = v((() => {
	q(), yx(), Q(), bx = {
		list: K.route({
			method: "GET",
			path: "/chores",
			summary: "What maintenance the repos are asking for",
			description: "Every repo's standing evidence in one read: what the last measurement found and how old it is, the cheap signals that are always current, and what has already been decided about each."
		}).output(mx),
		probe: K.route({
			method: "POST",
			path: "/chores/probe",
			summary: "Measure one repo again now",
			description: "Re-runs a single check without waiting for it to go stale. Answers immediately: the work happens in the background and the result turns up in the next read, because some of these sweeps outlive any sane request."
		}).input(hx).output(X),
		record: K.route({
			method: "POST",
			path: "/chores/ledger",
			summary: "Record a verdict, or snooze one",
			description: "Writes what somebody concluded about one repo's chore, replacing the previous verdict. A chore has one current answer, not a growing pile of times it was fine."
		}).input(gx).output(X)
	};
})), Sx, Cx = v((() => {
	q(), zg(), Q(), Sx = {
		runs: K.route({
			method: "GET",
			path: "/ci/runs",
			summary: "Pipeline runs across the repos",
			description: "What the forges are reporting for every workspace repo that has a remote, served from a cache and filled in on demand. Repos whose notifications are not wired up say so."
		}).output(Ng),
		rerun: K.route({
			method: "POST",
			path: "/ci/runs/rerun",
			summary: "Run a pipeline again",
			description: "Asks the forge to re-run one pipeline. The daemon only passes the request along."
		}).input(Pg).output(X),
		cancel: K.route({
			method: "POST",
			path: "/ci/runs/cancel",
			summary: "Cancel a pipeline run",
			description: "Asks the forge to stop a run in progress."
		}).input(Pg).output(X),
		jobs: K.route({
			method: "POST",
			path: "/ci/runs/jobs",
			summary: "The steps inside one pipeline run",
			description: "Each job in a run with its outcome, which is where you look to find out what actually broke."
		}).input(Pg).output(jg),
		fix: K.route({
			method: "POST",
			path: "/ci/fix",
			summary: "Put an agent on a broken pipeline",
			description: "Opens a fresh isolated conversation already holding the failure: which job, which repo, what it said. The answer names the conversation so you can open it."
		}).input(Fg).output(Ig)
	};
})), wx, Tx, Ex, Dx = v((() => {
	q(), W(), hb(), nf(), wx = z([
		"unknown",
		"healthy",
		"degraded",
		"unavailable"
	]), Tx = I({
		available: P(),
		allowance: N().int().nonnegative(),
		used: N().int().nonnegative(),
		remaining: N().int().nonnegative(),
		health: wx,
		resetsAt: j().optional(),
		retryAt: j().optional(),
		servedModel: j().optional()
	}), Ex = {
		models: K.route({
			method: "GET",
			path: "/endpoints/{id}/models",
			summary: "Models a connected server offers",
			description: "Asks one configured model server what it serves. There is no built-in list and no fallback: what a server offers is knowable only by asking it, so an empty answer is the honest report that we could not."
		}).input(sb).output(tf),
		trial: K.route({
			method: "GET",
			path: "/endpoints/trial/status",
			summary: "What is left of the free trial",
			description: "The allowance, what has been used, when it resets, and which model actually answered the last message. Not being available is the ordinary answer rather than a failure: most sandboxes run against a platform that offers no trial at all."
		}).output(Tx)
	};
})), Ox, kx = v((() => {
	q(), Fv(), Xv(), Q(), Ox = {
		list: K.route({
			method: "GET",
			path: "/exit",
			summary: "Ways to come out somewhere else",
			description: "Every configured exit with its live state, the country it was asked to appear in, and the country it actually appears in. Those last two disagreeing is the whole reason this reports both."
		}).output(qv),
		countries: K.route({
			method: "GET",
			path: "/exit/{id}/countries",
			summary: "Countries one exit can reach",
			description: "Where this exit can put you, ranked by how much capacity is really there. Asked of the provider when it answers and taken from a built-in list when it does not, and the answer says which of those you got."
		}).input(Jv).output(Gv),
		start: K.route({
			method: "POST",
			path: "/exit/{id}/start",
			summary: "Bring an exit up",
			description: "Starts the exit in the country it was configured for. Streamed, because a first start fetches a catalogue, raises a tunnel and then checks the address, which takes tens of seconds on the free providers and can fail at each step with something worth reading. Starting one that is already up simply says so."
		}).input(Jv).output(G(vv)),
		use: K.route({
			method: "POST",
			path: "/exit/{id}/use",
			summary: "Move to another country",
			description: "Switches the exit's country, starting it first if it was down. It ends by checking where the world actually sees you and fails if that does not match what you asked for. A switch that quietly left your traffic where it was is the exact failure this whole feature exists to rule out."
		}).input(Yv).output(G(vv)),
		rotate: K.route({
			method: "POST",
			path: "/exit/{id}/rotate",
			summary: "Take a different address, same country",
			description: "Swaps to another address in the country you are already in. Fails if the address does not actually change, which on a small pool it sometimes cannot."
		}).input(Jv).output(G(vv)),
		check: K.route({
			method: "POST",
			path: "/exit/{id}/check",
			summary: "Where the world sees you right now",
			description: "Looks up the address and country as seen through this exit. Cheap, and the honest answer to whether you are really where you meant to be, which is what every other call here is judged against."
		}).input(Jv).output(Uv),
		stop: K.route({
			method: "POST",
			path: "/exit/{id}/stop",
			summary: "Take an exit down",
			description: "Shuts the exit off. One that was already down is fine: the promise is that it is not up afterwards, not that it was up before."
		}).input(Jv).output(X)
	};
})), Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS = v((() => {
	W(), Ax = j().min(1).max(121).regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/), jx = I({
		updates: z([
			"notify",
			"agent",
			"auto"
		]),
		advisories: z(["auto-disable", "notify"])
	}), Mx = I({
		ref: j().describe("The commit being offered."),
		version: j().optional().describe("What it calls itself."),
		url: j().describe("Where it comes from."),
		path: j().optional().describe("Where inside that repository it lives."),
		trust: z(["verified", "listed"]).describe("Whether anybody vouched for it, or it is merely listed."),
		securityFix: P().optional().describe("This release fixes a security problem in earlier ones, so here the old version is the dangerous one."),
		registry: j().describe("Which registry said so."),
		at: j().describe("When it was published."),
		needsReview: j().optional().describe("Why this one was not taken automatically and is asking for a person instead: it wants more than it used to, or nobody has vouched for it."),
		review: I({
			conversationId: j().describe("Where to read what it found."),
			at: j().describe("When it looked.")
		}).optional().describe("An agent has already read the difference between what is installed and this, so the card can link to what it found rather than offer to start looking.")
	}), Nx = I({
		reason: j().describe("Why the registry pulled the listing, in its own words. Delisting protects people browsing; this record is for the person already running it."),
		registry: j().describe("Which registry said so."),
		at: j().describe("When."),
		autoDisabled: P().describe("Whether the sandbox has already switched it off.")
	}), Px = I({
		state: z([
			"watching",
			"healthy",
			"unhealthy"
		]).describe("How it has behaved since the last update. Checks catch broken, not wrong, so for a while after a swap it is simply watched."),
		detail: j().optional().describe("What is going wrong, when something is."),
		fromRef: j().optional().describe("Which version it was updated from, which is what going back would return to."),
		at: j().describe("When the watching started."),
		autoReverted: P().optional().describe("The update was already rolled back without anybody asking. The record stays rather than pretending the attempt never happened.")
	}), Fx = I({
		added: F(j()).describe("What the new version asks for that the running one does not. The whole point of the comparison."),
		removed: F(j()).describe("What it no longer asks for."),
		unchanged: F(j()).describe("What stays the same.")
	}), Ix = I({
		id: Ax.describe("Which extension."),
		ref: j().regex(/^[0-9a-f]{40}$/).optional().describe("Which commit, in full. Leave it out for whatever the last check found, which is what most callers mean.")
	}), Lx = I({
		ref: j().describe("The commit this would install."),
		version: j().describe("What that version calls itself."),
		installedVersion: j().describe("What is running now."),
		engines: j().describe("Which sandbox versions the new one says it needs."),
		compatible: P().describe("Whether this sandbox is one of them."),
		powers: Fx.describe("Exactly what the new code asks for that the running one does not. This is what approving an update is approving.")
	}), Rx = I({
		ok: B(!0).describe("It went through."),
		ref: j().describe("Which commit is now running."),
		rebuildNeeded: P().optional().describe("The new version changes what the sandbox image contains, so a one-time rebuild is still pending and the update is not wholly landed yet.")
	}), zx = I({
		id: Ax.describe("Which extension."),
		updates: z([
			"notify",
			"agent",
			"auto"
		]).optional().describe("What to do about a newer version: tell you, have an agent read the difference first, or just take it."),
		advisories: z(["auto-disable", "notify"]).optional().describe("What to do about a security warning: switch it off at once, or tell you.")
	}), Bx = I({
		ok: B(!0).describe("The check ran."),
		checkedAt: j().describe("When, so a screen can date the answer.")
	}), Vx = I({
		id: Ax.describe("The extension's id."),
		manifest: re.describe("What it declares about itself: what it contributes, what it needs, and what it may reach."),
		commit: j().describe("Exactly which commit is installed."),
		source: z([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where the code comes from: baked into the sandbox image and not removable, installed from a repository at a pinned commit, or written in this workspace and edited in place."),
		enabled: P().describe("The owner's switch. A switched-off extension is still listed, which is what makes it switchable back on, but nothing it contributes is wired up."),
		essential: P().optional().describe("Its switch is fixed on, because it is the only way to see or stop an engine the sandbox runs regardless. Hiding that page would not stop the spending, only your ability to notice it. Declared by the core about its own surfaces, never by an extension about itself, which would be a pack making itself un-removable."),
		usage: R(j(), I({
			calls: N().int().nonnegative().describe("How many times."),
			last: j().describe("When, most recently.")
		})).optional().describe("How much of the reach it asked for it has actually used, keyed by what it declared. Absent means never observed doing anything, which is a different claim from uses none of them, and the two have to stay tellable apart: reading either as these permissions are unnecessary turns evidence into a guess with a number on it."),
		backend: I({
			state: z([
				"running",
				"error",
				"absent",
				"incompatible",
				"starting",
				"stopped"
			]).describe("How its server half is doing. Absent means the code is not in this image at all; incompatible means it needs a different sandbox version."),
			detail: j().optional().describe("What went wrong, so a backend that failed to start is a sentence rather than an address that answers nothing.")
		}).optional().describe("Present only for an extension that ships a server half."),
		update: Mx.optional().describe("A newer version waiting. All five of these exist only for one installed from a repository: a built-in updates with the image and one written here is edited live."),
		advisory: Nx.optional().describe("A security warning about the installed version."),
		health: Px.optional().describe("How it has behaved since the last update, which is what decides whether that update sticks."),
		previous: I({
			ref: j().describe("The commit that was running before."),
			version: j().optional().describe("What it called itself.")
		}).optional().describe("The version kept one step back, which is what going back means."),
		updatePolicy: jx.optional().describe("The owner's standing answer for this one: tell me, have an agent look, or just do it.")
	}), Hx = I({
		dir: j().describe("Which folder."),
		error: j().describe("Why it could not be read.")
	}), Ux = I({
		extensions: F(Vx).describe("What is installed."),
		invalid: F(Hx).describe("Extensions written here that could not be read at all. Listed rather than dropped, because there is no install moment at which to reject a broken one, so this is its only way of saying anything."),
		updatesCheckedAt: j().optional().describe("When updates were last looked for. Absent until the first check has run. Sent so a screen can say checked an hour ago rather than presenting staleness as certainty.")
	}), Wx = I({
		settings: R(j(), oc([
			j(),
			N(),
			P()
		])).describe("The values, minus anything marked secret."),
		secretsSet: F(j()).describe("Which of its secret settings actually hold a value. Names only: the values themselves never come back.")
	}), Gx = I({
		id: j().describe("Which extension."),
		settings: R(j(), oc([
			j(),
			N(),
			P()
		])).describe("The values to write. A key the extension never declared is refused rather than quietly stored.")
	}), Kx = I({
		id: j().describe("Which extension."),
		enabled: P().describe("On or off.")
	}), qx = I({
		publisher: j().regex(/^[a-z0-9][a-z0-9-]*$/).describe("Who it is by, which together with the name makes its id."),
		name: j().regex(/^[a-z0-9][a-z0-9-]*$/).describe("What it is called.")
	}), Jx = I({
		id: j().describe("The id it was given."),
		dir: j().describe("Where its files are, so you can open them.")
	}), Yx = I({
		id: j().describe("The name the owner gave it, which is also the agent's handle for it."),
		kind: j().describe("Which core kind it is underneath: cli, browser, host or webext."),
		card: j().describe("The card it was added from, named as the grid names it."),
		secrets: F(j()).describe("Credential fields stored for it, by name. The values are deleted with the entry and cannot be recovered from here."),
		effect: j().describe("What tearing it down actually takes away, in one sentence.")
	}), Xx = I({
		id: Ax.describe("The extension's id, as the list addresses it."),
		name: j().describe("Its publisher.name identity, which is the key its settings and switch are stored under."),
		version: j().describe("The version being removed."),
		source: z([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where its code comes from, which decides what removal means."),
		blocked: j().optional().describe("Why this one cannot be removed, when it cannot. Present means every other field is what would go if it could."),
		files: F(I({
			path: j().describe("Workspace-relative."),
			detail: j().describe("What is in there.")
		})).describe("Directories deleted outright. For an extension written here this is the owner's own source, which nothing else keeps a copy of."),
		connections: F(Yx).describe("Connections configured from its cards, which are removed with it."),
		settings: F(I({
			key: j().describe("Which setting."),
			secret: P().describe("Whether its value is a stored credential.")
		})).describe("Values the owner entered for this extension that are forgotten. Only keys actually holding a value are listed."),
		processes: F(j()).describe("Background processes it declared, stopped before its files go."),
		automations: F(j()).describe("Automations of the owner's own that wake on a listener this extension provides. They are NOT removed, and are listed because they stop firing, which is the sort of thing a removal is otherwise discovered by."),
		rebuildNeeded: P().describe("It bakes a layer into the sandbox image, so what it added to the image is only gone after the next environment rebuild."),
		keeps: F(j()).describe("What removal deliberately leaves alone, so the list of what goes can be read as complete.")
	}), Zx = I({
		ok: B(!0).describe("It is gone."),
		connections: F(j()).describe("Which configured connections went with it, by name."),
		rebuildNeeded: P().optional().describe("Its image layer is still in the running sandbox until the next environment rebuild; nothing else is pending.")
	}), Qx = I({ reports: R(j(), R(j(), N().int().positive())).describe("Each extension that called something, and the counts against the declared powers it exercised.") }), $x = I({
		id: j().describe("Which extension."),
		name: j().describe("Which of its declared processes.")
	}), eS = I({
		name: j().describe("Which process."),
		running: P().describe("Whether it is up. False with a port means it crashed and the supervisor is waiting to retry it."),
		port: N().optional().describe("The port it was given."),
		restarts: N().optional().describe("How many times it died and was brought back since it was started. A growing number is a service in trouble."),
		lastExitCode: N().optional().describe("How it last exited, when it has crashed at least once."),
		previewUrl: j().optional().describe("Where to open it, when it has an address.")
	});
})), nS, rS = v((() => {
	q(), hb(), tS(), yx(), Q(), nS = {
		list: K.route({
			method: "GET",
			path: "/extensions",
			summary: "Installed extensions",
			description: "Every extension installed here, resolved to the manifest the owner approved, which is what the app boots its extension host from. The code itself is served separately, because raw script bytes are not a JSON answer."
		}).output(Ux),
		create: K.route({
			method: "POST",
			path: "/extensions/workspace",
			summary: "Write a new extension in place",
			description: "Scaffolds a working extension into this workspace and installs it. The only call here that creates one, and it exists because that folder is otherwise reachable only through an agent's file tools, which is a fine way to change an extension and a poor way to meet the idea of one."
		}).input(qx).output(Jx),
		removalPlan: K.route({
			method: "GET",
			path: "/extensions/{id}/removal",
			summary: "What removing an extension would take away",
			description: "Everything one removal destroys, before it happens: the files deleted, the connections configured from its cards, the settings and credentials forgotten, the background processes stopped, and the owner's own automations that quietly stop firing. Also answerable for an extension that cannot be removed, in which case it says why."
		}).input(sb).output(Xx),
		remove: K.route({
			method: "POST",
			path: "/extensions/{id}/remove",
			summary: "Remove an extension",
			description: "Uninstalls it and everything that only existed because it was here: the connections added from its cards, with their stored credentials, its settings, its switch and its update record. What the owner made with it — automations, files in the workspace — is left alone. Owner only, for the same reason installing is. Built-in extensions cannot be removed; switch them off instead."
		}).input(sb).output(Zx),
		settings: K.route({
			method: "GET",
			path: "/extensions/{id}/settings",
			summary: "An extension's settings",
			description: "The current values for the settings this extension declared it has."
		}).input(sb).output(Wx),
		setSettings: K.route({
			method: "POST",
			path: "/extensions/{id}/settings",
			summary: "Change an extension's settings",
			description: "Writes new values. A key the extension never declared is refused rather than quietly stored, the same honesty rule that governs everything else an extension claims."
		}).input(Gx).output(X),
		setEnabled: K.route({
			method: "POST",
			path: "/extensions/{id}/enabled",
			summary: "Turn an extension on or off",
			description: "The owner's switch. Turning one off stops its background processes at once. What it contributes to an agent's tools is rebuilt at the start of the next turn, and anything it adds to the sandbox image only at the next rebuild."
		}).input(Kx).output(X),
		recordUsage: K.route({
			method: "POST",
			path: "/extensions/usage",
			summary: "Record what extensions just used",
			description: "One batch written by the app rather than measured by the daemon, because the permission gate runs in the browser: from the sandbox's side extension traffic is indistinguishable from anyone else's. This is how the record of which powers each extension actually exercises gets kept without one reporting request per extension."
		}).input(Qx).output(X),
		readiness: K.route({
			method: "GET",
			path: "/extensions/{id}/readiness",
			summary: "Whether an extension is fit to share",
			description: "The checks that can be answered from an extension's own files, for an author about to publish. Read on demand rather than carried on the list, because it reads the code off disk each time."
		}).input(sb).output(vx),
		checkUpdates: K.route({
			method: "POST",
			path: "/extensions/updates/check",
			summary: "Look for extension updates now",
			description: "Compares every installed extension against its source and reports what is newer, what carries an advisory and what looks unhealthy. This also happens on a schedule; call it to check on demand."
		}).output(Bx),
		updatePreview: K.route({
			method: "POST",
			path: "/extensions/{id}/update/preview",
			summary: "What an update would change",
			description: "The read before the click: which versions are involved and exactly which powers the new code asks for that the running one does not. Costs one throwaway copy of the source, the same as browsing a registry entry."
		}).input(Ix).output(Lx),
		applyUpdate: K.route({
			method: "POST",
			path: "/extensions/{id}/update",
			summary: "Update an extension",
			description: "The whole swap as one transaction: fetch, check, quiet the running one, replace it while keeping the outgoing copy one step back, restart and watch it come up. The existing configuration is kept, so a token for a private source survives what removing and re-adding would lose. Owner only, because it changes what code runs."
		}).input(Ix).output(Rx),
		revert: K.route({
			method: "POST",
			path: "/extensions/{id}/revert",
			summary: "Go back to the previous version",
			description: "Swaps the copy kept from before the last update back into place. Owner only, for the same reason updating is."
		}).input(sb).output(Rx),
		setUpdatePolicy: K.route({
			method: "POST",
			path: "/extensions/{id}/update-policy",
			summary: "How an extension should handle its own updates",
			description: "The owner's standing answer for one extension: tell me, have an agent look at it, or just do it. Security advisories can be opted out of separately."
		}).input(zx).output(X),
		processStatus: K.route({
			method: "GET",
			path: "/extensions/{id}/processes/{name}",
			summary: "Whether an extension's background process is up",
			description: "The state of one process an extension declared, with the port it was given and its preview address if it has one."
		}).input($x).output(eS),
		processStart: K.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/start",
			summary: "Start an extension's background process",
			description: "Brings one of an extension's declared processes up in an attachable terminal."
		}).input($x).output(X),
		processStop: K.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/stop",
			summary: "Stop an extension's background process",
			description: "Shuts one of an extension's declared processes down and frees its port."
		}).input($x).output(X)
	};
})), iS = v((() => {
	Vu(), Gu(), Hu.map((e) => ({
		label: e.label,
		value: e.id
	})), Object.fromEntries(Hu.map((e) => [e.id, e.access])), Hu.filter((e) => e.access.kind === "free").map((e) => e.id), Object.fromEntries(Hu.map((e) => [e.id, e.vendor])), Hu.filter((e) => e.planLimits).map((e) => e.id);
})), aS = v((() => {
	iS();
})), oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS = v((() => {
	vp(), Y(), oS = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), sS = [
		/\bgit\s+push\b[^|;&]*\s(?:-f\b|--force\b|--force-with-lease\b|--delete\b)/,
		/\bgit\s+reset\b[^|;&]*\s--hard\b/,
		/\bgit\s+clean\b[^|;&]*\s-{1,2}[a-zA-Z]*f/,
		/\bgit\s+branch\b[^|;&]*\s(?:-D\b|--delete\s+--force\b|--force\s+--delete\b)/,
		/\bgit\s+filter-branch\b/
	], cS = [/\{\{secret:[A-Za-z0-9_./-]+\}\}/], lS = String.raw`[\w~$.{}/\\-]*`, uS = [
		/(?<![\w.])\.env(?!\.(?:example|sample|template))(?:\.[\w-]+)?\b/,
		/\.ssh(?!\w)(?!\/(?:known_hosts|config|authorized_keys|environment)(?!\w))(?!\/[\w.-]*\.pub(?!\w))(?:\/[\w.\-/]*)?/,
		/\bid_(?:rsa|dsa|ecdsa|ed25519)\b(?!\.pub\b)/,
		new RegExp(String.raw`${lS}\.aws/credentials\b`),
		new RegExp(String.raw`${lS}\.npmrc(?!\.(?:example|sample|template))\b`),
		new RegExp(String.raw`${lS}\.git-credentials\b`),
		new RegExp(String.raw`${lS}\.credentials\.json\b`)
	], dS = [
		/\b(?:npm|pnpm|yarn|bun)\s+publish\b/,
		/\bcargo\s+publish\b/,
		/\bgh\s+release\s+create\b/,
		/\bdocker\s+push\b/,
		/\btwine\s+upload\b/
	], fS = String.raw`(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])(?::\d+)?(?=[/?#\s'"\x60]|$)`, pS = [new RegExp(String.raw`\b(?:curl|wget)\b[^|;&]*\bhttps?://(?!${fS})`), new RegExp(String.raw`\bfetch\(\s*['"\x60]https?://(?!${fS})`)], mS = [
		/\bmkfs(?:\.\w+)?\b/,
		/\bwipefs\b/,
		/\bblkdiscard\b/,
		/\bsgdisk\b[^|;&]*\s(?:--zap-all|-Z)\b/,
		/\bdd\b[^|;&]*\bof=(?:\/dev\/|['"`]\/dev\/)/,
		/\bshred\b[^|;&]*\s\/dev\//,
		/>\s*\/dev\/(?:[shv]d[a-z]|nvme\d|disk\d|mmcblk\d)/
	], hS = [
		/\b(?:docker|podman)\s+volume\s+(?:rm|remove|prune)\b/,
		/\b(?:docker|podman)\s+system\s+prune\b/,
		/\b(?:docker(?:\s+compose|-compose)?|podman-compose)\s+down\b[^|;&]*\s(?:-v\b|--volumes\b)/
	], oS(sS), oS(cS), oS(uS), oS(dS), oS(pS), oS(mS), oS(hS), gS = {
		"git.destructive": "rewrite or discard git history",
		"files.destructive": "delete files recursively",
		"system.destructive": "wipe a disk, or delete a whole root directory",
		"container.state": "delete a container volume or the data in it",
		"secrets.access": "read credential material",
		"package.publish": "publish or release a package",
		"network.outbound": "send a request out to the internet"
	}, _S = {
		"git.destructive": [
			{
				code: "git push --force",
				qualifier: "also -f and --force-with-lease"
			},
			{ code: "git push --delete" },
			{ code: "git reset --hard" },
			{ code: "git clean -f" },
			{ code: "git branch -D" },
			{ code: "git filter-branch" }
		],
		"files.destructive": [
			{ code: "rm -rf <path>" },
			{
				code: "fs.rm(<path>, { recursive: true })",
				qualifier: "also rmSync, rmdir, rmdirSync"
			},
			{ code: "rimraf(<path>)" }
		],
		"system.destructive": [
			{ code: "mkfs" },
			{ code: "wipefs" },
			{ code: "blkdiscard" },
			{ code: "sgdisk --zap-all" },
			{ code: "dd of=/dev/…" },
			{ code: "shred /dev/…" },
			{ code: "> /dev/sda" },
			{
				code: "rm -rf /",
				qualifier: "only when the target is a root, listed below"
			}
		],
		"container.state": [
			{
				code: "docker volume rm",
				qualifier: "also remove, prune, and podman for any of these"
			},
			{ code: "docker system prune" },
			{ code: "docker compose down -v" }
		],
		"secrets.access": [
			{
				code: "{{secret:NAME}}",
				qualifier: "a stored secret, used in the command itself"
			},
			{ code: ".env" },
			{ code: ".ssh/*" },
			{ code: "id_rsa" },
			{ code: ".aws/credentials" },
			{ code: ".npmrc" },
			{ code: ".git-credentials" }
		],
		"package.publish": [
			{
				code: "npm publish",
				qualifier: "also pnpm, yarn, bun"
			},
			{ code: "cargo publish" },
			{ code: "gh release create" },
			{ code: "docker push" },
			{ code: "twine upload" }
		],
		"network.outbound": [{
			code: "curl https://…",
			qualifier: "also wget; loopback does not count"
		}, {
			code: "fetch(\"https://…\")",
			qualifier: "in a script"
		}]
	};
})), yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS = v((() => {
	W(), vS(), Y(), yS = /* @__PURE__ */ new Set(["system.destructive"]), bS = /* @__PURE__ */ new Set([
		"system.destructive",
		"container.state",
		"files.destructive"
	]), xS = (e) => e === "sandbox" ? yS : bS, SS = {
		sandbox: "/ and /history. Not /work, /usr or /etc: the worktree's changes are uncommitted work, and the container comes back from its image.",
		device: "/, a home directory, a Windows drive, and the top-level directories an OS keeps."
	}, CS = (e) => Object.fromEntries(fd.options.map((t) => [t, xS(t).has(e) ? "hard" : "judged"])), wS = (e) => fd.options.filter((t) => e.tiers[t] === "hard").length, pd.options.map((e) => ({
		commandClass: e,
		label: gS[e],
		patterns: _S[e],
		tiers: CS(e),
		...e === "system.destructive" ? { notes: SS } : {}
	})).sort((e, t) => wS(t) - wS(e)), TS = z([
		"off",
		"watch",
		"on"
	]), ES = z([
		"allow",
		"ask",
		"refuse"
	]), I({
		decision: ES.describe("Run it, ask the owner, or refuse it."),
		sentence: j().describe("What this command does and why it was allowed, held or refused, in one plain sentence."),
		policyLine: j().optional().describe("A line the owner could add to their policy so this stops being asked. Shown on the card before it is accepted.")
	}), DS = I({
		at: N().int().describe("When it was judged, epoch milliseconds."),
		program: j().describe("The command or script, excerpted."),
		classes: F(j()).describe("The kinds of consequence triage matched, which is why a judge looked."),
		decision: ES.describe("What the judge decided."),
		sentence: j().describe("The judge's sentence."),
		outcome: z([
			"allowed",
			"asked",
			"refused"
		]).describe("What the gate did in the end."),
		answer: z([
			"allowed",
			"declined",
			"unanswered"
		]).optional().describe("How the owner answered, when they were asked."),
		machine: j().optional().describe("Which connected device it was headed for, when it was not this sandbox.")
	}), OS = I({
		text: j().describe("The policy, as the owner wrote it."),
		custom: P().describe("False when nobody has edited it and this is the text this product ships.")
	});
})), AS, jS, MS, NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC = v((() => {
	vp(), W(), kS(), Fu(), Y(), AS = z([
		"intentic",
		"claude",
		"custom"
	]), jS = I({ base: z(["intentic", "claude"]) }), MS = z([
		"off",
		"versions",
		"full"
	]), NS = z([
		"file.edited",
		"turn.ending",
		"push.starting",
		"agent.finished",
		"agent.landed"
	]), PS = z([
		"verify-edits",
		"verify-removals",
		"verify-ui-edits",
		"verify-tests",
		"version-landed"
	]), FS = L("kind", [
		I({
			kind: B("command"),
			command: j().max(500),
			timeoutMs: N().min(6e4).max(36e5).default(9e5)
		}),
		I({
			kind: B("instruct"),
			text: j().min(1).max(4e3)
		}),
		I({
			kind: B("verdict"),
			verdict: z(["allow", "hold"])
		}),
		I({
			kind: B("builtin"),
			name: PS
		})
	]), IS = z([
		"clean",
		"error",
		"conflict",
		"checks-failed"
	]), LS = I({
		repo: j().min(1).optional(),
		paths: F(j().min(1)).max(20).optional(),
		outcome: F(IS).optional(),
		sample: N().gt(0).lt(1).optional()
	}), RS = {
		"file.edited": ["command"],
		"turn.ending": [
			"builtin",
			"instruct",
			"command"
		],
		"push.starting": ["command"],
		"agent.finished": ["verdict"],
		"agent.landed": ["builtin"]
	}, zS = {
		"turn.ending": [
			"verify-edits",
			"verify-removals",
			"verify-ui-edits",
			"verify-tests"
		],
		"agent.landed": ["version-landed"]
	}, BS = I({
		id: j().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: j().min(1).max(80),
		moment: NS,
		when: LS.optional(),
		action: FS,
		enabled: P().default(!0)
	}).refine((e) => RS[e.moment].includes(e.action.kind), {
		message: "that action cannot stand at that moment",
		path: ["action"]
	}).refine((e) => e.action.kind !== "builtin" || (zS[e.moment] ?? []).includes(e.action.name), {
		message: "that built-in cannot stand at that moment",
		path: ["action"]
	}), VS = R(j(), N()), HS = z([
		"builtin",
		"own",
		"capability",
		"extension",
		"plugin",
		"persona",
		"dropped"
	]), US = j().regex(/^[a-z0-9][a-z0-9-]*$/, "a skill name is lowercase letters, digits and dashes"), WS = I({
		id: j().describe("Its handle, which reading and deleting take. A skill of your own is simply its name; one belonging to something else is qualified, because two packages may each ship a review."),
		name: j().describe("Its name."),
		description: j().describe("What it is for, which is the line the agent reads to decide whether to reach for it. Empty when the skill declares none, which is worth showing as the blank it is: a skill with no description is rarely picked."),
		origin: HS.describe("Where it came from."),
		owner: j().optional().describe("Who ships it, as the row would name them."),
		enabled: P().describe("Whether the agent can reach it."),
		switchable: P().describe("Whether this surface can switch it. Everything else is on because its extension or its plugin is, and a switch here that silently did nothing would be worse than none, so the row names its owner instead."),
		editable: P().describe("Whether it can be rewritten here. Your own only: editing somebody else's in place would be undone the next time the thing that ships it catches up."),
		removable: P()
	}), GS = F(WS), KS = I({
		id: j().describe("The skill's id, which can carry the owner it came from."),
		name: j().describe("Its name."),
		body: j().describe("The instructions themselves, as written.")
	}), qS = I({ id: j().min(1).describe("Which skill. It travels in the query rather than the address, because an id can name the owner it came from and that will not fit in a path.") }), JS = I({
		name: US.describe("What to call it. Saving over an existing name rewrites it, which is also how one is renamed."),
		description: j().min(1).max(1024).describe("What it is for, which is what the agent reads to decide whether to reach for it."),
		body: j().min(1).describe("The skill itself.")
	}), YS = I({ name: US.describe("Which skill to delete. The stored text and the agent's copy go together, so nothing is left half done.") }), XS = I({
		name: US.describe("Which skill of your own to switch."),
		on: P().describe("On writes the agent's copy from the stored text; off removes that copy and keeps the text.")
	}), ZS = I({
		stableSystemPrompt: P().default(!1).describe("Keep the instructions identical between turns so the provider can cache them, moving anything that varies into the message instead. Cheaper, at the cost of some flexibility."),
		skills: F(j()).default(["lsp", "fileq"]).describe("Which built-in tools are switched on. A skill of your own is not listed here: it is on while the agent's copy of it exists."),
		personaRouting: P().default(!0).describe("Whether a new chat is matched to one of your personas from its first message. The message is read once it is sent, by the model on the persona-routing list, and the chat says in its own transcript what was asked and which persona it landed on. Never applies to unwatched runs, which name their persona themselves."),
		hashlineEdits: P().default(!1).describe("Have the agent edit files by line number rather than by quoting the text it wants replaced. Cheaper on large files, and less forgiving of a stale read."),
		systemPromptMode: AS.default("intentic").describe("Which instructions the agent starts from: intentic's own, the ones the installed Claude Code carries, or your own. The first two both get this product's own guidance added on top; your own gets nothing added, which is the point of it."),
		systemPrompt: j().max(2e4).default("").describe("Your own instructions, used only when the mode above says custom. Then it is the whole of them: both built-in bases go, and so does everything this product would otherwise add, including the guidance the chat's own cards are driven by. That is the price of total control."),
		iqSearch: P().default(!1).describe("Teach the agent how to use this workspace's own search tool, rather than leaving it to grep around."),
		iqSearchHoldout: N().min(0).max(1).default(0).describe("What share of conversations to run without that teaching, so the two can be compared. Whole conversations rather than individual turns, because once the teaching is in a session, withholding it from the next request does not make the model forget it."),
		workspaceMap: P().default(!1).describe("Open every conversation with a map of the project it starts in: what is in it, what each part is for, and where the agent is standing. Worked out fresh each time rather than written down anywhere, because a written layout is wrong within a fortnight. Off by default, since it spends tokens on the first message of every conversation."),
		workspaceMapHoldout: N().min(0).max(1).default(0).describe("What share of conversations to open without the map, so the two can be compared. Whole conversations rather than individual turns, because the map is sent once and stays in the conversation's history afterwards."),
		sidecars: P().default(!1).describe("Keep an up-to-date markdown rendering of every document, image and audio file in the workspace, made in the background as files land, so the agent reads a pre-derived text instead of paying to parse the file mid-task. Costs background CPU on a document-heavy workspace, so it is a switch rather than a default."),
		dependencyFreshness: MS.default("off").describe("Whether a version the agent is about to pin is checked against the package's own registry first. Facts only, or facts plus the name of a maintained replacement where the registry agrees the current choice has been abandoned. It tells the agent and lets it decide rather than refusing, because matching a version your project already uses is usually the right answer and a gate would fight it."),
		outputCleaners: j().default("").describe("Which command outputs to trim before the agent reads them, cutting the noise a build tool prints without cutting what it said."),
		outputHoldout: N().min(0).max(1).default(0).describe("What share of commands to leave untrimmed, so the saving can be measured against a real comparison rather than estimated."),
		modelRoles: lc(Nu, F(yd).max(10)).default({}).describe("Which models do which job, one ordered list per job: commit messages, session titles, the safety judge, pipeline fixes, and every other place this sandbox picks a model for you. Tried in order, so one spent account does not take a job down. Nothing is chosen for you: a one-shot job with no list does not run, and a whole session with no list opens on whatever your own chat is set to."),
		changelogRepos: F(j()).max(50).default([]).describe("Which repositories keep a changelog, and so get a user-facing note written alongside each merge. A list rather than a switch, and empty by default, because the commit writer's standing rule is to copy the house style rather than impose one, and a repository that has never written such a note gives it nothing to copy."),
		autoTier: z([
			"off",
			"shadow",
			"on"
		]).default("shadow").describe("Whether an easy-looking turn may run on a cheaper model from the same provider. Three states rather than a switch, because the middle one is the only honest road to the third: it scores every turn and routes nothing, so the guess can become a measurement before it changes anything. It can only ever route down, so the worst case is one turn's quality rather than a bill nobody asked for."),
		autoTierEagerness: z([
			"cautious",
			"balanced",
			"eager"
		]).default("balanced").describe("How readily a turn counts as simple enough for the cheaper model. It moves only the cutoff: at every setting a turn still has to say something positively easy, so nothing here can downgrade a short vague request."),
		autoFastModels: F(j()).max(10).default([]).describe("Which cheaper model a downgraded turn lands on. A list so a sandbox spanning providers can name a rung on each, but not a fallback ladder: an entry naming a different provider than the turn is on is skipped rather than tried, because switching provider retires the conversation and starting over to save a fraction of a penny is not a saving. Empty picks the cheapest the turn's own provider publishes."),
		agentRetentionDays: N().min(0).max(365).default(3).describe("How many days a finished conversation stays on the board before being put away. Zero means never. The one setting here that defaults on, because each card left behind is a real working copy on disk, not just a row."),
		resumeAfterOutage: P().default(!1).describe("Whether a turn killed by the model provider failing is re-run automatically, backing off between attempts. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because a retry spends your allowance on a turn you sent once and only you can say whether it was worth paying for twice. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		resumeAfterLimit: P().default(!1).describe("Whether a turn a spent usage limit refused is sent again by itself once the allowance reopens. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because the allowance is your budget and a turn that spends it the second it comes back is not a decision to make for you. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		moveAfterLimit: P().default(!1).describe("Whether a turn a spent usage limit refused is moved to another connected account of the same provider that still has room, as soon as the refusal lands. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because it spends a second account on your behalf. With no account that has room the turn waits as the setting above says."),
		limitMoveCarryUnder: N().int().min(0).default(1e5).describe("When a spent usage limit moves a turn to another account, carry the provider session (the model keeps everything, and re-reads all of it once on the other account) while the conversation's context is under this many tokens; at or above it, start a fresh session with the sandbox's measured brief instead. Zero always starts fresh."),
		autoResumeOnRestart: P().default(!1).describe("Whether a turn killed by the sandbox restarting is re-run once it comes back. Off to begin with, for the same reason: it would spend your allowance on work you are not watching and edit files while you are still waiting for the sandbox to return. Either way the interruption is recorded rather than silently lost."),
		adoptedChecks: R(j(), j()).default({}).describe("Which repositories may run the checks they declare for themselves, and exactly which version of those checks you agreed to. A repository's declaration does nothing until it appears here, the same rule git keeps for hooks, which are never cloned; and a declaration that changes afterwards is held until you look at it again."),
		rules: F(BS).max(50).default([]).describe("Standing instructions you give the sandbox about its own work: ask for proof before a turn ends, run something before a push, hold or release finished work. Empty is the default and is exactly the behaviour of a fresh sandbox, because each of those defaults is what no rule matched means at its own moment."),
		automationFailureLimit: N().min(0).max(20).default(0).describe("How many failures in a row before an automation switches itself off. Zero means never, which is the default, because the failure is not always the automation's fault and a job disabled at three in the morning is one nobody re-enables. Only real errors count: a guard deciding there was nothing to do, or the sandbox dying mid-run, say nothing about the automation."),
		admission: md.prefault({}).describe("Whether work started from outside may run, per kind of trigger: let it, hold it for approval, or refuse it. Composes with each automation's own setting, and the stricter of the two wins, so holding every visitor's message needs no edit to each automation."),
		actionRules: R(j(), dd).default({}).describe("What an agent may do out in the world, per kind of action: go ahead, ask first, or never."),
		commandJudge: TS.default("on").describe("Whether a model reads your safety policy before a flagged command runs. Off judges nothing and asks about nothing; Watch judges everything and records it without ever interrupting you, which is how you find out what your policy actually does before you let it stop anything; On lets the verdict decide. Wiping a disk or deleting under /history asks at every setting — that rule is typed rather than judged, and cannot be turned off."),
		subagentsAtOnce: N().min(1).max(200).default(20).describe("How many subagents may work at the same time."),
		subagentsPerTurn: N().min(1).max(2e3).default(200).describe("How many a single turn may start in total."),
		subagentDepth: N().min(1).max(10).default(3).describe("How many levels deep the delegation may go, since a subagent can start subagents of its own.")
	}), QS = I({
		text: j(),
		version: j()
	}), $S = I({
		id: j(),
		commands: N(),
		savedTokens: N()
	}), eC = I({
		updatedAt: N().optional(),
		commands: N(),
		rawTokens: N(),
		emittedTokens: N(),
		savedPct: N(),
		perCleaner: F($S),
		holdout: I({
			cleaned: N(),
			heldOut: N(),
			measuredSavedPct: N().optional()
		}),
		gaps: F(I({
			command: j(),
			commands: N(),
			tokens: N()
		}))
	}), tC = I({
		turns: N(),
		mean: N()
	}), nC = I({
		metric: z([
			"searchCalls",
			"openingSearches",
			"openingListings",
			"callsBeforeTarget"
		]),
		on: tC,
		off: tC,
		controlTurnsNeeded: N().optional(),
		marginPct: N().optional(),
		deltaPct: N().optional(),
		saved: N().optional()
	}), rC = I({
		metrics: cc([nC], nC),
		minTurns: N(),
		sampleUnit: z([
			"turns",
			"conversations",
			"opening turns"
		]).optional(),
		cohort: j().optional()
	}), iC = I({
		judged: N(),
		fast: N(),
		atStakeUsd: N(),
		routed: N(),
		routedUsd: N(),
		escalated: N(),
		denied: N()
	}), aC = I({
		prevented: j(),
		chosen: j(),
		reason: j(),
		at: N().optional()
	}), oC = I({
		checked: N(),
		improved: N(),
		recent: F(aC),
		updatedAt: N().optional()
	}), sC = I({
		input: eC,
		search: rC.optional(),
		map: rC.optional(),
		tier: iC.optional(),
		dependencies: oC.optional()
	}), cC = `${gp}/checks.json`, lC = z(["turn", "push"]), uC = I({
		when: lC.describe("When to run it: `turn` before the assistant finishes, `push` before code leaves the machine."),
		run: j().min(1).max(500).describe("The command, run in this repository's own directory, so it reads as it would in a terminal there."),
		label: j().min(1).max(80).optional().describe("What to call it on screen. Absent names it after the command."),
		timeoutMs: N().min(6e4).max(36e5).optional().describe("How long it may take before it is killed and counted as failed."),
		paths: F(j().min(1)).max(20).optional().describe("Only run it when the change touches these paths, written relative to this repository. Absent runs it on every change here.")
	}), I({ checks: F(uC).max(10).default([]) }), dC = I({
		repo: j().describe("Which repository, by its workspace id (\"root\" is the workspace itself)."),
		path: j().describe("Where the declaration lives, relative to the workspace, whether or not the file exists yet."),
		checks: F(uC).describe("What it declares, in the order the file lists them."),
		adopted: P().describe("Whether these are running. False means declared and inert: nothing a repository writes runs until the owner switches it on."),
		changed: P().describe("Whether the declaration changed since it was adopted, which holds it until the owner looks again. True only for a repository that was adopted before."),
		error: j().optional().describe("Why the file could not be read, when it exists but does not parse. The checks list is empty in that case.")
	}), fC = I({ repos: F(dC).describe("Every repository that declares checks, plus any the owner has adopted before, sorted by id.") }), pC = I({
		repo: j().min(1).describe("Which repository's declaration to switch."),
		on: P().describe("On adopts what it declares as it stands now; off stops running it. Adopting again is how a changed declaration is accepted.")
	});
})), hC, gC, _C, vC, yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC = v((() => {
	W(), aS(), Y(), rd(), mC(), hC = I({
		files: z([
			"none",
			"read",
			"write"
		]).default("write").describe("What it may do with files: nothing, look and search, or also create and change."),
		shell: P().default(!0).describe("Whether it may run commands, and with them the terminals, the test runs and every tool on the image. The switch the strength of the others depends on."),
		code: P().default(!0).describe("Whether it may write and run a script rather than a command line. Its fence is real where the shell's is not: reads and writes follow the files answer, and it can start no other program unless commands are allowed too. The one stated gap is that the fence cannot cut the network."),
		web: P().default(!0).describe("Whether it may fetch a page or run a search."),
		browser: P().default(!0),
		delegate: P().default(!0),
		sandbox: P().default(!0),
		connectors: F(J).max(100).optional(),
		devices: F(J).max(50).optional(),
		mcp: F(J).max(50).optional()
	}), gC = I({
		startIn: j().max(200).optional().describe("Which folder a conversation opens in."),
		folders: F(j().min(1)).max(50).optional().describe("Which folders it may touch at all. Absent means the whole workspace.")
	}), _C = I({ repos: F(j().min(1).max(200)).max(50).describe("Which nested repositories a conversation wearing this card carries, by workspace-relative path. The workspace itself is always carried; empty means the workspace alone.") }), vC = z([
		"map",
		"context",
		"skills",
		"search",
		"delegation",
		"checks",
		"dependencies",
		"repoSync",
		"handoff"
	]), yC = I({ omit: F(vC).max(20).describe("Which of the notes the sandbox prepends to each message a conversation wearing this card does NOT get. Everything not named here is sent as usual; the notes that keep a turn inside its own branch or explain a missing account cannot be named at all.") }), bC = I({
		id: J.describe("The persona's id."),
		label: j().max(60).optional().describe("What to call it on screen. Absent falls back to the id, which somebody chose anyway."),
		capabilities: F(J).max(50).describe("Which connected accounts are its hands. Named individually rather than by site, because two accounts on one site is the whole problem this solves. Naming one that is not connected yet is not an error: it is a card describing an account this sandbox has still to sign into."),
		brief: j().max(200).optional().describe("What this persona is for, in one line. A new chat is routed onto a persona by this sentence, and the Personas page shows it under the name."),
		powers: hC.optional().describe("What a conversation wearing it may do. Absent means the full toolbox, so a card written before this existed behaves exactly as it did."),
		workspace: gC.optional().describe("Where it works. Absent means the whole workspace."),
		context: _C.optional().describe("Which part of the workspace a conversation wearing it carries: the repositories its checkout holds. Absent means every repository."),
		briefing: yC.optional().describe("Which of the notes the sandbox prepends to every message this card's conversations do without. Absent means all of them, which is what a card written before this existed keeps."),
		models: F(yd).max(10).optional().describe("Which models a conversation wearing it runs on, tried in order. Absent means whatever the chat or the job would have run on anyway; a model chosen for the turn itself always wins."),
		systemPromptMode: AS.optional()
	}), xC = I({
		prompt: j().min(1).max(2e4).describe("The message a new chat is about to open with."),
		folder: j().max(200).optional().describe("The workspace folder the chat was opened in, when it was opened in one."),
		paths: F(j().min(1).max(500)).max(50).default([]).describe("Workspace paths the message names: uploads, @-mentions, the editor's own file.")
	}), SC = I({
		persona: J.optional().describe("The card this message belongs to, or absent when none does and the chat should stay open to everything."),
		reason: j().describe("Why, in the one line a chat can show. Present whether or not a card was named."),
		model: j().optional().describe("Which model answered, as `provider:model`, so the chat can name what the reading cost. Absent when no model was asked at all, which a folder match and an empty persona list both are.")
	}), CC = I({ id: J.describe("Which persona.") }), wC = I({
		personas: F(bC).describe("The characters an agent can wear."),
		connected: F(j()).describe("Which accounts are actually connected right now, so a persona naming one that has since been disconnected can be shown as broken rather than as working.")
	}), TC = I({
		prompt: j().describe("What this persona is told, on top of everything else. Empty means it simply follows the sandbox's own instructions."),
		skills: F(I({
			name: j().describe("The skill's name."),
			description: j().describe("What it is for.")
		})).describe("Skills only this persona's conversations can reach. A different question from what the agent knows generally, with a different answer.")
	}), EC = CC.extend({ prompt: j().max(2e4).describe("What to tell this persona. Sending an empty one removes it entirely rather than storing a blank, so the persona falls back to the sandbox's own instructions.") }), DC = CC.extend(JS.shape), OC = CC.extend({ name: US.describe("Which skill.") }), kC = I({
		name: j().describe("The skill's name."),
		description: j().describe("What it is for."),
		body: j().describe("The skill itself, in full.")
	});
})), jC, MC = v((() => {
	q(), AC(), Q(), jC = {
		list: K.route({
			method: "GET",
			path: "/personas",
			summary: "The characters an agent can wear",
			description: "Each persona with the connected accounts it speaks for, what a conversation wearing it is allowed to do, and where it works."
		}).output(wC),
		save: K.route({
			method: "POST",
			path: "/personas",
			summary: "Create or edit a persona",
			description: "Writes the whole card; sending an id that exists edits it. Nothing is connected, installed or spent by saving one, because a persona only records a decision about accounts that already exist. It is stored as a file you can equally well edit by hand, which is why this writes the card whole rather than patching a field: a round trip through a screen should leave a change a reviewer recognises."
		}).input(bC).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/personas/{id}",
			summary: "Delete a persona",
			description: "Takes away the character, never the accounts: every login it named stays connected. Its own prompt and skills go with it, since a folder nothing can reach is worse than deleting what somebody just asked to delete. Anything still pointed at it goes quiet rather than falling back to speaking as everyone."
		}).input(CC).output(X),
		route: K.route({
			method: "POST",
			path: "/personas/route",
			summary: "Which persona a new chat belongs to",
			description: "Reads the message a chat has just been sent, and one line per persona, and names the card it belongs to, or none, along with the model that answered. Costs one small model call on the persona-routing list, and says so. Nothing is applied here: the chat that asked puts the card on, and only when the persona routing setting is on."
		}).input(xC).output(SC),
		kit: K.route({
			method: "GET",
			path: "/personas/{id}/kit",
			summary: "What one persona carries",
			description: "The instructions this persona is given and the skills only its conversations can reach. A different question from what the agent knows generally, with a different answer."
		}).input(CC).output(TC),
		savePrompt: K.route({
			method: "POST",
			path: "/personas/{id}/prompt",
			summary: "Write a persona's instructions",
			description: "Sets what this persona is told. Saving an empty one removes it entirely rather than storing a blank, so the persona simply falls back to the sandbox's own instructions."
		}).input(EC).output(X),
		readSkill: K.route({
			method: "GET",
			path: "/personas/{id}/skills/read",
			summary: "Read one of a persona's skills",
			description: "The full text of a single skill belonging to this persona."
		}).input(OC).output(kC),
		saveSkill: K.route({
			method: "POST",
			path: "/personas/{id}/skills",
			summary: "Write one of a persona's skills",
			description: "Creates or replaces a skill by name. There is nothing to switch on: a persona's skill is available exactly when that persona is worn, which is what belonging to it has to mean."
		}).input(DC).output(X),
		removeSkill: K.route({
			method: "POST",
			path: "/personas/{id}/skills/remove",
			summary: "Delete one of a persona's skills",
			description: "Removes a single skill from this persona and leaves the rest of its kit alone."
		}).input(OC).output(X)
	};
})), NC, PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC, YC, XC, ZC, $, QC, $C, ew, tw, nw, rw, iw, aw, ow, sw, cw, lw = v((() => {
	W(), rd(), Q(), D_(), NC = j().regex(/^[0-9a-f]{4,64}$/), PC = I({
		sha: j().describe("The commit, in full."),
		short: j().describe("The abbreviated form, for showing."),
		parents: F(j()).describe("What it came from. None means the first commit, one is ordinary, two or more is a merge, which is what a graph draws its lanes from."),
		subject: j().describe("Its first line."),
		body: j().describe("Everything after that."),
		author: j().describe("Who wrote it."),
		email: j().describe("Their address."),
		at: N().describe("When they wrote it, in milliseconds."),
		refs: F(j()).describe("Branches and tags sitting on it."),
		head: P().describe("Whether this is where the repository currently stands.")
	}), FC = I({
		repo: j().describe("Which repository."),
		branch: j().optional().describe("Which branch these are from."),
		commits: F(PC).describe("The commits, newest first."),
		hasMore: P().describe("There are older ones behind this page. It is also what stops the last row being drawn as the beginning of history, which is how a truncated log used to claim it started where the page happened to stop.")
	}), IC = Z.extend({
		limit: U().int().positive().max(2e3).optional().describe("How many commits to return."),
		skip: U().int().nonnegative().max(1e6).optional().describe("How many newer commits to step over, which is how you page further back. Paged rather than read whole, because a large repository's history is tens of thousands of rows.")
	}), LC = I({ repos: F(j()).describe("Every repository's id. The workspace itself is always present as \"root\".") }), RC = I({
		repo: j().describe("The workspace repository."),
		host: j().describe("Which forge its remote points at."),
		project: j().describe("Which project there, as owner and name.")
	}), zC = I({ repos: F(RC).describe("Each repository matched to the project its remote points at.") }), BC = Z.extend({
		path: j().min(1).describe("Which file, relative to the repository."),
		content: j().describe("Its whole new contents."),
		message: j().min(1).describe("The commit message.")
	}), VC = I({
		ok: P().describe("Whether the whole thing went through."),
		wrote: P().describe("The file was written."),
		committed: P().describe("The commit was recorded."),
		pushed: P().describe("It reached the remote."),
		branch: j().optional().describe("Which branch it happened on."),
		defaultBranch: j().optional().describe("Which branch the repository considers its main one, so a caller can see it was on a side branch."),
		reason: j().optional().describe("Why it stopped where it did. Being on a side branch, having no remote and having no credentials are all reported here rather than raised.")
	}), HC = Z.extend({ sha: NC.describe("Which commit.") }), UC = I({ files: F(a_).describe("Which files it touched, with counts but not contents. Fetch any one file's contents separately, so a commit with a thousand files stays one cheap answer.") }), WC = Z.extend({
		sha: NC.describe("Which commit."),
		path: j().min(1).describe("Which file in it.")
	}), GC = Z.extend({
		sha: NC.describe("Which commit to start it at."),
		name: td.describe("The new branch's name.")
	}), KC = Z.extend({
		sha: NC.describe("Which commit to tag."),
		name: td.describe("The tag's name.")
	}), qC = Z.extend({ ref: td.describe("Where to switch to: a branch, a tag, or a commit.") }), JC = Z.extend({
		name: td.describe("Which tag."),
		remote: td.optional().describe("Also delete it there. Leave it out to remove it locally only.")
	}), YC = Z.extend({
		name: td.describe("Which tag."),
		remote: td.describe("Which remote to send it to.")
	}), XC = Z.extend({
		sha: NC.describe("Which commit to move the branch to."),
		mode: z([
			"soft",
			"mixed",
			"hard"
		]).describe("How much to take with it: move the branch alone, also unstage, or also throw away what is on disk. The last one takes a checkpoint first.")
	}), ZC = Z.extend({ sha: NC.describe("Which commit to act on.") }), $ = I({
		ok: P().describe("Whether it worked."),
		reason: j().optional().describe("Why not, in git's own words. A conflict, a missing remote and missing credentials are all reported here rather than raised, because they are things a screen has to render rather than breakages.")
	}), QC = I({
		ref: j().describe("How to address it, which applying and dropping take."),
		sha: j().describe("The commit behind it, because a stash entry is a commit."),
		short: j().describe("The abbreviated form, for showing."),
		subject: j().describe("What it was set aside as, with git's own scaffolding stripped off."),
		branch: j().optional().describe("Which branch it was set aside from."),
		at: N().describe("When, in milliseconds."),
		parents: F(j()).describe("What it sits on, so a graph can draw it like any other commit.")
	}), $C = I({
		repo: j().describe("Which repository."),
		stashes: F(QC).describe("What is set aside, newest first.")
	}), ew = j().regex(/^stash@\{\d{1,4}\}$/), tw = Z.extend({
		message: j().max(500).optional().describe("What to call it, so you know what it was later."),
		includeUntracked: P().optional().describe("Also set aside files git is not yet tracking, which are otherwise left where they are.")
	}), nw = Z.extend({
		ref: ew.describe("Which entry."),
		pop: P().optional().describe("Remove it from the stash once it has been applied cleanly.")
	}), rw = Z.extend({ ref: ew.describe("Which entry.") }), iw = Z.extend({ ref: ew.describe("Which entry.") }), aw = z([
		"commit",
		"amend",
		"merge",
		"rebase",
		"cherry-pick",
		"revert",
		"reset",
		"pull",
		"other"
	]), ow = I({
		kind: aw.describe("What the last action was."),
		description: j().describe("What undoing it would do, in words."),
		branch: j().describe("Which branch would move."),
		sha: j().describe("Where it stands now."),
		previousSha: j().describe("Where it would go back to. Send this with the undo as proof you looked, so one prepared against a view that has since moved is refused rather than landing somewhere unexamined."),
		changesWorkingTree: P().describe("Undoing would rewrite files as well as moving the branch, so anything offering it should warn about losing work.")
	}), sw = I({
		repo: j().describe("Which repository."),
		action: ow.optional().describe("What undoing would reverse. Absent means there is nothing to go back from.")
	}), cw = Z.extend({
		previousSha: NC.describe("Where to go back to, from the matching read. It is also proof you looked: one prepared against a stale view is refused."),
		discardChanges: P().optional().describe("Also rewrite the files, rather than only moving the branch.")
	});
})), uw, dw = v((() => {
	q(), D_(), lw(), Ih(), Q(), uw = {
		changes: K.route({
			method: "GET",
			path: "/git/changes",
			summary: "Uncommitted work across every repo",
			description: "The workspace's whole review set in one answer: every repo that has something uncommitted, and within it every changed file with its status and line counts. This is what the Changes panel draws, and it is the call to make when you want to know whether a workspace is clean without walking the repos yourself."
		}).output(g_),
		repos: K.route({
			method: "GET",
			path: "/git/repos",
			summary: "Every git repo in the workspace",
			description: "The repos the daemon found under the workspace root, each with the id every other call in this group expects as its `{repo}` segment. The workspace root itself is always present as `root`."
		}).output(LC),
		remoteRepos: K.route({
			method: "GET",
			path: "/git/remote-repos",
			summary: "Repos matched to their remotes",
			description: "The same repo list, but with the forge host and `owner/name` each one's remote points at. Use it to recognise a workspace repo in a list of names that came from somewhere else, such as a set of pull requests. Costs a remote lookup per repo, which is why it is separate from the plain repo list."
		}).output(zC),
		log: K.route({
			method: "GET",
			path: "/git/{repo}/log",
			summary: "Commit history for one repo",
			description: "A page of commits on the current branch, newest first, each with its author, subject, timestamp and the refs pointing at it. Paginate with the cursor the answer hands back rather than by offset, so a commit landing mid-scroll does not shift the page under you."
		}).input(IC).output(FC),
		commitDiff: K.route({
			method: "GET",
			path: "/git/{repo}/commit-diff",
			summary: "What one commit changed",
			description: "The list of files a single commit touched, with per-file status and line counts but not the content. Fetch the content of any one of them with the commit file diff call, so a commit with a thousand files stays one cheap answer."
		}).input(HC).output(UC),
		commitFileDiff: K.route({
			method: "GET",
			path: "/git/{repo}/commit-file-diff",
			summary: "One file's before and after at a commit",
			description: "Both sides of a single file as of one commit: the content its parent had and the content that commit left. The daemon returns whole sides rather than a patch, so a caller can render the comparison however it likes."
		}).input(WC).output(Fh),
		operation: K.route({
			method: "GET",
			path: "/git/{repo}/operation",
			summary: "Whether a merge or rebase is halted mid-flight",
			description: "Names the git operation the worktree is stuck inside, if any: a conflicted merge, an interrupted rebase, a half-applied cherry-pick. Check this first when another call refuses, because a halted worktree is the usual reason and the abort call is the way out."
		}).input(Z).output(p_),
		abort: K.route({
			method: "POST",
			path: "/git/{repo}/abort",
			summary: "Abandon a halted merge or rebase",
			description: "Runs git's own abort for whichever operation has the worktree halted, putting the repo back where it stood before the operation started. Nothing else clears that state."
		}).input(Z).output($),
		undoable: K.route({
			method: "GET",
			path: "/git/{repo}/undo",
			summary: "What undoing the last action would do",
			description: "Reads the branch's reflog to describe the move that undo would reverse, and hands back the commit it would land on. Pass that commit to the undo call as proof you looked, and an undo prepared against a view that has since moved is refused rather than landing somewhere unexamined."
		}).input(Z).output(sw),
		undo: K.route({
			method: "POST",
			path: "/git/{repo}/undo",
			summary: "Move the branch back one step",
			description: "Walks the current branch back to where it pointed before its last action. This moves the branch ref and leaves the working tree alone, which is the opposite of restoring a checkpoint. Requires the commit the matching read handed you."
		}).input(cw).output($),
		stashes: K.route({
			method: "GET",
			path: "/git/{repo}/stashes",
			summary: "Everything set aside in the stash",
			description: "The repo's stash entries, newest first, each with the message and the commit behind it. A stash entry is a commit, so it reads the same way a log entry does and its contents come back from the stash diff call."
		}).input(Z).output($C),
		stashDiff: K.route({
			method: "GET",
			path: "/git/{repo}/stash-diff",
			summary: "What one stash entry holds",
			description: "The files a single stash entry would bring back, with per-file status and line counts. The same shape a commit diff has, because a stash entry is a commit."
		}).input(iw).output(UC),
		stashPush: K.route({
			method: "POST",
			path: "/git/{repo}/stash",
			summary: "Set the current changes aside",
			description: "Moves the working tree's changes onto the stash and leaves a clean tree behind. Nothing is lost: the entry is a commit you can inspect, apply or drop afterwards."
		}).input(tw).output($),
		stashApply: K.route({
			method: "POST",
			path: "/git/{repo}/stash/apply",
			summary: "Bring a stash entry back",
			description: "Replays one stash entry onto the working tree. A conflict is reported in the answer rather than raised as a failure, because a conflicting apply is an ordinary outcome a screen has to render."
		}).input(nw).output($),
		stashDrop: K.route({
			method: "POST",
			path: "/git/{repo}/stash/drop",
			summary: "Discard a stash entry",
			description: "Deletes one stash entry. This is the only unrecoverable call in the stash set, so the daemon takes a checkpoint of the workspace first."
		}).input(rw).output(X),
		createBranch: K.route({
			method: "POST",
			path: "/git/{repo}/branch",
			summary: "Start a branch at a commit",
			description: "Points a new branch name at any commit, without moving HEAD. Use the checkout call if you also want to switch to it."
		}).input(GC).output(X),
		createTag: K.route({
			method: "POST",
			path: "/git/{repo}/tag",
			summary: "Tag a commit",
			description: "Puts a tag on any commit. Local only: pushing it to the remote is a separate call."
		}).input(KC).output(X),
		deleteTag: K.route({
			method: "POST",
			path: "/git/{repo}/tag/delete",
			summary: "Remove a tag",
			description: "Deletes a tag locally. A tag already pushed stays on the remote until it is deleted there too."
		}).input(JC).output(X),
		pushTag: K.route({
			method: "POST",
			path: "/git/{repo}/tag/push",
			summary: "Send a tag to the remote",
			description: "Pushes one tag to the repo's remote. Reports the outcome rather than failing, since a missing remote or missing credentials are ordinary answers here."
		}).input(YC).output($),
		checkout: K.route({
			method: "POST",
			path: "/git/{repo}/checkout",
			summary: "Switch to a branch or commit",
			description: "Moves HEAD to a branch, tag or commit and reshapes the working tree to match. The daemon takes a checkpoint first, so an unexpected result is recoverable. Uncommitted work that would be overwritten is reported instead of being trampled."
		}).input(qC).output($),
		cherryPick: K.route({
			method: "POST",
			path: "/git/{repo}/cherry-pick",
			summary: "Replay one commit onto this branch",
			description: "Applies a single commit's changes on top of the current branch as a new commit. A conflict comes back in the answer, with the halted state readable from the operation call."
		}).input(ZC).output($),
		revert: K.route({
			method: "POST",
			path: "/git/{repo}/revert",
			summary: "Undo a commit with a new commit",
			description: "Adds a commit that reverses an earlier one, leaving the history intact. This is the safe way to take something back on a branch other people have pulled."
		}).input(ZC).output($),
		drop: K.route({
			method: "POST",
			path: "/git/{repo}/drop",
			summary: "Remove a commit from history",
			description: "Rewrites the branch so one commit is no longer in it. History changes, so this is for branches nobody else has pulled. A checkpoint is taken first."
		}).input(ZC).output($),
		merge: K.route({
			method: "POST",
			path: "/git/{repo}/merge",
			summary: "Merge another branch in",
			description: "Merges a branch or commit into the current one. Conflicts are reported in the answer and leave the worktree halted, which the operation call explains and the abort call clears."
		}).input(ZC).output($),
		rebase: K.route({
			method: "POST",
			path: "/git/{repo}/rebase",
			summary: "Replay this branch onto another",
			description: "Moves the current branch's commits on top of a different base. History changes. Conflicts halt the rebase and are reported rather than raised, so the operation and abort calls are the way through."
		}).input(ZC).output($),
		reset: K.route({
			method: "POST",
			path: "/git/{repo}/reset",
			summary: "Move the branch to a commit",
			description: "Repoints the current branch at another commit, optionally reshaping the working tree to match. The destructive modes take a checkpoint first."
		}).input(XC).output($),
		fileDiff: K.route({
			method: "GET",
			path: "/git/{repo}/file-diff",
			summary: "One file's committed and working copies",
			description: "Both sides of a file as it stands right now: what the last commit holds and what is on disk. This is what a review pane shows for an uncommitted change."
		}).input(t_).output(Fh),
		status: K.route({
			method: "GET",
			path: "/git/{repo}/status",
			summary: "One repo's branch and pending changes",
			description: "The current branch, its sync position against the remote, and every staged, unstaged and untracked path. The single-repo counterpart to the workspace-wide changes call."
		}).input(Z).output(n_),
		commit: K.route({
			method: "POST",
			path: "/git/{repo}/commit",
			summary: "Commit the pending changes",
			description: "Records a commit with your message. It commits whatever is staged; add `stage` to stage something first — an empty object for everything pending, or a scope such as one side or one conversation's landed files. The answer carries the commit it created."
		}).input(qg).output(__),
		discard: K.route({
			method: "POST",
			path: "/git/{repo}/discard",
			summary: "Throw away pending changes",
			description: "Restores files to their committed state and deletes untracked ones. Name paths or a scope to narrow it; with neither it throws away every uncommitted change in the repository. The daemon checkpoints the workspace first, so this is recoverable from the timeline."
		}).input(Jg).output(X),
		stage: K.route({
			method: "POST",
			path: "/git/{repo}/stage",
			summary: "Mark changes for the next commit",
			description: "Adds changes to the index: exactly the paths you name, everything a scope describes, or the whole repository when you name neither. Nothing on disk changes, so this is always safe and always reversible with the unstage call."
		}).input(Yg).output(X),
		unstage: K.route({
			method: "POST",
			path: "/git/{repo}/unstage",
			summary: "Take changes back out of the next commit",
			description: "Removes changes from the index and leaves the files themselves untouched, on the same terms as staging. The exact reverse of it."
		}).input(Yg).output(X),
		branches: K.route({
			method: "GET",
			path: "/git/{repo}/branches",
			summary: "Local branches and how far each has drifted",
			description: "Every local branch with how many commits it sits ahead of and behind its remote counterpart, so a branch switcher can show sync state without a call per branch."
		}).input(Z).output(l_),
		createBranchAt: K.route({
			method: "POST",
			path: "/git/{repo}/branches",
			summary: "Create a branch from a starting point",
			description: "Makes a branch at a named start point and optionally switches to it. The branch-switcher counterpart to creating a branch at a specific commit."
		}).input(u_).output(X),
		deleteBranch: K.route({
			method: "POST",
			path: "/git/{repo}/branches/delete",
			summary: "Delete a local branch",
			description: "Removes a branch from the repo. Unmerged work is refused unless you ask for it to be forced, and the remote branch is untouched either way."
		}).input(d_).output(X),
		remote: K.route({
			method: "GET",
			path: "/git/{repo}/remote",
			summary: "Sync position against the remote",
			description: "How far the current branch sits ahead of and behind its remote, as of the last fetch, plus whether a remote and working credentials exist at all. This is a read of what the daemon already knows, not a network call, which is why fetching is a separate button."
		}).input(Z).output(o_),
		fetch: K.route({
			method: "POST",
			path: "/git/{repo}/fetch",
			summary: "Refresh what the remote holds",
			description: "Contacts the remote and updates the daemon's picture of it without touching your branch. Run this before trusting the sync position."
		}).input(Z).output($),
		pull: K.route({
			method: "POST",
			path: "/git/{repo}/pull",
			summary: "Bring remote commits down",
			description: "Fetches and integrates the remote's commits into the current branch. A pull that cannot fast-forward is reported in the answer rather than raised, because that is an ordinary thing to be told."
		}).input(Z).output($),
		push: K.route({
			method: "POST",
			path: "/git/{repo}/push",
			summary: "Start sending commits to the remote",
			description: "Starts pushing the current branch, setting its upstream on first push, and answers at once: the push runs in a real terminal (it runs this repository's pre-push hook, which can be a whole suite), so watch it there and poll pushState for the verdict. A second start while one is going joins it rather than pushing twice."
		}).input(Xg).output(X),
		pushState: K.route({
			method: "GET",
			path: "/git/{repo}/push",
			summary: "How the push is going",
			description: "The verdict, or the progress so far: where it is, the terminal it runs in, and for a push that did not go, git's last words and who refused it, the repository's own pre-push hook, the remote, or the transport. Idle when nothing has been started for this repository."
		}).input(Z).output(Qg),
		pushCancel: K.route({
			method: "POST",
			path: "/git/{repo}/push/cancel",
			summary: "Stop the push",
			description: "Kills the run. It settles as cancelled; nothing that git had not already sent reaches the remote."
		}).input(Z).output(X),
		files: K.route({
			method: "GET",
			path: "/git/{repo}/files",
			summary: "Every tracked path in the repo",
			description: "The flat list of files git tracks, which is what a file picker or a search box wants. Ignored and untracked files are not in it."
		}).input(Z).output(r_),
		readFile: K.route({
			method: "GET",
			path: "/git/{repo}/file",
			summary: "Read a file from the repo",
			description: "The contents of one file as it stands on disk. A path that climbs out of the repo is refused."
		}).input($g).output(i_),
		writeFile: K.route({
			method: "PUT",
			path: "/git/{repo}/file",
			summary: "Write a file into the repo",
			description: "Replaces one file's contents, creating it and its parent folders if they are missing. Nothing is committed: the change shows up as pending work."
		}).input(e_).output(X),
		publishFile: K.route({
			method: "POST",
			path: "/git/{repo}/publish-file",
			summary: "Write, commit and push one file",
			description: "The three steps as a single call with a single answer, committing only the path you named and leaving any other pending work alone. Being on a side branch, having no remote and having no credentials are all reported rather than raised."
		}).input(BC).output(VC)
	};
})), fw, pw = v((() => {
	q(), Ih(), Q(), fw = {
		list: K.route({
			method: "GET",
			path: "/history/snapshots",
			summary: "Points you can go back to",
			description: "The saved states of the whole workspace, taken automatically as work happens. This is the timeline behind undoing a change that was never committed."
		}).output(Dh),
		diff: K.route({
			method: "GET",
			path: "/history/diff",
			summary: "What changed since a saved point",
			description: "The files that differ between one saved point and the one before it, taking in everything that happened in between."
		}).input(Ah).output(Mh),
		fileDiff: K.route({
			method: "GET",
			path: "/history/file-diff",
			summary: "One file's before and after across a saved point",
			description: "Both sides of a single file at one point in the timeline."
		}).input(Nh).output(Fh),
		restore: K.route({
			method: "POST",
			path: "/history/restore",
			summary: "Put the workspace back",
			description: "Returns every file to how it stood at a saved point. This restores the files; moving a branch is a different thing and lives with the git calls."
		}).input(Ah).output(X)
	};
})), mw, hw = v((() => {
	W(), mw = I({ args: F(j()) });
})), gw, _w = v((() => {
	q(), Fv(), hw(), Q(), gw = {
		run: K.route({
			method: "POST",
			path: "/intentic",
			summary: "Run an infrastructure command",
			description: "Runs the sandbox's own command-line tool and streams its output as it arrives, so progress is visible rather than arriving all at once at the end. A failure surfaces once the stream closes."
		}).input(mw).output(G(vv)),
		apply: K.route({
			method: "POST",
			path: "/intentic/apply",
			summary: "Bring the infrastructure into line",
			description: "Starts the long reconcile that makes the running world match what was declared, and answers immediately. It takes minutes, so it runs in a terminal you attach to rather than on a held-open request."
		}).output(X),
		applyEvents: K.route({
			method: "GET",
			path: "/intentic/apply/events",
			summary: "Follow the reconcile",
			description: "The same progress the terminal shows, as structured events, kept on disk so a page refresh does not lose it. It replays from the start of the run and then follows live, closing when the run ends."
		}).output(G(vv))
	};
})), vw, yw = v((() => {
	q(), ly(), vw = {
		list: K.route({
			method: "GET",
			path: "/inventory",
			summary: "Machines and services you have declared",
			description: "What the deployment configuration says this setup owns and what it wants provisioned."
		}).output(cy),
		add: K.route({
			method: "POST",
			path: "/inventory",
			summary: "Declare a machine or service",
			description: "Writes the entry into the configuration file and commits it, exactly as an agent editing that file by hand would. Answers with the whole updated list, so a screen redraws from one response."
		}).input(oy).output(cy),
		remove: K.route({
			method: "DELETE",
			path: "/inventory/{name}",
			summary: "Undeclare a machine or service",
			description: "Takes the entry back out of the configuration and commits that too. Answers with the whole updated list."
		}).input(sy).output(cy)
	};
})), bw, xw = v((() => {
	q(), ng(), Q(), bw = {
		list: K.route({
			method: "GET",
			path: "/issues",
			summary: "Bugs your users have reported",
			description: "Everything that has crashed or been written in, grouped so a crash that hit a thousand people is one row with a count."
		}).output(Yh),
		status: K.route({
			method: "POST",
			path: "/issues/{id}/status",
			summary: "File one away, or reopen it",
			description: "Moves one issue between open, resolved and ignored. Resolving does not close anything upstream: it is your own inbox."
		}).input(Zh).output(X),
		investigate: K.route({
			method: "POST",
			path: "/issues/{id}/investigate",
			summary: "Put an agent on it now",
			description: "Starts a turn on this issue with the crash, its stack and what led up to it as the brief. Answers straight away and runs detached; the issue goes to 'being looked at'."
		}).input(Xh).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/issues/{id}",
			summary: "Throw one away",
			description: "Forgets an issue entirely. It will come back as new if it happens again, which is usually what you want."
		}).input(Xh).output(X),
		installs: K.route({
			method: "GET",
			path: "/issues/installs/{automationId}",
			summary: "Which sites have loaded the reporter",
			description: "The sites whose pages actually loaded this intake's script, and the ones that were turned away. The answer to 'did the snippet land?', which an empty inbox cannot give you."
		}).input(tg).output(eg)
	};
})), Sw, Cw, ww, Tw, Ew, Dw, Ow, kw, Aw = v((() => {
	W(), Sw = I({
		name: j().describe("Its name, which is what the read route takes."),
		sizeBytes: N().describe("Size in bytes."),
		modifiedAt: N().describe("When it last changed, in milliseconds.")
	}), Cw = I({ files: F(Sw).describe("Every log the sandbox keeps: captured terminal output, command runs, and its own log.") }), ww = I({
		name: j().min(1).describe("Which log. It travels in the query rather than the address, because log names contain slashes."),
		bytes: U().min(1).max(1048576).default(65536).describe("How much of the end to read. The newest bytes win when the file is larger.")
	}), Tw = I({
		name: j().describe("Which log this is from."),
		sizeBytes: N().describe("How large the whole file is."),
		text: j().describe("The end of it, as text."),
		truncated: P().describe("There is more before what you got.")
	}), Ew = I({
		seenAt: N().describe("When the browser saw it, in milliseconds."),
		level: z(["warn", "error"]).describe("How bad it was."),
		event: j().min(1).max(100).describe("What kind of thing it was, as a stable name."),
		message: j().max(2e3).describe("What it said."),
		route: j().max(300).optional().describe("Which page they were on."),
		requestId: j().max(100).optional().describe("Which daemon call it belonged to, when it belonged to one."),
		build: j().max(100).optional().describe("Which build of the app was running."),
		fields: R(j().max(60), oc([
			j().max(4e3),
			N(),
			P()
		])).optional().describe("Whatever else was worth keeping.")
	}), Dw = I({ events: F(Ew).min(1).max(50).describe("What the browser has to report, oldest first.") }), Ow = I({ recorded: N().describe("How many were written down.") }), kw = I({
		clientId: j().describe("This connection's own id, the same one it gave the event stream."),
		idle: P().describe("Whether the person has stopped doing anything."),
		view: j().optional().describe("Which view they are on."),
		sessionId: j().optional().describe("Which conversation they have open."),
		path: j().optional().describe("Which file they are looking at. Sent whole rather than merged: leaving a field out clears it, so a tab that closes a file drops the path in the same report.")
	});
})), jw, Mw = v((() => {
	q(), Aw(), jw = {
		list: K.route({
			method: "GET",
			path: "/logs",
			summary: "Logs the sandbox keeps",
			description: "Every log file the daemon owns: captured terminal output, command runs, and the daemon's own log. Read-only, because only the sandbox writes them."
		}).output(Cw),
		read: K.route({
			method: "GET",
			path: "/logs/file",
			summary: "Read part of a log",
			description: "A window of one log file's text. A window rather than the whole thing, because a busy log outgrows any single answer."
		}).input(ww).output(Tw),
		report: K.route({
			method: "POST",
			path: "/logs/client",
			summary: "Report what the browser saw",
			description: "Errors the app caught, stalls it measured, and recoveries it performed, written to a log of their own. The browser is the only witness to these, so without it a bug someone hit in their own browser leaves no record at all."
		}).input(Dw).output(Ow)
	};
})), Nw, Pw = v((() => {
	q(), zp(), Q(), Nw = {
		list: K.route({
			method: "GET",
			path: "/loops",
			summary: "Every loop that has run",
			description: "The loops this workspace has run, newest first, kept after they end. Why it stopped on the fourth round is the question a loop gets read for, and the round-by-round history is the answer."
		}).output(Np),
		start: K.route({
			method: "POST",
			path: "/loops",
			summary: "Run a conversation until it is done",
			description: "Starts repeating a conversation towards a goal and answers straight away with the loop as recorded; the work carries on without you. The conversation need not exist yet, so run this until it passes can be the first thing you ever say to a new agent. A conversation already looping is refused."
		}).input(kp).output(Mp),
		stop: K.route({
			method: "POST",
			path: "/loops/{conversationId}/stop",
			summary: "Make this round the last",
			description: "Means do not start another round, not stop what is running. Somebody watching the sixth round do good work can say this is the last one without throwing that work away. To cut the current round off as well, stop the conversation too."
		}).input(Pp).output(X),
		designs: K.route({
			method: "GET",
			path: "/loops/designs",
			summary: "Saved loop designs",
			description: "Loops somebody authored once and can point at a different job each time. A saved loop is the same loop with its goal left blank until you type one, not a different feature."
		}).output(Ip),
		saveDesign: K.route({
			method: "POST",
			path: "/loops/designs",
			summary: "Create or replace a saved loop",
			description: "Say which of the two you mean, so a name that happens to collide cannot silently overwrite somebody's work. A design that could never finish, with nothing to produce and nothing to check, is refused in the same words an ad-hoc loop would be: catching that at save time is the whole advantage of saving."
		}).input(Lp).output(Fp),
		removeDesign: K.route({
			method: "DELETE",
			path: "/loops/designs/{id}",
			summary: "Delete a saved loop",
			description: "Removes the design. A loop already running from it keeps going on its own terms, because it took a copy of what it needed when it started."
		}).input(Rp).output(X)
	};
})), Fw, Iw, Lw, Rw, zw = v((() => {
	W(), Fw = z([
		"launching",
		"installing",
		"starting",
		"exited"
	]), Iw = I({
		repo: j().describe("Which repository."),
		hasPanel: P().describe("Whether it has anything runnable at all."),
		running: P().describe("Whether the sandbox has it running."),
		installed: P().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: Fw.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves."),
		healthy: P().describe("Whether anything it owns is actually answering. A different question: a server still installing is running and not yet healthy, and one somebody started by hand is healthy without the sandbox running it."),
		port: N().optional().describe("The port the sandbox told it to use. What it actually bound is below, and for a repository that pins its own ports those are different numbers."),
		servers: F(I({
			port: N().describe("The port it is listening on, which is what forwarding it takes."),
			url: j().describe("Where it answers, with the right scheme: a server on its own certificate is served over https."),
			dir: j().optional().describe("Which part of the repository it belongs to, which for a repository whose dev command fans out is the only thing telling them apart."),
			session: j().optional().describe("The terminal it runs in: the sandbox's when it started it, yours when you did, and absent when nothing here owns it, which is the case worth designing for.")
		})).describe("Every server this repository is really serving, found by looking at what is listening. Empty when nothing answers."),
		previewUrl: j().optional().describe("Where to open it from outside, present only while that address really serves it. Absent on a sandbox with no outside address."),
		role: z([
			"intent",
			"desired-state",
			"app"
		]).optional().describe("Which of the workspace's three fixed roles this repository fills. Absent for one that was simply cloned in."),
		deployConfig: P().describe("It declares infrastructure."),
		desiredState: P().describe("That declaration has been resolved at least once."),
		directoryUi: P().describe("It carries a small interface of its own."),
		monorepo: P().describe("It holds several packages."),
		vitest: P().describe("It has tests that can be run."),
		userStories: P().describe("It carries stories an agent could test the running app against. The one fact here that says nothing about the language."),
		docs: P().describe("It carries generated architecture documentation.")
	}), Lw = I({ panels: F(Iw).describe("One entry per repository, worked out in a single pass so nothing has to walk the workspace file by file.") }), Rw = I({ repo: j().describe("Which repository.") });
})), Bw, Vw = v((() => {
	q(), zw(), Q(), Bw = {
		list: K.route({
			method: "GET",
			path: "/panels",
			summary: "Repos you can run and preview",
			description: "Every repo with whether its dev server is up and what the sandbox worked out about its contents."
		}).output(Lw),
		start: K.route({
			method: "POST",
			path: "/panels/{repo}/start",
			summary: "Start a repo's dev server",
			description: "Brings the repo's own runnable app up in a terminal you can attach to, so its preview address starts answering."
		}).input(Rw).output(X),
		stop: K.route({
			method: "POST",
			path: "/panels/{repo}/stop",
			summary: "Stop a repo's dev server",
			description: "Shuts it down and frees the port."
		}).input(Rw).output(X)
	};
})), Hw, Uw, Ww, Gw, Kw = v((() => {
	W(), Hw = I({
		port: N().describe("The port number."),
		host: z(["127.0.0.1", "::1"]).describe("Which loopback address it actually answers on. Some tools bind only one of the two, and anything dialling it has to know which."),
		forwardable: P().describe("Whether it can be exposed at all. Some listeners answer only at their own address and nowhere else; those are listed for honesty and refused for forwarding."),
		kind: z(["workspace", "system"]).describe("Whether somebody's own work put it there, or the sandbox's own machinery did. Only the first kind is worth previewing."),
		title: j().describe("What a person would call it. Always present: a listener nothing can explain is still named, because the button beside it publishes the port to the internet."),
		purpose: j().describe("One sentence about what it is for, including when the honest answer is that nothing could work it out."),
		origin: z([
			"terminal",
			"agent",
			"panel",
			"extension",
			"container",
			"sandbox",
			"unknown"
		]).describe("Who put it there, which is the question somebody is really asking: mine, my agent's, or the box's own."),
		pid: N().optional().describe("The process holding it. Absent when nothing could be matched to the socket."),
		command: j().optional().describe("The command behind it, as it was run. Absent only when nothing could be attributed at all."),
		cwd: j().optional().describe("Where it is running from, which is how a port gets attributed to a repository."),
		session: j().optional().describe("The terminal it came from, to watch it in or stop it from. Absent when nothing in its ancestry is one, which is the honest \"you cannot reach this from here\"."),
		forwarded: P().describe("Whether it is currently reachable from outside."),
		previewUrl: j().optional().describe("Where to open it. Present only while forwarded, and only on a sandbox that has an outside address.")
	}), Uw = I({ ports: F(Hw).describe("Everything listening inside the sandbox right now, read fresh each time rather than from a register the sandbox keeps.") }), Ww = I({ port: N().int().min(1).max(65535).describe("Which port.") }), Gw = I({ previewUrl: j().optional().describe("Where it can now be reached. Absent on a sandbox with no outside address, where the mapping exists but has no public name.") });
})), qw, Jw = v((() => {
	q(), Kw(), Q(), qw = {
		list: K.route({
			method: "GET",
			path: "/ports",
			summary: "What is listening inside the sandbox",
			description: "Every port something is answering on, and whether each one is reachable from outside."
		}).output(Uw),
		forward: K.route({
			method: "POST",
			path: "/ports/forward",
			summary: "Make a port reachable",
			description: "Gives one port an address on the outside. Asking twice is harmless: the second call hands back the address the first one made."
		}).input(Ww).output(Gw),
		unforward: K.route({
			method: "POST",
			path: "/ports/unforward",
			summary: "Stop exposing a port",
			description: "Frees the slot at once. The address keeps resolving; it simply stops leading anywhere."
		}).input(Ww).output(X)
	};
})), Yw, Xw, Zw, Qw, $w, eT = v((() => {
	W(), Yw = I({
		path: j().describe("Where it sits inside the outbox."),
		size: N().describe("Size in bytes."),
		modifiedAt: N().describe("When it last changed, in milliseconds."),
		url: j().optional().describe("Its public address. Absent when this sandbox has no outside address, or when the file is being refused."),
		blocked: j().optional().describe("Why a file sitting in the outbox is not being served: a hidden name, a credential-shaped name, contents that look like a token, or sheer size. Only the publisher sees this; a stranger asking for the same file gets the same nothing every other miss gets.")
	}), Xw = I({
		url: j().optional().describe("Your public address, which every file's own hangs off. Absent on a sandbox with nowhere to publish to."),
		files: F(Yw).describe("What the outbox holds.")
	}), Zw = I({ path: j().min(1).describe("What to publish, as a workspace path. It is copied rather than moved, so a repository does not lose its build output because somebody shared it.") }), Qw = I({ path: j().min(1).describe("What to withdraw, as a path inside the outbox rather than a workspace path.") }), $w = I({
		path: j().describe("Where it landed inside the outbox."),
		url: j().optional().describe("Its public address. Absent on a sandbox with nowhere to publish to.")
	});
})), tT, nT = v((() => {
	q(), eT(), Q(), tT = {
		list: K.route({
			method: "GET",
			path: "/public",
			summary: "What is published to the internet",
			description: "Everything currently in the outbox and the address it answers on. There is no call to read a published file back: it is served openly to anyone with the link, which is the entire point of having put it there."
		}).output(Xw),
		publish: K.route({
			method: "POST",
			path: "/public/publish",
			summary: "Put a file on the internet",
			description: "Copies a workspace file or folder into the outbox, where it is served to anyone with the link and no sign-in. Answers with the address."
		}).input(Zw).output($w),
		unpublish: K.route({
			method: "POST",
			path: "/public/unpublish",
			summary: "Take something off the internet",
			description: "Withdraws one published entry. When the last one goes, the outbox goes with it, so its existing at all always means something is published."
		}).input(Qw).output(X)
	};
})), rT, iT, aT = v((() => {
	q(), W(), zg(), Q(), rT = I({ repos: F(j().min(1)).max(100).default([]).describe("The repositories going out, by workspace id. Empty runs only what stands for every push, whichever repository it is.") }).prefault({}), iT = {
		state: K.route({
			method: "GET",
			path: "/prepush/state",
			summary: "How the pre-push check is going",
			description: "The verdict, or the progress so far. Nothing is addressed by id here, because there is one working tree and so exactly one check."
		}).output(Rg),
		run: K.route({
			method: "POST",
			path: "/prepush/run",
			summary: "Run the checks before pushing",
			description: "Starts the suite the workspace runs before anything leaves the machine, and answers immediately. A suite takes minutes, and a request held open that long dies at the first proxy. It runs in a real terminal, so watch it there and poll for the verdict. Name the repositories going out, and each one's own checks run in its own directory."
		}).input(rT).output(X),
		cancel: K.route({
			method: "POST",
			path: "/prepush/cancel",
			summary: "Stop the pre-push check",
			description: "Kills the run. It settles as cancelled and the push it was gating does not go."
		}).output(X)
	};
})), oT, sT, cT = v((() => {
	q(), W(), Y(), nf(), oT = I({
		agents: F(I({
			id: j(),
			label: j()
		})).describe("ACP agents installed here. The id is the provider id itself, the label its display name."),
		endpoints: F(I({
			id: j(),
			label: j(),
			kind: z(["endpoint", "localmodel"])
		})).describe("Model endpoints, already prefixed `endpoint/`, including the daemon-provisioned free trial.")
	}), sT = {
		list: K.route({
			method: "GET",
			path: "/providers",
			summary: "Providers a chat can run on here",
			description: "The installed ACP agents and model endpoints, which are the providers this sandbox adds to the fixed native list. A read for anyone who may watch or drive a turn: it names what a message can be addressed to, not what credential stands behind it."
		}).output(oT),
		models: K.route({
			method: "GET",
			path: "/providers/{provider}/models",
			summary: "Models one provider offers",
			description: "Every model this provider serves and which one it defaults to. Never empty: it is discovered live with a stored list behind it. The order is the provider's own preference and is not rearranged here."
		}).input(ad).output(tf)
	};
})), lT, uT, dT, fT, pT, mT, hT, gT = v((() => {
	W(), lT = I({
		kind: B("webpush").describe("A browser, which the sandbox can reach directly and encrypt end to end."),
		endpoint: M().describe("Where that browser's push service accepts sends. It also identifies the device everywhere else in this group."),
		keys: I({
			p256dh: j().min(1).describe("The browser's public key, for encrypting what is sent."),
			auth: j().min(1).describe("The browser's secret, for the same.")
		}).describe("What the browser handed you when it subscribed. Post it back exactly as it came; nothing reshapes it.")
	}), uT = I({
		kind: B("relay").describe("A native app, whose operating system only accepts sends from the app's publisher, so the sandbox posts through a relay instead. The message passes through that relay readable, which is the price of the publisher having to be in the loop."),
		url: M().describe("Where to post a send. Recorded rather than assumed, so the sandbox need not know any platform by name."),
		deviceId: j().min(1).describe("The device's id, which also identifies this registration everywhere else in this group."),
		secret: j().min(1).describe("Proof that this sandbox may notify this device. The relay never learns which sandbox is calling.")
	}), dT = L("kind", [lT, uT]), I({
		title: j().min(1).describe("The headline."),
		body: j().describe("The line under it. Push services cap the whole payload at a few kilobytes, which is why nothing here carries a transcript or a diff: a notification is a pointer back, not a delivery."),
		url: j().optional().describe("Where tapping it goes. An existing tab is focused rather than a new one opened."),
		tag: j().optional().describe("Collapses repeats: a second notification with the same tag replaces the first instead of stacking beside it."),
		requireInteraction: P().optional().describe("Keep it on screen until it is dismissed. Used when the agent is waiting for you, where one that fades away is a question that went unanswered in silence.")
	}), fT = I({
		publicKey: j().describe("The key a browser needs in order to subscribe. Native apps ignore it."),
		subscribed: P().describe("Whether the asking device is already registered, so a toggle can show its real state instead of trusting the device's own permission, which can be granted with nothing behind it.")
	}), pT = I({ id: j().min(1).describe("Which device: a browser's push address, or a native install's device id.") }), mT = I({ id: j().min(1).optional().describe("Which device is asking. Without it the answer can only speak for the sandbox as a whole, which is rarely the question.") }), hT = I({ delivered: N().int().nonnegative().describe("How many devices actually accepted it. A count rather than a yes, because this button exists to prove a chain nobody can inspect, and the sandbox having accepted the request is not the question being asked.") });
})), _T, vT = v((() => {
	q(), gT(), Q(), _T = {
		config: K.route({
			method: "GET",
			path: "/push/config",
			summary: "What a device needs to subscribe",
			description: "The public key and settings a browser or app needs before it can register for notifications from this sandbox."
		}).input(mT).output(fT),
		subscribe: K.route({
			method: "POST",
			path: "/push/subscribe",
			summary: "Send notifications to this device",
			description: "Registers one device. The sandbox only interrupts you on the three moments where attention is genuinely wanted: a turn has finished, the agent is stuck on a question, and something is waiting for approval."
		}).input(dT).output(X),
		unsubscribe: K.route({
			method: "POST",
			path: "/push/unsubscribe",
			summary: "Stop notifying a device",
			description: "Removes one registered device. Others keep receiving."
		}).input(pT).output(X),
		test: K.route({
			method: "POST",
			path: "/push/test",
			summary: "Send a test notification",
			description: "Proves the whole chain end to end. Worth having, because there are four separate places a notification can be lost that nobody can inspect from the outside: the device's permission, its registration, the sandbox's key, and the delivery service."
		}).output(hT)
	};
})), yT, bT = v((() => {
	q(), kS(), Q(), W(), yT = {
		policy: K.route({
			method: "GET",
			path: "/safety/policy",
			summary: "The safety policy this sandbox is judged against",
			description: "The document that decides when an agent stops to ask you before running something. Prose, not settings: it is read by the model that judges each command. When nobody has written one, this is the text the product ships with, and it describes the behaviour a fresh sandbox already has."
		}).output(OS),
		setPolicy: K.route({
			method: "POST",
			path: "/safety/policy",
			summary: "Rewrite the safety policy",
			description: "Replaces the document whole. Nothing in it can widen what the sandbox is structurally allowed to do: it decides which of the things an agent may already do are worth interrupting you about."
		}).input(I({ text: j().describe("The policy, as you want it written.") })).output(X),
		log: K.route({
			method: "GET",
			path: "/safety/log",
			summary: "Recent safety verdicts",
			description: "What was judged lately, what the judge decided, and whether you were interrupted. Newest first. This is where you find out why you were not asked about something, which is the question a policy page otherwise cannot answer."
		}).output(F(DS))
	};
})), xT, ST = v((() => {
	q(), Pf(), Q(), xT = {
		set: K.route({
			method: "POST",
			path: "/secrets",
			summary: "Store a secret",
			description: "Writes one name and value into the sandbox's own store, where running processes pick it up without a restart. Refused until the sandbox has somewhere to keep them."
		}).input(bf).output(X),
		list: K.route({
			method: "GET",
			path: "/secrets",
			summary: "Names of the stored secrets",
			description: "Which secrets exist here. Names only, never values."
		}).output(xf),
		remove: K.route({
			method: "DELETE",
			path: "/secrets/{key}",
			summary: "Delete a secret",
			description: "Removes one by name."
		}).input(Sf).output(X),
		inventory: K.route({
			method: "GET",
			path: "/secrets/inventory",
			summary: "Every secret this sandbox holds, from everywhere",
			description: "One view across all the places secrets live here: what exists, where it came from and whether it is working. Never any values. This one always answers, even before there is a store to write to."
		}).output(Nf),
		reveal: K.route({
			method: "POST",
			path: "/secrets/reveal",
			summary: "Show one secret's value",
			description: "The only call that hands a value back, and it is for the owner alone. Sent as a body rather than in the address, so the name never ends up in a log or a browser's history."
		}).input(Sf).output(Cf),
		gates: K.route({
			method: "GET",
			path: "/secrets/gates",
			summary: "Which credentials need somebody's approval",
			description: "What is gated and who may release it. Names and addresses only, never values, and the agent may read it too: knowing a credential needs Bob is what stops it concluding the account is simply not connected."
		}).output(Of),
		setGate: K.route({
			method: "PUT",
			path: "/secrets/gates/{subject}",
			summary: "Put a credential behind named approvers",
			description: "Names exactly who may release one secret or one connected account, and how far a single release goes. The owner's call alone. A signed-in browser or a mounted server cannot be released for one use, so those are always for the rest of the conversation."
		}).input(Df).output(X),
		removeGate: K.route({
			method: "DELETE",
			path: "/secrets/gates/{subject}",
			summary: "Stop requiring approval for a credential",
			description: "Removes one gate, so the agent can use that credential the way it uses any other. The owner's call alone."
		}).input(kf).output(X),
		request: K.route({
			method: "POST",
			path: "/secrets/request",
			summary: "Ask a named person to release a credential",
			description: "Raises the release card in the live conversation and waits for one of the people named on it. Refused, rather than held, when there is nobody to ask: an unattended turn, no live conversation, or a click with no verified identity behind it."
		}).input(Af).output(jf)
	};
})), CT, wT, TT, ET = v((() => {
	W(), xm(), CT = I({ id: j().describe("Which past conversation.") }), wT = I({
		id: j().describe("Its id."),
		title: j().describe("What it is called."),
		updatedAt: N().describe("When it last moved, in milliseconds."),
		snippet: am.optional().describe("Why a search matched: the line it hit, with a little around it, and who said it. Absent on an unfiltered list, and on a match the title already shows, where repeating it would be noise rather than evidence.")
	}), TT = I({ sessions: F(wT).describe("Past conversations, newest first.") });
})), DT, OT = v((() => {
	q(), W(), vh(), ET(), DT = {
		list: K.route({
			method: "GET",
			path: "/sessions",
			summary: "Past conversations in this workspace",
			description: "Summaries for a history menu, filtered when you pass a search. Covers conversations that worked in their own private copies too, so nothing is hidden just because it happened on a branch."
		}).input(I({
			query: j().optional(),
			caseSensitive: xl().optional()
		})).output(TT),
		get: K.route({
			method: "GET",
			path: "/sessions/{id}",
			summary: "Read one past conversation",
			description: "The full record of a single conversation, restored for display."
		}).input(CT).output(hh)
	};
})), kT, AT, jT, MT, NT, PT = v((() => {
	W(), I({
		at: N().describe("When the turn ended, in milliseconds."),
		day: j().describe("The day it fell in, as YYYY-MM-DD in UTC, worked out once so nothing downstream has to do timezone arithmetic."),
		provider: j().describe("Which model provider served it."),
		account: j().optional().describe("Which account paid. Absent for a turn run on a plain key, which belongs to no account."),
		model: j().optional().describe("The model that actually ran, past whatever was asked for and every default. Absent only when the provider's own default served it without being named."),
		modelRequested: j().optional().describe("The model that was asked for, when one was named. Differs from `model` when something resolved it."),
		harness: j().describe("Which agentic loop it ran on."),
		outcome: z([
			"ok",
			"error",
			"cancelled"
		]).optional().describe("How it ended: finished, failed, or was stopped by the user."),
		errorCode: j().optional().describe("The failure's code, when it had one."),
		errorMessage: j().optional().describe("What the failure said, trimmed."),
		conversationId: j().optional().describe("Which conversation it belonged to, so spending can be traced to a card. Absent only for an internal one-off with no conversation at all."),
		turns: N().describe("The provider's own count for the request, since one exchange can be several under the hood. One when it reported none."),
		inputTokens: N().describe("Tokens sent."),
		outputTokens: N().describe("Tokens received."),
		cacheReadTokens: N().describe("Tokens served from cache, which cost less."),
		cacheCreationTokens: N().describe("Tokens written to cache, which cost more up front and less afterwards."),
		costUsd: N().describe("What it cost, in dollars."),
		durationMs: N().describe("How long it took, in milliseconds."),
		iqSearchArm: P().optional(),
		iqSearchCohort: j().optional(),
		searchCalls: N().optional(),
		openingSearches: N().optional(),
		openingListings: N().optional(),
		callsBeforeTarget: N().optional(),
		mapArm: P().optional(),
		mapChars: N().optional(),
		turnIndex: N().optional(),
		verification: z([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).optional(),
		check: j().optional(),
		filesEdited: N().optional(),
		toolCalls: N().optional(),
		checklistTotal: N().optional(),
		checklistOpen: N().optional(),
		compactions: N().optional(),
		contextTokens: N().optional(),
		contextWindow: N().optional(),
		tierScore: N().optional(),
		tierRules: F(j()).optional(),
		tierRouted: P().optional(),
		tierFast: P().optional(),
		tierCeiling: N().optional(),
		tierDenied: P().optional()
	}), kT = I({
		day: j().describe("The day, as YYYY-MM-DD in UTC."),
		provider: j().describe("Which model provider."),
		account: j().optional().describe("Which account. Absent for work run on a plain key."),
		model: j().optional().describe("Which model."),
		harness: j().describe("Which agentic loop."),
		conversationId: j().optional().describe("Which conversation."),
		turns: N().describe("Turns in this group."),
		inputTokens: N().describe("Tokens sent."),
		outputTokens: N().describe("Tokens received."),
		cacheReadTokens: N().describe("Tokens served from cache."),
		cacheCreationTokens: N().describe("Tokens written to cache."),
		costUsd: N().describe("What the group cost, in dollars."),
		durationMs: N().describe("Time spent, in milliseconds.")
	}), AT = I({
		from: j().optional().describe("First day to include, as YYYY-MM-DD in UTC. Leave it out for everything up to the end day."),
		to: j().optional().describe("Last day to include, as YYYY-MM-DD in UTC, and it is included rather than excluded. Leave it out for everything from the start day onwards.")
	}), jT = I({ rows: F(kT).describe("Spending grouped by day, provider, account, model and conversation. Everything a cost screen shows is a rearrangement of these rows, which is why there is no second call for any of it.") }), MT = I({
		provider: j(),
		account: j(),
		turns: N(),
		inputTokens: N(),
		outputTokens: N(),
		cacheReadTokens: N(),
		cacheCreationTokens: N(),
		costUsd: N()
	}), NT = I({ accounts: F(MT) });
})), FT, IT = v((() => {
	q(), mC(), Q(), PT(), FT = {
		get: K.route({
			method: "GET",
			path: "/settings",
			summary: "How this sandbox is configured",
			description: "Every setting that governs how agents behave here, with the defaults filled in for anything nobody has chosen."
		}).output(ZS),
		set: K.route({
			method: "POST",
			path: "/settings",
			summary: "Change the sandbox settings",
			description: "Writes the settings whole, so send the complete object rather than the fields you changed."
		}).input(ZS).output(X),
		savings: K.route({
			method: "GET",
			path: "/settings/savings",
			summary: "What the token-saving measures were worth",
			description: "Measured rather than estimated: what each mechanism actually saved over a range of days. The same day range the spending ledger takes, so one calendar filters both."
		}).input(AT).output(sC),
		builtinPrompt: K.route({
			method: "GET",
			path: "/settings/system-prompt/{base}",
			summary: "Read a built-in system prompt",
			description: "The actual text behind one of the built-in modes, so a settings screen can show the prompt instead of asking anyone to trust a description of it, and so either can be forked into a custom one."
		}).input(jS).output(QS),
		firings: K.route({
			method: "GET",
			path: "/settings/rule-firings",
			summary: "When each rule last did something",
			description: "A separate read rather than a field on the settings, because a rule firing is not somebody editing anything: folding it in would turn every firing into a settings write and put a self-changing value inside the object a screen edits."
		}).output(VS),
		repoChecks: K.route({
			method: "GET",
			path: "/settings/repo-checks",
			summary: "What each repository asks to run on its own code",
			description: `Every repository that declares its own checks at \`${cC}\`, what it declares, and whether you have switched it on. A repository declares what to run because the command belongs beside the scripts it names; nothing it declares runs until you say so.`
		}).output(fC),
		adoptRepoChecks: K.route({
			method: "POST",
			path: "/settings/repo-checks/adopt",
			summary: "Switch a repository's own checks on or off",
			description: "Adopts exactly what that repository declares as it stands now. If the declaration changes afterwards it stops running until you adopt it again, so a command nobody has read cannot inherit the answer given to a different one."
		}).input(pC).output(X)
	};
})), LT, RT = v((() => {
	q(), Jm(), Q(), LT = {
		list: K.route({
			method: "GET",
			path: "/share",
			summary: "Conversations published as pages",
			description: "Every conversation that has been turned into a read-only page, with its link. There is no call to read one back: the page itself is the read, and it answers to anyone who has the link."
		}).output(Wm),
		create: K.route({
			method: "POST",
			path: "/share",
			summary: "Publish a conversation",
			description: "Renders a conversation into a page anybody with the link can read, without signing in. Answers with the link, so nothing has to be listed again to find it."
		}).input(Gm).output(Um),
		update: K.route({
			method: "POST",
			path: "/share/update",
			summary: "Refresh a published page",
			description: "Re-renders an existing page from the conversation as it stands now. Same link, newer contents."
		}).input(Km).output(Um),
		remove: K.route({
			method: "POST",
			path: "/share/remove",
			summary: "Unpublish a conversation",
			description: "Takes the page down, so the link stops answering."
		}).input(qm).output(X)
	};
})), zT, BT = v((() => {
	q(), mC(), Q(), zT = {
		list: K.route({
			method: "GET",
			path: "/skills",
			summary: "What the agent knows how to do",
			description: "Every skill available here and whether it is switched on, joined from all the places they come from: the owner's own, the settings, plugins a connection installed, folders inside extensions, and persona kits."
		}).output(GS),
		read: K.route({
			method: "GET",
			path: "/skills/read",
			summary: "Read one skill",
			description: "The full text of a single skill. The name travels in the query rather than the address, because a name can carry the owner it came from and that will not fit in a path."
		}).input(qS).output(KS),
		save: K.route({
			method: "POST",
			path: "/skills",
			summary: "Write a skill",
			description: "Creates or rewrites a skill by name. A new one starts switched on, because you wrote it in order to use it; rewriting one you switched off leaves it off. Renaming is saving under the new name and deleting the old."
		}).input(JS).output(X),
		switch: K.route({
			method: "POST",
			path: "/skills/switch",
			summary: "Switch one of your own skills on or off",
			description: "Off takes the agent's copy away and keeps your text; on writes the copy back from it. Built-in tools are switched in the agent settings instead, and nothing else has a switch."
		}).input(XS).output(X),
		remove: K.route({
			method: "POST",
			path: "/skills/remove",
			summary: "Delete a skill",
			description: "Removes the text and the agent's copy in one step, so a screen never has to sequence two calls and never leaves one half done."
		}).input(YS).output(X)
	};
})), VT, HT, UT, WT, GT = v((() => {
	W(), VT = I({ distro: j() }), HT = I({
		os: j(),
		arch: j(),
		shell: j(),
		home: j(),
		roots: F(j()),
		engine: I({
			memoryBytes: N(),
			cpus: N()
		}).optional(),
		hostname: j().optional(),
		wsl: VT.optional(),
		wslDistros: F(j()).optional()
	}), UT = I({
		key: j().min(1),
		online: P(),
		version: j().optional(),
		lastSeen: N().optional(),
		facts: HT.optional()
	}), WT = I({
		id: j(),
		platform: j().min(1),
		environments: F(UT).min(1),
		online: P(),
		version: j().optional(),
		lastSeen: N().optional(),
		facts: HT.optional()
	}), I({ hosts: F(WT) });
})), KT = v((() => {})), qT, JT, YT, XT, ZT, QT, $T, eE, tE, nE, rE, iE, aE, oE, sE, cE, lE, uE, dE, fE, pE, mE, hE, gE, _E, vE, yE, bE = v((() => {
	W(), GT(), qT = I({
		memoryBytes: N().optional(),
		cpus: N().optional(),
		privileged: P(),
		gpu: P(),
		hostRuntime: F(j()),
		overlayRuntime: F(j())
	}), JT = I({
		memoryGib: tc().positive().nullable().optional(),
		cpus: tc().positive().nullable().optional(),
		privileged: P().optional(),
		gpu: P().optional()
	}), YT = JT.refine((e) => Object.values(e).some((e) => e !== void 0), { message: "a reshape must change at least one thing" }), XT = I({
		slug: j(),
		container: j(),
		name: j().optional(),
		running: P(),
		image: j(),
		tunnelRunning: P().optional(),
		resources: qT.optional()
	}), ZT = z([
		"start",
		"stop",
		"restart",
		"prepare",
		"update",
		"rebuild",
		"rollback",
		"reshape",
		"remove",
		"logs",
		"reconnect",
		"runner-up",
		"runner-remove"
	]), QT = I({
		op: ZT,
		slug: j().min(1),
		hash: j().optional(),
		resources: YT.optional(),
		parentUrl: j().optional(),
		pair: j().optional().meta({ secret: !0 }),
		setupCode: j().optional().meta({ secret: !0 }),
		definition: j().optional(),
		overlay: j().optional(),
		overlayHash: j().optional()
	}), $T = QT.extend({ id: j().min(1) }), eE = L("kind", [
		I({
			kind: B("line"),
			text: j()
		}),
		I({
			kind: B("result"),
			message: j()
		}),
		I({
			kind: B("error"),
			message: j()
		})
	]), tE = z(["upgrade", "restart"]), nE = I({ op: tE }), rE = nE.extend({ id: j().min(1) }), iE = z([
		"mirror-off",
		"mirror-on",
		"sync-pause",
		"sync-resume",
		"sync-unpair",
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), iE.exclude([
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), aE = j().max(200).regex(/^[A-Za-z0-9][A-Za-z0-9._-]*$/), oE = j().min(1).max(4096).regex(/^(?:~|\/|[A-Za-z]:[\\/])[^"'`$;|&\n\r]*$/), sE = I({
		id: j().min(1),
		command: iE,
		sandboxId: aE.optional(),
		mode: z(["sync", "mirror"]).optional(),
		localDir: oE.optional()
	}), cE = I({
		ok: P(),
		message: j(),
		output: j().optional(),
		refused: P()
	}), lE = z([
		"created",
		"modified",
		"deleted"
	]), uE = I({
		path: j(),
		local: lE.optional(),
		sandbox: lE.optional()
	}), dE = I({
		sandboxId: j(),
		mode: z(["sync", "mirror"]),
		localDir: j().optional(),
		mirroring: z(["on", "off"]).optional(),
		mutagenStatus: j().optional(),
		conflicts: N().int().nonnegative().optional(),
		conflictedPaths: F(uE).optional(),
		paused: P().optional(),
		backupStatus: j().optional()
	}), fE = z([
		"mirrored",
		"held-by-sandbox",
		"busy"
	]), pE = I({
		port: N().int().min(1).max(65535),
		host: z(["127.0.0.1", "::1"]),
		sandboxId: j(),
		state: fE,
		heldBy: j().optional(),
		command: j().optional()
	}), mE = I({
		running: P(),
		pid: N().int().optional(),
		installed: j().optional(),
		build: j().optional(),
		lastTickAt: N().optional()
	}), hE = I({
		hostname: j(),
		os: j(),
		wsl: VT.optional(),
		pairings: F(dE),
		ports: F(pE),
		agent: mE,
		capturedAt: N()
	}), gE = z([
		"offline",
		"scope-off",
		"no-agent",
		"unreported"
	]), _E = I({
		machine: j(),
		mode: z(["sync", "mirror"]),
		seenAt: N().optional()
	}), vE = I({
		key: j(),
		label: j(),
		sync: _E.optional(),
		hostId: j().optional(),
		online: P().optional(),
		platform: j().optional(),
		facts: HT.optional(),
		agentVersion: j().optional(),
		lastSeen: N().optional(),
		report: hE.optional(),
		sandboxes: F(XT).optional(),
		gap: gE.optional()
	}), yE = I({ devices: F(vE) }), I({
		enrolled: P(),
		available: P().optional(),
		machines: F(hE).optional()
	});
})), xE, SE, CE, wE, TE, EE, DE, OE, kE, AE, jE, ME, NE = v((() => {
	W(), xE = I({
		state: z([
			"ready",
			"unavailable",
			"unknown"
		]).describe("Whether this runtime can serve a turn. Unknown is a real answer rather than a soft no: a check that could not run must not grey out a provider you can in fact use."),
		detail: j().optional().describe("Why it cannot, and what to do about it. Absent when it can."),
		checkedAt: N().describe("When it was last checked, in milliseconds.")
	}), SE = I({
		version: j().optional().describe("What the downloaded build says it is. Absent means ready but unnamed, never that nothing is ready."),
		channel: j().describe("Which channel it was taken from. Not necessarily the one this sandbox follows: downloading a beta build is not the same as moving onto beta."),
		at: N().describe("When the download finished, in milliseconds, which answers whether this is still the update being offered.")
	}), CE = I({
		name: j().optional().describe("What this sandbox is called."),
		image: j().optional().describe("The image it is running."),
		version: j().optional().describe("The version of that image."),
		latest: j().optional().describe("The newest published version on its channel."),
		updateAvailable: P().optional().describe("Whether those two differ."),
		runtimes: R(j(), xE).optional().describe("Which agent runtimes can serve a turn right now, keyed by runtime. Absent until the first check has run, which reads the same as every entry being unknown."),
		channel: j().optional().describe("Which release channel this sandbox follows."),
		previousImage: j().optional().describe("The image the last update replaced, which is what a rollback would return to. Absent means there is nothing to go back to."),
		updateNotes: F(j()).optional().describe("What is in the update, in the words of the people it is for, newest first. Absent or empty whenever there is nothing worth saying, which reads on screen exactly as it did before there were notes at all."),
		moreUpdateNotes: N().optional().describe("How many further notes there are beyond the ones sent, for a sandbox left alone a long time. Absent or zero means you have all of them."),
		breakingNotes: F(j()).optional().describe("What the update takes away, uncapped, because a warning that fell off a shortened list is a breaking update taken unwarned. Absent for the overwhelming majority, which break nothing."),
		staged: SE.optional().describe("An update already downloaded and built on the machine running this container, waiting only for the restart that applies it. That restart is seconds, where an unprepared update is minutes, which is a different decision entirely. Absent when nothing is waiting.")
	}), wE = I({
		kind: z([
			"unreadable",
			"unknownKey",
			"invalidEntry"
		]).describe("What to do about it. Unreadable means the whole file is being ignored and everything in it is at its default. An unknown key means only that key is ignored. An invalid entry means one item of a list was skipped and the rest is fine."),
		detail: j().describe("What exactly was wrong, as one sentence and nothing else. Never the remedy: that is `fix`."),
		suggestion: j().optional().describe("The name it was probably meant to be, when one is close enough to guess honestly."),
		fix: j().optional().describe("What to do about it, when that is something other than 'correct the file'. Absent whenever the file itself is the thing to edit.")
	}), TE = I({
		path: j().describe("The file, as a workspace path. The file is the unit somebody fixes, which is why problems are grouped by it."),
		problems: F(wE).describe("Everything currently wrong with it. A file with nothing wrong is absent rather than present and empty.")
	}), EE = F(TE), DE = I({
		path: j().describe("The file to repair, as the workspace path the problem was reported under. Only the handful of manifests a person hand-edits can be named; anything else is refused."),
		key: j().describe("The stray top-level key, exactly as it was reported. Absent from the file already means there is nothing to do."),
		to: j().optional().describe("Rename the key to this instead of removing it, carrying its value across. Absent means remove it. Naming a key that is already in the file is refused rather than silently overwriting what is there.")
	}), OE = I({
		token: j().describe("The credential every other call carries. Present it as a bearer token."),
		expiresAt: N().describe("When it stops working, in milliseconds, so a caller can renew ahead of it without reading the token."),
		email: j().describe("Who the sandbox verified you as.")
	}), z([
		"google",
		"ticket",
		"passkey",
		"recovery"
	]), kE = I({
		id: j().describe("The credential id the authenticator chose, base64url."),
		email: j().describe("Whose passkey this is; the owner's list carries every member's, a member's only their own."),
		label: j().describe("The name given at registration, or the daemon's default."),
		rpId: j().describe("The editor host this passkey is bound to; a passkey answers only from that origin."),
		createdAt: N().describe("Epoch ms of registration."),
		lastUsedAt: N().optional().describe("Epoch ms of the last sign-in it answered; absent means never."),
		backedUp: P().describe("Whether the authenticator syncs this passkey (a phone's keychain) or holds the only copy (a hardware key).")
	}), I({
		passkeys: F(kE),
		required: P().describe("Whether a passkey is the only proof that opens this sandbox; owner-set."),
		recovery: I({ remaining: N() }).optional().describe("Owner only, while required: how many one-time recovery codes are still unspent.")
	}), I({ required: P() }), I({ codes: F(j()) }), I({ code: j().min(1) }), I({
		error: j(),
		requires: B("passkey"),
		enrolled: P()
	}), AE = j().regex(/^[A-Za-z0-9_-]+$/, "base64url"), jE = I({
		id: AE,
		rawId: AE,
		type: B("public-key"),
		response: I({
			clientDataJSON: AE,
			attestationObject: AE,
			transports: F(j()).optional()
		}),
		authenticatorAttachment: j().optional(),
		clientExtensionResults: R(j(), nc()).optional()
	}), ME = I({
		id: AE,
		rawId: AE,
		type: B("public-key"),
		response: I({
			clientDataJSON: AE,
			authenticatorData: AE,
			signature: AE,
			userHandle: AE.optional()
		}),
		authenticatorAttachment: j().optional(),
		clientExtensionResults: R(j(), nc()).optional()
	}), I({
		response: jE,
		label: j().optional()
	}), I({ response: ME });
})), PE, FE = v((() => {
	q(), W(), vh(), Fv(), bE(), Aw(), Q(), NE(), Vm(), PT(), PE = {
		info: K.route({
			method: "GET",
			path: "/info",
			summary: "What this sandbox is",
			description: "The sandbox's own identity and state: which workspace it holds, which image it runs, what it is called, and the list of calls it actually implements. Start here, because a browser is routinely newer than the sandbox it is talking to and this is how it finds out what is there."
		}).output(CE),
		manifestProblems: K.route({
			method: "GET",
			path: "/system/manifest-problems",
			summary: "Settings files the sandbox could not read",
			description: "Anything the daemon tripped over in its own configuration on disk: a file it had to fall back from, a key it did not recognise, an entry it skipped. Separate from the identity call because it goes stale for a different reason, namely a file changing."
		}).output(EE),
		repairManifest: K.route({
			method: "POST",
			path: "/system/manifest-problems/repair",
			summary: "Take a stray setting out of a file",
			description: "Removes a key the sandbox does not recognise from one of its settings files, or renames it to the one it was probably meant to be, keeping the value. Only the files a person hand-edits can be named, and only a key — never a value — so this can only ever remove something already being ignored. Renaming onto a key the file already has is refused instead of overwriting it."
		}).input(DE).output(X),
		session: K.route({
			method: "POST",
			path: "/system/session",
			summary: "Trade a sign-in for a session",
			description: "Exchanges a verified sign-in, or a session that has not expired yet, for a fresh session the daemon minted. That session is the credential every other call carries, and calling this again with a live one renews it."
		}).output(OE),
		events: K.route({
			method: "GET",
			path: "/events",
			summary: "The live event stream",
			description: "A stream held open for as long as you want it, carrying heartbeats so a caller notices the sandbox dying at once, batches of file changes so a tree or an editor can refresh itself, and the roster of who else is looking. Give it an id for this connection to appear in that roster; leave it out and you watch without being seen."
		}).input(I({ clientId: j().optional() })).output(G(Pv)),
		presence: K.route({
			method: "POST",
			path: "/system/presence",
			summary: "Say what you are looking at",
			description: "Reports which view, conversation or file this connection is on, or that it has gone idle. The daemon fans it back out on the event stream so everyone else's roster updates."
		}).input(kw).output(X),
		usage: K.route({
			method: "GET",
			path: "/system/usage",
			summary: "What has been spent",
			description: "Token and cost totals per account, added up from the record of every finished turn."
		}).output(NT),
		terminals: K.route({
			method: "GET",
			path: "/system/terminals",
			summary: "Open terminals",
			description: "The terminal sessions this sandbox is holding, which is what a terminal panel rebuilds its tabs from after a reload. The live typing and output run over a separate socket; this is the list."
		}).output(Dm),
		killTerminal: K.route({
			method: "DELETE",
			path: "/system/terminals/{name}",
			summary: "Close a terminal",
			description: "Destroys one terminal session and whatever was running inside it."
		}).input(Om).output(X),
		terminalScrollback: K.route({
			method: "GET",
			path: "/system/terminals/{name}/scrollback",
			summary: "A terminal's history as plain text",
			description: "What has scrolled past in one terminal, as text you can select and copy. The live view is a picture of a screen on the far side of a socket, with nothing in the page to select, so scrolling back and copying is this call rather than a gesture."
		}).input(km).output(Am),
		browsers: K.route({
			method: "GET",
			path: "/system/browsers",
			summary: "Browsers the agent has open",
			description: "Every browser a conversation currently has running and the pages inside each one. The picture of what they are showing comes over a separate socket; this is the roster."
		}).output(Nm),
		closeBrowser: K.route({
			method: "DELETE",
			path: "/system/browsers/{name}",
			summary: "Shut a browser down",
			description: "Closes one of the agent's browsers. Its next attempt to use that browser then fails as though it had crashed, which is the honest account of somebody pulling the plug."
		}).input(Pm).output(X),
		subagents: K.route({
			method: "GET",
			path: "/system/subagents",
			summary: "Subagents the agents have started",
			description: "Every subagent and child agent this sandbox's conversations have delegated work to, whichever tool started it, with what each one is doing."
		}).output(zm),
		subagentTranscript: K.route({
			method: "GET",
			path: "/system/subagents/{id}/transcript",
			summary: "A subagent's record",
			description: "The full record of one delegated subagent, in the same shape as any other conversation. It comes live from the parent turn while it works, and from stored history once it has finished."
		}).input(Bm).output(hh),
		devices: K.route({
			method: "GET",
			path: "/system/devices",
			summary: "The machines you have connected",
			description: "Every computer this sandbox can see, whether it reached it through desktop sync or through a connected device, in one row per machine: what it says about itself, which sandboxes it holds, and what stopped it answering when nothing came back."
		}).output(yE),
		manageDeviceSandbox: K.route({
			method: "POST",
			path: "/system/devices/{id}/sandboxes/{slug}",
			summary: "Drive a sandbox on one of your own devices",
			description: "Start, stop, restart, update, rebuild, roll back, reshape (its memory and CPU caps, privileged, GPU) or remove a sandbox running on a machine you own, relayed over the connection that machine holds open. The answer is a stream because the slowest of these takes minutes, and it is the same stream whichever you ask for. The daemon adds no opinion: the machine enforces its own permissions and a refusal arrives as the last line, in the machine's words, naming the switch to flip."
		}).input($T).output(G(eE)),
		runDeviceCommand: K.route({
			method: "POST",
			path: "/system/devices/{id}/commands/{command}",
			summary: "Run one of your device's own CLI actions",
			description: "Performs a named action on a machine you own by running its own intentic-machine command there — turning that device's port mirroring off, say — over the connection it holds open. The set of actions is fixed and the command line is built here from the name, never sent by the caller. The machine enforces its own permissions and a refusal comes back as its own sentence, naming the switch to flip."
		}).input(sE).output(cE),
		runDeviceAgentFlow: K.route({
			method: "POST",
			path: "/system/devices/{id}/agent/{op}",
			summary: "Update or restart the agent on one of your own devices",
			description: "Updates a machine you own to the current intentic-machine agent, or restarts the loop it is running, over the connection that machine holds open. The answer is a stream of the run's own output — and it normally stops mid-run, because the agent's loop is what carries this connection: the work is detached from it first, so it finishes regardless, and the device's reported version is what confirms it. Takes the machine's \"Run commands\" permission, the same one a command typed there would."
		}).input(rE).output(G(eE))
	};
})), IE, LE = v((() => {
	q(), W(), Id(), nf(), Rd(), Q(), IE = {
		accounts: K.route({
			method: "GET",
			path: "/translator/accounts",
			summary: "Subscriptions connected through the translator",
			description: "What is signed in per provider. Each provider can hold several accounts at once, and the translator spreads work across them."
		}).output(Ad),
		connect: K.route({
			method: "POST",
			path: "/translator/{provider}/connect",
			summary: "Start connecting a subscription",
			description: "Begins the sign-in for one provider and says which of the two shapes it is: a code you type into a device page, which finishes by itself in the background, or a redirect whose landing address you hand back afterwards."
		}).input(I({ provider: Ld })).output(Xd),
		status: K.route({
			method: "GET",
			path: "/translator/{provider}/connect",
			summary: "Read a subscription connection attempt",
			description: "Reports whether this exact sign-in attempt is waiting, completed, or failed. Completion is tied to the attempt rather than a change in account count, because signing in to an existing account replaces its credential in place."
		}).input(I({
			provider: Ld,
			state: j().min(1)
		})).output(Zd),
		complete: K.route({
			method: "POST",
			path: "/translator/{provider}/complete",
			summary: "Finish a redirect sign-in",
			description: "For the providers that redirect somewhere this sandbox cannot receive: hand back the address you landed on and the connection completes."
		}).input(Qd).output(X),
		disconnect: K.route({
			method: "POST",
			path: "/translator/{provider}/disconnect",
			summary: "Disconnect one subscription",
			description: "Clears a single account by name. Any others under the same provider stay connected."
		}).input(I({
			provider: Ld,
			name: j().min(1)
		})).output(X)
	};
})), RE, zE, BE = v((() => {
	q(), W(), Id(), PT(), RE = I({ force: P().default(!1).describe("Measure again even if a reading was taken a moment ago.") }), zE = {
		rollup: K.route({
			method: "GET",
			path: "/usage/rollup",
			summary: "What was spent, grouped",
			description: "The spending record over a range of days, grouped by day, provider, account and model. Everything a cost screen shows is a rearrangement of this one answer, so nothing needs a second call. Read-only: rows are written by the sandbox as turns end, which is what makes it worth trusting."
		}).input(AT).output(jT),
		refreshPlanLimits: K.route({
			method: "POST",
			path: "/usage/plan-limits/refresh",
			summary: "Measure every account's plan limits again",
			description: "Reads how full each connected account's plan limits are, for every provider, and records it. Forced, it measures even accounts read a moment ago, which is the right thing when a plan was just changed and the question is whether the number on screen is still true."
		}).input(RE).output(I({ ok: B(!0) })),
		limitReset: K.route({
			method: "GET",
			path: "/usage/limit-reset/{account}",
			summary: "Whether this account's session window can be reopened now",
			description: "Asks the provider whether it will reopen this account's spent session window immediately, which some plans grant once a week. Only worth asking about an account that has actually been refused: the answer is the provider's judgement at this moment, it is not cached, and an account with no such grant answers plainly that it has none."
		}).input(I({ account: j().min(1).describe("Which account.") })).output(Td),
		claimLimitReset: K.route({
			method: "POST",
			path: "/usage/limit-reset/{account}/claim",
			summary: "Reopen this account's session window now",
			description: "Spends one of the account's weekly resets to reopen its session window immediately. The weekly allowance is untouched and still binds. Answers with what the provider actually did: only `reset` changed anything, and it is the cue to send the refused turn again."
		}).input(I({ account: j().min(1).describe("Which account.") })).output(Ed)
	};
})), VE, HE = v((() => {
	q(), Fv(), Q(), Ey(), VE = {
		list: K.route({
			method: "GET",
			path: "/vpn",
			summary: "Configured tunnels and which are up",
			description: "Every stored VPN with its live link state, read back from the operating system rather than from memory, so a tunnel dropped from a shell and one dropped from a screen look the same here."
		}).output(by),
		connect: K.route({
			method: "POST",
			path: "/vpn/{id}/connect",
			summary: "Dial a VPN",
			description: "Brings a stored tunnel up, streaming the client's progress as it authenticates and then sets up routing. Streamed because a dial takes seconds and can fail with something you have to read: a wrong password, a gateway certificate nobody trusts, a code it wants. Connecting one that is already up simply says so."
		}).input(xy).output(G(vv)),
		disconnect: K.route({
			method: "POST",
			path: "/vpn/{id}/disconnect",
			summary: "Drop a tunnel",
			description: "Takes the tunnel down. One that was already down is fine: the promise is that it is not up afterwards."
		}).input(Sy).output(X),
		importForticlient: K.route({
			method: "POST",
			path: "/vpn/import-forticlient",
			summary: "Read connections out of an exported config",
			description: "Turns an exported FortiClient configuration into a list of connections you can add, so somebody holding that file picks from a list instead of retyping a host and port for every tunnel."
		}).input(Cy).output(Ty)
	};
})), UE, WE, GE, KE, qE, JE, YE, XE, ZE, QE, $E, eD, tD, nD, rD, iD, aD, oD, sD, cD, lD = v((() => {
	W(), Y(), rd(), zp(), UE = j().min(1).max(24).regex(/^[a-z0-9][a-z0-9-]*$/), WE = z(["fresh", "continue"]), GE = 24, KE = I({
		id: UE.describe("This step's own name, which other steps use to say they wait on it."),
		title: j().min(1).max(60).describe("What to call it on screen. Short: the instruction below is where the detail goes."),
		goal: j().min(1).optional().describe("What done means for this step, in your words. It is what the step is judged against, and a different sentence from what it is told to do."),
		prompt: j().min(1).optional().describe("What the step is told to do. The goal is the suite is green; this is run the tests, take the top failure, fix it. Leaving it out hands over the run's own request untouched, which is right for a step whose whole job is do what was asked."),
		needs: F(UE).describe("Which steps must finish first. Empty means it starts when the run does. Naming a step that does not exist, or a loop between steps, is refused when the workflow is saved."),
		handoff: WE.describe("How it meets what came before: a fresh conversation handed the previous step's result, or the same conversation carried on."),
		output: Tp.describe("What it has to produce for the step to count."),
		checks: F(Ep).describe("What has to pass before it counts as done."),
		context: wp.describe("How the step's own repeats meet each other. A long-running step wants to start clean each round; a short polish-this step wants to carry on."),
		maxSpendUsd: N().positive().optional().describe("A ceiling on what this step may spend. The one resource that cannot be recovered after an unattended fan-out, which is why it is here and iteration limits are not. Absent is uncapped."),
		agent: id.optional().describe("Which provider runs it."),
		harness: od.optional().describe("Which agentic loop runs it."),
		account: j().optional().describe("Which account pays for it."),
		model: j().optional().describe("Which model runs it."),
		actsAs: J.optional().describe("Which persona it acts as. Unpinned, a step gets the strict unwatched default: every tool, and no signed-in accounts at all. Pinning one is how a release check gets a voice, a folder to work in, or the single account it may post from.")
	}), qE = I({
		step: UE.describe("Which step's answer carries the decision. Usually a last step that weighs up the ones before it, though nothing requires that."),
		field: j().min(1).describe("Which of that step's declared answers to read. A declared field is the one part of a step's answer that was checked rather than fished out of prose, which is the whole rule here. Checked when the workflow is saved."),
		pass: F(j().min(1)).min(1).describe("Which values mean ship it. Everything else fails. A list of what passes rather than what fails, because a step answering mostly-pass or pass-with-notes must not ship, and this gets that right without anybody having had to enumerate the ways a model can hedge."),
		dailyMax: N().int().positive().optional().describe("How many runs a day, across every caller. A gate is a paid door with nobody in the loop: one wired into a push-triggered pipeline is a fan-out of conversations per commit. Absent is a small default rather than unlimited.")
	}), JE = z([
		"pass",
		"fail",
		"blocked"
	]), I({
		outcome: JE.describe("Ship it, do not, or we could not tell. That third answer exists because could not reach a judgement is not the product is broken: a gate that reported its own outages as failures is one a team switches off, so it should be the honest answer far more often than the convenient one, and it means a neutral build rather than a red one."),
		reason: j().describe("Why, in one line. Realistically the only part of this a build log will ever show."),
		runId: j().describe("The run behind the verdict, so somebody can go and read it."),
		value: j().optional().describe("What the step actually answered. Absent when there was nothing to read, which is most of the could-not-tell cases.")
	}), YE = I({
		id: J.describe("The workflow's id."),
		name: j().min(1).max(80).describe("What to call it."),
		description: j().max(400).optional().describe("What it is for."),
		steps: F(KE).min(1).max(GE).describe("The steps, each with what it waits on. Every one runs in its own private copy of the repos, always, because parallel steps sharing a tree collide."),
		gate: qE.optional().describe("Present means a machine can run this design and get a ship-it answer back. Absent means an ordinary workflow, started by a person, with no outside door onto it at all."),
		maxParallel: N().int().min(1).max(8).describe("How many steps may run at once. Bounded, because a fan-out of twelve is twelve model sessions, twelve working copies and twelve times the burn rate, on one machine.")
	}), XE = z([
		"pending",
		"running",
		"done",
		"failed",
		"skipped",
		"stopped"
	]), ZE = I({
		stepId: UE.describe("Which step this is."),
		state: XE.describe("How it went. Skipped carries what the others cannot: it never ran, because something it was waiting on did not finish. That is why a failed run shows one red step and a trail of grey ones."),
		conversationId: j().describe("The conversation it ran on, and the way from a node on the graph to a real record. Shared with the step before it when they were chained, which is what makes those two one card."),
		startedAt: N().optional().describe("When it began, in milliseconds."),
		endedAt: N().optional().describe("When it ended, in milliseconds."),
		iterations: N().int().min(0).describe("How many rounds it took."),
		costUsd: N().optional().describe("What it cost, in dollars."),
		loopState: jp.optional().describe("How its repeating ended. Out of rounds and stuck both come out as a failed step, and the difference between them is the difference between give it more room and more room will not help."),
		detail: j().optional().describe("What went wrong, when something did."),
		document: Dp.optional().describe("What it produced, once it has produced something that passes its own declared shape. This is what the steps after it are handed."),
		report: j().optional().describe("The start of its closing words. Bounded, so a long answer is not silently cut down to its last few thousand characters and the record stays a sensible size."),
		reportPath: j().optional().describe("Where the whole answer is, as a workspace path. Every step can read it, so a long handoff need not be copied into anybody's prompt.")
	}), QE = z([
		"running",
		"done",
		"failed",
		"stopped",
		"overspent",
		"error"
	]), $E = I({
		runId: j().min(1).describe("This run's id."),
		workflow: YE.describe("The design as it stood when the run started, copied rather than looked up. The run has to keep showing the graph it actually ran, not the one edited twice since, and a run of a deleted workflow has to stay readable."),
		repos: F(sd).min(1).max(50).describe("The workspace as this run began, one exact commit per repository. Every step branches from these, even if the shared tree moves while a wide fan-out is still opening its copies, so the steps can be compared with each other afterwards."),
		request: j().optional().describe("What this run was asked to do, handed to every step on top of its own instructions. It is what makes one saved design worth keeping: two models, one task is a shape, and the task is different every time. Absent for a run started with nowhere to type one."),
		state: QE.describe("How the run is going. Finished means every step that ran got there; a run with skipped steps counts as failed, because a graph that never reached its end did not do what it was asked whatever the survivors managed."),
		startedAt: N().describe("When it began, in milliseconds."),
		endedAt: N().optional().describe("When it ended, in milliseconds."),
		resumed: N().int().min(0).describe("How many times the sandbox restarted under it and picked it back up."),
		detail: j().optional().describe("What went wrong, when something did."),
		steps: F(ZE).describe("One entry per step, in the design's own order. Every one is written down as waiting when the run starts, so the picture is complete from the first frame and a missing step never has to mean two things."),
		archivedAt: N().optional().describe("When it was put away, in milliseconds. The record stays readable and every step's branch, transcript and counters are untouched. Its conversations are put away with it, and brought back with it. Absent means live on the board.")
	}), eD = j().optional().describe("What a pipeline presents at /workflows/{id}/gate, when the design declares a gate. Shown to a maintainer or the owner only."), tD = YE.extend({ gateToken: eD }), nD = YE.extend({
		runs: F($E).describe("Its runs, newest first."),
		gateToken: eD
	}), rD = I({ workflows: F(nD).describe("Every saved design with its own run history.") }), iD = I({ runs: F($E).describe("Every run across every workflow, newest first, including runs of workflows since deleted.") }), aD = I({ id: j().describe("Which workflow.") }), oD = I({ runId: j().describe("Which run.") }), sD = aD.extend({ request: j().min(1).max(2e4).optional().describe("What to point it at. Optional, because a design whose steps already say what they want is complete on its own; only one written as a shape needs today's sentence.") }), cD = I({
		workflow: YE.describe("The design to write."),
		create: P().describe("Whether you mean to make a new one or replace an existing one. Said outright rather than inferred, so an id that happens to collide is a refusal instead of one saved design quietly overwriting another.")
	});
})), uD, dD = v((() => {
	q(), Q(), lD(), uD = {
		list: K.route({
			method: "GET",
			path: "/workflows",
			summary: "Saved workflows and their runs",
			description: "Every workflow somebody has designed, each with its own run history, newest first. One answer rather than two, because a workflow that has never been run is the interesting case rather than a mistake."
		}).output(rD),
		save: K.route({
			method: "POST",
			path: "/workflows",
			summary: "Create or replace a workflow",
			description: "Writes a workflow design. Say which of the two you mean, so an id that happens to collide cannot silently overwrite somebody's work. A design that could never run is refused, in the same words the editor shows while you type: a loop in the steps, a step waiting on one that is not there, a step with no way of knowing it is finished."
		}).input(cD).output(tD),
		rotateGateToken: K.route({
			method: "POST",
			path: "/workflows/{id}/gate/rotate",
			summary: "Rotate a release gate's token",
			description: "Mints a new credential for the workflow's release gate and retires the old one at once. Every pipeline wired to the gate has to be handed the new URL. Refused for a workflow that declares no gate."
		}).input(aD).output(sf),
		remove: K.route({
			method: "DELETE",
			path: "/workflows/{id}",
			summary: "Delete a workflow",
			description: "Removes the design. A run of it that is already going keeps going and stays readable and stoppable, because a run takes its own copy of the design when it starts."
		}).input(aD).output(X),
		run: K.route({
			method: "POST",
			path: "/workflows/{id}/run",
			summary: "Start a workflow",
			description: "Kicks a workflow off and answers immediately with the run as recorded; the work carries on without you. Point it at a question and every step gets that on top of its own instructions. Every step is written down as waiting up front, so the picture is complete from the first frame. Several runs of one design can be in flight at once without colliding."
		}).input(sD).output($E),
		runs: K.route({
			method: "GET",
			path: "/workflows/runs",
			summary: "Every workflow run",
			description: "All runs across all workflows, newest first. This is also the only place the runs of a deleted workflow are still reachable."
		}).output(iD),
		stopRun: K.route({
			method: "POST",
			path: "/workflows/runs/{runId}/stop",
			summary: "Stop a run now",
			description: "Nothing further starts, and the steps already going are cut off where they stand. Whatever they had written stays on their branches. Deliberately abrupt rather than letting the current step finish: a step is a whole agent turn, and a stop that kept spending for minutes afterwards is indistinguishable from a button that does nothing. It always ends the run, including one left stranded by a daemon that was replaced mid-flight."
		}).input(oD).output(X),
		archiveRun: K.route({
			method: "POST",
			path: "/workflows/runs/{runId}/archive",
			summary: "Take a finished run off the board",
			description: "Nothing is lost and the working copies are reclaimed. Every conversation the run started is put away with it, which is what makes this an archive rather than a dismissal: a step has no card of its own, so merely dropping the run would spill its conversations onto the board at the moment somebody said they were done. Refused while the run is still going."
		}).input(oD).output(X),
		unarchiveRun: K.route({
			method: "POST",
			path: "/workflows/runs/{runId}/unarchive",
			summary: "Bring an archived run back",
			description: "Puts a run and every conversation it started back on the board."
		}).input(oD).output(X)
	};
})), fD, pD, mD, hD, gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD = v((() => {
	W(), zw(), fD = I({ repos: F(j()).describe("Every repository's id, sorted. An id is its folder relative to the workspace root, and \"root\" is the workspace itself.") }), pD = I({
		name: j().min(1).describe("What to call it in the workspace."),
		cloneUrl: j().min(1).describe("Where to clone it from."),
		branch: j().optional().describe("Which branch to check out. Leave it out for the repository's default.")
	}), mD = I({
		name: j().describe("What it ended up called."),
		path: j().describe("Where it landed.")
	}), hD = I({ name: j().min(1).describe("What to call it, which is also its folder under the workspace root.") }), gD = I({
		repo: j().describe("Which repository."),
		status: z([
			"updated",
			"current",
			"dirty",
			"diverged",
			"no-remote",
			"skipped",
			"error"
		]).describe("What happened to it. Dirty and diverged are why a repository was left alone: it had uncommitted work, or it had moved in a way that cannot be fast-forwarded."),
		behind: N().optional().describe("How many commits it was behind."),
		ahead: N().optional().describe("How many commits it was ahead."),
		head: j().optional().describe("The commit it ended up on."),
		message: j().optional().describe("What went wrong, when something did.")
	}), _D = I({ repos: F(gD).describe("One entry per repository, saying what happened to it.") }), vD = I({
		template: j().min(1).describe("Which kind of app to scaffold, by its key in the template list."),
		name: j().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("What to call this one.")
	}), yD = I({
		repo: j().describe("Which repository to scaffold into."),
		apps: F(vD).min(1).describe("The apps to add.")
	}), bD = I({
		repo: j().describe("Which repository."),
		session: j().describe("What to call the terminal this runs in, so you can find it again."),
		dirs: F(j()).min(1).describe("Which projects to test, as folders relative to the repository. Empty targets the repository root.")
	}), xD = I({
		key: j().describe("The id to name when scaffolding one."),
		label: j().describe("What to call it on screen."),
		description: j().describe("What you get.")
	}), SD = I({ templates: F(xD).describe("The kinds of app the configured source repository knows how to scaffold.") }), CD = I({
		app: j().describe("The app's name, which is also its folder."),
		kind: j().optional().describe("What sort of app it is: the template it came from, or the framework worked out from its dependencies. Absent when it was found purely by having a dev script."),
		previewUrl: j().optional().describe("Where to open it. Absent when this sandbox has no outside address."),
		running: P().describe("Whether its dev server is up."),
		healthy: P().describe("Whether it is actually answering."),
		installed: P().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: Fw.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves.")
	}), wD = I({ apps: F(CD).describe("The apps in this repository.") }), TD = I({
		name: j().describe("The name the package declares."),
		dir: j().describe("Where it lives, relative to the repository."),
		group: j().describe("The top-level folder it sits under, which is what a diagram colours by.")
	}), ED = z([
		"prod",
		"dev",
		"peer"
	]), DD = I({
		from: j().describe("The package that depends."),
		to: j().describe("The package it depends on."),
		type: ED.describe("Which kind of dependency declared it.")
	}), OD = I({
		packages: F(TD).describe("Every package in the repository."),
		edges: F(DD).describe("Which of them use which. Pure data: how to lay it out is yours to decide.")
	}), kD = I({ repo: j().describe("Which repository.") }), AD = I({
		repo: j().describe("Which repository."),
		app: j().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("Which app inside it.")
	});
})), MD, ND, PD, FD, ID = v((() => {
	W(), MD = I({
		dir: j().describe("Where the project is, relative to the workspace root. Empty means the root itself."),
		ecosystem: z(["node", "python"]).describe("Which language's tooling it uses."),
		manager: j().describe("The tool that would do the installing."),
		command: j().describe("The exact command that would run."),
		evidence: j().describe("The file that decided all of the above, so the answer can be checked rather than trusted."),
		state: z([
			"ready",
			"installing",
			"needs-setup",
			"unsupported",
			"stale"
		]).describe("Ready means its dependencies are really there. Stale means it was installed once and has since outgrown that, which is what an agent leaves behind when it adds a dependency without installing it. Unsupported means this sandbox has no such tool."),
		missing: N().optional().describe("How many declared dependencies cannot be found on disk. What separates never-installed from outgrown.")
	}), ND = I({ projects: F(MD).describe("Every project the sandbox found, and whether each is usable.") }), PD = I({ dirs: F(j().max(500)).min(1).max(50).describe("Which projects to install, by folder. Ones already ready, already installing, or with no tool to install them are skipped rather than refused.") }), FD = I({ queued: F(j()).describe("Which of them actually started, which is not necessarily what you asked for.") });
})), LD, RD = v((() => {
	q(), Yb(), D_(), Q(), jD(), Wb(), ID(), _v(), LD = {
		tree: K.route({
			method: "GET",
			path: "/workspace/tree",
			summary: "The workspace file tree",
			description: "Every folder and file under the workspace root, as one walk. Name a conversation to read its own private copy of the tree instead of the shared one. Folders the daemon skips, such as installed packages, come back without their contents; ask for those separately."
		}).input(G_).output(J_),
		children: K.route({
			method: "GET",
			path: "/workspace/children",
			summary: "A bounded folder listing",
			description: "The entries inside a folder as one flat list. Direct children are the default, which is how the explorer opens a folder the full tree walk left closed; callers that need a small subtree can ask for up to five levels without a request per directory."
		}).input(Y_).output(X_),
		file: K.route({
			method: "GET",
			path: "/workspace/file",
			summary: "Read part of a text file",
			description: "A window of one file's text, plus how large the whole file is. Never the entire file: an unbounded read is how a single enormous log stalls the daemon for everyone, so ask for the slice you mean to show and page through if you need more."
		}).input(ev).output(rv),
		derived: K.route({
			method: "GET",
			path: "/workspace/derived",
			summary: "Read a file's derived text",
			description: "What a document, picture, recording or archive says, as text, from the shadow the sandbox keeps beside it. This is the same rendering an agent reads instead of the bytes, so it is also the way to check what one is working from. Nothing is derived here: a file with no shadow yet answers that it has none, and whether it could have one."
		}).input(iv).output(uv),
		derive: K.route({
			method: "POST",
			path: "/workspace/derive",
			summary: "Derive a file's text now",
			description: "Renders one file to text and answers with the result, for when its shadow is missing or you want it rebuilt. The same work the background pass does when that setting is on, so this is how a reader gets the text without turning it on for the whole workspace. Costs a parse of exactly one file; a format nothing can read says so rather than failing."
		}).input(iv).output(uv),
		derivedStatus: K.route({
			method: "GET",
			path: "/workspace/derived-status",
			summary: "How the background rendering is doing",
			description: "Whether documents, pictures, recordings and archives are being rendered to text in the background, how many are waiting, which are being read right now, and how many shadows the last whole-tree pass counted. Ask this to tell a file nothing can read from a file whose turn has not come."
		}).output(av),
		mediaTicket: K.route({
			method: "POST",
			path: "/workspace/media-ticket",
			summary: "Get a pass for streaming a media file",
			description: "Mints the short-lived ticket a video or audio element hands to the streaming route, which serves byte ranges and so cannot carry an ordinary header. Minting it here means a caller can tell whether this sandbox streams media at all, rather than discovering it mid-playback."
		}).input(Q_).output($_),
		resolve: K.route({
			method: "GET",
			path: "/workspace/resolve",
			summary: "Turn a written path into a real file",
			description: "Matches a path somebody wrote in prose against the real tree and says which file it means. A path mentioned in a message is often only the tail of the real one, so this is the lookup behind every clickable file reference rather than a plain existence check."
		}).input(dv).output(fv),
		search: K.route({
			method: "GET",
			path: "/workspace/search",
			summary: "Search the code",
			description: "Ranked results across the whole workspace, grouped, each carrying why it matched and how fresh it is. Left alone it blends plain text, structure, meaning and history in one pass; narrow it to a single kind of search when you already know which you want. Long result sets resume from the cursor it hands back."
		}).input(Lb).output(Ub),
		health: K.route({
			method: "GET",
			path: "/workspace/health",
			summary: "A repo's shape in numbers",
			description: "Where one repo's risk sits: the files that change often and are complicated at once, what the index holds, and which modules the rest of the code leans on most. Scoped to a repo, because a codebase is a repo rather than the whole drop."
		}).input(Gb).output(Jb),
		classify: K.route({
			method: "GET",
			path: "/workspace/classify",
			summary: "Sort a messy drop into buckets",
			description: "Proposes which of the loose things in the workspace are code, documents, media or archives. A read-only suggestion by fixed rules, with no model involved: nothing moves until a caller applies the moves it likes through the move call."
		}).output(gv),
		mkdir: K.route({
			method: "POST",
			path: "/workspace/dir",
			summary: "Create a folder",
			description: "Makes a folder, and any missing folders above it."
		}).input(pv).output(X),
		delete: K.route({
			method: "DELETE",
			path: "/workspace/entry",
			summary: "Delete a file or folder",
			description: "Removes one entry and everything under it. The path travels in the body rather than the address, the same as every other write in this group."
		}).input(Z_).output(X),
		move: K.route({
			method: "POST",
			path: "/workspace/move",
			summary: "Move or rename something",
			description: "Moves one entry to a new path, which is also how you rename it."
		}).input(mv).output(X),
		copy: K.route({
			method: "POST",
			path: "/workspace/copy",
			summary: "Copy a file or folder",
			description: "Duplicates one entry at a new path, recursively for a folder."
		}).input(mv).output(X),
		setup: K.route({
			method: "GET",
			path: "/workspace/setup",
			summary: "Which projects have their dependencies installed",
			description: "Per project, whether its dependencies are actually present. A project that arrives by import comes without them, so files landing is not the same as the project working: until this says a project is ready, its type checks and tests can only mislead you."
		}).output(ND),
		install: K.route({
			method: "POST",
			path: "/workspace/setup/install",
			summary: "Install a project's dependencies",
			description: "Starts the install for one or more projects in a terminal you can attach to, and answers immediately. The run survives a page reload and its output stays in the terminal history."
		}).input(PD).output(FD),
		repos: K.route({
			method: "GET",
			path: "/workspace/repos",
			summary: "Repos in the workspace",
			description: "Every git repo the daemon found in the workspace, with where each one sits and what it is called."
		}).output(fD),
		addRepo: K.route({
			method: "POST",
			path: "/workspace/repos",
			summary: "Clone a repo in",
			description: "Clones a repository into the workspace beside the others, using whatever forge credentials the sandbox already holds."
		}).input(pD).output(mD),
		createRepo: K.route({
			method: "POST",
			path: "/workspace/repos/new",
			summary: "Start a new repo",
			description: "Makes an empty repository in the workspace: a folder named after it, initialised, with a README that names it and one commit, so an agent can start on it at once. Nothing is cloned and nothing leaves the machine."
		}).input(hD).output(mD),
		sync: K.route({
			method: "POST",
			path: "/workspace/sync",
			summary: "Pull every repo up to date",
			description: "Fetches every repo that has a remote and fast-forwards the ones that can move safely, reporting what happened to each. This runs by itself at the start of a turn; call it directly to refresh on demand, or to re-sync a repo that had drifted."
		}).output(_D),
		templates: K.route({
			method: "GET",
			path: "/workspace/templates",
			summary: "App templates you can add",
			description: "The kinds of app the configured source repo knows how to scaffold, which is what an add-app picker lists."
		}).output(SD),
		addApps: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps",
			summary: "Scaffold new apps into a repo",
			description: "Starts scaffolding one or more apps inside an existing multi-package repo and answers straight away. Watch the terminal it opens for progress and for anything that goes wrong."
		}).input(yD).output(X),
		appsList: K.route({
			method: "GET",
			path: "/workspace/repos/{repo}/apps",
			summary: "Apps inside a repo",
			description: "The apps in one multi-package repo, each with its preview address and whether its dev server is up."
		}).input(kD).output(wD),
		packageGraph: K.route({
			method: "GET",
			path: "/workspace/repos/{repo}/graph",
			summary: "How a repo's packages depend on each other",
			description: "Every package in one multi-package repo and which of its siblings each one uses, which is what a dependency view draws."
		}).input(kD).output(OD),
		modules: K.route({
			method: "GET",
			path: "/workspace/modules",
			summary: "Every package across every repo",
			description: "The named packages in the whole workspace, which is what a review list groups changed files under when a reader wants packages rather than paths. Whole-workspace in one answer, because a review spans repos and asking per repo would be a fan-out on every open."
		}).output(b_),
		startApp: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/start",
			summary: "Start an app's dev server",
			description: "Brings up one app's preview server in an attachable terminal, so its address starts answering."
		}).input(AD).output(X),
		stopApp: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/stop",
			summary: "Stop an app's dev server",
			description: "Shuts one app's preview server down and frees its port."
		}).input(AD).output(X),
		runTests: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/tests",
			summary: "Run a project's tests",
			description: "Starts the test run for the projects you name in an attachable terminal and answers straight away. The terminal is where the results appear."
		}).input(bD).output(X)
	};
})), zD = v((() => {
	q(), W(), bE(), hb(), GT(), Q(), K.output(HT), K.input(By).output(X), K.output(X), K.input(nc()).output(nc()), K.input(QT).output(G(eE)), K.input(nE).output(G(eE));
})), BD, VD, HD, UD, WD = v((() => {
	W(), BD = I({
		origin: j(),
		mode: z(["read", "act"])
	}), VD = I({
		browser: j(),
		tabs: N(),
		grants: F(BD),
		paused: P()
	}), HD = I({
		id: j(),
		platform: j().min(1),
		online: P(),
		version: j().optional(),
		lastSeen: N().optional(),
		facts: VD.optional()
	}), I({ browsers: F(HD) }), UD = I({
		name: j(),
		value: j(),
		domain: j(),
		path: j(),
		expires: N().optional(),
		httpOnly: P(),
		secure: P(),
		sameSite: z([
			"Strict",
			"Lax",
			"None"
		])
	}), I({
		account: j().min(1),
		origin: j().min(1),
		cookies: F(UD).min(1).max(300)
	}), I({
		account: j().min(1),
		domain: j().min(1)
	}), I({
		ok: P(),
		message: j(),
		cookies: F(UD).optional()
	});
})), GD = v((() => {
	q(), W(), hb(), Q(), WD(), K.output(VD), K.input(Uy).output(X), K.output(X), K.input(nc()).output(nc());
})), KD = v((() => {
	q(), W(), wh(), ed(), Y(), Id(), Q(), K.output(Ju), K.input(Xu).output(G(Zu)), K.input(Qu).output(G(yh)), K.input(jd).output(I({ applied: P() })), K.input(I({
		conversationId: j().min(1),
		text: j(),
		attachments: F(j()).optional(),
		editorContext: cd.optional()
	})).output(I({
		applied: P(),
		invalid: j().optional()
	})), K.input(I({ toml: j() })).output(I({ settings: F(j()) })), K.input(Qu.pick({ conversationId: !0 })).output(X), K.output(X);
})), qD = v((() => {})), JD, YD, XD = v((() => {
	JD = "The interrupted request is repeated below, where part of it was already completed in this session, continue from that point instead of starting over.", YD = {
		auth: `The Claude credential that interrupted this conversation has been renewed, and this turn resumed automatically. ${JD}`,
		outage: `The model provider was briefly unavailable and interrupted this conversation; this turn resumed automatically. ${JD}`,
		restart: `The sandbox restarted while this turn was running, which stopped it, and this turn resumed automatically once it came back. ${JD}`,
		stopped: `The previous attempt at this request stopped before it finished, and it has been sent again. ${JD}`,
		limit: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again. ${JD}`,
		switched: "The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account, which starts a fresh session. The conversation so far has been carried across above, including the part of the request that was already completed, and the sandbox has measured where the work actually stands (the files changed on this branch, what was verified, what the checklist still holds) in the note headed 'Where the work stands': trust that note over anything recalled, then continue from that point instead of starting over.",
		carried: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account of the same provider, in this same session: everything you knew is still here. ${JD}`,
		refused: "The model provider refused the previous attempt at this request outright, because its usage allowance was spent: no part of the request below was read or acted on, and nothing has been done towards it. It has been sent again, and starts from the beginning. Where the sandbox has measured earlier work on this branch, it is in the note headed 'Where the work stands'.",
		answered: "The sandbox restarted while this conversation was waiting for the user to respond; it is back, and their response follows below: continue from where the session left off."
	}, YD.answered;
})), ZD = v((() => {})), QD = v((() => {})), $D = v((() => {})), eO, tO = v((() => {
	W(), eO = [
		"editor",
		"read",
		"drive",
		"land"
	], z(eO);
})), nO, rO, iO, aO, oO, sO, cO = v((() => {
	vp(), nO = [
		{
			path: ".intentic/config/capabilities.json",
			invalidates: [
				"capabilities",
				"environment",
				"panels",
				"manifests"
			],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/capability-dismissals.json",
			invalidates: ["capabilities"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/secret-uses.json",
			invalidates: ["secrets"],
			portability: "carry"
		},
		{
			path: ".intentic/records/wallet-ledger.json",
			invalidates: [],
			why: "Rendered through the wallet CLI and the capability card's live status probe, not from a browser query key.",
			portability: "carry"
		},
		{
			path: ".intentic/config/personas.json",
			invalidates: [
				"personas",
				"capabilities",
				"manifests"
			],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.custom.Dockerfile",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.Dockerfile",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.d/",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/environment.approved.Dockerfile",
			invalidates: ["environment"],
			portability: "derived",
			note: "The target composes its own overlay on first boot; rebuild it there to install the tools it names."
		},
		{
			path: ".intentic/config/settings.json",
			invalidates: ["settings", "manifests"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/safety.md",
			invalidates: ["safety-policy"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/safety-log.json",
			invalidates: ["safety-log"],
			portability: "derived",
			note: "The target starts its own record of what it decided."
		},
		{
			path: ".intentic/config/autostart.json",
			invalidates: [],
			why: "The browser reads what is running off /panels; this file only tells the daemon what to start at boot.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/heavy-commands.json",
			invalidates: ["settings"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/hooks/",
			invalidates: [],
			why: "The settings screen renders the rules that name these scripts, out of settings.json; nothing in the browser reads the scripts themselves.",
			portability: "carry",
			versioned: !0,
			outsideWriter: "the owner or an agent, authoring them; the daemon only ever RUNS one, by the path a rule's command names"
		},
		{
			path: ".intentic/local/rule-firings.json",
			invalidates: ["rule-firings"],
			portability: "derived",
			note: "Stamps of when each rule last did something; the new sandbox starts its own record."
		},
		{
			path: ".intentic/records/runtime-installs.json",
			invalidates: ["environment"],
			portability: "carry"
		},
		{
			path: ".intentic/config/engines.json",
			invalidates: ["engines"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/approvals/",
			invalidates: ["approvals"],
			portability: "carry",
			versioned: !0,
			authored: !0
		},
		{
			path: ".intentic/config/automations.json",
			invalidates: [],
			why: "Declared by the intentic.automations extension's contributes.files, `automations` is its query key, not core's.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/automation-runs.json",
			invalidates: [],
			why: "Declared by the intentic.automations extension's contributes.files, `automations` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/approvals/",
			invalidates: [],
			why: "Declared by the intentic.approvals extension's contributes.files (the page that lists held wakes), `automation-approvals` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/issues/",
			invalidates: [],
			why: "Declared by the intentic.issues extension's contributes.files, `issues` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/chores/",
			invalidates: [],
			why: "Declared by the intentic.maintenance extension's contributes.files, `maintenance-report`/`maintenance-runs` are its query keys, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/config/docs/",
			invalidates: [],
			why: "Declared by the intentic.documentation extension's contributes.files, `documentation`/`documentation-runs` are its query keys, not core's.",
			portability: "carry",
			authored: !0,
			outsideWriter: "the intentic.documentation extension's staging writes (its paths.ts)"
		},
		{
			path: ".intentic/config/workflows.json",
			invalidates: ["workflows"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/workflow-runs.json",
			invalidates: ["workflows", "workflow-runs"],
			portability: "carry"
		},
		{
			path: ".intentic/config/loop-designs.json",
			invalidates: ["loop-designs"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/loops.json",
			invalidates: [],
			why: "Ralph loops and their iteration history. Nothing observes it: where a RUNNING loop stands rides on the fleet roster (AgentSummary.loop), which the /events stream already pushes about once a second, and a second source invalidating on this file could only ever disagree with the card beside it. The iteration list of an ENDED loop is an on-demand read, nothing renders it until someone opens it (web's useLoops, which holds no query for exactly this reason).",
			portability: "carry"
		},
		{
			path: ".intentic/records/webchat-installs.json",
			invalidates: [],
			why: "Which origins have loaded a Front Desk's widget, written on a 30s flush timer while a customer's site serves page views. The install panel that renders it fetches on open and polls itself while it is on screen, which is the whole window in which the answer changes for anyone. Pushing instead would bill every connected browser a refetch per flush, for a panel almost nobody has open.",
			portability: "carry"
		},
		{
			path: ".intentic/records/issue-installs.json",
			invalidates: [],
			why: "The same probe for the bug reporter's script, on the same flush timer and read by the same kind of panel, so it is outside the push path for the same reason the Front Desk's is.",
			portability: "carry"
		},
		{
			path: ".intentic/records/webchat-outbox.json",
			invalidates: [],
			why: "Front Desk replies a visitor has not collected yet, written when an approved wake answers or a human writes as the agent. The only reader is a stranger's browser polling the public /webchat door, which no query key in this app addresses; the owner's own view of the same words is the conversation's transcript, which the agent registry already pushes.",
			portability: "carry"
		},
		{
			path: ".intentic/records/thread-sessions.json",
			invalidates: [],
			why: "Thread bookkeeping (an inbound thread, a Front Desk visitor, a Discord or Slack channel, → sandbox conversation + provider session), written on EVERY inbound message. Nothing in the browser reads it: what a thread produces is a conversation, and the fleet board already learns about that from the agent registry's own push. Naming a key here would bill every connected browser a refetch per inbound message, the request storm this table's own note warns about, to refresh nothing it can see.",
			portability: "carry"
		},
		{
			path: ".intentic/records/senders.json",
			invalidates: [],
			why: "Who has written to each listener source, written on every inbound message that reached an automation. Read only while the automation editor's sender picker is open, which fetches it on open; a live key here would refetch every connected browser per Discord message to refresh a list nobody has on screen.",
			portability: "carry"
		},
		{
			path: ".intentic/config/extension-settings.json",
			invalidates: [],
			why: "Held in a module-level shallowRef store per extension (web's extensionSettingsStore) with no query observer, and deliberately so: api.settings.get must answer SYNCHRONOUSLY from an extension's first activate() line, and the store outlives every component scope. A module-level QueryObserver is the one shape that would make invalidation refetch, and this app already ruled it out, it detaches on the queryClient.clear() at logout (see useSandbox's sandbox-list mirror). So a remote member's setting edit reaches this browser on its next load, not live.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/extension-enablement.json",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/workspace-extensions/",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0,
			authored: !0
		},
		{
			path: ".intentic/records/extension-updates.json",
			invalidates: ["extensions"],
			portability: "carry"
		},
		{
			path: ".intentic/config/extension-update-policy.json",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/extension-usage.json",
			invalidates: [],
			why: "Which of the routes each extension DECLARED it has actually called, the evidence behind the permissions list on its row. The one entry here whose empty set is a RATE decision rather than an architectural one: every browser with the app open reports its batch on a timer, so wiring this to the `extensions` query would refetch the whole list every few seconds for a figure nobody is watching change. The tab reads it when it loads, which is when anyone is reading it.",
			portability: "carry"
		},
		{
			path: ".intentic/identity/members.json",
			invalidates: [],
			why: "Not this view's source at all: SandboxAccess renders the PLATFORM's invite records (apiClient.invite.list), and this file is the daemon's ENFORCED copy, written first so a grant the enforcer never got is never recorded, then never read back. A change here means the two disagreed, which the write order makes fail-closed rather than stale.",
			portability: "identity",
			note: "Re-invite collaborators from the Access tab, a grant is the platform's record, and the target enforces its own copy."
		},
		{
			path: ".intentic/secrets/auth/",
			invalidates: [],
			why: "AI-provider credentials and runtime homes, plus the capability and extension-settings secret vaults; each account is rendered through owner-gated provider routes.",
			portability: "secret",
			note: "Sign the agent's AI accounts in again on the Agent tab, then re-enter each connection's credential on Capabilities and each extension's secret settings on Extensions, both arrived listed but unauthenticated."
		},
		{
			path: ".intentic/records/sessions/claude/",
			invalidates: [],
			why: "Agent session transcripts; nothing derives from watching them, and descending into them would cost a fifth of the watcher.",
			portability: "carry"
		},
		{
			path: ".intentic/records/artifacts/",
			invalidates: [],
			why: "Durable outputs owned by conversations and extension runs: attachments, browser captures, generated images, acceptance reports, workflow step reports, voice transcripts, and loop ledgers.",
			portability: "carry"
		},
		{
			path: ".intentic/local/cache/",
			invalidates: [],
			why: "Rebuildable indexes and caches, the iq index and its vector sidecar, the whisper model, fileq's derived/ markdown shadows of binary files; ignored by the watcher and recreated from carried workspace content.",
			portability: "derived"
		},
		{
			path: ".intentic/local/runtime/",
			invalidates: [],
			why: "Extension runtime scratch (watermarks, cached short-lived tokens); nothing renders it and gateways re-derive it.",
			portability: "derived",
			outsideWriter: "extensions, through extensionRuntimeDir below"
		},
		{
			path: ".intentic/local/tmp/",
			invalidates: [],
			why: "Scratch that agents and tools leave behind (build logs, demo checkouts); nothing reads it after the turn that wrote it. The state janitor empties it at boot.",
			portability: "derived"
		},
		{
			path: ".intentic/local/.pnpm-store/",
			invalidates: [],
			why: "pnpm's content-addressable store, auto-created by installs run from under .intentic; the next install rebuilds it.",
			portability: "derived",
			outsideWriter: "pnpm itself, when an install runs from under .intentic"
		},
		{
			path: ".intentic/local/newest-run.json",
			invalidates: [],
			why: "The newest daemon version that ever ran this workspace (store/newest-run.ts), a downgrade tripwire, about THIS sandbox the way rule-firings is.",
			portability: "derived",
			note: "The target stamps its own daemon version on first boot."
		},
		{
			path: ".intentic/records/verify.json",
			invalidates: [],
			why: "The dependency verifier's verdict memory; nothing renders it directly, outcomes reach the owner as activity entries and workspace events.",
			portability: "carry"
		},
		{
			path: ".intentic/local/verify/",
			invalidates: [],
			why: "A running check's wrapper artifacts (log + exit status), read once by the daemon when the panel finishes.",
			portability: "derived"
		},
		{
			path: ".intentic/secrets/ci.json",
			invalidates: [],
			why: "Webhook secret + conclusion memory; the Pipelines view reads it through /ci/runs, not off disk.",
			portability: "secret",
			note: "Re-add the CI webhook on the Pipelines view, its secret is per-sandbox."
		},
		{
			path: ".intentic/secrets/doors.json",
			invalidates: [],
			why: "The credentials behind the event webhooks, release gates and bug intakes; each surface reads its own through /automations and /workflows, never off disk.",
			portability: "secret",
			note: "Webhook, gate and intake URLs are minted fresh on the first read here: re-copy each into its caller's secret store."
		},
		{
			path: ".intentic/identity/control-tokens.json",
			invalidates: [],
			why: "Hashed control tokens (the ACP editor bridge, and anything else driving this sandbox from outside), listed on demand by the owner.",
			portability: "identity",
			backup: !1,
			note: "Mint fresh control tokens, the old ones authenticate against the source sandbox."
		},
		{
			path: ".intentic/identity/owner.json",
			invalidates: [],
			why: "Bound once on first use; a change here means the sandbox was re-owned, which re-authenticates anyway.",
			portability: "identity"
		},
		{
			path: ".intentic/identity/workspace.json",
			invalidates: [],
			why: "The workspace identity, read from the /events hello frame rather than as a file.",
			portability: "identity"
		},
		{
			path: ".intentic/identity/passkeys.json",
			invalidates: [],
			why: "The passkeys registered with this sandbox, whether one is required to open it, and the hashes of the owner's recovery codes; the Access tab reads them through /system/passkeys, never off disk.",
			portability: "identity",
			note: "Passkeys are bound to the sandbox they were registered with: add them again on the new one from its Access tab."
		},
		{
			path: ".intentic/config/templates.json",
			invalidates: [],
			why: "Scaffold templates, read when the scaffold dialog opens.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/browser/",
			invalidates: [],
			why: "Browser-login profiles: Chromium rewrites these constantly. Descent-ignored by the watcher outright.",
			portability: "derived",
			note: "Log the agent's browser back into any site it needs, profiles do not travel."
		},
		{
			path: ".intentic/local/extensions/",
			invalidates: [],
			why: "Extension checkouts, whole git clones. The `extensions` query is driven by the capability manifest above, not by their contents.",
			portability: "derived",
			note: "Extensions re-clone from the capability manifest on the target's next reconcile."
		},
		{
			path: ".intentic/records/plugins/",
			invalidates: [],
			why: "Agent plugin dirs, read by the SDK's loader each turn.",
			portability: "carry"
		},
		{
			path: ".intentic/config/skills/",
			invalidates: ["skills"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/personas/",
			invalidates: ["personas"],
			portability: "carry",
			versioned: !0
		}
	], rO = nO, rO.filter((e) => e.versioned).map((e) => e.path), rO.filter((e) => e.versioned || e.authored).map((e) => e.path), iO = {
		config: `${gp}/config`,
		records: `${gp}/records`,
		local: `${gp}/local`,
		identity: `${gp}/identity`,
		secrets: `${gp}/secrets`
	}, aO = Object.keys(iO), oO = (e) => {
		switch (e.portability) {
			case "secret": return "secrets";
			case "identity": return "identity";
			case "derived": return "local";
			case "carry": return e.versioned === !0 || e.authored === !0 ? "config" : "records";
		}
	}, aO.flatMap((e) => {
		let t = rO.filter((t) => oO(t) === e);
		return t.some((e) => e.versioned === !0) ? t.filter((e) => e.versioned !== !0).map((e) => e.path) : [`${iO[e]}/`];
	}), sO = rO.filter((e) => e.backup !== !1 && (e.portability === "carry" || e.portability === "identity")).map((e) => e.path), rO.filter((e) => !sO.includes(e.path)).map((e) => e.path), rO.filter((e) => e.invalidates.includes("manifests")).map((e) => e.path), `${gp}`, `${gp}`;
})), lO = v((() => {})), uO = v((() => {})), dO = v((() => {})), fO = v((() => {})), pO = v((() => {})), mO = v((() => {})), hO = v((() => {})), gO, _O, vO, yO, bO = v((() => {
	gO = /(?:auth[_-]?token|access[_-]?token|refresh[_-]?token|api[_-]?key|access[_-]?key|secret[_-]?key|client[_-]?secret|private[_-]?key|passwo?rd|passphrase|credentials?|secret|token|bearer)["']?[ \t]*[:=][ \t]*(?:"([^"\n]*)"|'([^'\n]*)'|([^\s"',;}\n]*))/gi, _O = [
		/-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY-----/,
		/PuTTY-User-Key-File-\d/,
		/\b[a-z][a-z0-9+.-]*:\/\/[^\s/:@]+:(?!\*+@)[^\s/@]{3,}@/i
	], vO = [
		/\bnpm_[A-Za-z0-9]{30,}/,
		/\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}/,
		/\bgithub_pat_[A-Za-z0-9_]{50,}/,
		/\bglpat-[A-Za-z0-9_-]{16,}/,
		/\bxox[baprs]-[A-Za-z0-9-]{10,}/,
		/\bsk-[A-Za-z0-9_-]{20,}/,
		/\b(?:sk|rk)_live_[A-Za-z0-9]{16,}/,
		/\bAKIA[0-9A-Z]{16}\b/,
		/\bASIA[0-9A-Z]{16}\b/,
		/\bAIza[0-9A-Za-z_-]{35}\b/,
		/\bhf_[A-Za-z0-9]{30,}/,
		/\bdop_v1_[a-f0-9]{60,}/,
		/\bey[A-Za-z0-9_-]{10,}\.ey[A-Za-z0-9_-]{10,}\./
	], [..._O, ...vO], yO = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), yO(vO), new RegExp(gO.source, gO.flags);
})), xO = v((() => {})), SO, CO = v((() => {
	SO = 80, SO * .6;
})), wO = v((() => {
	CO(), cO();
})), TO = v((() => {})), EO = v((() => {
	aS();
})), DO = v((() => {
	W(), I({
		type: B("hello"),
		token: j(),
		version: j()
	});
})), OO = v((() => {
	W(), I({
		type: B("hello"),
		token: j(),
		version: j()
	});
})), kO = v((() => {})), AO, jO = v((() => {
	W(), hf(), I({
		provider: j().min(1),
		type: j().min(1),
		id: j(),
		channelId: j(),
		author: I({
			id: j(),
			name: j(),
			groups: F(j()).optional()
		}),
		content: j(),
		mentioned: P().optional(),
		branch: j().optional(),
		history: F(I({
			author: I({
				id: j(),
				name: j()
			}),
			content: j(),
			timestamp: j(),
			self: P().optional()
		})).optional(),
		timestamp: j(),
		extra: R(j(), nc()).optional()
	}), AO = I({
		state: z([
			"waiting",
			"code",
			"failed"
		]),
		code: j().optional(),
		detail: j().optional(),
		since: N().optional()
	}), mf.extend({
		whisperReady: P().optional(),
		pairing: R(j(), AO).optional()
	});
})), MO = v((() => {})), NO = v((() => {})), PO = v((() => {})), FO = v((() => {})), IO = v((() => {})), LO, RO = v((() => {
	LO = {
		cautious: 0,
		balanced: .25,
		eager: .4
	}, LO.balanced;
})), zO = v((() => {})), BO, VO, HO, UO, WO, GO = v((() => {
	W(), BO = [
		"claude",
		"codex",
		"cursor",
		"opencode",
		"translator"
	], VO = z(BO), HO = I({
		kind: z([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where this engine's version comes from."),
		version: j().optional().describe("Which version, when it is pinned to one.")
	}), UO = I({
		version: j().describe("Which version was refused."),
		reason: j().describe("What was wrong with it: it would not launch, or it did not export what the daemon calls."),
		at: j().describe("When it was refused.")
	}), WO = I({
		id: VO.describe("Which engine."),
		label: j().describe("What it is called on screen."),
		running: I({
			version: j().optional().describe("The version a turn would use right now. Absent means there is no copy of this engine here yet."),
			source: z(["image", "store"]).describe("Whether that version is the one baked into the sandbox image or one the store installed over it.")
		}).describe("What a turn started now would actually run."),
		baked: j().optional().describe("The version the image bakes, which is the floor everything else falls back to. Absent on an image that carries no copy of it."),
		channel: HO.describe("The owner's standing answer for this engine."),
		offered: I({
			version: j().describe("The version this engine would move to."),
			blessed: P().describe("Whether the blessed list names this version, which on the latest channel is routinely no.")
		}).optional().describe("A newer version waiting, absent when the running one is already what the channel asks for."),
		blessed: j().optional().describe("What the blessed list names for this engine, when the list has been read."),
		previous: j().optional().describe("The version kept one step back, which is what going back means."),
		quarantined: F(UO).describe("Versions the store installed and then refused, with the reason."),
		diskBytes: N().int().nonnegative().describe("What this engine's kept versions cost on the daemon's volume."),
		installing: P().optional().describe("Whether this engine is currently being installed in the background.")
	}), I({
		engines: F(WO).describe("Every engine this sandbox can run, whether or not the store holds anything for it."),
		checkedAt: j().optional().describe("When upstream was last asked what it publishes. Absent until the first check has run."),
		listSource: j().describe("Where the blessed list is read from, so a self-hosted sandbox can show its own."),
		listReadAt: j().optional().describe("When that list was last read. Absent means it has never been reachable from here.")
	}), I({
		id: VO.describe("Which engine."),
		kind: z([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where its version should come from."),
		version: j().optional().describe("Which version, required when pinning and ignored otherwise.")
	}), I({
		id: VO.describe("Which engine."),
		version: j().optional().describe("Which version. Leave it out for whatever the channel offers; naming one takes a version nobody has blessed, deliberately."),
		floor: j().optional().describe("Install the lowest published version at or above this one. What a turn refused for being too old sends back.")
	}), I({ id: VO.describe("Which engine.") }), I({
		ok: B(!0).describe("It went through."),
		version: j().describe("Which version is now active."),
		source: z(["image", "store"]).describe("Whether that is the image's copy or the store's."),
		fromNextTurn: P().describe("Whether the change reaches turns already in flight, or only the next one.")
	});
})), KO, qO, JO, YO, XO, ZO, QO, $O, ek, tk = v((() => {
	W(), KO = I({
		content: j(),
		hash: j()
	}), qO = I({
		bornAt: N(),
		at: N(),
		apt: F(j()),
		paths: F(j())
	}), JO = z([
		"apt",
		"pip",
		"cargo",
		"npm",
		"rustup-target",
		"playwright",
		"gem",
		"pipx",
		"go",
		"other"
	]), YO = I({
		tool: j(),
		kind: JO,
		sessions: F(j()),
		commands: F(j()),
		firstAt: N(),
		lastAt: N(),
		count: N(),
		declinedAt: N().optional()
	}), I({
		installs: F(YO),
		drift: qO.optional()
	}), XO = I({
		tool: j(),
		kind: JO,
		sessions: N(),
		lastAt: N(),
		live: P(),
		drafted: P().optional(),
		declined: P().optional(),
		step: j().optional()
	}), I({
		tool: j().min(1),
		decision: z([
			"adopt",
			"dismiss",
			"restore"
		])
	}), ZO = I({
		base: j(),
		root: j().optional()
	}), I({
		proposal: KO.optional(),
		custom: KO.optional(),
		approved: KO.optional(),
		appliedHash: j().optional(),
		container: j().optional(),
		drift: qO.optional(),
		recurring: F(XO).optional(),
		localImage: ZO.optional()
	}), I({ hash: j().min(1) }), QO = I({
		name: j(),
		version: j().optional()
	}), $O = I({
		id: j(),
		name: j(),
		origin: z([
			"custom",
			"capability",
			"base"
		]),
		originLabel: j().optional(),
		state: z([
			"active",
			"after-rebuild",
			"awaiting-approval"
		]),
		tools: F(QO),
		extras: N().optional(),
		purpose: j().optional(),
		detail: j().optional(),
		commands: j().optional()
	}), I({ items: F($O) }), ek = I({
		name: j(),
		status: z([
			"packing",
			"ready",
			"failed"
		]),
		bytes: N(),
		createdAt: N(),
		secrets: P(),
		error: j().optional()
	}), I({ exports: F(ek) });
})), nk, rk, ik, ak, ok, sk = v((() => {
	W(), qu(), nk = z([
		"definition",
		"bundle",
		"hermes",
		"openclaw"
	]), rk = z(["hermes", "openclaw"]), ik = z([
		"workspace",
		"repo",
		"files",
		"history",
		"environment",
		"capability",
		"settings",
		"memory",
		"skill",
		"automation",
		"secret"
	]), ak = I({
		id: j(),
		group: ik,
		label: j(),
		detail: j().optional(),
		applicable: P(),
		reason: j().optional(),
		recommended: P(),
		secrets: F(j())
	}), I({
		source: nk,
		token: j(),
		name: j().optional(),
		items: F(ak),
		carriesSecrets: P(),
		refused: F(j()),
		needsAction: F(Ku)
	}), I({
		token: j(),
		items: F(j()),
		includeSecrets: P()
	}), I({
		applied: F(I({
			id: j(),
			group: ik,
			label: j()
		})),
		failed: F(I({
			id: j(),
			label: j(),
			error: j()
		})),
		refused: F(j()),
		needsAction: F(Ku),
		presentation: I({
			name: j().optional(),
			image: j().optional()
		}).optional()
	}), ok = I({
		id: j(),
		online: P(),
		found: rk.optional(),
		detail: j().optional()
	}), I({ hosts: F(ok) }), I({ host: j().min(1) });
})), ck, lk, uk, dk, fk, pk, mk = v((() => {
	W(), qu(), hb(), mC(), ck = ic({
		id: j().min(1),
		remote: j().min(1),
		ref: j().optional()
	}), lk = ic({
		remote: j().min(1),
		ref: j().optional()
	}), uk = ic({
		baseImage: j().optional(),
		dockerfile: j().optional()
	}), dk = (e) => {
		let t = e;
		for (; t instanceof fl || t instanceof pl;) t = t.unwrap();
		return t;
	}, fk = () => ic(Object.fromEntries(Object.entries(ZS.shape).map(([e, t]) => [e, dk(t).optional()]))).prefault({}), pk = ic({
		schemaVersion: B(1),
		name: j().optional(),
		environment: uk.prefault({}),
		workspace: lk.optional(),
		repositories: F(ck).prefault([]),
		capabilities: F(nb).prefault([]),
		secrets: F(j()).prefault([]),
		settings: fk()
	}), I({
		toml: j(),
		omitted: F(Ku)
	}), I({ differences: F(Ku) }), I({
		remote: j().min(1).optional(),
		name: j().min(1).optional(),
		owner: j().min(1).optional()
	}), I({
		remote: j(),
		branch: j(),
		created: P()
	}), I({
		remote: j().optional(),
		branch: j().optional(),
		hosts: F(j())
	}), I({
		version: B(3),
		sandbox: I({ name: j() }).optional(),
		presentation: I({
			name: j().optional(),
			image: j().optional()
		}).optional(),
		createdAt: N(),
		secrets: P(),
		repos: F(j()),
		definition: pk,
		excluded: F(I({
			path: j(),
			portability: j(),
			note: j().optional()
		}))
	});
})), hk = v((() => {})), gk = v((() => {})), _k = v((() => {})), vk = v((() => {})), yk = v((() => {})), bk = v((() => {
	Cp();
})), xk, Sk, Ck = v((() => {
	Fl(), lf(), _f(), Rh(), k_(), H_(), W_(), Ib(), xx(), Cx(), Dx(), kx(), rS(), MC(), dw(), pw(), _w(), yw(), xw(), Mw(), Pw(), Vw(), Jw(), nT(), aT(), cT(), vT(), bT(), ST(), OT(), IT(), RT(), BT(), FE(), LE(), BE(), HE(), dD(), RD(), zD(), GD(), KD(), qD(), wh(), pp(), XD(), Fv(), vh(), ZD(), QD(), $D(), Fl(), tO(), vp(), cO(), lO(), uO(), dO(), fO(), pO(), Vu(), Gu(), iS(), mO(), vS(), hO(), kS(), bO(), xO(), Au(), wO(), EO(), DO(), OO(), kO(), ed(), jO(), MO(), NO(), PO(), TO(), aS(), Fu(), FO(), IO(), RO(), Cp(), zO(), hf(), Y(), xm(), B_(), Eg(), hb(), zg(), Cm(), Yb(), bE(), GO(), tk(), Xv(), tS(), Tm(), D_(), lw(), Ih(), GT(), hw(), ly(), ng(), Aw(), zp(), yx(), Ab(), zw(), AC(), Id(), Kw(), nf(), Rd(), eT(), gT(), Pb(), Pf(), ET(), mC(), Jm(), Q(), NE(), Vm(), PT(), Ey(), WD(), lD(), jD(), Wb(), ID(), _v(), sk(), mk(), hk(), gk(), _k(), CO(), KT(), vk(), yk(), bk(), xk = {
		accounts: cf,
		activity: gf,
		agent: Lh,
		agents: O_,
		approvals: V_,
		automations: U_,
		capabilities: Fb,
		chores: bx,
		ci: Sx,
		endpoints: Ex,
		extensions: nS,
		personas: jC,
		safety: yT,
		sessions: DT,
		settings: FT,
		share: LT,
		skills: zT,
		intentic: gw,
		git: uw,
		history: fw,
		workspace: LD,
		inventory: vw,
		issues: bw,
		logs: jw,
		loops: Nw,
		panels: Bw,
		ports: qw,
		public: tT,
		prepush: iT,
		providers: sT,
		push: _T,
		secrets: xT,
		system: PE,
		translator: IE,
		usage: zE,
		vpn: VE,
		exit: Ox,
		workflows: uD
	}, Sk = kl(xk), Sk.map((e) => e.name), Pl(xk);
})), wk, Tk, Ek, Dk, Ok, kk, Ak, jk, Mk, Nk, Pk, Fk, Ik, Lk, Rk, zk, Bk, Vk = v((() => {
	wk = { class: "space-y-4 pt-1" }, Tk = { key: 0 }, Ek = { class: "max-w-read whitespace-pre-wrap" }, Dk = {
		key: 0,
		class: "mt-1 text-sm text-muted"
	}, Ok = { class: "max-w-read font-mono text-sm break-words" }, kk = { key: 1 }, Ak = { class: "space-y-0.5 text-sm" }, jk = { class: "w-32 shrink-0 text-muted tabular-nums" }, Mk = { class: "w-24 shrink-0 text-muted" }, Nk = { class: "min-w-0 break-words" }, Pk = { key: 2 }, Fk = { class: "grid grid-cols-facts gap-x-3 gap-y-0.5 text-sm" }, Ik = { class: "min-w-0 break-all" }, Lk = { class: "min-w-0 break-words" }, Rk = { class: "text-muted" }, zk = { class: "min-w-0 break-words" }, Bk = /*@__PURE__*/ p({
		__name: "IssueEvidence",
		props: { issue: {} },
		setup(e) {
			let t = o(() => e.issue.sample), n = o(() => t.value.breadcrumbs ?? []), r = o(() => Object.entries(t.value.context ?? {})), i = o(() => {
				let e = t.value.reporter;
				return [e?.name, e?.email].filter((e) => e !== void 0 && e !== "").join(" · ");
			});
			return (e, o) => (m(), l("div", wk, [
				t.value.description === void 0 ? c("", !0) : (m(), l("section", Tk, [
					u("h3", { class: ee(g(_e).sectionLabel("mb-1")) }, "What they wrote", 2),
					u("p", Ek, h(t.value.description), 1),
					i.value === "" ? c("", !0) : (m(), l("p", Dk, "Says they are " + h(i.value) + " (unverified)", 1))
				])),
				u("section", null, [
					u("h3", { class: ee(g(_e).sectionLabel("mb-1")) }, "The error", 2),
					u("p", Ok, h(t.value.message), 1),
					t.value.stack === void 0 ? c("", !0) : (m(), s(g(ae), {
						key: 0,
						code: t.value.stack,
						"clamp-lines": 14,
						copyable: "",
						class: "mt-2"
					}, null, 8, ["code"]))
				]),
				n.value.length > 0 ? (m(), l("section", kk, [u("h3", { class: ee(g(_e).sectionLabel("mb-1")) }, "Just before it", 2), u("ol", Ak, [(m(!0), l(a, null, ne(n.value, (e, t) => (m(), l("li", {
					key: t,
					class: "flex gap-2"
				}, [
					u("span", jk, h(g(he)(e.at)), 1),
					u("span", Mk, h(e.kind), 1),
					u("span", Nk, h(e.message), 1)
				]))), 128))])])) : c("", !0),
				r.value.length > 0 || t.value.userAgent !== void 0 ? (m(), l("section", Pk, [u("h3", { class: ee(g(_e).sectionLabel("mb-1")) }, "Where", 2), u("dl", Fk, [
					t.value.url === void 0 ? c("", !0) : (m(), l(a, { key: 0 }, [o[0] ||= u("dt", { class: "text-muted" }, "Page", -1), u("dd", Ik, h(t.value.url), 1)], 64)),
					t.value.userAgent === void 0 ? c("", !0) : (m(), l(a, { key: 1 }, [o[1] ||= u("dt", { class: "text-muted" }, "Browser", -1), u("dd", Lk, h(t.value.userAgent), 1)], 64)),
					(m(!0), l(a, null, ne(r.value, ([e, t]) => (m(), l(a, { key: e }, [u("dt", Rk, h(e), 1), u("dd", zk, h(t), 1)], 64))), 128))
				])])) : c("", !0)
			]));
		}
	});
})), Hk, Uk = v((() => {
	Vk(), Vk(), Hk = Bk;
})), Wk, Gk, Kk, qk, Jk, Yk, Xk = v((() => {
	Wk = (e) => {
		switch (e) {
			case "investigating": return {
				label: "being looked at",
				tone: "primary"
			};
			case "resolved": return {
				label: "resolved",
				tone: "success"
			};
			case "ignored": return {
				label: "ignored",
				tone: "neutral"
			};
			case "open": return;
		}
	}, Gk = (e) => e.status === "open" && (e.runs?.length ?? 0) > 0, Kk = (e) => e === 1 ? "once" : `${e.toLocaleString()}×`, qk = (e) => [
		e.culprit,
		e.release === void 0 ? void 0 : `build ${e.release}`,
		e.origin
	].filter((e) => e !== void 0).join(" · "), Jk = (e) => {
		let t = e.runs?.at(-1);
		return e.status === "investigating" && t !== void 0 ? {
			kind: "open",
			conversationId: t.conversationId
		} : { kind: "investigate" };
	}, Yk = (e) => e.slice(0, 8);
})), Zk, Qk, $k, eA, tA, nA, rA, iA = v((() => {
	Ck(), Te(), Uk(), Xk(), Ae(), Zk = { class: "font-mono" }, Qk = { class: "flex flex-col gap-4" }, $k = { class: "text-sm text-muted tabular-nums" }, eA = { class: "text-sm text-muted tabular-nums" }, tA = { class: "text-sm text-muted tabular-nums" }, nA = {
		key: 0,
		class: "text-sm text-muted"
	}, rA = /*@__PURE__*/ p({
		__name: "IssuesView",
		setup(e) {
			let { issues: t, invalid: n, isLoading: r, error: i, setStatus: p, investigate: re, remove: ae } = Ee(), he = be(), { notice: xe, run: v } = ve(), Se = ye(r, o(() => "issues")), Ce = o(() => i.value === void 0 ? void 0 : {
				tone: "danger",
				title: "Couldn't read your issues.",
				detail: i.value
			}), Te = o(() => of(we().sandbox.role(), "maintainer")), De = o(() => t.value.filter((e) => e.status === "open")), Oe = o(() => t.value.filter((e) => e.status === "investigating")), ke = o(() => t.value.filter((e) => e.status === "resolved" || e.status === "ignored")), Ae = o(() => t.value.length === 0 && n.value.length === 0), je = te(void 0), Me = (e, t) => {
				je.value = t ? e : void 0;
			}, Ne = te(void 0), Pe = (e, t) => void v(async () => {
				await e();
			}, t), Fe = (e) => {
				Ne.value = void 0, Pe(() => ae.mutateAsync(e.id), "Could not forget that issue.");
			}, Ie = (e) => we().chat.openSession(e);
			return (e, t) => (m(), s(g(pe), {
				title: "Issues",
				scroll: "page"
			}, {
				strips: _(() => [f(g(le), { of: [g(xe), Ce.value] }, null, 8, ["of"]), g(n).length > 0 ? (m(), s(g(ce), {
					key: 0,
					tone: "warning"
				}, {
					default: _(() => [d(h(g(n).length) + " issue file" + h(g(n).length === 1 ? "" : "s") + " couldn't be read: ", 1), u("span", Zk, h(g(n).join(", ")), 1)]),
					_: 1
				})) : c("", !0)]),
				detail: _(() => [u("div", Qk, [g(Se) ? (m(), s(g(de), {
					key: 0,
					role: "status",
					"aria-busy": "true"
				}, {
					label: _(() => [...t[2] ||= [u("span", {
						class: "skeleton block h-2.5 w-24",
						"aria-hidden": "true"
					}, null, -1)]]),
					default: _(() => [t[3] ||= u("span", { class: "sr-only" }, "Reading your issues…", -1), f(g(fe), {
						rows: 3,
						description: "",
						control: ""
					})]),
					_: 1
				})) : Ae.value ? (m(), l("p", {
					key: 1,
					class: ee(g(_e).emptyState("py-8"))
				}, " Nothing reported yet. Crashes and problem reports from the sites and apps you embedded the reporter on land here, grouped by what went wrong. ", 2)) : (m(), l(a, { key: 2 }, [
					De.value.length > 0 ? (m(), s(g(de), {
						key: 0,
						label: "Waiting on you",
						count: De.value.length
					}, {
						default: _(() => [(m(!0), l(a, null, ne(De.value, (e) => (m(), s(g(se), {
							key: e.id,
							title: e.title,
							description: g(qk)(e),
							tone: g(Gk)(e) ? "warning" : void 0,
							open: je.value === e.id,
							"onUpdate:open": (t) => Me(e.id, t)
						}, {
							control: _(() => [
								u("span", $k, h(g(Kk)(e.count)) + " · " + h(g(ge)(e.lastSeen, { now: g(he) })), 1),
								g(Gk)(e) ? (m(), s(g(me), {
									key: 0,
									variant: "warning",
									label: "came back",
									size: "sm"
								})) : c("", !0),
								Te.value ? (m(), l(a, { key: 1 }, [
									f(g(ie), {
										label: "Investigate",
										size: "small",
										disabled: g(re).isPending.value,
										onClick: (t) => Pe(() => g(re).mutateAsync(e.id), "Could not put an agent on that issue.")
									}, null, 8, ["disabled", "onClick"]),
									f(g(ie), {
										label: "Resolve",
										size: "small",
										severity: "secondary",
										disabled: g(p).isPending.value,
										onClick: (t) => Pe(() => g(p).mutateAsync({
											id: e.id,
											status: "resolved"
										}), "Could not resolve that issue.")
									}, null, 8, ["disabled", "onClick"]),
									f(g(ie), {
										label: "Ignore",
										size: "small",
										severity: "secondary",
										text: "",
										disabled: g(p).isPending.value,
										onClick: (t) => Pe(() => g(p).mutateAsync({
											id: e.id,
											status: "ignored"
										}), "Could not ignore that issue.")
									}, null, 8, ["disabled", "onClick"])
								], 64)) : c("", !0)
							]),
							below: _(() => [f(Hk, { issue: e }, null, 8, ["issue"])]),
							_: 2
						}, 1032, [
							"title",
							"description",
							"tone",
							"open",
							"onUpdate:open"
						]))), 128))]),
						_: 1
					}, 8, ["count"])) : c("", !0),
					Oe.value.length > 0 ? (m(), s(g(de), {
						key: 1,
						label: "Being looked at",
						count: Oe.value.length
					}, {
						default: _(() => [(m(!0), l(a, null, ne(Oe.value, (e) => (m(), s(g(se), {
							key: e.id,
							title: e.title,
							description: g(qk)(e),
							open: je.value === e.id,
							"onUpdate:open": (t) => Me(e.id, t)
						}, {
							control: _(() => [
								u("span", eA, h(g(Kk)(e.count)), 1),
								Te.value && g(Jk)(e).kind === "open" ? (m(), s(g(ie), {
									key: 0,
									label: "Open the run",
									size: "small",
									severity: "secondary",
									onClick: (t) => Ie(g(Jk)(e).conversationId)
								}, null, 8, ["onClick"])) : c("", !0),
								Te.value ? (m(), s(g(ie), {
									key: 1,
									label: "Resolve",
									size: "small",
									severity: "secondary",
									disabled: g(p).isPending.value,
									onClick: (t) => Pe(() => g(p).mutateAsync({
										id: e.id,
										status: "resolved"
									}), "Could not resolve that issue.")
								}, null, 8, ["disabled", "onClick"])) : c("", !0)
							]),
							below: _(() => [f(Hk, { issue: e }, null, 8, ["issue"])]),
							_: 2
						}, 1032, [
							"title",
							"description",
							"open",
							"onUpdate:open"
						]))), 128))]),
						_: 1
					}, 8, ["count"])) : c("", !0),
					ke.value.length > 0 ? (m(), s(g(de), {
						key: 2,
						label: "Dealt with",
						count: ke.value.length
					}, {
						default: _(() => [(m(!0), l(a, null, ne(ke.value, (e) => (m(), s(g(ue), {
							key: e.id,
							title: e.title,
							description: g(qk)(e)
						}, {
							control: _(() => [
								u("span", tA, h(g(Yk)(e.id)), 1),
								g(Wk)(e.status) ? (m(), s(g(me), {
									key: 0,
									variant: g(Wk)(e.status).tone,
									label: g(Wk)(e.status).label,
									size: "sm"
								}, null, 8, ["variant", "label"])) : c("", !0),
								Te.value ? (m(), l(a, { key: 1 }, [f(g(ie), {
									label: "Reopen",
									size: "small",
									severity: "secondary",
									text: "",
									disabled: g(p).isPending.value,
									onClick: (t) => Pe(() => g(p).mutateAsync({
										id: e.id,
										status: "open"
									}), "Could not reopen that issue.")
								}, null, 8, ["disabled", "onClick"]), f(g(ie), {
									label: "Forget",
									size: "small",
									severity: "danger",
									text: "",
									onClick: (t) => Ne.value = e
								}, null, 8, ["onClick"])], 64)) : c("", !0)
							]),
							_: 2
						}, 1032, ["title", "description"]))), 128))]),
						_: 1
					}, 8, ["count"])) : c("", !0)
				], 64)), f(g(oe), {
					open: Ne.value !== void 0,
					header: "Forget this issue?",
					"confirm-label": "Forget",
					"confirm-icon": "trash",
					loading: g(ae).isPending.value,
					onCancel: t[0] ||= (e) => Ne.value = void 0,
					onConfirm: t[1] ||= (e) => Ne.value && Fe(Ne.value)
				}, {
					default: _(() => [Ne.value ? (m(), l("p", nA, " “" + h(Ne.value.title) + "” and everything recorded about it — how often it happened and what has been tried — are dropped. If it happens again it comes back as a new issue. ", 1)) : c("", !0)]),
					_: 1
				}, 8, ["open", "loading"])])]),
				_: 1
			}));
		}
	});
})), aA = /* @__PURE__ */ Se({ default: () => oA }), oA, sA = v((() => {
	iA(), iA(), oA = rA;
}));
Te(), Ae();
var { state: cA, start: lA } = t({
	host: we,
	everyMs: 6e5,
	initial: () => void 0,
	read: async (e) => {
		let { owed: t, broken: n } = Oe(await e.sandbox.fetch(De()));
		return t === 0 ? void 0 : {
			count: t,
			tooltip: `${t} waiting on you`,
			tone: n > 0 ? "danger" : "info"
		};
	}
}), uA = (e, t) => {
	Ce(e), t.subscriptions.push(lA()), t.subscriptions.push(e.views.register({
		id: "issues",
		label: "Issues",
		surface: "rail",
		detect: () => [{
			key: "issues",
			title: "Issues",
			icon: "exclamation-triangle"
		}],
		badge: () => cA.value,
		view: async () => (await Promise.resolve().then(() => (sA(), aA))).default
	}));
}, dA = re.parse({
	$schema: "https://intentic.dev/intentic-extension.schema.json",
	publisher: "intentic",
	name: "issues",
	version: "1.0.0",
	category: "work",
	icon: "exclamation-triangle",
	engines: { intentic: "^2.3.0" },
	entry: "dist/extension.js",
	permissions: { sandbox: [
		"GET /issues",
		"POST /issues/*/status",
		"POST /issues/*/investigate",
		"DELETE /issues/*",
		"GET /issues/installs/*",
		"GET /automations",
		"GET /extensions"
	] },
	contributes: {
		views: [{
			id: "issues",
			label: "Issues",
			surface: "rail",
			badge: !0
		}],
		files: [{
			path: ".intentic/records/issues/",
			invalidates: ["issues"]
		}]
	}
});
//#endregion
export { uA as activate, dA as manifest };
