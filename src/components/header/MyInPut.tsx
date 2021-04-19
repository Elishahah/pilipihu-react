import { Input, Space } from "antd";

interface PropsMyInput { }

export default function MyInPut(props: PropsMyInput) {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    return (
        <div>
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Space>
        </div>
    );
}