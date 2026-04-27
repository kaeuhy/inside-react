function GoldenRabbitPageBad({ color }) {
  const styles = { color, sparkles: " ", size: "large" };
  const rabbitHeader = <RabbitHeader styles={styles} />;
  styles.size = "small";
  return <TabbitContent header={rabbitHeader} styles={styles} />;
}

function GoldenRabbitPageGood({ color }) {
  const headerStyles = {
    color,
    sparkles: "✨",
    size: "large",
  };
  const rabbitHeader = <RabbitHeader styles={headerStyles} />;
  const contentStyles = {
    ...headerStyles,
    size: "small",
  };
  return <RabbitCotent header={rabbitHeader} styles={contentStyles} />;
}
