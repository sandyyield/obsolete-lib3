import { Box, Typography } from "@material-ui/core";

const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any; }) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                // <Box p={3}>
                children
                // </Box>
            )}
        </div>
    );
}

export default TabPanel;
