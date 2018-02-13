import './dev.scss';
import ReactAntCascader from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-cascader --save
// import : import ReactAntCascader from 'react-ant-cascader'

class App extends React.Component{
  state = {
    items: [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }, {
          value: 'xiasha',
          label: 'Xia Sha',
          disabled: true,
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua men',
        }],
      }],
    }]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e);
  };

  render(){
    return (
      <div className="hello-react-ant-cascader">
        <ReactAntCascader items={this.state.items} ref='rc' onChange={this._onChange} />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
