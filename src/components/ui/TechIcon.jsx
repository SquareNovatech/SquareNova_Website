function TechIcon({ tech, size = 32 }) {
  if (tech.icon) {
    const Icon = tech.icon;
    return <Icon size={size} style={{ color: tech.color }} aria-hidden="true" />;
  }

  if (tech.iconUrl) {
    return (
      <img
        src={tech.iconUrl}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        loading="lazy"
      />
    );
  }

  return null;
}

export default TechIcon;
