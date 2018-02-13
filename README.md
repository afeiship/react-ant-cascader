# react-ant-cascader
> React ant cascader.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: []
  };
  
```

## usage:
```jsx

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

```

## customize style:
```scss
// customize your styles:
$react-ant-cascader-options:(
);

@import '~node_modules/react-ant-cascader/style.scss';
```
