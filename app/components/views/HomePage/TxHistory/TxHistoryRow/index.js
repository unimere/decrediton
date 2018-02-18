import { RegularTxRowOfClass as regular } from "./RegularTxRow";
import "style/TxHistory.less";

const TxRow = ({ tx }, { router }) => {
  const TxRowByType = {
    "out": regular("Send", true),
    "in": regular("Receive", false),
    "transfer": regular("Transfer", true),
  };
  const rowType = tx.txType || tx.txDirection;
  const Component = TxRowByType[rowType];

  return Component ? (
    <Component
      {...{
        ...tx,
        pending: !tx.txTimestamp,
        onClick: () => router.push(`/transactions/history/${tx.txHash}`)
      }}
    />
  ) : null;
};

TxRow.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default TxRow;