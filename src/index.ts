import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const googleMap = new CustomMap('map');

googleMap.addMarker(user);
googleMap.addMarker(company);
