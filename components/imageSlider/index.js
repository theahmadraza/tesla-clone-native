const { width, height } = Dimensions.get('window');
export default class imageSlider extends Component {

  componentDidMount() {
    let scrollValue = 0;
    setInterval(function(){
      scrollValue = scrollValue + width;   // width = screen width 
      _scrollView.scrollTo({x: scrollValue}) 
    }, 3000);
  }
  render() {
    return (
     <View>
       <ScrollView 
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true} pagingEnabled={true} 
        >
          <Image source={require('./1.jpg')} style={{height, width}} />
          <Image source={require('./2.jpg')} style={{height, width}} />
          <Image source={require('./1.jpg')} style={{height, width}} />
          <Image source={require('./2.jpg')} style={{height, width}} />
       </ScrollView>
       <View style={{ position: 'absolute'}}>
         <Text>Page Content</Text>
      </View>
     </View>
    );
  }
}