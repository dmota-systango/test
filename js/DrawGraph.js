var React = require('react-native');
var RNChart = require('react-native-chart-nosensezzz');

var {
    StyleSheet, View, Component,
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    chart: {
        // position: 'absolute', top: 100, left: 16, bottom: 100,right: 100
        position: 'absolute', top: 50, width: 325, height: 200, left: -150
    }
});


//var xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

//var chartData = [
    // {
    //     name:'BarChart',
    //     type:'bar',
    //     widthPercent:0.6,
    //     data:[
    //         30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30, 23, 54, 76, 21, 32
    //     ]
    // },
    
//];
class SimpleChart extends Component {
    render() {

        return (
            <View style={styles.container}>
                <RNChart style={styles.chart}
                    chartData={[{
        name:'LineChart',
        lineWidth:2,
        showDataPoint:false,
        //data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30, 23, 54, 76, 21, 32]
        data : this.props.yData
    }]}
                    // verticalGridStep="3"
                    xAxisTitle={this.props.xAxisName}
                    yAxisTitle={this.props.yAxisName}
                    labelFontSize={20}
                    xLabels={this.props.xData}>
                </RNChart>
            </View>
        );
    }
}

module.exports = SimpleChart;