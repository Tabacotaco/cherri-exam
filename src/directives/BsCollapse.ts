import { DirectiveOptions, VNodeDirective, VNode } from 'vue';
import $ from 'jquery';


export default ((): DirectiveOptions => ({
  bind(
    el: HTMLElement,
    { expression, value: { id, isToggle = false, isExpanded = false } }: VNodeDirective,
    vnode: VNode
  ) {
    if (isToggle) $(el).attr({
      'data-toggle': 'collapse',
      'data-target': `#${id}`,
      'aria-expanded': isExpanded === true,
      'aria-controls': id
    });
    else {
      const turnName: string = ((expression as string)
        .replace('{', '')
        .replace('}', '')
        .split(',')
        .filter((v: string) => v.trim().indexOf('isExpanded') >= 0)[0] || '')
        .replace('isExpanded:', '').trim();

      $(el)
        .attr({ id })
        .addClass(['collapse', isExpanded === true ? 'show' : ''])
        .on('show.bs.collapse', () => (vnode.context as any)[turnName] = true)
        .on('hidden.bs.collapse', () => (vnode.context as any)[turnName] = false);
    }
  }
}))();
