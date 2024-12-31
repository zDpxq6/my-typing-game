import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { useSettings } from "~/components/hooks/UseSettings";
import { saveSettings } from "~/tools/databaseUtils";
import { SettingsType } from "~/types/ResultType";

interface SettingsViewProps {
  onBackClick?: () => void;
}

export const SettingsView = ({ onBackClick }: SettingsViewProps) => {
  const { settings, setSettings } = useSettings();
  const [username, setUsername] = useState("");

  const handleSave = () => {
    saveSettings;
  };

  const handleSettingsChange = (newSettings: SettingsType) => {
    setSettings(newSettings);
  };

  return (
    <div>
      <div id="side">
        <div>
          <p>タイピングゲーム</p>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={`play`}
              >
                ゲーム
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={`settings`}
              >
                せってい
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p>せっていがめん</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p>ヒントが</p>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                handleSettingsChange({
                  showHint: !settings.showHint,
                  doShuffle: settings.doShuffle,
                })
              }
            >
              {settings.showHint ? "みえます" : "みえません"}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p>もんだいがシャッフル</p>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                handleSettingsChange({
                  showHint: settings.showHint,
                  doShuffle: !settings.doShuffle,
                })
              }
            >
              {settings.doShuffle ? "されます" : "されません"}
            </button>
            <button onClick={onBackClick}>もどる</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <p>ユーザー名</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div>
            <button onClick={handleSave} style={{ marginLeft: "10px" }}>
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
