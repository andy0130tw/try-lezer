import {NodeProp} from 'lezer'

export class NodeInfo {
  constructor(type, start, end) {
    this.children = []
    if (type == null) {
      return
    }
    const { name, id } = type
    const error = type.prop(NodeProp.error)

    Object.assign(this, {
      name,
      id,
      start,
      end,
      error,
    })
  }

  repr() {
    if (!('name' in this)) return `[Node <Unknown>]`
    return `<Node ${this.name}/${this.id}: ${this.start}~${this.end}>`
  }
}
