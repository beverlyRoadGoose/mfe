import { helper } from '@ember/component/helper';

export function substring(params, namedArgs) {
  return namedArgs.word.substring(0, namedArgs.length);
}

export default helper(substring);
