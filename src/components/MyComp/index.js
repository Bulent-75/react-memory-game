import React from 'react';

class MyComp extends React.Component {

render() {

this.propTypes = {};
this.defaultProps = {width:'100',heigt:'120'};

return (
   <svg width="100" heigt="100" xmlns="http://www.w3.org/2000/svg">
	<rect fill={this.props.fill} className="square" width={this.props.width} height={this.props.height} id={this.props.id} />
  </svg>
 )

 }

}

export default MyComp;

