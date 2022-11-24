import Logo from '../../../shared/ui/Logo';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

function FirstGroup() {
  return (
    <div className="first-group">
      <div className="text-center md:text-left mb-8 md:mb-16" data-testid="logo">
        <Logo theme="dark" />
      </div>

      <SocialMediaLinks />
    </div>
  )
}

export default FirstGroup