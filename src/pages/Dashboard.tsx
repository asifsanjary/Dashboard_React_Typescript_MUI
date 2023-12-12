import SummaryBox from '../components/SummaryBox';
import summary from '../data/summary';
import BarChart from '../components/chart/BarChart';
import PieChart from '../components/chart/PieChart';
import ProductSell from '../components/ProductSell';
import { Stack } from '@mui/material';

const Dashboard = () => {
    return (
        <Stack
            direction="column"
            spacing={4}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                {summary.map((item, index) => (
                    <SummaryBox
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        amount={item.amount}
                        isUp={item.isUp}
                        percent={item.percent}
                        hexColor={item.hexColor} />
                ))}
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <BarChart />
                <PieChart />
            </Stack>
            <ProductSell />
        </Stack>
    );
};

export default Dashboard;