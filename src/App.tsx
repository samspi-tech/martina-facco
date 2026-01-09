import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Homepage from '@/pages/homepage/Homepage.tsx';
import ArtDirection from '@/pages/artDirection/ArtDirection.tsx';
import Campaigns from '@/pages/campaigns/Campaigns.tsx';
import GraphicDesign from '@/pages/graphicDesign/GraphicDesign.tsx';
import ContactMe from '@/pages/contactMe/ContactMe.tsx';
import AppLayout from '@/pages/appLayout/AppLayout.tsx';
import AboutMe from '@/pages/aboutMe/AboutMe.tsx';
import PageNotFound from '@/pages/pageNotFound/PageNotFound.tsx';
import GalleryDetails from '@/pages/galleryDetails/GalleryDetails.tsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/aboutMe" element={<AboutMe />} />
                    <Route path="/artDirection" element={<ArtDirection />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                    <Route path="/graphicDesign" element={<GraphicDesign />} />
                    <Route path="/:section/:id" element={<GalleryDetails />} />
                    <Route path="/contactMe" element={<ContactMe />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
