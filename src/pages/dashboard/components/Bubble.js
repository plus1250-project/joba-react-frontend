import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeBubble } from '../../../actions/bubble'
import * as am5 from '@amcharts/amcharts5'
import PropTypes from 'prop-types'
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated'
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy'


const Bubble = ({ data, onChangeChart, industryName }) => {
  
  const axisDataItemRef = useRef(null)

  const dispatch = useDispatch();
  const changeNode = (props) => {
    dispatch(changeBubble(props))
  }
  
  const { bubbleName } = useSelector(state => state.bubble);

  useEffect(() => {
    const root = am5.Root.new('bubble')
    root.setThemes([
      am5themesAnimated.new(root),
    ])

// Create wrapper container
    const container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout,
    }))

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    const series = container.children.push(am5hierarchy.ForceDirected.new(root, {
      singleBranchOnly: false,
      downDepth: 2,
      topDepth: 1,
      initialDepth: 1,
      maxRadius: 80,
      minRadius: 30,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      manyBodyStrength: -9,
      centerStrength: 0.7
    }))
    axisDataItemRef.current = series

    series.get("colors").setAll({
      step: 3
    });

    series.links.template.setAll({
      strokeWidth: 2
    });
 
    series.data.setAll([data])
    series.set('selectedDataItem', series.dataItems[0])

    let selectedDataItem;


      // 노드 클릭 시 이벤트 발생 
    series.nodes.template.events.on("click", function(e) {

      selectedDataItem = e.target.dataItem;
      selectedDataItem.get("outerCircle").setPrivate("visible", true)
      console.log(e.target.dataItem.dataContext.name);
      
      changeNode(e.target.dataItem.dataContext.name);    

      if(selectedDataItem == undefined) {
        changeNode("undefined")
      } else {
        changeNode(selectedDataItem.dataContext.name);
      }
      
    })
    
    return () => root.dispose()
    
  }, [])

  useEffect(() => {
    const series = axisDataItemRef.current
    series.data.setAll([data])
    series.set('selectedDataItem', series.dataItems[data.length])
    series.labels.template.setAll({
      fontSize: 20,
      fill: am5.color(0x550000),
      text: '{category}',
    })
  }, [data])


  return (
    <div
      id="bubble"
      style={{
        height: '500px',
        flexGrow: 1,
        backgroundColor: 'white',
      }}
      onClick={() => onChangeChart({industryName, bubbleName})}
    />
  )
}

Bubble.propTypes = {
  data: PropTypes.object,
}
Bubble.defaultProps = {
  data: [],
}

export default Bubble