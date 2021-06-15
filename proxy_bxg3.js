function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.boxuegu.com")) {
      return "PROXY 192.168.0.100:8888; DIRECT";
  }
}
