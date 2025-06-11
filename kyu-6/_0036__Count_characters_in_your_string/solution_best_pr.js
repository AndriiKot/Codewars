const count = (string) => [...string].reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {});
