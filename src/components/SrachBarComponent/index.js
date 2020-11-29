import React from "react";
import { Select } from "antd";

const { Option } = Select;

class SearchBrandName extends React.PureComponent {
  onChangeHandler = (value) => {
    this.props.filterDataFunction(value);
  };
  onClearHandler = () => {
    this.props.filterDataFunction();
  };
  onSearchhandler = (val) => {
    this.props.filterDataFunction(val);
  };
  render() {
    const { data } = this.props;
    return (
      <Select
        showSearch
        allowClear
        style={{ width: 200 }}
        placeholder="Select a Brand"
        optionFilterProp="children"
        onClear={this.onClearHandler}
        onChange={this.onChangeHandler}
        // onFocus={onFocus}
        // onBlur={onBlur}
        onSearch={this.onSearchhandler}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data.map((item, index) => (
          <Option key={index} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Select>
    );
  }
}
export default SearchBrandName;
