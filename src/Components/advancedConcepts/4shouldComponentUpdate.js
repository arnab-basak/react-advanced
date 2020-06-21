// !! its just notes in this component
// basically whenever a parent gets updated, 
// it will re-render all childs by default:::WHY?
// bcause we execute the render function and it will 
// execute from top to bottom, which will contain the childs

import { PureComponent } from "react";

// smarter way is that we should have a 
// shouldComponentUpdate life cycle hook (for CBC)
// which checks weather the props have changed or not (state is not checked 
//   for this reason because if parent has changed, definitely state of parent 
//   might have changed and that is just props for a child ..and not state)


shouldComponentUpdate(nextProps, nextState) {
  if(nextProps.xyz  !== this.props.xyz) {
    return true;
  } else {
    return false;
  }
}
// in the above example, we assume that its a child component and it has 
// just 1 prop and that is xyz, if we have multiple props, we can chain the
// condition using ||

// !!IMP!! if say, n prop variables are used in the child and we are adding this shouldComponentUpdate
// check for all those n variables by chaningin ||...its better to use PureComponent
// rather that extends Componets because PureComponent does that same thing under the 
// hood