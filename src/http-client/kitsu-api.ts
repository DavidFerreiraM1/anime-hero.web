const baseUrl = 'https://kitsu.io/api/edge';

const headersDefault = {
  'Content-Type': 'application/json'
};

const authHeader = {
  'Content-Type': 'application/json; charset=utf-8'
};

function get(url: string, headers?: HeadersInit): Promise<Response> {
  const headersObj = headers ? headers : headersDefault;
  return fetch(`${baseUrl}/${url}`, {
    method: 'get',
    headers: headersObj
  });
}

export default {
  authHeader,
  get
};
