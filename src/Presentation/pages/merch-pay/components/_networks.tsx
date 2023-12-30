import {
  NetworkTab,
  NetworkTabImg,
  NetworkTinker,
  NetworkTinkerWrapper,
  Typography,
} from "@/Presentation/common/styled-components";
import { NetworkType } from "@/Data/model/transaction.model";

export const MomoNetworks = (props: {
  network?: NetworkType;
  setNetwork: React.Dispatch<React.SetStateAction<NetworkType | undefined>>;
}) => {

  return (
    <div className="grid grid-cols-3 md:grid-cols-5">
      {/* momo */}
      <div className="flex flex-col items-center">
        <NetworkTab
          $isActive={props.network == "MTN"}
          onClick={() => props.setNetwork("MTN")}
        >
          <NetworkTabImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZjgiyE6Oj6HonmiXTHT1iMCdjD-MhB2EhnX1ZZLiYA&s" />
          <NetworkTinkerWrapper>
            <NetworkTinker $isActive={props.network == "MTN"} />
          </NetworkTinkerWrapper>
        </NetworkTab>
        <Typography $size="small">MTN</Typography>
      </div>

      {/* voda */}
      <div className="flex flex-col items-center">
        <NetworkTab
          $isActive={props.network == "VOD"}
          onClick={() => props.setNetwork("VOD")}
        >
          <NetworkTabImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqJ2DI2D6ou207Oqg7lPrmKOC9XAZwZ1UZw&usqp=CAU" />
          <NetworkTinkerWrapper>
            <NetworkTinker $isActive={props.network == "VOD"} />
          </NetworkTinkerWrapper>
        </NetworkTab>
        <Typography $size="small">Vodafone</Typography>
      </div>

      {/* airtel */}
      <div className="flex flex-col items-center">
        <NetworkTab
          $isActive={props.network == "AIR"}
          onClick={() => props.setNetwork("AIR")}
        >
          <NetworkTabImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xjX4EGvnVg4ihAEEgCNMOMlHk6hAgqOxqhA3TMgClQ&s" />
          <NetworkTinkerWrapper>
            <NetworkTinker $isActive={props.network == "AIR"} />
          </NetworkTinkerWrapper>
        </NetworkTab>
        <Typography $size="small">AirtelTigo</Typography>
      </div>
    </div>
  );
};

export const CardNetworks = (props: {
  network?: NetworkType;
  setNetwork: React.Dispatch<React.SetStateAction<NetworkType | undefined>>;
}) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5">
      {/* mastercard */}
      <div className="flex flex-col items-center">
        <NetworkTab
          $isActive={props.network == "MAS"}
          onClick={() => props.setNetwork("MAS")}
        >
          <NetworkTabImg src="data:image/png;base64,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" />
          <NetworkTinkerWrapper>
            <NetworkTinker $isActive={props.network == "MAS"} />
          </NetworkTinkerWrapper>
        </NetworkTab>
        <Typography $size="small">Master Card</Typography>
      </div>

      {/* visa */}
      <div className="flex flex-col items-center">
        <NetworkTab
          $isActive={props.network == "VIS"}
          onClick={() => props.setNetwork("VIS")}
        >
          <NetworkTabImg src="data:image/png;base64,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" />
          <NetworkTinkerWrapper>
            <NetworkTinker $isActive={props.network == "VIS"} />
          </NetworkTinkerWrapper>
        </NetworkTab>
        <Typography $size="small">Visa</Typography>
      </div>
    </div>
  );
};
