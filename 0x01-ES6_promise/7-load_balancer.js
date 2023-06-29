export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  return Promise.any(promises).then((res) => res);
}
