const baseUrl = process.env.NEXT_PUBLIC_KITSU_API;

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
