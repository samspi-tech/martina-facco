import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Homepage from '@/pages/homepage/Homepage.tsx';
import ArtDirection from '@/pages/artDirection/ArtDirection.tsx';
import Campaigns from '@/pages/campaigns/Campaigns.tsx';
import GraphicDesign from '@/pages/graphicDesign/GraphicDesign.tsx';
import ContactMe from '@/pages/contactMe/ContactMe.tsx';
import AppLayout from '@/pages/appLayout/AppLayout.tsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/art-direction" element={<ArtDirection />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                    <Route path="/graphic-design" element={<GraphicDesign />} />
                    <Route path="/contact-me" element={<ContactMe />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
