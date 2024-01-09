
import { Route, Routes} from 'react-router-dom';
import FourOhFour from './pages/404';
import AccessControl from './pages/Company/accessControl';
import Billing from './pages/Company/billing';
import Profile from './pages/Company/profile';
import Watermark from './pages/Company/watermark';
import LeadsIndex from './pages/Leads';
import Actions from './pages/Leads/actions';
import LeadsCreate from './pages/Leads/create';
import Documents from './pages/Leads/documents';
import LeadsEdit from './pages/Leads/edit';
import PersonalInformation from './pages/Leads/personalInfo';
import Properties from './pages/Leads/properties';
import PropertyIndex from './pages/Property';
import PropertyCreate from './pages/Property/create';
import PropertyEdit from './pages/Property/edit';
export default function Routers() {
    return (
        <Routes>
            <Route path="/" exact element={<FourOhFour />} />
            <Route path="/property/create" element={<PropertyCreate />} />
            <Route path="/property/list" element={<PropertyIndex />} />
            <Route path="/property/edit" element={<PropertyEdit />} />
            <Route path="/leads/create" element={<LeadsCreate />} />
            <Route path="/leads/list" element={<LeadsIndex />} />
            <Route path="/leads/edit" element={<LeadsEdit />} />
            <Route path="/leads/create/personalinformation" element={<PersonalInformation />} />
            <Route path="/leads/create/properties" element={<Properties />} />
            <Route path="/leads/create/documents" element={<Documents />} />
            <Route path="/leads/create/actions" element={<Actions />} />
            <Route path="/company/profile" element={<Profile />} />
            <Route path="/company/profile/watermark" element={<Watermark />} />
            <Route path="/company/profile/accesscontrol" element={<AccessControl />} />
            <Route path="/company/profile/billing" element={<Billing />} />
        </Routes>
    )
}

