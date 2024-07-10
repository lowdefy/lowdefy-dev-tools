/* eslint-disable import/namespace */
import * as blocks from './blocks.js';

const icons = {};
const styles = {};
Object.keys(blocks).forEach((block) => {
  icons[block] = blocks[block].meta.icons ?? [];
  styles[block] = blocks[block].meta.styles ?? [];
});
export default {
  blocks: Object.keys(blocks),
  icons,
  styles: { default: [], ...styles },
};
