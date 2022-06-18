import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HistoryCreate from "./HistoryCreate";
import HistoryEdit from "./HistoryEdit";
import HistoryList from "./HistoryList";
import HistoryView from "./HistoryView";

const History: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HistoryList />} />
            <Route path="/create" element={<HistoryCreate />} />
            <Route path="/edit/:id" element={<HistoryEdit />} />
            <Route path="/view/:id" element={<HistoryView />} />
        </Routes>
    );
};

export default History;
