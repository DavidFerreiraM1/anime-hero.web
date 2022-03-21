import kitsuApi from '../../http-client/kitsu-api';

function getList(offset: number) {
  const url = `anime?page[limit]=15&page[offset]=${offset}`;
  return kitsuApi.get(url);
}

export default {
  getList
};
