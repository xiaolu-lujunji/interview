function _instanceof(left: any, right: any) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left) as boolean;
  } else {
    let proto = left.__proto__;
    while (proto) {
      if (proto === right.prototype) return true;
      proto = proto.__proto__;
    }
    return false;
  }
}

export default _instanceof;
