import useSettings from 'app/hooks/useSettings';
import logoImage from 'assets/images/evernode.png'; // Import your image here

const MatxLogo = ({ className }) => {
  const { settings } = useSettings();
  const theme = settings.themes[settings.activeTheme];

  return (
    <img
      className={className}
      src={logoImage} // Use the imported image as the source URL
      alt="Logo"
    />
  );
};

export default MatxLogo;
