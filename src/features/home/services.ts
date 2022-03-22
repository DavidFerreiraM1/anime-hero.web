import kitsuApi from '../../http-client/kitsu-api';

function getList(offset: number) {
  const url = `anime?page[limit]=15&page[offset]=${offset}`;
  return kitsuApi.get(url);
}

function getListByFilter(text: string) {
  const url = `anime?filter[text]=${text}`;
  return kitsuApi.get(url);
}

export default {
  getList,
  getListByFilter
};
