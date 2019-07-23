import {parser as parserExpr} from './parsers/expr'

const tree = parserExpr.parse('(8+9)*17+20*20')


console.log(tree.toString(parserExpr.tags))

